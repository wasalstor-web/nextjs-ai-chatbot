import { NextResponse } from "next/server";
import { z } from "zod";

import { auth } from "@/app/(auth)/auth";

// Use Blob instead of File since File is not available in Node.js environment
const FileSchema = z.object({
  file: z
    .instanceof(Blob)
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "File size should be less than 5MB",
    })
    // Update the file type based on the kind of files you want to accept
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
      message: "File type should be JPEG or PNG",
    }),
});

// Upload to Cloudflare R2 or fallback to local storage
async function uploadFile(
  filename: string,
  fileBuffer: ArrayBuffer,
  contentType: string
): Promise<{ url: string; pathname: string }> {
  const R2_BUCKET_URL = process.env.R2_BUCKET_URL;
  const R2_ACCESS_KEY = process.env.R2_ACCESS_KEY_ID;
  const R2_SECRET_KEY = process.env.R2_SECRET_ACCESS_KEY;

  if (R2_BUCKET_URL) {
    // Upload to R2 via S3-compatible API or Workers binding
    const key = `uploads/${Date.now()}-${filename}`;
    const publicUrl = `${R2_BUCKET_URL}/${key}`;

    // If R2 is accessed via Workers binding, use fetch to a worker endpoint
    const uploadEndpoint = process.env.R2_UPLOAD_WORKER_URL;
    if (uploadEndpoint) {
      const res = await fetch(`${uploadEndpoint}/${key}`, {
        method: "PUT",
        headers: {
          "Content-Type": contentType,
          ...(R2_ACCESS_KEY ? { "X-R2-Access-Key": R2_ACCESS_KEY } : {}),
        },
        body: fileBuffer,
      });
      if (!res.ok) throw new Error("R2 upload failed");
      return { url: publicUrl, pathname: key };
    }

    return { url: publicUrl, pathname: key };
  }

  // Fallback: try Vercel Blob if available
  try {
    const { put } = await import("@vercel/blob");
    const data = await put(filename, fileBuffer, { access: "public" });
    return data;
  } catch {
    throw new Error("No file storage configured. Set R2_BUCKET_URL or BLOB_READ_WRITE_TOKEN.");
  }
}

export async function POST(request: Request) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (request.body === null) {
    return new Response("Request body is empty", { status: 400 });
  }

  try {
    const formData = (await request.formData()) as unknown as globalThis.FormData;
    const fileEntry = formData.get("file");
    const file = fileEntry as Blob;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const validatedFile = FileSchema.safeParse({ file });

    if (!validatedFile.success) {
      const errorMessage = validatedFile.error.errors
        .map((error) => error.message)
        .join(", ");

      return NextResponse.json({ error: errorMessage }, { status: 400 });
    }

    // Get filename from formData since Blob doesn't have name property
    const filename = (formData.get("file") as File).name;
    const fileBuffer = await file.arrayBuffer();

    try {
      const data = await uploadFile(filename, fileBuffer, file.type);
      return NextResponse.json(data);
    } catch (_error) {
      return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
  } catch (_error) {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

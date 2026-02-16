DO $$ BEGIN
 CREATE TYPE "public"."page_status" AS ENUM('draft', 'published', 'archived');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "BuilderAsset" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256) NOT NULL,
	"url" text NOT NULL,
	"type" varchar(32) NOT NULL,
	"size" integer DEFAULT 0,
	"mimeType" varchar(128),
	"pageId" uuid,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"creatorId" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "BuilderPage" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(256) NOT NULL,
	"slug" varchar(256) NOT NULL,
	"description" text,
	"status" "page_status" DEFAULT 'draft' NOT NULL,
	"data" json DEFAULT '{}'::json NOT NULL,
	"seo" json DEFAULT '{}'::json,
	"thumbnail" text,
	"template" varchar(64),
	"sortOrder" integer DEFAULT 0,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"publishedAt" timestamp,
	"creatorId" uuid,
	CONSTRAINT "BuilderPage_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "BuilderSnapshot" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"pageId" uuid NOT NULL,
	"label" varchar(256),
	"data" json NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"creatorId" uuid
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "BuilderAsset" ADD CONSTRAINT "BuilderAsset_pageId_BuilderPage_id_fk" FOREIGN KEY ("pageId") REFERENCES "public"."BuilderPage"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "BuilderAsset" ADD CONSTRAINT "BuilderAsset_creatorId_User_id_fk" FOREIGN KEY ("creatorId") REFERENCES "public"."User"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "BuilderPage" ADD CONSTRAINT "BuilderPage_creatorId_User_id_fk" FOREIGN KEY ("creatorId") REFERENCES "public"."User"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "BuilderSnapshot" ADD CONSTRAINT "BuilderSnapshot_pageId_BuilderPage_id_fk" FOREIGN KEY ("pageId") REFERENCES "public"."BuilderPage"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "BuilderSnapshot" ADD CONSTRAINT "BuilderSnapshot_creatorId_User_id_fk" FOREIGN KEY ("creatorId") REFERENCES "public"."User"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

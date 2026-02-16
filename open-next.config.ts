import { defineCloudflareConfig } from "@opennextjs/cloudflare";
// import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";

export default defineCloudflareConfig({
  // Enable R2 cache after activating R2 in Cloudflare dashboard:
  // incrementalCache: r2IncrementalCache,
});

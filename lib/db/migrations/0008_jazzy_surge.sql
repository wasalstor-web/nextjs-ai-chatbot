CREATE TABLE IF NOT EXISTS "Agent" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"externalId" varchar(128),
	"name" varchar(256) NOT NULL,
	"description" text,
	"category" varchar(64) DEFAULT 'assistant',
	"status" varchar DEFAULT 'draft' NOT NULL,
	"capabilities" json DEFAULT '[]'::json,
	"systemPrompt" text,
	"modelId" varchar(64) DEFAULT 'gpt-4o',
	"apiEndpoint" text,
	"iconUrl" text,
	"usageCount" integer DEFAULT 0,
	"rating" real DEFAULT 5,
	"isPublic" boolean DEFAULT true,
	"price" real DEFAULT 0,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"creatorId" uuid,
	"source" varchar(64) DEFAULT 'mubasat'
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "AgentUsage" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"agentId" uuid NOT NULL,
	"userId" uuid,
	"sessionId" varchar(128),
	"messageCount" integer DEFAULT 0,
	"tokensUsed" integer DEFAULT 0,
	"duration" integer DEFAULT 0,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "User" ADD COLUMN "role" varchar DEFAULT 'user' NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Agent" ADD CONSTRAINT "Agent_creatorId_User_id_fk" FOREIGN KEY ("creatorId") REFERENCES "public"."User"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "AgentUsage" ADD CONSTRAINT "AgentUsage_agentId_Agent_id_fk" FOREIGN KEY ("agentId") REFERENCES "public"."Agent"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "AgentUsage" ADD CONSTRAINT "AgentUsage_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "Chat" DROP COLUMN IF EXISTS "lastContext";
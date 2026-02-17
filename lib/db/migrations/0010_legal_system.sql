-- Migration: Legal Consultation & Contract Management System
-- Description: إضافة نظام متكامل لإدارة الاستشارات القانونية والعقود

-- ============================================
-- CONSULTATION TABLES
-- ============================================

CREATE TABLE IF NOT EXISTS "Consultation" (
  "id" uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  "userId" uuid NOT NULL REFERENCES "User"("id"),
  "title" text NOT NULL,
  "description" text,
  "consultationType" varchar(100) NOT NULL,
  "severity" varchar(50) NOT NULL DEFAULT 'عادي',
  "status" varchar(50) NOT NULL DEFAULT 'مفتوح',
  "chatId" uuid REFERENCES "Chat"("id"),
  "relatedCaseId" uuid,
  "attachmentIds" json DEFAULT '[]'::json,
  "relatedLaws" json DEFAULT '[]'::json,
  "estimatedAmount" varchar(100),
  "currency" varchar(3) DEFAULT 'SAR',
  "createdAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "closedAt" timestamp
);

CREATE INDEX IF NOT EXISTS "consultation_user_idx" ON "Consultation"("userId");
CREATE INDEX IF NOT EXISTS "consultation_type_idx" ON "Consultation"("consultationType");
CREATE INDEX IF NOT EXISTS "consultation_status_idx" ON "Consultation"("status");

CREATE TABLE IF NOT EXISTS "ConsultationHistory" (
  "id" uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  "consultationId" uuid NOT NULL REFERENCES "Consultation"("id") ON DELETE CASCADE,
  "aiResponse" text NOT NULL,
  "modelUsed" varchar(100) NOT NULL,
  "citedLaws" json DEFAULT '[]'::json,
  "recommendation" text,
  "riskLevel" varchar(50),
  "suggestedActions" json DEFAULT '[]'::json,
  "estimatedOutcome" varchar(256),
  "createdAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS "consultation_history_consultation_idx" ON "ConsultationHistory"("consultationId");

-- ============================================
-- CONTRACT TEMPLATE TABLES
-- ============================================

CREATE TABLE IF NOT EXISTS "ContractTemplate" (
  "id" uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  "name" varchar(256) NOT NULL,
  "description" text,
  "category" varchar(100) NOT NULL,
  "ownerId" uuid REFERENCES "User"("id"),
  "isPublic" boolean NOT NULL DEFAULT false,
  "content" text NOT NULL,
  "version" varchar(10) DEFAULT '1.0',
  "requiredFields" json DEFAULT '[]'::json,
  "applicableLaws" json DEFAULT '[]'::json,
  "jurisdiction" varchar(50) DEFAULT 'السعودية',
  "rating" varchar(3) DEFAULT '0',
  "ratingCount" varchar(10) DEFAULT '0',
  "usageCount" varchar(10) DEFAULT '0',
  "downloadCount" varchar(10) DEFAULT '0',
  "createdAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS "contract_template_category_idx" ON "ContractTemplate"("category");
CREATE INDEX IF NOT EXISTS "contract_template_owner_idx" ON "ContractTemplate"("ownerId");
CREATE INDEX IF NOT EXISTS "contract_template_public_idx" ON "ContractTemplate"("isPublic");

CREATE TABLE IF NOT EXISTS "GeneratedContract" (
  "id" uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  "templateId" uuid NOT NULL REFERENCES "ContractTemplate"("id"),
  "userId" uuid NOT NULL REFERENCES "User"("id"),
  "consultationId" uuid REFERENCES "Consultation"("id"),
  "filledData" json NOT NULL,
  "finalContent" text NOT NULL,
  "status" varchar(50) NOT NULL DEFAULT 'draft',
  "viewCount" varchar(10) DEFAULT '0',
  "downloadCount" varchar(10) DEFAULT '0',
  "printCount" varchar(10) DEFAULT '0',
  "createdAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "executedAt" timestamp
);

CREATE INDEX IF NOT EXISTS "generated_contract_template_idx" ON "GeneratedContract"("templateId");
CREATE INDEX IF NOT EXISTS "generated_contract_user_idx" ON "GeneratedContract"("userId");

CREATE TABLE IF NOT EXISTS "ContractAnalysis" (
  "id" uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  "generatedContractId" uuid NOT NULL REFERENCES "GeneratedContract"("id") ON DELETE CASCADE,
  "riskLevel" varchar(50) NOT NULL,
  "dangerousTerms" json DEFAULT '[]'::json,
  "recommendations" json DEFAULT '[]'::json,
  "suggestedEdits" json DEFAULT '[]'::json,
  "saudiLawCompliance" varchar(50),
  "createdAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "aiModel" varchar(100)
);

CREATE INDEX IF NOT EXISTS "contract_analysis_contract_idx" ON "ContractAnalysis"("generatedContractId");

-- ============================================
-- LEGAL CASE TABLES
-- ============================================

CREATE TABLE IF NOT EXISTS "LegalCase" (
  "id" uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  "userId" uuid NOT NULL REFERENCES "User"("id"),
  "title" varchar(256) NOT NULL,
  "caseNumber" varchar(100),
  "court" varchar(256),
  "description" text,
  "caseType" varchar(100),
  "opposingParty" text,
  "status" varchar(50) NOT NULL DEFAULT 'مفتوح',
  "outcome" varchar(50),
  "relatedConsultations" json DEFAULT '[]'::json,
  "relatedDocuments" json DEFAULT '[]'::json,
  "startDate" timestamp,
  "expectedResolutionDate" timestamp,
  "resolutionDate" timestamp,
  "createdAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS "legal_case_user_idx" ON "LegalCase"("userId");
CREATE INDEX IF NOT EXISTS "legal_case_status_idx" ON "LegalCase"("status");

CREATE TABLE IF NOT EXISTS "CaseEvent" (
  "id" uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  "caseId" uuid NOT NULL REFERENCES "LegalCase"("id") ON DELETE CASCADE,
  "eventType" varchar(50) NOT NULL,
  "title" text NOT NULL,
  "description" text,
  "scheduledDate" timestamp,
  "completedDate" timestamp,
  "attachmentIds" json DEFAULT '[]'::json,
  "createdAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "createdBy" uuid REFERENCES "User"("id")
);

CREATE INDEX IF NOT EXISTS "case_event_case_idx" ON "CaseEvent"("caseId");

-- ============================================
-- FIRM MANAGEMENT TABLES
-- ============================================

CREATE TABLE IF NOT EXISTS "LegalFirm" (
  "id" uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  "ownerId" uuid NOT NULL REFERENCES "User"("id"),
  "name" varchar(256) NOT NULL,
  "description" text,
  "registrationNumber" varchar(100),
  "specializations" json DEFAULT '[]'::json,
  "email" varchar(256),
  "phone" varchar(20),
  "address" text,
  "totalMembers" varchar(10) DEFAULT '0',
  "activeConsultations" varchar(10) DEFAULT '0',
  "createdAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS "legal_firm_owner_idx" ON "LegalFirm"("ownerId");

CREATE TABLE IF NOT EXISTS "FirmMember" (
  "id" uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  "firmId" uuid NOT NULL REFERENCES "LegalFirm"("id") ON DELETE CASCADE,
  "userId" uuid NOT NULL REFERENCES "User"("id"),
  "role" varchar(50) NOT NULL,
  "specializations" json DEFAULT '[]'::json,
  "joinedAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "leftAt" timestamp,
  "isActive" boolean NOT NULL DEFAULT true
);

CREATE INDEX IF NOT EXISTS "firm_member_firm_idx" ON "FirmMember"("firmId");
CREATE INDEX IF NOT EXISTS "firm_member_user_idx" ON "FirmMember"("userId");

-- ============================================
-- UPDATED AT TRIGGERS
-- ============================================

CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW."updatedAt" = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_consultation_timestamp
  BEFORE UPDATE ON "Consultation"
  FOR EACH ROW
  EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER update_contract_template_timestamp
  BEFORE UPDATE ON "ContractTemplate"
  FOR EACH ROW
  EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER update_generated_contract_timestamp
  BEFORE UPDATE ON "GeneratedContract"
  FOR EACH ROW
  EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER update_legal_case_timestamp
  BEFORE UPDATE ON "LegalCase"
  FOR EACH ROW
  EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER update_legal_firm_timestamp
  BEFORE UPDATE ON "LegalFirm"
  FOR EACH ROW
  EXECUTE FUNCTION update_timestamp();

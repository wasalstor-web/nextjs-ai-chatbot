import type { InferSelectModel } from "drizzle-orm";
import {
  boolean,
  foreignKey,
  index,
  json,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { user } from "./base";
import { chat } from "./chat";

// ============================================
// CONSULTATION TABLES
// ============================================

export const consultation = pgTable(
  "Consultation",
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    userId: uuid("userId")
      .notNull()
      .references(() => user.id),
    title: text("title").notNull(),
    description: text("description"),
    consultationType: varchar("consultationType", {
      enum: [
        "عقاري",
        "عمل",
        "تجاري",
        "جزائي",
        "أسري",
        "إداري",
        "ملكية فكرية",
        "استثمار",
        "عقود",
        "أخرى",
      ],
    }).notNull(),
    severity: varchar("severity", {
      enum: ["عاجل", "مهم", "عادي"],
    })
      .notNull()
      .default("عادي"),
    status: varchar("status", {
      enum: ["مفتوح", "قيد الدراسة", "مغلق", "محفوظ"],
    })
      .notNull()
      .default("مفتوح"),
    chatId: uuid("chatId").references(() => chat.id),
    relatedCaseId: uuid("relatedCaseId"),
    attachmentIds: json("attachmentIds").$type<string[]>().default([]),
    relatedLaws: json("relatedLaws").$type<string[]>().default([]),
    estimatedAmount: varchar("estimatedAmount", { length: 100 }),
    currency: varchar("currency", { length: 3 }).default("SAR"),
    createdAt: timestamp("createdAt").notNull(),
    updatedAt: timestamp("updatedAt").notNull(),
    closedAt: timestamp("closedAt"),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.id] }),
    userIdx: index("consultation_user_idx").on(table.userId),
    typeIdx: index("consultation_type_idx").on(table.consultationType),
    statusIdx: index("consultation_status_idx").on(table.status),
  })
);

export type Consultation = InferSelectModel<typeof consultation>;

export const consultationHistory = pgTable(
  "ConsultationHistory",
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    consultationId: uuid("consultationId")
      .notNull()
      .references(() => consultation.id),
    aiResponse: text("aiResponse").notNull(),
    modelUsed: varchar("modelUsed", { length: 100 }).notNull(),
    citedLaws: json("citedLaws")
      .$type<
        Array<{
          lawName: string;
          article?: string;
          text?: string;
        }>
      >()
      .default([]),
    recommendation: text("recommendation"),
    riskLevel: varchar("riskLevel", {
      enum: ["منخفض", "متوسط", "عالي", "حرج"],
    }),
    suggestedActions: json("suggestedActions").$type<string[]>().default([]),
    estimatedOutcome: varchar("estimatedOutcome", { length: 256 }),
    createdAt: timestamp("createdAt").notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.id] }),
    consultationIdx: index("consultation_history_consultation_idx").on(
      table.consultationId
    ),
  })
);

export type ConsultationHistory = InferSelectModel<typeof consultationHistory>;

// ============================================
// CONTRACT TABLES
// ============================================

export const contractTemplate = pgTable(
  "ContractTemplate",
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    name: varchar("name", { length: 256 }).notNull(),
    description: text("description"),
    category: varchar("category", {
      enum: [
        "عقد بيع",
        "عقد إيجار",
        "عقد عمل",
        "عقد شراكة",
        "عقد قرض",
        "عقد وكالة",
        "عقد توكيل",
        "عقد خدمات",
        "اتفاق حري",
        "أخرى",
      ],
    }).notNull(),
    ownerId: uuid("ownerId").references(() => user.id),
    isPublic: boolean("isPublic").notNull().default(false),
    content: text("content").notNull(),
    version: varchar("version", { length: 10 }).default("1.0"),
    requiredFields: json("requiredFields")
      .$type<
        Array<{
          fieldName: string;
          fieldType: string;
          label: string;
          isRequired: boolean;
          placeholder?: string;
          helpText?: string;
        }>
      >()
      .default([]),
    applicableLaws: json("applicableLaws").$type<string[]>().default([]),
    jurisdiction: varchar("jurisdiction", { length: 50 }).default("السعودية"),
    rating: varchar("rating", { length: 3 }).default("0"),
    ratingCount: varchar("ratingCount", { length: 10 }).default("0"),
    usageCount: varchar("usageCount", { length: 10 }).default("0"),
    downloadCount: varchar("downloadCount", { length: 10 }).default("0"),
    createdAt: timestamp("createdAt").notNull(),
    updatedAt: timestamp("updatedAt").notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.id] }),
    categoryIdx: index("contract_template_category_idx").on(table.category),
    ownerIdx: index("contract_template_owner_idx").on(table.ownerId),
    publicIdx: index("contract_template_public_idx").on(table.isPublic),
  })
);

export type ContractTemplate = InferSelectModel<typeof contractTemplate>;

export const generatedContract = pgTable(
  "GeneratedContract",
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    templateId: uuid("templateId")
      .notNull()
      .references(() => contractTemplate.id),
    userId: uuid("userId")
      .notNull()
      .references(() => user.id),
    consultationId: uuid("consultationId").references(() => consultation.id),
    filledData: json("filledData").$type<Record<string, string>>().notNull(),
    finalContent: text("finalContent").notNull(),
    status: varchar("status", { enum: ["draft", "signed", "archived"] })
      .notNull()
      .default("draft"),
    viewCount: varchar("viewCount", { length: 10 }).default("0"),
    downloadCount: varchar("downloadCount", { length: 10 }).default("0"),
    printCount: varchar("printCount", { length: 10 }).default("0"),
    createdAt: timestamp("createdAt").notNull(),
    updatedAt: timestamp("updatedAt").notNull(),
    executedAt: timestamp("executedAt"),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.id] }),
    templateIdx: index("generated_contract_template_idx").on(table.templateId),
    userIdx: index("generated_contract_user_idx").on(table.userId),
  })
);

export type GeneratedContract = InferSelectModel<typeof generatedContract>;

export const contractAnalysis = pgTable(
  "ContractAnalysis",
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    generatedContractId: uuid("generatedContractId")
      .references(() => generatedContract.id)
      .notNull(),
    riskLevel: varchar("riskLevel", {
      enum: ["منخفض", "متوسط", "عالي", "حرج"],
    }).notNull(),
    dangerousTerms: json("dangerousTerms")
      .$type<
        Array<{
          term: string;
          riskLevel: string;
          explanation: string;
          suggestion: string;
          lineNumber?: number;
        }>
      >()
      .default([]),
    recommendations: json("recommendations").$type<string[]>().default([]),
    suggestedEdits: json("suggestedEdits")
      .$type<
        Array<{
          location: string;
          currentText: string;
          suggestedText: string;
          reason: string;
        }>
      >()
      .default([]),
    saudiLawCompliance: varchar("saudiLawCompliance", {
      enum: ["متوافق", "يحتاج تعديل", "غير متوافق"],
    }),
    createdAt: timestamp("createdAt").notNull(),
    aiModel: varchar("aiModel", { length: 100 }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.id] }),
    contractIdx: index("contract_analysis_contract_idx").on(
      table.generatedContractId
    ),
  })
);

export type ContractAnalysis = InferSelectModel<typeof contractAnalysis>;

// ============================================
// LEGAL CASE MANAGEMENT TABLES
// ============================================

export const legalCase = pgTable(
  "LegalCase",
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    userId: uuid("userId")
      .notNull()
      .references(() => user.id),
    title: varchar("title", { length: 256 }).notNull(),
    caseNumber: varchar("caseNumber", { length: 100 }),
    court: varchar("court", { length: 256 }),
    description: text("description"),
    caseType: varchar("caseType", {
      enum: ["مدني", "جنائي", "إداري", "عمالي", "تجاري"],
    }),
    opposingParty: text("opposingParty"),
    status: varchar("status", {
      enum: ["مفتوح", "معلق", "مغلق"],
    })
      .notNull()
      .default("مفتوح"),
    outcome: varchar("outcome", {
      enum: ["فاز", "خسر", "تسوية", "لم تُحل بعد"],
    }),
    relatedConsultations: json("relatedConsultations")
      .$type<string[]>()
      .default([]),
    relatedDocuments: json("relatedDocuments").$type<string[]>().default([]),
    startDate: timestamp("startDate"),
    expectedResolutionDate: timestamp("expectedResolutionDate"),
    resolutionDate: timestamp("resolutionDate"),
    createdAt: timestamp("createdAt").notNull(),
    updatedAt: timestamp("updatedAt").notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.id] }),
    userIdx: index("legal_case_user_idx").on(table.userId),
    statusIdx: index("legal_case_status_idx").on(table.status),
  })
);

export type LegalCase = InferSelectModel<typeof legalCase>;

export const caseEvent = pgTable(
  "CaseEvent",
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    caseId: uuid("caseId")
      .notNull()
      .references(() => legalCase.id),
    eventType: varchar("eventType", {
      enum: ["جلسة", "قرار", "استئناف", "تسوية", "ملاحظة"],
    }).notNull(),
    title: text("title").notNull(),
    description: text("description"),
    scheduledDate: timestamp("scheduledDate"),
    completedDate: timestamp("completedDate"),
    attachmentIds: json("attachmentIds").$type<string[]>().default([]),
    createdAt: timestamp("createdAt").notNull(),
    createdBy: uuid("createdBy").references(() => user.id),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.id] }),
    caseIdx: index("case_event_case_idx").on(table.caseId),
  })
);

export type CaseEvent = InferSelectModel<typeof caseEvent>;

// ============================================
// LAW FIRM MANAGEMENT TABLES
// ============================================

export const legalFirm = pgTable(
  "LegalFirm",
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    ownerId: uuid("ownerId")
      .notNull()
      .references(() => user.id),
    name: varchar("name", { length: 256 }).notNull(),
    description: text("description"),
    registrationNumber: varchar("registrationNumber", { length: 100 }),
    specializations: json("specializations").$type<string[]>().default([]),
    email: varchar("email", { length: 256 }),
    phone: varchar("phone", { length: 20 }),
    address: text("address"),
    totalMembers: varchar("totalMembers", { length: 10 }).default("0"),
    activeConsultations: varchar("activeConsultations", { length: 10 }).default(
      "0"
    ),
    createdAt: timestamp("createdAt").notNull(),
    updatedAt: timestamp("updatedAt").notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.id] }),
    ownerIdx: index("legal_firm_owner_idx").on(table.ownerId),
  })
);

export type LegalFirm = InferSelectModel<typeof legalFirm>;

export const firmMember = pgTable(
  "FirmMember",
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    firmId: uuid("firmId")
      .notNull()
      .references(() => legalFirm.id),
    userId: uuid("userId")
      .notNull()
      .references(() => user.id),
    role: varchar("role", {
      enum: ["مدير", "محامي رئيسي", "محامي", "مساعد قانوني", "موظف إداري"],
    }).notNull(),
    specializations: json("specializations").$type<string[]>().default([]),
    joinedAt: timestamp("joinedAt").notNull(),
    leftAt: timestamp("leftAt"),
    isActive: boolean("isActive").notNull().default(true),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.id] }),
    firmIdx: index("firm_member_firm_idx").on(table.firmId),
    userIdx: index("firm_member_user_idx").on(table.userId),
  })
);

export type FirmMember = InferSelectModel<typeof firmMember>;

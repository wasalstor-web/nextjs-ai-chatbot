import { and, asc, desc, eq, like, or } from "drizzle-orm";
import { db } from "./index";
import {
  type CaseEvent,
  type Consultation,
  type ConsultationHistory,
  type ContractAnalysis,
  type ContractTemplate,
  caseEvent,
  consultation,
  consultationHistory,
  contractAnalysis,
  contractTemplate,
  type FirmMember,
  firmMember,
  type GeneratedContract,
  generatedContract,
  type LegalCase,
  legalCase,
  legalFirm,
} from "./schema";

// ============================================
// TYPE DEFINITIONS
// ============================================

type ConsultationType = Consultation["consultationType"];
type SeverityType = Consultation["severity"];
type StatusType = Consultation["status"];
type CategoryType = ContractTemplate["category"];
type RiskLevelType = ConsultationHistory["riskLevel"];
type ContractStatusType = GeneratedContract["status"];
type AnalysisRiskLevelType = ContractAnalysis["riskLevel"];
type SaudiLawComplianceType = ContractAnalysis["saudiLawCompliance"];
type CaseTypeType = LegalCase["caseType"];
type CaseStatusType = LegalCase["status"];
type CaseOutcomeType = LegalCase["outcome"];
type EventTypeType = CaseEvent["eventType"];
type FirmRoleType = FirmMember["role"];

// ============================================
// CONSULTATION QUERIES
// ============================================

export async function createConsultation(data: {
  userId: string;
  title: string;
  description?: string;
  consultationType: ConsultationType;
  severity?: SeverityType;
  chatId?: string;
  attachmentIds?: string[];
  relatedLaws?: string[];
  estimatedAmount?: string;
}) {
  const [result] = await db
    .insert(consultation)
    .values({
      userId: data.userId,
      title: data.title,
      description: data.description || null,
      consultationType: data.consultationType,
      severity: data.severity || "عادي",
      chatId: data.chatId || null,
      attachmentIds: data.attachmentIds || [],
      relatedLaws: data.relatedLaws || [],
      estimatedAmount: data.estimatedAmount || null,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .returning();
  return result;
}

export async function getConsultationsByUser(userId: string) {
  return db
    .select()
    .from(consultation)
    .where(eq(consultation.userId, userId))
    .orderBy(desc(consultation.createdAt));
}

export async function getConsultationWithHistory(consultationId: string) {
  const result = await db
    .select()
    .from(consultation)
    .where(eq(consultation.id, consultationId));

  if (!result[0]) return null;

  const history = await db
    .select()
    .from(consultationHistory)
    .where(eq(consultationHistory.consultationId, consultationId))
    .orderBy(asc(consultationHistory.createdAt));

  return {
    ...result[0],
    history,
  };
}

export async function addConsultationHistory(data: {
  consultationId: string;
  aiResponse: string;
  modelUsed: string;
  citedLaws?: Array<{
    lawName: string;
    article?: string;
    text?: string;
  }>;
  recommendation?: string;
  riskLevel?: RiskLevelType;
  suggestedActions?: string[];
  estimatedOutcome?: string;
}) {
  const [result] = await db
    .insert(consultationHistory)
    .values({
      consultationId: data.consultationId,
      aiResponse: data.aiResponse,
      modelUsed: data.modelUsed,
      citedLaws: data.citedLaws || [],
      recommendation: data.recommendation || null,
      riskLevel: data.riskLevel || null,
      suggestedActions: data.suggestedActions || [],
      estimatedOutcome: data.estimatedOutcome || null,
      createdAt: new Date(),
    })
    .returning();
  return result;
}

export async function updateConsultationStatus(
  consultationId: string,
  status: StatusType
) {
  const [result] = await db
    .update(consultation)
    .set({ status, updatedAt: new Date() })
    .where(eq(consultation.id, consultationId))
    .returning();
  return result;
}

export async function closeConsultation(consultationId: string) {
  const [result] = await db
    .update(consultation)
    .set({
      status: "مغلق",
      closedAt: new Date(),
      updatedAt: new Date(),
    })
    .where(eq(consultation.id, consultationId))
    .returning();
  return result;
}

export async function getConsultationsByType(
  userId: string,
  consultationType: ConsultationType
) {
  return db
    .select()
    .from(consultation)
    .where(
      and(
        eq(consultation.userId, userId),
        eq(consultation.consultationType, consultationType)
      )
    )
    .orderBy(desc(consultation.createdAt));
}

export async function getOpenConsultations(userId: string) {
  return db
    .select()
    .from(consultation)
    .where(
      and(eq(consultation.userId, userId), eq(consultation.status, "مفتوح"))
    )
    .orderBy(desc(consultation.createdAt));
}

// ============================================
// CONTRACT TEMPLATE QUERIES
// ============================================

export async function createContractTemplate(data: {
  name: string;
  description?: string;
  category: CategoryType;
  ownerId?: string;
  content: string;
  requiredFields?: Array<{
    fieldName: string;
    fieldType: string;
    label: string;
    isRequired: boolean;
    placeholder?: string;
    helpText?: string;
  }>;
  applicableLaws?: string[];
  isPublic?: boolean;
}) {
  const [result] = await db
    .insert(contractTemplate)
    .values({
      name: data.name,
      description: data.description || null,
      category: data.category,
      ownerId: data.ownerId || null,
      content: data.content,
      requiredFields: data.requiredFields || [],
      applicableLaws: data.applicableLaws || [],
      isPublic: data.isPublic || false,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .returning();
  return result;
}

export async function getContractTemplatesByCategory(
  category: CategoryType,
  publicOnly = true
) {
  const query = db
    .select()
    .from(contractTemplate)
    .where(
      publicOnly
        ? and(
            eq(contractTemplate.category, category),
            eq(contractTemplate.isPublic, true)
          )
        : eq(contractTemplate.category, category)
    )
    .orderBy(desc(contractTemplate.usageCount));

  return query;
}

export async function searchContractTemplates(
  query: string,
  publicOnly = true
) {
  return db
    .select()
    .from(contractTemplate)
    .where(
      publicOnly
        ? and(
            eq(contractTemplate.isPublic, true),
            or(
              like(contractTemplate.name, `%${query}%`),
              like(contractTemplate.description, `%${query}%`)
            )
          )
        : or(
            like(contractTemplate.name, `%${query}%`),
            like(contractTemplate.description, `%${query}%`)
          )
    )
    .orderBy(desc(contractTemplate.rating));
}

export async function getPublicContractTemplates() {
  return db
    .select()
    .from(contractTemplate)
    .where(eq(contractTemplate.isPublic, true))
    .orderBy(desc(contractTemplate.usageCount));
}

// ============================================
// GENERATED CONTRACT QUERIES
// ============================================

export async function createGeneratedContract(data: {
  templateId: string;
  userId: string;
  filledData: Record<string, string>;
  finalContent: string;
  consultationId?: string;
}) {
  const [result] = await db
    .insert(generatedContract)
    .values({
      templateId: data.templateId,
      userId: data.userId,
      consultationId: data.consultationId || null,
      filledData: data.filledData,
      finalContent: data.finalContent,
      status: "draft",
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .returning();
  return result;
}

export async function getGeneratedContractsByUser(userId: string) {
  return db
    .select()
    .from(generatedContract)
    .where(eq(generatedContract.userId, userId))
    .orderBy(desc(generatedContract.createdAt));
}

export async function getGeneratedContract(contractId: string) {
  const [result] = await db
    .select()
    .from(generatedContract)
    .where(eq(generatedContract.id, contractId));

  if (!result) return null;

  const analysis = await db
    .select()
    .from(contractAnalysis)
    .where(eq(contractAnalysis.generatedContractId, contractId));

  return {
    ...result,
    analysis: analysis[0] || null,
  };
}

export async function updateGeneratedContractStatus(
  contractId: string,
  status: ContractStatusType
) {
  const [result] = await db
    .update(generatedContract)
    .set({ status, updatedAt: new Date() })
    .where(eq(generatedContract.id, contractId))
    .returning();
  return result;
}

export async function incrementContractDownloadCount(contractId: string) {
  const [contract] = await db
    .select()
    .from(generatedContract)
    .where(eq(generatedContract.id, contractId));

  if (!contract) return null;

  const newCount = (
    Number.parseInt(contract.downloadCount ?? "0") + 1
  ).toString();
  const [result] = await db
    .update(generatedContract)
    .set({ downloadCount: newCount, updatedAt: new Date() })
    .where(eq(generatedContract.id, contractId))
    .returning();

  return result;
}

// ============================================
// CONTRACT ANALYSIS QUERIES
// ============================================

export async function createContractAnalysis(data: {
  generatedContractId: string;
  riskLevel: AnalysisRiskLevelType;
  dangerousTerms?: Array<{
    term: string;
    riskLevel: string;
    explanation: string;
    suggestion: string;
    lineNumber?: number;
  }>;
  recommendations?: string[];
  suggestedEdits?: Array<{
    location: string;
    currentText: string;
    suggestedText: string;
    reason: string;
  }>;
  saudiLawCompliance?: SaudiLawComplianceType;
  aiModel?: string;
}) {
  const [result] = await db
    .insert(contractAnalysis)
    .values({
      generatedContractId: data.generatedContractId,
      riskLevel: data.riskLevel,
      dangerousTerms: data.dangerousTerms || [],
      recommendations: data.recommendations || [],
      suggestedEdits: data.suggestedEdits || [],
      saudiLawCompliance: data.saudiLawCompliance,
      aiModel: data.aiModel || null,
      createdAt: new Date(),
    })
    .returning();
  return result;
}

export async function getContractAnalysis(contractId: string) {
  const [result] = await db
    .select()
    .from(contractAnalysis)
    .where(eq(contractAnalysis.generatedContractId, contractId));
  return result || null;
}

// ============================================
// LEGAL CASE QUERIES
// ============================================

export async function createLegalCase(data: {
  userId: string;
  title: string;
  description?: string;
  caseType?: CaseTypeType;
  caseNumber?: string;
  court?: string;
  opposingParty?: string;
}) {
  const [result] = await db
    .insert(legalCase)
    .values({
      userId: data.userId,
      title: data.title,
      description: data.description || null,
      caseType: data.caseType,
      caseNumber: data.caseNumber || null,
      court: data.court || null,
      opposingParty: data.opposingParty || null,
      status: "مفتوح",
      relatedConsultations: [],
      relatedDocuments: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .returning();
  return result;
}

export async function getLegalCasesByUser(userId: string) {
  return db
    .select()
    .from(legalCase)
    .where(eq(legalCase.userId, userId))
    .orderBy(desc(legalCase.createdAt));
}

export async function getLegalCaseWithEvents(caseId: string) {
  const result = await db
    .select()
    .from(legalCase)
    .where(eq(legalCase.id, caseId));

  if (!result[0]) return null;

  const events = await db
    .select()
    .from(caseEvent)
    .where(eq(caseEvent.caseId, caseId))
    .orderBy(asc(caseEvent.scheduledDate));

  return {
    ...result[0],
    events,
  };
}

export async function createCaseEvent(data: {
  caseId: string;
  eventType: EventTypeType;
  title: string;
  description?: string;
  scheduledDate?: Date;
  createdBy?: string;
  attachmentIds?: string[];
}) {
  const [result] = await db
    .insert(caseEvent)
    .values({
      caseId: data.caseId,
      eventType: data.eventType,
      title: data.title,
      description: data.description || null,
      scheduledDate: data.scheduledDate || null,
      createdBy: data.createdBy || null,
      attachmentIds: data.attachmentIds || [],
      createdAt: new Date(),
    })
    .returning();
  return result;
}

export async function updateCaseStatus(caseId: string, status: CaseStatusType) {
  const [result] = await db
    .update(legalCase)
    .set({ status, updatedAt: new Date() })
    .where(eq(legalCase.id, caseId))
    .returning();
  return result;
}

// ============================================
// LEGAL FIRM QUERIES
// ============================================

export async function createLegalFirm(data: {
  ownerId: string;
  name: string;
  description?: string;
  registrationNumber?: string;
  specializations?: string[];
  email?: string;
  phone?: string;
  address?: string;
}) {
  const [result] = await db
    .insert(legalFirm)
    .values({
      ownerId: data.ownerId,
      name: data.name,
      description: data.description || null,
      registrationNumber: data.registrationNumber || null,
      specializations: data.specializations || [],
      email: data.email || null,
      phone: data.phone || null,
      address: data.address || null,
      totalMembers: "0",
      activeConsultations: "0",
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .returning();
  return result;
}

export async function getLegalFirmsByOwner(ownerId: string) {
  return db
    .select()
    .from(legalFirm)
    .where(eq(legalFirm.ownerId, ownerId))
    .orderBy(desc(legalFirm.createdAt));
}

export async function addFirmMember(data: {
  firmId: string;
  userId: string;
  role: FirmRoleType;
  specializations?: string[];
}) {
  const [result] = await db
    .insert(firmMember)
    .values({
      firmId: data.firmId,
      userId: data.userId,
      role: data.role,
      specializations: data.specializations || [],
      joinedAt: new Date(),
      isActive: true,
    })
    .returning();
  return result;
}

export async function getFirmMembers(firmId: string) {
  return db
    .select()
    .from(firmMember)
    .where(and(eq(firmMember.firmId, firmId), eq(firmMember.isActive, true)))
    .orderBy(asc(firmMember.joinedAt));
}

export async function getLegalFirmWithMembers(firmId: string) {
  const [firm] = await db
    .select()
    .from(legalFirm)
    .where(eq(legalFirm.id, firmId));

  if (!firm) return null;

  const members = await getFirmMembers(firmId);

  return {
    ...firm,
    members,
  };
}

// ============================================
// STATISTICS QUERIES
// ============================================

export async function getUserConsultationStats(userId: string) {
  const consultations = await db
    .select()
    .from(consultation)
    .where(eq(consultation.userId, userId));

  const openCount = consultations.filter((c) => c.status === "مفتوح").length;
  const closedCount = consultations.filter((c) => c.status === "مغلق").length;
  const totalCount = consultations.length;

  return {
    totalConsultations: totalCount,
    openConsultations: openCount,
    closedConsultations: closedCount,
    byType: consultations.reduce(
      (acc, c) => {
        acc[c.consultationType] = (acc[c.consultationType] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    ),
  };
}

export async function getUserContractStats(userId: string) {
  const contracts = await db
    .select()
    .from(generatedContract)
    .where(eq(generatedContract.userId, userId));

  const draftCount = contracts.filter((c) => c.status === "draft").length;
  const signedCount = contracts.filter((c) => c.status === "signed").length;
  const totalCount = contracts.length;

  return {
    totalContracts: totalCount,
    draftContracts: draftCount,
    signedContracts: signedCount,
    totalDownloads: contracts.reduce(
      (acc, c) => acc + Number.parseInt(c.downloadCount ?? "0"),
      0
    ),
  };
}

export async function getUserLegalCaseStats(userId: string) {
  const cases = await db
    .select()
    .from(legalCase)
    .where(eq(legalCase.userId, userId));

  const openCount = cases.filter((c) => c.status === "مفتوح").length;
  const closedCount = cases.filter((c) => c.status === "مغلق").length;
  const wonCount = cases.filter((c) => c.outcome === "فاز").length;

  return {
    totalCases: cases.length,
    openCases: openCount,
    closedCases: closedCount,
    wonCases: wonCount,
    byType: cases.reduce(
      (acc, c) => {
        acc[c.caseType || "أخرى"] = (acc[c.caseType || "أخرى"] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    ),
  };
}

/**
 * نظام الاستشارات القانونية السعودية
 * Saudi Legal Consultation System
 *
 * @module lib/legal
 * @description توفير نظام متكامل للاستشارات القانونية
 */

// Intake Questions
export {
  buildIntakeContext,
  calculateCompletionPercentage,
  formatAnswersForAI,
  getIntakeQuestions,
  getRemainingQuestions,
  isIntakeComplete,
} from "./intake";
// Prompts
export {
  CONSULTATION_TYPE_PROMPTS,
  CONTRACT_REVIEW_PROMPT,
  getAnalysisPrompt,
  getIntakePrompt,
  LAWS_SEARCH_PROMPT,
  LEGAL_SYSTEM_PROMPT,
  OFFICIAL_DISCLAIMER,
  WELCOME_MESSAGE,
} from "./prompts";

// Sources
export {
  getRelevantLaws,
  getSourceById,
  isValidSource,
  SAUDI_LEGAL_SOURCES,
  SAUDI_MAJOR_LAWS,
} from "./sources";
// Types
export type {
  ConfidenceLevel,
  ConsultationStatus,
  ConsultationType,
  EscalationReason,
  EscalationRule,
  IntakeAnswer,
  IntakeContext,
  IntakeQuestion,
  LegalCitation,
  LegalResponse,
  LegalSource,
  LegalSystemConfig,
  RetrievalResult,
  RiskLevel,
} from "./types";

// Validation & Escalation
export {
  assessRiskLevel,
  calculateConfidence,
  containsProhibitedContent,
  generateDisclaimer,
  getApplicableEscalationRules,
  getEscalationMessages,
  isEscalationRequired,
  validateResponse,
} from "./validator";

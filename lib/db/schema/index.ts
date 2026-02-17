// Base schema
export {
  type User,
  user,
} from "./base";

// Chat schema
export {
  type Chat,
  chat,
  type DBMessage,
  type Document,
  document,
  type MessageDeprecated,
  message,
  messageDeprecated,
  type Stream,
  type Suggestion,
  stream,
  suggestion,
  type Vote,
  type VoteDeprecated,
  vote,
  voteDeprecated,
} from "./chat";

// Legal schema
export {
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
  type LegalFirm,
  legalCase,
  legalFirm,
} from "./legal";

export type LabModuleId = 'ai-readiness' | 'automation' | 'icp-scoring' | 'chatbot';

export interface ProjectEvidence {
  metrics?: { label: string; value: string }[];
  toolsUsed?: string[];
  structureSection?: {
    title: string;
    subtitle?: string;
    cards: { step: string; title: string; subtitle: string; description: string }[];
  };
  trainingEnablementSection?: {
    title: string;
    cards: { step: string; title: string; subtitle: string; description: string }[];
  };
  tenantEnablementSection?: {
    title: string;
    intro: string;
    cards: { step: string; title: string; subtitle: string; description: string }[];
  };
  projectScaleCards?: {
    value: string;
    label: string;
    supporting: string;
  }[];
  surveyInfo?: {
    title: string;
    questionCount: number;
    completionTime: string;
    targetAudience: string;
    sampleQuestions: string[];
  };
  reportInfo?: {
    title: string;
    frameworks: string[];
    keyInsights: string[];
    sampleSections: string[];
  };
}

export interface Project {
  id: string;
  title: string;
  company: 'Vincom Retail' | '1Office' | 'Almond Việt Nam' | 'Vincom Retail × XanhSM';
  category: 'brand' | 'growth' | 'automation' | 'research' | 'seo';
  featured?: boolean;
  marketingLabModule?: LabModuleId;
  dateRange: string;
  externalUrl?: string;
  linkText?: string;
  relatedLinks?: { label: string; url: string }[];
  tiktokVideos?: { title: string; url: string; views: string; tag: string; thumbnail?: string }[];
  cardImage?: string;
  galleryImages?: { title: string; subtitle?: string; url: string; key?: string; wide?: boolean }[];
  adsCarousel?: { title: string; subtitle?: string; url: string; key?: string }[];
  abmSequence?: { title: string; subtitle?: string; url: string; key?: string }[];
  automationWorkflows?: { name: string; size?: string; category: string; date: string }[];
  evidence?: ProjectEvidence;
}


export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface Certification {
  name: string;
  score: string;
  issuer: string;
  type: 'language' | 'office' | 'award';
}

export interface SurveyQuestion {
  id: string;
  category: 'infra' | 'data' | 'people' | 'process' | 'demand';
  title: string;
  subtitle: string;
  options: {
    label: string;
    score: number;
    description: string;
  }[];
}

export interface ICPScoreBreakdown {
  firmographicScore: number;
  personaScore: number;
  painPointScore: number;
  budgetTimelineScore: number;
  totalScore: number;
  tier: 'L1' | 'L2' | 'L3';
  tierLabel: string;
  slaResponse: string;
  actionPlan: string;
  crmRouting: string;
}

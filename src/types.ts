export interface NavItem {
  id: string;
  label: string;
}

export interface DirectionItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  keyPoints: string[];
}

export interface DiagnosticMethod {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  target: string;
  description: string;
  practicalApplication: string;
  sampleQuestionOrArea: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  tools: string[];
  deliverable: string;
}

export interface GrantMajor {
  code: string;
  name: string;
  profileSubjects: string;
  grantCount2025: number;
  passingScore2024: number;
  passingScore2025: number;
  competitionRatio: string;
  topUniversities: string[];
  demandLevel: 'Өте жоғары' | 'Жоғары' | 'Орташа';
  category: string;
}

export interface AchievementItem {
  year: string;
  title: string;
  description: string;
  badge: string;
  location?: string;
  impact?: string;
}

export interface CourseCertification {
  id: string;
  title: string;
  organization: string;
  year: string;
  hours: string;
  skillsAcquired: string[];
  certificateNumber: string;
  issueDate: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  participants: string;
  format: string;
  keyOutcomes: string[];
}

export interface StudentMetric {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface StudentStory {
  id: string;
  studentName: string;
  schoolGrade: string;
  initialSituation: string;
  diagnosticResult: string;
  chosenField: string;
  universityOrGrant: string;
  quote: string;
}

export interface DigitalTool {
  name: string;
  category: string;
  roleInGuidance: string;
  practicalUseCase: string;
  iconName: string;
  badge: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  year: string;
  category: 'Семинар' | 'Сынама' | 'Консультация' | 'Шара';
  description: string;
  imageUrl: string;
  location: string;
}

export interface DevelopmentVector {
  number: string;
  title: string;
  target: string;
  initiatives: string[];
  kpi: string;
}

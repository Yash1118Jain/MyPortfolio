export interface Project {
  id: string;
  caseNumber: string;
  title: string;
  impact: string; // one sentence summary
  narrativeIntroduction: string;
  story: {
    problem: string;
    research: string;
    approach: string;
    pipeline: string;
    architecture: string;
    results: string;
    lessonsLearned: string;
  };
  techStack: string[];
  metrics: { label: string; value: string }[];
  buttons: { label: string; href: string; external?: boolean }[];
  styleVariant: 'hydroalert' | 'panic' | 'doodlex' | 'selfhealing' | 'gaming';
}
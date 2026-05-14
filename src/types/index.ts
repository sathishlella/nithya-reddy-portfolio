export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  color: string;
  metrics: { label: string; value: string }[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  color: string;
  type: "healthcare" | "finance" | "education" | "consulting";
}

export interface Skill {
  name: string;
  cluster: "analytics" | "visualization" | "cloud" | "healthcare";
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

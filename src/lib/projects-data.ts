import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "healthmetrics",
    name: "HealthMetrics Pro",
    tagline: "Clinical Quality Intelligence Dashboard",
    description:
      "HEDIS quality compliance dashboard for 500+ synthetic patients — care gap analysis, payer-level filtering, and one-click CSV export for health system reporting.",
    techStack: ["React", "FastAPI", "PostgreSQL", "Recharts", "HEDIS"],
    liveUrl: "https://healthmetrics-frontend.onrender.com",
    githubUrl: "https://github.com/sathishlella/healthmetrics-pro",
    color: "#be185d",
    metrics: [
      { label: "Patients", value: "500+" },
      { label: "HEDIS Measures", value: "12" },
      { label: "API Latency", value: "<200ms" },
      { label: "Cost", value: "$0/mo" },
    ],
  },
  {
    id: "datapulse",
    name: "DataPulse",
    tagline: "Real-Time Financial Risk Monitoring",
    description:
      "Live transaction stream via WebSocket with dual Z-score + IQR anomaly detection. Flags outliers in real time with a D3 risk gauge and flash alerts.",
    techStack: ["React", "FastAPI", "WebSockets", "D3.js", "PostgreSQL"],
    liveUrl: "https://datapulse-frontend.onrender.com",
    githubUrl: "https://github.com/sathishlella/datapulse",
    color: "#7c2d6b",
    metrics: [
      { label: "TX/Second", value: "~5" },
      { label: "Detection", value: "Dual Z+IQR" },
      { label: "WS Latency", value: "<50ms" },
      { label: "Cost", value: "$0/mo" },
    ],
  },
  {
    id: "datawatchdog",
    name: "DataWatchdog",
    tagline: "Automated Data Quality Monitoring",
    description:
      "Upload any CSV, define quality rules (null %, duplicates, range, format), schedule automated checks, and get email alerts when quality drops below threshold.",
    techStack: ["React", "FastAPI", "APScheduler", "Resend", "PostgreSQL"],
    liveUrl: "https://datawatchdog-frontend.onrender.com",
    githubUrl: "https://github.com/sathishlella/datawatchdog",
    color: "#4a1340",
    metrics: [
      { label: "Check Types", value: "5" },
      { label: "Scheduling", value: "Cron" },
      { label: "Alert Speed", value: "<1s" },
      { label: "Cost", value: "$0/mo" },
    ],
  },
];

export const EXPERIENCES = [
  {
    company: "Deloitte",
    role: "Healthcare Analytics Consultant",
    period: "2024 – Present",
    bullets: [
      "35% reduction in clinical data pipeline errors across 3 health system clients",
      "Built ETL pipelines processing 2M+ patient records quarterly",
      "Led dashboard adoption initiative — delivered training to 80+ analysts",
    ],
    color: "#be185d",
    type: "consulting" as const,
  },
  {
    company: "George Mason University",
    role: "MS Health Informatics Candidate",
    period: "2023 – Present",
    bullets: [
      "Specialization in clinical data standards: HL7, FHIR, ICD-10",
      "Research in AI-assisted diagnostic coding and clinical NLP",
    ],
    color: "#f9a8d4",
    type: "education" as const,
  },
  {
    company: "JPMorgan Chase",
    role: "Data Science Intern",
    period: "Summer 2023",
    bullets: [
      "Built real-time anomaly detection dashboard for transaction risk monitoring",
      "Python ML pipeline: Z-score + IQR dual-method flagging",
      "Presented findings to VP Risk — adopted for Q4 monitoring suite",
    ],
    color: "#7c2d6b",
    type: "finance" as const,
  },
  {
    company: "Dallas College",
    role: "Healthcare Data Analyst Intern",
    period: "2022 – 2023",
    bullets: [
      "70% clinician adoption rate for new quality metrics dashboard",
      "Mapped 115+ clinical data elements for HEDIS compliance reporting",
      "Reduced reporting cycle from 5 days to same-day for care managers",
    ],
    color: "#4a1340",
    type: "healthcare" as const,
  },
];

export const SKILLS = [
  { name: "SQL", cluster: "analytics" as const },
  { name: "Python", cluster: "analytics" as const },
  { name: "R", cluster: "analytics" as const },
  { name: "Pandas", cluster: "analytics" as const },
  { name: "NumPy", cluster: "analytics" as const },
  { name: "Excel", cluster: "analytics" as const },
  { name: "Tableau", cluster: "visualization" as const },
  { name: "Power BI", cluster: "visualization" as const },
  { name: "Recharts", cluster: "visualization" as const },
  { name: "D3.js", cluster: "visualization" as const },
  { name: "AWS", cluster: "cloud" as const },
  { name: "Snowflake", cluster: "cloud" as const },
  { name: "Spark", cluster: "cloud" as const },
  { name: "dbt", cluster: "cloud" as const },
  { name: "Supabase", cluster: "cloud" as const },
  { name: "HEDIS", cluster: "healthcare" as const },
  { name: "HL7", cluster: "healthcare" as const },
  { name: "FHIR", cluster: "healthcare" as const },
  { name: "Epic EHR", cluster: "healthcare" as const },
  { name: "ICD-10", cluster: "healthcare" as const },
  { name: "Scikit-learn", cluster: "healthcare" as const },
];

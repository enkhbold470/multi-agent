export interface TeamMember {
  name: string
  role: string
  linkedin?: string
}

export interface Startup {
  id: string
  name: string
  logo?: string
  tagline: string
  description: string
  industry: string
  stage: string
  region: string
  metrics: {
    mrr: number
    teamSize: number
    growth: number
    users?: number
  }
  team: TeamMember[]
}

export const startups: Startup[] = [
  {
    id: "1",
    name: "HealthPulse",
    tagline: "AI-powered health monitoring for seniors",
    description:
      "HealthPulse uses non-invasive sensors and AI to monitor the health of elderly individuals, providing real-time alerts to caregivers and family members when anomalies are detected. Our platform reduces hospitalizations by 35% and gives peace of mind to families.",
    industry: "healthtech",
    stage: "seed",
    region: "us",
    metrics: {
      mrr: 45000,
      teamSize: 12,
      growth: 18,
      users: 2500,
    },
    team: [
      { name: "Sarah Johnson", role: "CEO & Co-founder" },
      { name: "Dr. Michael Chen", role: "CTO & Co-founder" },
      { name: "Priya Patel", role: "Head of Product" },
    ],
  },
  {
    id: "2",
    name: "Finly",
    tagline: "Expense management reimagined for SMBs",
    description:
      "Finly is a comprehensive expense management platform designed specifically for small and medium-sized businesses. Our solution combines corporate cards, automated receipt capture, approval workflows, and accounting integrations to save finance teams 15+ hours per week.",
    industry: "fintech",
    stage: "series-a",
    region: "eu",
    metrics: {
      mrr: 120000,
      teamSize: 28,
      growth: 12,
      users: 850,
    },
    team: [
      { name: "Thomas Weber", role: "CEO & Founder" },
      { name: "Sophia Rodriguez", role: "CFO" },
      { name: "Alex Kim", role: "Head of Engineering" },
    ],
  },
  {
    id: "3",
    name: "LearnLoop",
    tagline: "Personalized learning paths powered by AI",
    description:
      "LearnLoop uses machine learning to create personalized educational content and learning paths for K-12 students. Our platform adapts in real-time to each student's strengths, weaknesses, and learning style, resulting in 40% faster mastery of concepts compared to traditional methods.",
    industry: "edtech",
    stage: "seed",
    region: "us",
    metrics: {
      mrr: 65000,
      teamSize: 15,
      growth: 22,
      users: 12000,
    },
    team: [
      { name: "David Wilson", role: "CEO & Co-founder" },
      { name: "Emma Liu", role: "CTO & Co-founder" },
      { name: "Robert Jackson", role: "Chief Learning Officer" },
    ],
  },
  {
    id: "4",
    name: "Cloudsift",
    tagline: "Cloud cost optimization on autopilot",
    description:
      "Cloudsift automatically analyzes and optimizes cloud infrastructure costs across AWS, Azure, and GCP. Our platform uses machine learning to identify waste, recommend right-sizing, and automatically implement changes with customer approval, saving companies an average of 32% on cloud spend.",
    industry: "saas",
    stage: "series-a",
    region: "us",
    metrics: {
      mrr: 180000,
      teamSize: 24,
      growth: 15,
      users: 320,
    },
    team: [
      { name: "James Foster", role: "CEO & Co-founder" },
      { name: "Aisha Mahmood", role: "CTO & Co-founder" },
      { name: "Daniel Park", role: "VP of Sales" },
    ],
  },
  {
    id: "5",
    name: "Ecoshop",
    tagline: "Sustainable products marketplace with carbon tracking",
    description:
      "Ecoshop is an e-commerce marketplace exclusively for sustainable and eco-friendly products. We verify all sellers against strict environmental standards and provide carbon footprint tracking for every purchase. Our platform makes it easy for consumers to shop according to their values.",
    industry: "ecommerce",
    stage: "seed",
    region: "eu",
    metrics: {
      mrr: 85000,
      teamSize: 18,
      growth: 25,
      users: 45000,
    },
    team: [
      { name: "Olivia Green", role: "CEO & Founder" },
      { name: "Marco Rossi", role: "COO" },
      { name: "Leila Amari", role: "Head of Sustainability" },
    ],
  },
  {
    id: "6",
    name: "CodeAssist",
    tagline: "AI pair programmer that understands your codebase",
    description:
      "CodeAssist is an AI-powered development tool that acts as an intelligent pair programmer. Unlike generic coding assistants, CodeAssist deeply understands your entire codebase, coding patterns, and best practices to provide contextually relevant suggestions and automate repetitive tasks.",
    industry: "ai",
    stage: "pre-seed",
    region: "global",
    metrics: {
      mrr: 25000,
      teamSize: 8,
      growth: 35,
      users: 5000,
    },
    team: [
      { name: "Victor Zhang", role: "CEO & Co-founder" },
      { name: "Natalie Singh", role: "CTO & Co-founder" },
      { name: "Raj Patel", role: "Lead AI Engineer" },
    ],
  },
  {
    id: "7",
    name: "MediTrack",
    tagline: "Blockchain-based pharmaceutical supply chain verification",
    description:
      "MediTrack uses blockchain technology to provide end-to-end verification and tracking of pharmaceutical products from manufacturer to patient. Our solution helps prevent counterfeit medications, ensures proper handling conditions, and enables instant verification of drug authenticity.",
    industry: "healthtech",
    stage: "seed",
    region: "asia",
    metrics: {
      mrr: 55000,
      teamSize: 14,
      growth: 20,
      users: 75,
    },
    team: [
      { name: "Dr. Hiroshi Tanaka", role: "CEO & Co-founder" },
      { name: "Lisa Chen", role: "CTO & Co-founder" },
      { name: "Samuel Okafor", role: "Head of Business Development" },
    ],
  },
  {
    id: "8",
    name: "Growthly",
    tagline: "All-in-one marketing automation for startups",
    description:
      "Growthly is a comprehensive marketing automation platform designed specifically for early-stage startups. Our platform combines email marketing, social media management, SEO tools, and analytics in one affordable package, allowing founders to run sophisticated marketing campaigns without a dedicated team.",
    industry: "saas",
    stage: "pre-seed",
    region: "latam",
    metrics: {
      mrr: 18000,
      teamSize: 6,
      growth: 40,
      users: 350,
    },
    team: [
      { name: "Carlos Mendez", role: "CEO & Founder" },
      { name: "Isabella Torres", role: "Head of Product" },
      { name: "Miguel Santos", role: "Lead Developer" },
    ],
  },
]

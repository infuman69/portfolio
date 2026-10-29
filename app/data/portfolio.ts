export const portfolioData = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://ssroy.com",
  personal: {
    name: "Soham Saha Roy",
    location: "India",
    role: "Software Engineer",
    availability: {
      status: "available for work",
      isActive: true
    },
    tagline: "Chronically online, developer, tinkerer.",
    currentlyReading: "Designing Data Intensive Applications",
    bio: "Experienced in developing enterprise saas platforms with analytics and compliance first architecture.Building multi tenant systems,leveraging LLMs to power analytics pipelines.Occasinally I do digital artwork as well ,do check them out :)."
  },

  experiences: [
    {
      company: "Trumio",
      role: "Software Engineer",
      period: "(june '24 — present)",
      location: "Remote",
      description: "Building enterprise talent management platform with admin privileges and analytics infrastructure powered by LLM's serving enterprise customers",
      responsibilities: [
  "Re-architected a Vapi prototype into an in-house real-time Voice AI Interview Platform (streaming Sarvam STT/TTS + Claude on AWS Bedrock), now Trumio's interview provider, piloted with 2 client companies across 300+ live interviews",
  // "Cut end-of-turn detection from 1.4 s to ~0.6 s using a semantic turn-detection model, and streamed LLM output to TTS sentence by sentence for faster responses",
  "Designed a three-stage personalized assessment framework: Gap Analysis marks each learner's modules as required or optional, Activity Interviews are grounded in their GitHub PRs, and Exit Interviews are generated from their full program history",
  "Built an event-driven evaluation platform on Azure Service Bus (interview → evaluation → analytics → PDF report) using a decorator-based handler registry with Pydantic-validated payloads",
  "Made evaluation pipelines idempotent and resumable with step-level progress in MongoDB, plus bounded concurrency, automatic lock renewal for long LLM jobs, dead-lettering and Teams alerting",
  "Combined rubric-based LLM scoring (LangChain + OpenAI) with deterministic competency aggregation for reproducible, auditable scores, with self-correction for faulty evaluations",
  "Integrated Microsoft SSO for passwordless authentication using the OAuth2 PKCE flow, giving users secure single sign-on across the platform",
  "Designed a multi-stage talent onboarding system, with an organization admin panel for role management, departments and bulk invitations",
  "Built a Microsoft Teams chat ingestion pipeline and analytics dashboard to derive insights from team communications",
  "Created an assessment dashboard for clients to assign and track technical assessments for talent, built on Xobin APIs",
  "Built operational scripts automating organization setup, talent invitations and integrations with Microsoft Teams and GitHub"
],
      skills: ["FastAPI", "React", "MongoDB", "PostgreSQL", "Azure","Python", "LangChain", "OpenAI", "Claude API", "Azure Service Bus",],
      link: "https://trumio.ai/"
    },
    {
      company: "Trumio",
      role: "Software Engineer Intern",
      period: "(dec '23 — may '24)",
      location: "Remote",
      description: "Developed full-stack features and integrations using FastAPI, MongoDB, React.js, and Azure services including approval workflows, CSV import, and automated certificate generation",
      responsibilities: [
        "Engineered multi-level approval workflow for Admin Panel, enabling role-based authorization and request routing across different admin tiers",
        "Implemented CSV import functionality to efficiently handle bulk uploads of static fields",
        "Identified and resolved critical production bugs in the core application, improving system reliability and user experience",
        "Automated talent certificate generation upon project completion using cron-based scheduling and Azure Blob Storage for document management and distribution"
      ],
      skills: ["FastAPI", "React", "MongoDB", "Python", "Azure"],
      link: "https://trumio.ai/"
    },
    {
      company: "Ekko",
      role: "Frontend Intern",
      period: "(july '22 — march '23)",
      location: "Kolkata",
      description: "Drove full-stack product development with frontend focus, authored technical documentation, and optimized application performance through code splitting and lazy loading techniques",
      responsibilities: [
        "Owned full-stack development responsibilities, building both frontend interfaces and backend using Firebase for the product",
        "Authored comprehensive documentation covering complete frontend and backend architecture",
        "Improved application performance through code splitting and lazy loading implementation, significantly reducing page load times and enhancing user experience on internal navigation"
      ],
      skills: ["React", "Firebase"],
      link: "https://ekko.network/"
    }
  ],

  projects: [
    {
      name: "designkit",
      description: "a minimal design system for modern web applications.",
      link: "#"
    },
    {
      name: "pixelflow",
      description: "convert designs to code instantly. paste into your IDE!",
      link: "#"
    },
    {
      name: "colorlab",
      description: "generate beautiful color palettes with AI assistance.",
      link: "#"
    },
    {
      name: "typescale",
      description: "a typography calculator for harmonious type hierarchies.",
      link: "#"
    }
  ],

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/infuman69",
      ariaLabel: "GitHub"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/soham-saha-roy/",
      ariaLabel: "LinkedIn"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/infuman69",
      ariaLabel: "Twitter"
    },
    {
      name: "Email",
      url: "mailto:saharoy.soham123@gmail.com",
      ariaLabel: "Email"
    }
  ]
};

export type Experience = typeof portfolioData.experiences[0];
export type Project = typeof portfolioData.projects[0];
export type Social = typeof portfolioData.socials[0];

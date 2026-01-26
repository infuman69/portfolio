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
    bio: "Experienced in developing enterprise saas platforms with analytics and compliance first architecture.Building multi tenant systems,leveraging LLMs to power analytics pipelines."
  },

  experiences: [
    {
      company: "Trumio",
      role: "Software Engineer",
      period: "(june '24 — present)",
      location: "Remote",
      description: "Building enterprise talent management platform with admin privileges and analytics infrastructure powered by LLM's serving 5 enterprise customers(500+ users)",
      responsibilities: [
        "Integrated Microsoft SSO to implement passwordless authentication using OAuth2/PKCE flow.Established secure, seamless single sign-on experience across the platform",
        "Built chat dashboard with analytics capabilities to derive insights from team communications",
        "Created assessment dashboard enabling clients to assign and track technical assessments for talent",
        "Created organizational admin panel for user role management, department organization, and bulk invitation workflows",
        "Built operational scripts to automate organization setup, talent invitations, and cross-platform integrations (Platform Teams, GitHub)",
        "Designed and implemented comprehensive talent onboarding system with multi-stage workflows",
      ],
      skills: ["FastAPI", "React", "MongoDB", "PostgreSQL", "Azure"],
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

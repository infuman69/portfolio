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
    tagline: "developer, tinkerer.",
    currentlyReading: "Designing Data Intensive Applications",
    bio: "Experienced in developing enterprise saas platforms with analytics and compliance first architecture.Building multi tenant systems,leveraging LLMs to power analytics pipelines."
  },

  experiences: [
    {
      company: "Trumio",
      role: "Software Engineer",
      period: "(june '24 — present)",
      location: "Remote",
      description: "Building AI-powered solutions for enterprise clients",
      responsibilities: [
        "leading design initiatives for flagship productsleading design initiatives for flagship productsleading design initiatives for flagship productsleading design initiatives for flagship products",
        "collaborating with cross-functional teams",
        "architecting scalable solutions for enterprise clients"
      ],
      skills: ["FastAPI", "React", "MongoDB", "PostgreSQL", "Azure"],
      link: "https://trumio.ai/"
    },
    {
      company: "Trumio",
      role: "Software Engineer Intern",
      period: "(dec '23 — may '24)",
      location: "Remote",
      description: "Developed features across fintech and e-commerce platforms",
      responsibilities: [
        "crafted digital experiences for diverse clients",
        "developed features across fintech and e-commerce platforms",
        "contributed to core product development"
      ],
      skills: ["FastAPI", "React", "MongoDB", "Python", "Azure"],
      link: "https://trumio.ai/"
    },
    {
      company: "Ekko",
      role: "Frontend Intern",
      period: "(july '22 — feb '21)",
      location: "Kolkata",
      description: "Created responsive web experiences for startups",
      responsibilities: [
        "developed brand identities and web experiences",
        "built responsive interfaces for startup clients",
        "collaborated with design team on UI/UX improvements"
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

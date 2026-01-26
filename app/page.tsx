import ThemeToggle from "./components/ThemeToggle";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import { portfolioData } from "./data/portfolio";

export default function Home() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.personal.name,
    jobTitle: portfolioData.personal.role,
    description: portfolioData.personal.bio,
    url: portfolioData.siteUrl,
    sameAs: [
      portfolioData.socials.find(s => s.name === "GitHub")?.url,
      portfolioData.socials.find(s => s.name === "LinkedIn")?.url,
      portfolioData.socials.find(s => s.name === "Twitter")?.url
    ].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN"
    },
    email: portfolioData.socials.find(s => s.name === "Email")?.url.replace("mailto:", ""),
    knowsAbout: portfolioData.experiences.flatMap(exp => exp.skills),
    alumniOf: portfolioData.experiences.map(exp => ({
      "@type": "Organization",
      name: exp.company,
      url: exp.link
    }))
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        <main className="page-container">
          {/* Header with name and theme toggle */}
          <header className="flex items-start justify-between mb-4">
            <h1 className="text-5xl md:text-6xl font-light italic text-[hsl(var(--text-primary))]">
              {portfolioData.personal.name}
            </h1>
            <ThemeToggle />
          </header>

          <About />
          <Work />
          {/* <Projects /> */}
          <Socials />
        </main>
      </div>
    </>
  );
}

import { portfolioData } from "../data/portfolio";

export default function About() {
  const { personal } = portfolioData;

  return (
    <section className="mb-8 space-y-6">
      <div className="space-y-2">
        <p className="text-accent">{personal.location}</p>
        <p className="text-accent">{personal.role}</p>
        <div className="flex items-center gap-2">
          <span className={`status-dot ${personal.availability.isActive ? "status-active" : "status-inactive"}`}></span>
          <p className="text-accent">{personal.availability.status}</p>
        </div>
      </div>

      <p className="text-body max-w-2xl">
        {personal.tagline}
      </p>

      <p className="text-muted italic">
        currently reading: <span className="not-italic">{personal.currentlyReading}</span>
      </p>

      <p className="text-body max-w-2xl">
        {personal.bio}
      </p>
    </section>
  );
}

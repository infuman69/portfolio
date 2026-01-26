import { portfolioData } from "../data/portfolio";

export default function Projects() {
  return (
    <section className="mb-8">
      <h2 className="section-title">projects</h2>
      <div className="space-y-6">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="project-item">
            <a href={project.link} className="project-title block">
              {project.name}
            </a>
            <p className="project-description">{project.description}</p>
          </div>
        ))}

        <a href="#" className="link-accent inline-flex items-center gap-1">
          all projects →
        </a>
      </div>
    </section>
  );
}

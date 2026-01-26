"use client";

interface WorkExperienceProps {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  link: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function WorkExperience({
  company,
  role,
  period,
  location,
  description,
  responsibilities,
  skills,
  link,
  isExpanded,
  onToggle,
}: WorkExperienceProps) {
  return (
    <div className="work-item space-y-2">
      <a href={link} className="work-title">
        {company}
      </a>
      <p className="work-role">{role}</p>
      <div className="flex justify-between items-center max-w-2xl">
        <p className="work-date">{period}</p>
        <p className="text-muted">{location}</p>
      </div>
      <p className="work-description max-w-2xl">{description}</p>

      <div className="mt-3">
        <p className="text-muted font-bold text-sm mb-2">Skills & Tools</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 rounded border border-[hsl(var(--border))] text-[hsl(var(--text-secondary))] bg-[hsl(var(--secondary))]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={onToggle}
        className="text-[hsl(var(--accent-blue))] text-sm hover:text-[hsl(var(--accent-blue-light))] transition-colors duration-200 flex items-center gap-1 mt-2"
        aria-expanded={isExpanded}
      >
        {isExpanded ? "show less" : "show more"}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={`transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="work-description max-w-2xl space-y-1 mt-2 list-none">
          {responsibilities.map((item, idx) => (
            <li key={idx} className="flex items-start gap-5 leading-relaxed">
              <span className="text-[hsl(var(--accent-blue))] shrink-0">•</span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

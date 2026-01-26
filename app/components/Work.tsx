"use client";

import { useState } from "react";
import WorkExperience from "./WorkExperience";
import { portfolioData } from "../data/portfolio";

export default function Work() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="mb-8">
      <h2 className="section-title">work</h2>
      <div className="space-y-8">
        {portfolioData.experiences.map((exp, index) => (
          <WorkExperience
            key={index}
            {...exp}
            isExpanded={expandedIndex === index}
            onToggle={() => toggleExpand(index)}
          />
        ))}
      </div>
    </section>
  );
}

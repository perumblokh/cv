
import React from 'react';
import type { Experience } from '../types';

interface ExperienceItemProps {
  experience: Experience;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="pl-12 relative">
       {/* Timeline dot */}
       <div className="absolute left-[11px] top-2 w-3 h-3 bg-cyan-400 rounded-full border-2 border-slate-900"></div>

      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
        <h3 className="text-lg font-semibold text-white">{experience.role}</h3>
        <p className="text-sm text-slate-400">{experience.period}</p>
      </div>
      <p className="text-md text-cyan-400 font-medium mb-3">{experience.company}</p>
      <ul className="space-y-2 text-slate-400 list-disc list-inside">
        {experience.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

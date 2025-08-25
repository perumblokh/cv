
import React from 'react';
import type { Education } from '../types.ts';

interface EducationItemProps {
  education: Education;
}

export const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
            <h3 className="text-lg font-semibold text-white">{education.degree}</h3>
            <p className="text-sm text-slate-400 mt-1 sm:mt-0">{education.period}</p>
        </div>
        <p className="text-md text-cyan-400">{education.institution}</p>
    </div>
  );
};
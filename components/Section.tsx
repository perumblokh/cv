
import React from 'react';

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-cyan-400">{icon}</span>
        <h2 className="text-2xl font-bold text-white tracking-wide">{title}</h2>
        <div className="flex-grow h-px bg-slate-700 ml-4"></div>
      </div>
      <div>{children}</div>
    </section>
  );
};

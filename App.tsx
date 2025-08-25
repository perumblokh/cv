
import React from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { ExperienceItem } from './components/ExperienceItem';
import { ProjectCard } from './components/ProjectCard';
import { SkillBadge } from './components/SkillBadge';
import { EducationItem } from './components/EducationItem';
import { Footer } from './components/Footer';
import { personalInfo, experiences, projects, skills, education } from './constants';
import { BriefcaseIcon, CodeBracketIcon, AcademicCapIcon, SparklesIcon } from './components/Icons';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans antialiased relative">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-900 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <Header personalInfo={personalInfo} />

        <div className="space-y-16 mt-16">
          <Section title="About Me" icon={<SparklesIcon />}>
            <p className="text-slate-400 leading-relaxed">
              {personalInfo.summary}
            </p>
          </Section>

          <Section title="Work Experience" icon={<BriefcaseIcon />}>
            <div className="space-y-8 relative">
              {/* Vertical line for timeline */}
              <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-700"></div>
              {experiences.map((exp, index) => (
                <ExperienceItem key={index} experience={exp} />
              ))}
            </div>
          </Section>

          <Section title="Skills" icon={<CodeBracketIcon />}>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </div>
          </Section>

          <Section title="Projects" icon={<CodeBracketIcon />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </Section>

          <Section title="Education" icon={<AcademicCapIcon />}>
             <div className="space-y-6">
              {education.map((edu, index) => (
                <EducationItem key={index} education={edu} />
              ))}
            </div>
          </Section>
        </div>
        <Footer personalInfo={personalInfo} />
      </main>
    </div>
  );
};

export default App;

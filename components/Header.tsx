
import React from 'react';
import type { PersonalInfo } from '../types.ts';
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon } from './Icons.tsx';

interface HeaderProps {
  personalInfo: PersonalInfo;
}

export const Header: React.FC<HeaderProps> = ({ personalInfo }) => {
  const socialLinks = [
    { href: `mailto:${personalInfo.email}`, icon: <MailIcon />, label: personalInfo.email },
    { href: personalInfo.github, icon: <GithubIcon />, label: 'GitHub' },
    { href: personalInfo.linkedin, icon: <LinkedinIcon />, label: 'LinkedIn' },
  ];

  const contactInfo = [
      { icon: <PhoneIcon />, text: personalInfo.phone },
      { icon: <MapPinIcon />, text: personalInfo.location },
  ];

  return (
    <header className="flex flex-col md:flex-row items-center gap-8">
      <div className="flex-shrink-0">
        <img
          className="h-32 w-32 rounded-full object-cover border-4 border-slate-700 shadow-lg"
          src={personalInfo.avatar}
          alt={personalInfo.name}
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
          {personalInfo.name}
        </h1>
        <h2 className="mt-2 text-xl font-medium text-cyan-400">
          {personalInfo.title}
        </h2>
        <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-slate-400">
           {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center md:justify-start space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
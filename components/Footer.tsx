
import React from 'react';
import type { PersonalInfo } from '../types.ts';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons.tsx';

interface FooterProps {
    personalInfo: PersonalInfo;
}

export const Footer: React.FC<FooterProps> = ({ personalInfo }) => {
    const socialLinks = [
        { href: `mailto:${personalInfo.email}`, icon: <MailIcon />, label: 'Email' },
        { href: personalInfo.github, icon: <GithubIcon />, label: 'GitHub' },
        { href: personalInfo.linkedin, icon: <LinkedinIcon />, label: 'LinkedIn' },
    ];
    return (
        <footer className="mt-20 py-8 border-t border-slate-800 text-center text-slate-500">
            <div className="flex justify-center space-x-6 mb-4">
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
            <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p>
        </footer>
    );
}
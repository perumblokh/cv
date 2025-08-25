import React from 'react';
import ReactDOM from 'react-dom/client';

// --- TYPES ---
interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  summary: string;
  avatar: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
  liveUrl?: string;
}

interface Education {
    degree: string;
    institution: string;
    period: string;
}

// --- CONSTANTS ---
const personalInfo: PersonalInfo = {
  name: "Wawan Irwansyah",
  title: "Guru Informatika",
  email: "wawan.irwansyah@email.com",
  phone: "081252975943",
  location: "Indonesia",
  github: "https://github.com/wawanirwansyah",
  linkedin: "https://linkedin.com/in/wawanirwansyah",
  summary: "Seorang Guru Informatika yang berdedikasi dengan pengalaman dalam mengajar dan mengembangkan kurikulum teknologi. Bersemangat dalam membimbing siswa untuk memahami dunia digital, pemrograman, dan keamanan siber. Terampil dalam menggunakan berbagai platform dan perangkat lunak pendidikan untuk menciptakan lingkungan belajar yang interaktif dan efektif.",
  avatar: "https://i.ibb.co/hJhDwBkq/mfi.png"
};

const experiences: Experience[] = [
  {
    role: "Guru Informatika",
    company: "SMA Negeri 1 Cemerlang",
    period: "Jul 2018 - Sekarang",
    description: [
      "Mengajar mata pelajaran Informatika untuk kelas X-XII dengan Kurikulum Merdeka.",
      "Mengembangkan materi ajar interaktif dan modul praktikum berbasis proyek.",
      "Membimbing siswa dalam persiapan Olimpiade Sains Nasional (OSN) bidang Komputer.",
      "Bertindak sebagai administrator untuk laboratorium komputer dan jaringan sekolah."
    ]
  },
  {
    role: "Asisten Laboratorium",
    company: "Universitas Pendidikan Nasional",
    period: "Agu 2016 - Mei 2018",
    description: [
      "Membantu dosen dalam mempersiapkan dan melaksanakan sesi praktikum.",
      "Memberikan bimbingan kepada mahasiswa dalam pengerjaan tugas pemrograman.",
      "Bertanggung jawab atas pemeliharaan perangkat keras dan lunak di laboratorium."
    ]
  }
];

const skills: string[] = [
  "Struktur Data & Algoritma", "Java", "Python", "Dasar Jaringan", "HTML & CSS", "JavaScript", "SQL & Database", 
  "Microsoft Office Suite", "Google Workspace for Education", "Manajemen Kelas", "Pengembangan Kurikulum", "Scratch", "Canva", "Figma"
];

const projects: Project[] = [
  {
    title: "Sistem Informasi Perpustakaan Sekolah",
    description: "Membangun aplikasi desktop sederhana untuk manajemen peminjaman dan pengembalian buku di perpustakaan sekolah.",
    tags: ["Java", "Swing GUI", "MySQL"],
    repoUrl: "https://github.com/wawanirwansyah/sistem-perpus",
  },
  {
    title: "Website Profil Sekolah",
    description: "Merancang dan mengembangkan website statis sebagai profil sekolah menggunakan HTML, CSS, dan JavaScript untuk tugas siswa.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    repoUrl: "https://github.com/wawanirwansyah/web-sekolah",
  }
];

const education: Education[] = [
    {
        degree: "S.Pd. Pendidikan Teknik Informatika",
        institution: "Universitas Pendidikan Nasional",
        period: "2014 - 2018"
    }
];

// --- ICONS ---
type IconProps = {
  className?: string;
};

const GithubIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MailIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const PhoneIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const MapPinIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);

const ExternalLinkIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const BriefcaseIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
);

const CodeBracketIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M10 20.5 3.5 14l6.5-6.5" />
        <path d="M14 3.5 20.5 10l-6.5 6.5" />
    </svg>
);

const AcademicCapIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
);

const SparklesIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m12 3-1.9 5.8-5.8 1.9 5.8 1.9L12 18l1.9-5.8 5.8-1.9-5.8-1.9L12 3Z" />
        <path d="M5 3v4" />
        <path d="M19 17v4" />
        <path d="M3 5h4" />
        <path d="M17 19h4" />
    </svg>
);

// --- COMPONENTS ---

const Header: React.FC<{ personalInfo: PersonalInfo }> = ({ personalInfo }) => {
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

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
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

const ExperienceItem: React.FC<{ experience: Experience }> = ({ experience }) => {
  return (
    <div className="pl-12 relative">
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

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 flex flex-col hover:border-cyan-400/50 transition-colors duration-300">
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-cyan-900/50 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-auto flex justify-end space-x-4 pt-4">
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300" aria-label="GitHub Repository">
          <GithubIcon />
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300" aria-label="Live Demo">
            <ExternalLinkIcon />
          </a>
        )}
      </div>
    </div>
  );
};

const SkillBadge: React.FC<{ skill: string }> = ({ skill }) => {
  return (
    <span className="bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium px-4 py-2 rounded-md hover:bg-slate-700 transition-colors duration-300">
      {skill}
    </span>
  );
};

const EducationItem: React.FC<{ education: Education }> = ({ education }) => {
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

const Footer: React.FC<{ personalInfo: PersonalInfo }> = ({ personalInfo }) => {
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
};

// --- APP ---
const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans antialiased relative">
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

// --- RENDER ---
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
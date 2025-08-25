
import type { PersonalInfo, Experience, Project, Education } from './types';

export const personalInfo: PersonalInfo = {
  name: "Alex Doe",
  title: "Senior Frontend Engineer | React & TypeScript Specialist",
  email: "alex.doe@email.com",
  phone: "+1 (123) 456-7890",
  location: "San Francisco, CA",
  github: "https://github.com/alexdoe",
  linkedin: "https://linkedin.com/in/alexdoe",
  summary: "Innovative Senior Frontend Engineer with over 8 years of experience in creating dynamic, high-performance web applications. Expert in React, TypeScript, and modern JavaScript frameworks. Passionate about building intuitive user interfaces, optimizing application performance, and collaborating in agile environments to deliver exceptional products.",
  avatar: "https://picsum.photos/seed/alexdoe/200/200"
};

export const experiences: Experience[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Tech Solutions Inc.",
    period: "Jan 2020 - Present",
    description: [
      "Led the development of a new client-facing dashboard using React, TypeScript, and Redux, improving user engagement by 25%.",
      "Architected and implemented a component library that standardized UI across multiple products, reducing development time by 30%.",
      "Mentored junior engineers, conducting code reviews and promoting best practices in software development.",
      "Optimized application performance by implementing code splitting, lazy loading, and memoization techniques, resulting in a 40% faster load time."
    ]
  },
  {
    role: "Frontend Developer",
    company: "Innovate Co.",
    period: "Jun 2017 - Dec 2019",
    description: [
      "Developed and maintained responsive web applications using React and JavaScript (ES6+).",
      "Collaborated with UI/UX designers to translate wireframes and mockups into functional user interfaces.",
      "Integrated RESTful APIs to fetch and display data, ensuring seamless user experience.",
      "Wrote unit and integration tests using Jest and React Testing Library to maintain code quality."
    ]
  },
   {
    role: "Junior Web Developer",
    company: "Digital Starters",
    period: "Jul 2015 - May 2017",
    description: [
        "Assisted in building and maintaining company websites using HTML, CSS, and jQuery.",
        "Gained foundational knowledge in web development and agile methodologies.",
        "Worked closely with a senior developer to implement new features and fix bugs."
    ]
  }
];

export const skills: string[] = [
  "React", "TypeScript", "JavaScript (ES6+)", "Next.js", "Node.js", "HTML5", "CSS3", "Tailwind CSS",
  "GraphQL", "REST APIs", "Redux", "Jest", "React Testing Library", "Webpack", "Vite", "Git", "CI/CD", "Figma", "Agile/Scrum"
];

export const projects: Project[] = [
  {
    title: "Project Nova",
    description: "A real-time collaborative project management tool designed to streamline team workflows and improve productivity.",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    repoUrl: "https://github.com/alexdoe/project-nova",
    liveUrl: "https://project-nova.example.com"
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with features like product catalog, shopping cart, and secure checkout.",
    tags: ["Next.js", "GraphQL", "Stripe API", "Vercel"],
    repoUrl: "https://github.com/alexdoe/ecommerce-platform",
  }
];

export const education: Education[] = [
    {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of California, Berkeley",
        period: "2011 - 2015"
    }
];

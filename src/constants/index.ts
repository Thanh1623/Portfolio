export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const HERO_CONTENT = {
  name: "Nguyen Duy Thanh",
  roles: ["Frontend Developer", "React Specialist", "UI/UX Enthusiast"],
  description:
    "Frontend Developer specializing in building maintainable, scalable interfaces with a strong focus on performance, usability, and clean architecture.",
  ctaPrimary: "View Projects",
  ctaSecondary: "Contact Me",
};

export const ABOUT_CONTENT = {
  text: "I am a passionate Frontend Developer with over 2 years of experience building scalable web applications. I specialize in React, Next.js, TypeScript, and modern CSS architectures. My focus is on creating seamless user experiences that combine performance with aesthetic excellence.",
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Happy Clients", value: "20+" },
  ],
};

export const SKILLS = [
  // Frontend
  { name: "React", category: "Frontend", icon: "Atom" },
  { name: "Next.js", category: "Frontend", icon: "Rocket" },
  { name: "TypeScript", category: "Frontend", icon: "FileJson" },
  { name: "JavaScript", category: "Frontend", icon: "FileCode" },
  { name: "Tanstack Query", category: "Frontend", icon: "Layers" },
  { name: "Zustand", category: "Frontend", icon: "Box" },
  { name: "Redux Toolkit", category: "Frontend", icon: "Cpu" },
  { name: "HTML5, CSS3", category: "Frontend", icon: "Globe" },

  // Design
  { name: "Tailwind CSS", category: "Design", icon: "Wind" },
  { name: "Shadcn UI", category: "Design", icon: "Layout" },
  { name: "Ant Design", category: "Design", icon: "Palette" },
  { name: "MUI", category: "Design", icon: "Feather" },

  // Backend
  { name: "Nest.js", category: "Backend", icon: "Server" },
  { name: "Express.js", category: "Backend", icon: "Server" },
  { name: "MySQL", category: "Backend", icon: "Database" },
  { name: "PostgreSQL", category: "Backend", icon: "Database" },

  // Tools
  { name: "Git", category: "Tools", icon: "GitBranch" },
  { name: "Postman", category: "Tools", icon: "Send" },
];

export const PROJECTS = [
  {
    title: "SonHa Warehouse Management System (WMS)",
    description: `This project is a warehouse management system designed to handle inventory data and import/export transactions. It provides comprehensive
features for managing warehouse operations, document workflows, user accounts, and core product data. Key functionalities include shipment verification and cancellation (incoming, outgoing, and transfer), as well as detailed tracking of
transaction logs and user activity to ensure data accuracy, transparency, and traceability`,
    image: "https://picsum.photos/seed/eco/800/600",
    tech: ["ReactJS", "Tanstack", "Zustand", "Formik", "Tailwind", "Shadcn UI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "3D Planner",
    description: `Built an interactive 3D interior design platform that allows users to create and customize layouts by dragging and dropping furniture within a
virtual environment. Implemented real-time 2D/3D rendering, project saving, and dynamic cost estimation to enhance user experience and
decision-making. Designed advanced features such as project saving, undo/redo functionality, and dynamic cost estimation to enhance usability and user
experience. Developed a full-featured admin dashboard for managing products, users, and design projects, ensuring scalable data management
and system efficiency.`,
    image: "https://picsum.photos/seed/fashion/800/600",
    tech: [
      "Next.js",
      "Blueprint3D",
      "Three.js",
      "Zustand",
      "Tailwind CSS",
      "Formik",
      "Shadcn/ui",
    ],
    liveUrl: "https://cocinaseuropa.com/es",
    githubUrl: "#",
  },
  {
    title: "NFT Marketplace",
    description: `Built and delivered an NFT marketplace for an international client (Japan), enabling users to mint, buy, sell, and trade digital assets on the
blockchain. Worked in a collaborative environment to implement secure smart contract interactions, ensuring transparent ownership and
decentralized asset management.`,
    image: "https://picsum.photos/seed/social/800/600",
    tech: [
      "ReactJS",
      "Tanstack",
      "Zustand",
      "Formik",
      "Tailwind",
      "Shadcn",
      "JavaScript",
      "CSS",
    ],
    liveUrl: "https://dev-2025.motionbank.net/",
    githubUrl: "#",
  },
];

export const EXPERIENCE = [
  {
    company: "Công TNHH Next Level Solution ",
    role: "Frontend Developer (React, Next.js)",
    period: "09/2024 - Present",
    description: `Developed and delivered scalable, client-focused web applications using React.js, managing the full development lifecycle from concept to
deployment. Collaborated with cross-functional teams to ensure high performance, usability, and timely delivery of multiple high-impact
projects.
`,
  },
  {
    company: "CÔNG TY CỔ PHẦN KHOA HỌC & CÔNG NGHỆ GIÁO DỤC(OLM)",
    role: "Web Developer (ReactJS, NodeJS)",
    period: "04/2024 - 08/2024",
    description: `• Research and learn about various technologies and libraries for web development.
• Develop user interfaces using ReactJS.
• Build simple backend APIs with Node.js, including CRUD.
• Participate in bug fixing, adding/editing interfaces, and providing tutorials on feature usage.
`,
  },
];

export const EDUCATION = [
  {
    school: "Hanoi National University Of Education(HNUE)",
    degree: "Bachelor of Science in Information Technology",
    period: "2021 - 2025",
    description: "Specialized in Software Engineering and Web Technologies",
  },
];

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
  { name: "Email", url: "nguyenduythanh1623@gmail.com", icon: "Mail" },
];

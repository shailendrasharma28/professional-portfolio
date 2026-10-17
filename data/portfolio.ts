export interface ProjectItem {
  id: string;
  title: string;
  images?: { src: string; alt?: string }[];
  subtitle: string;
  description: string;
  category: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  keyFeatures: string[];
  architectureDetails: string[];
  liveUrl?: string;
  isPrivate?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  architectureHighlights: { title: string; desc: string }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  grade: string;
  type: "Higher Education" | "Schooling";
  focus?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  description: string;
  topics: string[];
}

export const PERSONAL_INFO = {
  name: "Shailendra Sharma",
  initials: "SS",
  role: "Software Engineer",
  techStack: "Node.js · Express.js · TypeScript",
  location: "Bharatpur, Rajasthan, India",
  email: "shailendr2003@gmail.com",
  phone: "+91 9351943369",
  phoneDisplay: "+91 93519 43369",
  linkedin: "https://linkedin.com/in/shailendrasharma28",
  github: "https://github.com/shailendrasharma28",
  resumePath: "/resume/Shailendra_Sharma_Resume.pdf",
  bioHeadline: "Engineering the systems behind great digital experiences.",
  summary:
    "Software Engineer with 2+ years of experience building web applications, scalable REST APIs, modular backend services, and data-driven products using Node.js, Express.js, TypeScript, MySQL, and PostgreSQL. Skilled in system design, database management, and cross-team collaboration in fast-paced startup environments. Has completed an MCA and contributes to live products serving real users.",
  experienceYears: "2+",
  statusText: "Open to Software Engineering Roles",
  profileImage: "/images/profile/shailendra-sharma.jpg",
};

export const CAPABILITIES = [
  {
    title: "REST & Realtime APIs",
    description: "Designing structured, modular, and high-throughput RESTful endpoints & WebSocket pipelines with Socket.IO.",
    icon: "Network",
    tags: ["Node.js", "Express.js", "Socket.IO", "TypeScript"],
  },
  {
    title: "Database Engineering",
    description: "Relational data modeling, schema indexing, query optimization, migrations, and transactions with MySQL & PostgreSQL via Sequelize ORM.",
    icon: "Database",
    tags: ["MySQL", "PostgreSQL", "Sequelize ORM", "Redis"],
  },
  {
    title: "Modular Architecture",
    description: "Architecting centralized Auth, Role-Based Access Control (RBAC), multi-tenant billing engines, and microservices patterns.",
    icon: "Cpu",
    tags: ["Microservices", "RBAC", "Multi-tenancy", "Security"],
  },
  {
    title: "Production Workflows",
    description: "Automated XML sitemaps for SEO, background job processing, ledger auditing, and containerized deployment with Docker & Git.",
    icon: "Server",
    tags: ["Docker", "Git CI/CD", "Automated Jobs", "Linux"],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Backend Developer",
    company: "Media Tech Temple Pvt. Ltd.",
    location: "Bharatpur, Rajasthan",
    period: "May 2024 – Present",
    isCurrent: true,
    description:
      "Core backend engineer architecting mission-critical platforms, centralized authentication & subscription engines, high-concurrency public portals, and multi-tenant business systems.",
    responsibilities: [
      "Architected backend services for the GearBee ERP platform, including a centralized User & Billing service covering multi-tenant authentication, authorization, subscriptions, and billing lifecycles.",
      "Engineered specialized modules for Banquet Management (enquiries, bookings, multi-event scheduling, payments, financial ledgers, and service configuration).",
      "Built dynamic SaaS Task Management engine with organization hierarchies, automated status workflows, and granular role-based permissions.",
      "Developed high-traffic public portal India Sarkari Naukri with dynamic listing APIs, automated XML sitemap generation for search engines, and category-based filtering.",
      "Implemented real-time bidirectional communication using Socket.IO for status updates, notifications, and interactive dashboards.",
      "Engineered clean database migrations, models, and relational queries using MySQL and Sequelize ORM.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MySQL",
      "Sequelize ORM",
      "Socket.IO",
      "REST APIs",
      "Git",
    ],
    architectureHighlights: [
      {
        title: "Centralized Auth & RBAC",
        desc: "Unified JWT-based auth and tenant isolation across multiple internal ERP applications.",
      },
      {
        title: "Dynamic XML Sitemaps",
        desc: "Automated crawler indexing for thousands of daily government job updates.",
      },
      {
        title: "Event-Driven Ledger",
        desc: "Dual-entry booking & transaction balance tracking ensuring zero ledger drift.",
      },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend Development",
    description: "Primary engineering domain focused on server runtimes, architecture patterns, and API contracts.",
    iconName: "Server",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "REST APIs", highlight: true },
      { name: "Microservices", highlight: true },
      { name: "Socket.IO", highlight: false },
      { name: "Sequelize ORM", highlight: true },
      { name: "Git", highlight: false },
      { name: "Docker", highlight: false },
    ],
  },
  {
    title: "Programming Languages",
    description: "Core typed and dynamic languages used for system logic and algorithmic execution.",
    iconName: "Code2",
    skills: [
      { name: "TypeScript", highlight: true },
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "Python", highlight: false },
    ],
  },
  {
    title: "Databases & Storage",
    description: "Relational persistence, high-speed in-memory caches, and document stores.",
    iconName: "Database",
    skills: [
      { name: "MySQL", highlight: true },
      { name: "PostgreSQL", highlight: true },
      { name: "Redis", highlight: false },
    ],
  },
  {
    title: "Frontend & Interfaces",
    description: "Client-side libraries and standards for crafting operational dashboards and user portals.",
    iconName: "Layout",
    skills: [
      { name: "React.js", highlight: true },
      { name: "HTML5", highlight: false },
      { name: "CSS3", highlight: false },
      { name: "Tailwind CSS", highlight: false },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "gearbee-erp",
    title: "GearBee ERP Management",
    subtitle: "Enterprise Multi-Module Operations & Billing Ecosystem",
    category: "Enterprise Backend Architecture",
    description:
      "Engineered an enterprise-grade ERP ecosystem featuring multi-tenant architecture, centralized authentication, SaaS task management with customizable workflows, Banquet event lifecycle tracking, and financial ledgers.",
    tags: ["Node.js", "Express.js", "TypeScript", "MySQL", "Sequelize ORM", "Microservices"],
    metrics: [
      { label: "Core Modules", value: "4 Services" },
      { label: "Tenant Mode", value: "Multi-Tenant" },
      { label: "Data Integrity", value: "Strict ACID" },
      { label: "Auth Model", value: "RBAC + JWT" },
    ],
    keyFeatures: [
      "Centralized User & Billing service managing tenant onboarding, subscription tiers, invoices, and billing lifecycles.",
      "Banquet Management module handling client enquiries, date reservation calendars, multi-event coordination, menu configurations, and financial ledgers.",
      "SaaS Task Management with hierarchical team models, role-based delegation, dynamic pipeline stages, and audit trails.",
      "Super-Admin Control Panel for monitoring tenant health, subscription renewals, system permissions, and operational logs.",
    ],
    architectureDetails: [
      "Decoupled microservice-style route controllers with unified error handlers and request validation middleware.",
      "Sequelize relational associations with transactions guaranteeing atomicity across multi-event financial entries.",
      "JWT authentication paired with fine-grained permission middleware evaluating action scopes per user role.",
    ],
    isPrivate: true,
  },
  {
    id: "india-sarkari-naukri",
    title: "India Sarkari Naukri",
    subtitle: "High-Volume Government Recruitment & Notification Portal",
    category: "High-Traffic Content Platform",
    description:
      "A high-availability recruitment and examination notifications portal providing categorized listings (Railway, Bank, SSC, Police, State), search indexing, and automated search-engine visibility infrastructure.",
    tags: ["Node.js", "Express.js", "TypeScript", "MySQL", "Sequelize", "Socket.IO", "XML Sitemaps"],
    metrics: [
      { label: "Live Deployment", value: "Production" },
      { label: "SEO Indexing", value: "Auto XML" },
      { label: "Target Sectors", value: "5+ Categories" },
      { label: "Sync Engine", value: "Realtime" },
    ],
    keyFeatures: [
      "Dynamic listing REST APIs with low-latency indexing by sector: Railway, Banking, SSC, Police, and State Governments.",
      "Automated XML sitemap generation system for continuous search engine spider indexing of newly published notifications.",
      "Modular tracking pipelines for Admit Cards, Answer Keys, Examination Results, and syllabus downloads.",
      "Real-time alerts and dashboard notifications powered by Socket.IO socket rooms.",
    ],
    architectureDetails: [
      "Paginated dynamic query builder with indexed MySQL columns for fast filtering across thousands of postings.",
      "Streaming XML sitemap generation script that updates without locking tables or degrading API responsiveness.",
      "RESTful category hierarchies designed for rapid mobile web client consumption.",
    ],
    liveUrl: "https://indiasarkarinaukri.com/",
    isPrivate: false,
  },
  {
    id: "hrms-software",
    title: "HRMS Enterprise Suite",
    subtitle: "End-to-End Human Resource & Payroll Management System",
    category: "Full-Stack Enterprise Application",
    description:
      "Independently engineered full-stack Human Resource Management System orchestrating employee records, automated attendance logging, leaves approval hierarchy, and salary payroll workflows.",
    tags: ["Node.js", "Express.js", "PostgreSQL", "Redis", "React.js", "REST APIs"],
    metrics: [
      { label: "Stack", value: "Full-Stack" },
      { label: "Cache Tier", value: "Redis Store" },
      { label: "Relational DB", value: "PostgreSQL" },
      { label: "Client UI", value: "React.js" },
    ],
    keyFeatures: [
      "Comprehensive employee records management with department mappings, designations, and digital document tracking.",
      "Automated attendance tracking and shift scheduling with leave quota calculations and multi-level approval queues.",
      "Payroll engine calculating basic pay, allowances, tax deductions, and structured monthly payslip generation.",
      "Responsive React.js administration frontend consuming Express.js REST APIs with Redis caching.",
    ],
    architectureDetails: [
      "PostgreSQL schema enforcing foreign-key cascade integrity across employees, leaves, attendance punches, and payroll tables.",
      "In-memory Redis layer caching active session tokens and frequently queried employee department rosters.",
      "Modular controller architecture ensuring strict separation between payroll calculation logic and HTTP endpoints.",
    ],
    isPrivate: false,
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA) — Completed",
    institution: "University of Technology, Vatika, Jaipur",
    location: "Jaipur, Rajasthan",
    year: "2026",
    grade: "7.3 SGPA",
    type: "Higher Education",
    focus: "Advanced Computer Science, Distributed Systems, Software Engineering & Database Systems",
  },
  {
    degree: "Bachelor of Science (BSc)",
    institution: "MSBU (Maharaja Surajmal Brij University)",
    location: "Bharatpur, Rajasthan",
    year: "2023",
    grade: "69.10%",
    type: "Higher Education",
    focus: "Mathematics, Physics & Chemistry",
  },
  {
    degree: "Class 12th (Science Stream)",
    institution: "RBSE (Rajasthan Board of Secondary Education)",
    location: "Rajasthan",
    year: "2020",
    grade: "79.20%",
    type: "Schooling",
    focus: "Physics, Chemistry, Mathematics & Information Technology fundamentals",
  },
  {
    degree: "Class 10th",
    institution: "RBSE (Rajasthan Board of Secondary Education)",
    location: "Rajasthan",
    year: "2018",
    grade: "93.67%",
    type: "Schooling",
    focus: "Core Sciences, Mathematics with distinction, General Academics",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Full Stack Web Development",
    issuer: "PW Skills (Physics Wallah)",
    description:
      "Comprehensive industry certification covering end-to-end full stack web architecture, server-side development, database modeling, and real-world project deployment.",
    topics: [
      "HTML5 & CSS3 Responsive Design",
      "Modern JavaScript (ES6+)",
      "React.js Component Architecture",
      "Node.js & Express.js REST APIs",
      "Relational & NoSQL Databases",
      "Full-Stack Project Development",
    ],
  },
];

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

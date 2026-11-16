import type { PortfolioProject } from "@/data/project-types";

export const FEATURED_PROJECTS: PortfolioProject[] = [
  {
    title: "ORF Nusantara Regas",
    href: "https://jadwal-orf-nusantara-regas.vercel.app",
    dates: "2026",
    active: true,
    category: "Operational Systems",
    role: "Full-Stack Development",
    projectType: "Company Project",
    description:
      "An operational web application for work-program tracking, operator scheduling, workforce management, and ORF monitoring.",
    caseStudy: {
      category: "Enterprise Web Application",
      year: "2026",
      role: "Full-Stack Development",
      overview:
        "An operational system supporting work programs, operator schedules, workforce management, and monitoring activities.",
      problemStatement:
        "Operational planning and monitoring activities need structured workflows for programs, schedules, and workforce information.",
      proposedSolution:
        "A web application brings work-program tracking, operator scheduling, and monitoring views into one system.",
      developmentProcess:
        "The public repository documents a Next.js, TypeScript, Prisma, and PostgreSQL stack. Attendance summaries are schedule-based, not actual check-in records.",
      features: [
        "Work-program and target tracking",
        "Operator schedules and roster management",
        "User and role management",
        "Operational monitoring and reporting",
        "Schedule-based attendance summaries",
      ],
      details: [
        { label: "Project Type", value: "Company Project" },
        { label: "Role", value: "Full-Stack Development" },
        { label: "Stack", value: "Next.js, TypeScript, Prisma, PostgreSQL" },
      ],
    },
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    links: [
      {
        type: "Live Demo",
        href: "https://jadwal-orf-nusantara-regas.vercel.app",
      },
      {
        type: "GitHub",
        href: "https://github.com/rifkyfbrn07/ORF-Nusantara_Regas",
      },
    ],
    image: "/ORF.png",
  },
  {
    title: "Laporan-Regas",
    href: "https://github.com/rifkyfbrn07/Workflow-Aims",
    dates: "2026",
    active: true,
    category: "Workflow Management",
    role: "Full-Stack Development",
    projectType: "Workflow Management System",
    description:
      "A separate workflow application for structured reporting, document review, and approval processes.",
    caseStudy: {
      category: "Workflow Management System",
      year: "2026",
      role: "Full-Stack Development",
      overview:
        "A reporting workflow application for managing assignments, deadlines, document submissions, reviews, and approval status.",
      problemStatement:
        "The application organizes reporting work and its review lifecycle in a structured workflow.",
      proposedSolution:
        "A database-backed application combines report assignments and deadlines with submission, review, approval, and monitoring flows.",
      developmentProcess:
        "The separate Workflow-Aims repository documents a Next.js, TypeScript, Prisma, PostgreSQL, Tailwind CSS, and shadcn/ui stack.",
      features: [
        "Report assignment and deadline tracking",
        "Document submission and revision history",
        "Review and approval workflow",
        "Workflow monitoring and reporting dashboard",
      ],
      details: [
        { label: "Project Type", value: "Workflow Management System" },
        { label: "Role", value: "Full-Stack Development" },
        {
          label: "Stack",
          value: "Next.js, TypeScript, Prisma, PostgreSQL, Tailwind CSS",
        },
      ],
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    links: [
      {
        type: "GitHub",
        href: "https://github.com/rifkyfbrn07/Workflow-Aims",
      },
    ],
    image: "/laporan.png",
  },
  {
    title: "Wedding Website — Full Stack",
    href: "https://template-wedding-topaz.vercel.app",
    dates: "2026",
    active: true,
    category: "Web Applications",
    role: "Full-Stack Development",
    projectType: "Individual Project",
    description:
      "An individually developed digital wedding invitation application with guest-specific pages and a protected administration dashboard.",
    caseStudy: {
      category: "Digital Wedding Invitation Platform",
      year: "2026",
      role: "Full-Stack Development — Individual Project",
      overview:
        "A database-backed invitation application with public invitation pages, personalized guest links, and a password-protected administrative dashboard.",
      problemStatement:
        "The project brings public invitations, guest-specific links, and invitation administration into one application.",
      proposedSolution:
        "A Next.js application serves public invitation routes and personalized guest pages alongside protected administration.",
      developmentProcess:
        "The repository documents Next.js, TypeScript, Prisma, and PostgreSQL, with S3-compatible storage for uploaded files.",
      features: [
        "Public wedding invitation pages",
        "Personalized invitation links for guests",
        "Password-protected single-admin dashboard",
        "Server-side session checks for administrative pages and actions",
      ],
      details: [
        { label: "Project Type", value: "Individual Project" },
        { label: "Role", value: "Full-Stack Development" },
        { label: "Stack", value: "Next.js, TypeScript, Prisma, PostgreSQL" },
      ],
    },
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    links: [
      {
        type: "Live Demo",
        href: "https://template-wedding-topaz.vercel.app",
      },
      {
        type: "GitHub",
        href: "https://github.com/rifkyfbrn07/template-wedding",
      },
    ],
    image: "/wedding2.jpeg",
  },
  {
    title: "Wedding Website — Team Project",
    href: "https://github.com/rifkyfbrn07/wedding_web",
    dates: "2026",
    active: true,
    category: "Web Applications",
    role: "Collaborative Development",
    projectType: "Team Project",
    description:
      "A collaborative wedding invitation application with personalized invitation pages, RSVP submission, and guest messages.",
    caseStudy: {
      category: "Digital Wedding Invitation Platform",
      year: "2026",
      role: "Collaborative Development — Team Project",
      overview:
        "A Laravel wedding invitation application with guest-specific invitation routes and server-backed RSVP and wishes flows.",
      problemStatement:
        "The application needs to present an invitation while supporting personalized guest access and collecting responses and messages.",
      proposedSolution:
        "Laravel routes, controllers, and models serve invitation pages and handle RSVP and wishes requests.",
      developmentProcess:
        "The repository contains Laravel routes and controllers for invitations, RSVP submissions, and wishes, with a Vite frontend using Alpine.js, Tailwind CSS, GSAP, Lenis, and Swiper.",
      myRole:
        "Collaborative development project. Individual feature contributions have not been confirmed.",
      features: [
        "Public and guest-personalized invitation routes",
        "RSVP submission endpoint",
        "Wedding wishes submission and listing endpoints",
        "Invitation and guest data models",
      ],
      details: [
        { label: "Project Type", value: "Team Project" },
        { label: "Role", value: "Collaborative Development" },
        {
          label: "Stack",
          value: "Laravel, PHP, Alpine.js, Tailwind CSS, GSAP",
        },
      ],
    },
    technologies: [
      "Laravel",
      "PHP",
      "Alpine.js",
      "Tailwind CSS",
      "GSAP",
      "Lenis",
      "Swiper",
    ],
    links: [
      {
        type: "GitHub",
        href: "https://github.com/rifkyfbrn07/wedding_web",
      },
    ],
    image: "/wedding-web.png",
  },
  {
    title: "BMPS Bogor",
    href: "https://bmps-bogor-zeta.vercel.app/",
    dates: "2026",
    active: true,
    category: "Community Platforms",
    role: "Collaborative Contribution",
    projectType: "Community Web Application",
    description:
      "A public platform for BMPS Bogor with organization information and database-backed school, program, training, and education-service workflows.",
    caseStudy: {
      category: "Community Platform",
      year: "2026",
      role: "Collaborative Contribution",
      overview:
        "A public-facing BMPS Bogor platform with organization information and supporting application flows for schools, programs, training, and education services.",
      problemStatement:
        "The organization needs a web platform for publishing information and handling structured submissions related to schools and education services.",
      proposedSolution:
        "A Next.js application uses a PostgreSQL-backed Prisma data layer for public content and registration workflows.",
      developmentProcess:
        "The source repository includes API routes, authentication and administration areas, and Prisma models for schools, foundations, registrations, articles, programs, training, scholarships, and education assistance.",
      myRole:
        "Collaborative contribution. The public repository does not attribute specific features or code areas to individual contributors.",
      features: [
        "Organization, program, and article information",
        "School and foundation directory and registration workflows",
        "Training registrations",
        "Scholarship and education-assistance application flows",
        "Authentication and administration routes",
      ],
      details: [
        { label: "Project Type", value: "Community Web Application" },
        { label: "Role", value: "Collaborative Contribution" },
        {
          label: "Stack",
          value: "Next.js, TypeScript, Prisma, PostgreSQL, Tailwind CSS",
        },
      ],
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    links: [
      {
        type: "Live Demo",
        href: "https://bmps-bogor-zeta.vercel.app/",
      },
      {
        type: "GitHub",
        href: "https://github.com/rifkyfbrn07/BMPS-bogor",
      },
    ],
    image: "/bmps-bogor.png",
  },
  {
    title: "IoT Monitoring Dashboard",
    href: "https://github.com/rifkyfbrn07/sensor-app",
    dates: "2026",
    active: true,
    category: "IoT & Monitoring",
    role: "Application Development",
    projectType: "IoT Monitoring Dashboard",
    description:
      "A Laravel dashboard for authenticated sensor and device management, status tracking, and sensor-value updates.",
    caseStudy: {
      category: "IoT Monitoring Dashboard",
      year: "2026",
      role: "Application Development",
      overview:
        "An authenticated monitoring application for managing sensor devices, tracking sensor status, and viewing incoming sensor values.",
      problemStatement:
        "Sensor devices and their current status need to be managed through a single monitoring interface.",
      proposedSolution:
        "A Laravel application provides a dashboard, device and sensor CRUD routes, status toggling, and an endpoint for sensor-value updates.",
      developmentProcess:
        "The repository uses Laravel, PHP, MySQL, and Vite with Tailwind CSS. Its sensor update route is an HTTP endpoint; the repository does not establish a direct MQTT broker integration.",
      features: [
        "Authenticated dashboard",
        "Device and sensor management",
        "Sensor status tracking and toggling",
        "HTTP endpoint for sensor-value updates",
      ],
      details: [
        { label: "Project Type", value: "IoT Monitoring Dashboard" },
        { label: "Role", value: "Application Development" },
        { label: "Stack", value: "Laravel, PHP, MySQL, Vite, Tailwind CSS" },
      ],
    },
    technologies: ["Laravel", "PHP", "MySQL", "Vite", "Tailwind CSS"],
    links: [
      {
        type: "GitHub",
        href: "https://github.com/rifkyfbrn07/sensor-app",
      },
    ],
    image: "/sensor.png",
  },
  {
    title: "mini-ecom",
    href: "https://github.com/rifkyfbrn07/mini-ecom",
    dates: "2025",
    active: true,
    category: "E-commerce",
    role: "Frontend Prototype",
    projectType: "E-commerce Application",
    description:
      "A client-side e-commerce prototype with sample products, a cart, and simulated checkout interactions.",
    caseStudy: {
      category: "E-commerce Application",
      year: "2025",
      role: "Frontend Prototype",
      overview:
        "A React application demonstrating product browsing and shopping-cart interactions with simulated data.",
      problemStatement:
        "The prototype explores common storefront and cart interactions in a small client-side application.",
      proposedSolution:
        "A Vite-powered React interface uses local demo services and UI state for product and cart interactions.",
      developmentProcess:
        "The public repository confirms a React and Vite application. Product requests and checkout behavior are demo interactions rather than a production backend.",
      features: [
        "Sample product listing",
        "Add-to-cart and cart management interactions",
        "Simulated checkout and transaction state",
      ],
      details: [
        { label: "Project Type", value: "E-commerce Application" },
        { label: "Role", value: "Frontend Prototype" },
        { label: "Stack", value: "React, JavaScript, Vite" },
      ],
    },
    technologies: ["React", "JavaScript", "Vite"],
    links: [
      {
        type: "GitHub",
        href: "https://github.com/rifkyfbrn07/mini-ecom",
      },
    ],
    image: "/mini-ecom.png",
  },
  {
    title: "Dtrminelabs",
    dates: "",
    active: false,
    status: "Coming Soon",
    category: "Production Management",
    role: "Full-Stack Development",
    projectType: "Production Management System",
    description: "",
    technologies: [],
    links: [],
    image: "",
  },
];

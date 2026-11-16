import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rifky Febrian Iskandar",
  initials: "RF",
  url: "https://rifkyfbrn07-porto.vercel.app",
  location: "Ciamis",
  locationLink: "https://www.google.com/maps/place/Ciamis",
  description:
    "Developer building practical web applications, workflow systems, and operational dashboards.",
  summary: `
I build practical web applications, workflow systems, and operational dashboards, drawing on a technical background in Information Systems, Networking, and Applications (SIJA).

My work spans frontend and backend development, API integration, and database-backed application workflows.

I am interested in software that helps people manage real work, from clear interfaces to reliable operational systems.
`,

  avatarUrl: "/sindoro.jpg",
  skills: [
    "Backend: Laravel (PHP), REST API",
    "Frontend: Next.js, TypeScript, TailwindCSS",
    "Database: MySQL",
    "Networking: Basic Networking",
    "Cyber Security: CTF (Basic), Security Fundamentals",
    "Tools: Git, GitHub, Postman, Linux (Ubuntu)"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "febrianrifky590@gmail.com",
    tel: "+62 823-1020-2411",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rifkyfbrn07",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rifkyfbrn07/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/RifkyFe40920714",
        icon: Icons.x,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/rifkyfbrn07/",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "febrianrifky590@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "PT Pertamina Nusantara Regas",
      badges: [],
      title: "Praktik Kerja Lapangan (PKL)",
      division: "Distribusi Gas dan Monitoring ORF",
      start: "September 2026",
      end: "Present",
      status: "Ongoing",
      description:
        "Undertaking an internship in the Gas Distribution and ORF Monitoring Division, supporting operational activities and the development of digital solutions for operational workflows and monitoring.",
    },
    {
      company: "FOSJABAR j5 & j6",
      href: "https://sites.google.com/view/fosjabar/",
      badges: [],
      location: "Remote",
      title: "Member",
      logoUrl: "/fosjabar.png",
      start: "September 2023",
      end: "November 2025",
      description:
        "Contributed as an active member of FOSJABAR, collaborating with students across regions to organize events and initiatives. Strengthened teamwork, communication, and project coordination skills through active involvement in regional programs.",
    },
    {
      company: "OSIS SMK Ti Bazma",
      badges: [],
      href: "https://smktibazma.sch.id/",
      location: "Remote",
      title: "Division Head",
      logoUrl: "/osis.png",
      start: "September 2024",
      end: "February 2025",
      description:
        "Led a division in the student council (OSIS), responsible for planning and executing school events. Managed team coordination, delegated tasks, and ensured smooth event execution, improving leadership and organizational skills.",
    },
    {
      company: "OSIS SMK Ti Bazma",
      badges: [],
      href: "https://smktibazma.sch.id/",
      location: "Remote",
      title: "Member",
      logoUrl: "/osis.png",
      start: "September 2023",
      end: "August 2024",
      description:
        "Participated in student council activities, supporting school events and collaborative initiatives while developing teamwork and organizational skills.",
    },
    {
      company: "Raimuna  Cabang Kabupaten Bogor 2024",
      href: "https://drive.google.com/drive/folders/10szjPO7SXBlJjICl2yWT1l4bGR_5RG0j?usp=drive_link",
      badges: [],
      location: "Bogor, Indonesia",
      title: "Participant",
      logoUrl: "/RAICAB.png",
      start: "December 2024",
      end: "December 2024",
      description:
        "Participated in Raimuna Cabang Kabupaten Bogor 2024, where I actively engaged in team-based problem solving, coordination tasks, and leadership activities. Developed strong collaboration, communication, and decision-making skills through real-world challenges in a dynamic outdoor environment.",
    },
  ],
  gallery: [
    {
      title: "Raimuna Camp Experience",
      image: "/pramuka.jpeg",
      category: "Organization",
      description: "Documented a memorable moment during Raimuna Cabang Kabupaten Bogor 2024, highlighting friendship, collaboration, and the spirit of togetherness built throughout the camp experience.",
      date: "2024",
    },

    {
      title: "School River Rafting Outing",
      image: "/outing.jpg",
      category: "School Memories",
      description: "Participated in a school river rafting outing involving inflatable boat activities through natural streams. The experience strengthened teamwork, courage, adaptability, and problem-solving while enjoying outdoor adventure with classmates.",
      date: "2025",
    },

    {
      title: "Raimuna Cabang 2024",
      image: "/raimuna.jpg",
      category: "School Memories",
      description: "Participated in the regional scouting event Raimuna Cabang Kabupaten Bogor 2024, engaging in leadership activities, teamwork challenges, and outdoor skill development. This experience strengthened discipline, collaboration, and problem-solving through various scouting programs.",
      date: "2022",
    },

    {
      title: "BITFOS Wilayah 12",
      image: "/bitfos.jpg",
      category: "Volunteer",
      description: "Participated in a social activity sharing iftar with FOSJABAR.",
      date: "2025",
    },

    {
      title: "Raimuna Cabang 2024",
      image: "/raimuna.jpg",
      category: "Organization",
      description: "Participated in the regional scouting event Raimuna Cabang Kabupaten Bogor 2024, engaging in leadership activities, teamwork challenges, and outdoor skill development. This experience strengthened discipline, collaboration, and problem-solving through various scouting programs.",
      date: "2023",
    },

    {
      title: "BSI Flash Futsal 2024",
      image: "/bsi2.jpg",
      category: "Competition",
      description: "Participated in the BSI Flash regional futsal competition, strengthening teamwork, discipline, and competitive spirit through inter-school matches. The experience enhanced collaboration, strategy, and sportsmanship in a high-energy tournament environment.",
      date: "2024",
    },

    {
      title: "West Bogor Student Futsal League",
      image: "/liga.jpg",
      category: "Competition",
      description: "Participated in the West Bogor Student Futsal League, competing in an inter-school tournament that strengthened teamwork, discipline, and competitive spirit. The experience enhanced collaboration, strategy, and sportsmanship through high-intensity matches.",
      date: "2025",
    },

    {
      title: "Teacher Day Celebration",
      image: "/hg.jpg",
      category: "School Memories",
      description: "Participated in Teacher’s Day activities to appreciate educators through performances, collaboration, and school events. This experience fostered creativity, teamwork, and gratitude while contributing to a memorable celebration for teachers..",
      date: "2025",
    },

    {
      title: "School Seminar by Student Council (OSIS)",
      image: "/seminar.jpg",
      category: "Organization",
      description: "Participated in a school seminar organized by the student council, engaging in knowledge-sharing sessions focused on self-development, leadership, and collaboration. This experience broadened my perspective, improved communication skills, and encouraged active involvement in academic and organizational activities.",
      date: "2024",
    },

    {
      title: "Computer Hardware Assembly Practice",
      image: "/komjar.jpg",
      category: "School Memories",
      description: "Engaged in practical computer assembly activities involving component installation, hardware configuration, and system setup. This activity enhanced foundational technical skills and understanding of computer hardware systems.",
      date: "2023",
    },

    {
      title: "Music Class Performance Practice",
      image: "/seni.jpg",
      category: "School Memories",
      description: "Participated in a creative music class project involving singing performance recording and simple video production using available tools. This activity developed creativity, collaboration, and basic multimedia production skills.",
      date: "2023",
    },

    {
      title: "Mount Sumbing Expedition",
      image: "/sumbing.jpg",
      category: "Adventure",
      description: "Embarked on an expedition to Mount Sumbing, navigating challenging trails and high-altitude terrain while building endurance, resilience, and teamwork. The journey was not only an outdoor adventure, but also a lesson in persistence and self-discovery.",
      date: "13 April 2026",
    },

    {
      title: "Mount Sumbing Summit",
      image: "/rajawali.png",
      category: "Adventure",
      description: "Reached the summit of Mount Sumbing through a challenging trekking journey that required persistence, preparation, and teamwork. This experience reflects resilience, adventure, and a strong spirit of exploration.",
      date: "13 April 2026",
    },

    {
      title: "Mount Sindoro Expedition",
      image: "/sindoro.jpg",
      category: "Adventure",
      description: "Undertook an expedition to Mount Sindoro, embracing the challenge of steep ascents, changing conditions, and long-distance trekking. The experience strengthened adaptability, mental toughness, and appreciation for exploration.",
      date: "23-24 March 2026",
    },

  ],
  education: [
    {
      school: "SMK TI BAZMA",
      href: "https://smktibazma.sch.id/",
      degree: "Software & Networking (SIJA)",
      logoUrl: "/bazma.png",
      start: "2023",
      end: "2026",
    },
    {
      school: "MTs Negeri 15 Ciamis",
      logoUrl: "/mts.png",
      degree: "Kelas Olahraga",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Portofolio",
      href: "https://rifkyfbrn07-porto.vercel.app/",
      dates: "Nov 2025",
      active: true,
      description: `
Personal Portfolio Website

Tech Stack:
Next.js, TypeScript, TailwindCSS, Magic UI

Features:
- Responsive and modern UI design
- Dynamic project showcase
- Smooth animations and interactive components
- Optimized deployment using Vercel

Highlights:
- Built reusable component architecture
- Focused on performance and clean UI/UX
`,
      caseStudy: {
        category: "Portfolio Website",
        year: "2025",
        role: "Independent portfolio build and UI system implementation.",
        overview:
          "This portfolio was designed as a premium editorial presentation of my work, profile, and selected projects, with a focus on strong typography, responsive structure, and interactive project discovery.",
        myRole:
          "I designed and implemented the portfolio experience, including the landing page, project showcase, motion patterns, and reusable UI structure to present my work clearly and professionally.",
        features: [
          "Editorial homepage and narrative layout",
          "Selected work showcase and project index",
          "Hover-driven preview interactions",
          "Smooth motion and responsive sections",
          "Reusable UI and component architecture",
        ],
        whatBuilt: [
          "Portfolio landing page and content sections",
          "Project discovery interactions with hover and detail expansion",
          "Styled component system for typography, cards, and layout",
          "Responsive presentation optimized for desktop and mobile reading",
        ],
        details: [
          { label: "Year", value: "2025" },
          { label: "Category", value: "Personal Portfolio" },
          { label: "Stack", value: "Next.js, TypeScript, Tailwind CSS, Magic UI" },
        ],
      },
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rifkyfbrn07/Project-akhir-porto",
        },
      ],
      image: "/portofolio.png",
      video:
        "",
    },
    {
      title: "Weather app",
      href: "https://github.com/rifkyfbrn07/cuaca",
      dates: "August 2025",
      active: true,
     description: `
Weather Information App

Tech Stack:
Next.js, TypeScript, TailwindCSS

Features:
- Real-time weather data fetching from external API
- Search functionality for different locations
- Clean and responsive UI display

Highlights:
- Integrated third-party API for live data
- Implemented asynchronous data fetching and state handling
- Focused on readable and user-friendly data presentation
`,
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rifkyfbrn07/cuaca",
        },
      ],
      image: "/weather.png",
      video:
        "",
    },
  ],

} as const;

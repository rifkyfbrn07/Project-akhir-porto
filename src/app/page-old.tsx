"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Server,
  Shield,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";
import { DATA } from "@/data/resume";

interface ExperienceItem {
  type: "work" | "education";
  title: string;
  role: string;
  period: string;
  description: string;
  logoUrl?: string;
  href?: string;
  location: string;
}

export default function Page() {
  const allExperiences: ExperienceItem[] = [
    ...DATA.work.map((item) => ({
      type: "work" as const,
      title: item.company,
      role: item.title,
      period:
        "period" in item && typeof item.period === "string" && item.period
          ? item.period
          : "start" in item && typeof item.start === "string"
            ? `${item.start} — ${"end" in item && typeof item.end === "string" ? item.end : "Present"}`
            : "Project-based",
      description: item.description,
      logoUrl: "logoUrl" in item ? item.logoUrl : undefined,
      href: "href" in item ? item.href : undefined,
      location: "location" in item ? item.location : "",
    })),
    ...DATA.education.map((item) => ({
      type: "education" as const,
      title: item.school,
      role: "degree" in item ? item.degree : "Education",
      period:
        "period" in item && typeof item.period === "string" && item.period
          ? item.period
          : "start" in item && typeof item.start === "string"
            ? `${item.start} — ${"end" in item && typeof item.end === "string" ? item.end : "Present"}`
            : "Education",
      description:
        ("description" in item && typeof item.description === "string" && item.description) ||
        "Education",
      logoUrl: "logoUrl" in item ? item.logoUrl : undefined,
      href: "href" in item ? item.href : undefined,
      location:
        ("location" in item && typeof item.location === "string" && item.location) || "",
    })),
  ];

  const skillCategories = [
    {
      name: "Frontend Development",
      icon: <Code2 className="w-5 h-5 text-blue-600" />,
      description: "Building responsive, modern, and accessible user interfaces.",
      skills: [
        { name: "Next.js", level: "Advanced" },
        { name: "React", level: "Advanced" },
        { name: "TypeScript", level: "Proficient" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "HTML5 / CSS3", level: "Expert" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
      ],
    },
    {
      name: "Backend & APIs",
      icon: <Server className="w-5 h-5 text-blue-600" />,
      description: "Designing scalable server architectures, routing, and RESTful APIs.",
      skills: [
        { name: "Laravel (PHP)", level: "Advanced" },
        { name: "PHP", level: "Advanced" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "Authentication (Sanctum/JWT)", level: "Proficient" },
      ],
    },
    {
      name: "Database Systems",
      icon: <Database className="w-5 h-5 text-blue-600" />,
      description: "Relational database schema modeling, queries, and migrations.",
      skills: [
        { name: "MySQL", level: "Advanced" },
        { name: "PostgreSQL", level: "Proficient" },
        { name: "Database Design", level: "Advanced" },
      ],
    },
    {
      name: "Tools & DevOps",
      icon: <Wrench className="w-5 h-5 text-blue-600" />,
      description: "Version control, API debugging, and development workflow.",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Postman", level: "Advanced" },
        { name: "Linux / Ubuntu", level: "Proficient" },
        { name: "VS Code", level: "Expert" },
        { name: "Vercel Deployment", level: "Proficient" },
      ],
    },
    {
      name: "Networking & Security",
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      description: "Network fundamentals, system hardening, and CTF challenges.",
      skills: [
        { name: "Computer Networking", level: "Proficient" },
        { name: "Cyber Security Fundamentals", level: "Proficient" },
        { name: "CTF (Capture The Flag)", level: "Practitioner" },
        { name: "Linux CLI", level: "Advanced" },
      ],
    },
  ];

  const featuredProject = DATA.projects[0];
  const secondaryProjects = DATA.projects.slice(1);
  const reduceMotion = useReducedMotion();

  const formatProjectDescription = (description: string) =>
    description.replace(/\s*\n\s*/g, " ").replace(/\s{2,}/g, " ").trim();

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(191,219,254,0.35),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(219,234,254,0.55),_transparent_25%),linear-gradient(to_bottom,_#ffffff_0%,_#f8fbff_100%)]" />
      <div className="fixed inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent -z-10" />

      <main className="overflow-x-hidden">
        <section id="hero" className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-28">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-end"
            >
              <div className="relative z-10">
                <motion.p
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.12 }}
                  className="mb-8 text-[10px] md:text-xs font-semibold uppercase tracking-[0.35em] text-blue-600"
                >
                  Frontend / Full-Stack Developer
                </motion.p>

                <motion.h1
                  initial={reduceMotion ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                  animate={reduceMotion ? { opacity: 1, clipPath: "inset(0 0 0 0)" } : { opacity: 1, clipPath: "inset(0 0 0 0)" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[3.2rem] leading-[0.9] tracking-[-0.07em] font-black md:text-[6.2rem] lg:text-[7rem] text-slate-900"
                >
                  <span className="block">Hi, I&apos;m</span>
                  <span className="block text-blue-600">Rifky.</span>
                </motion.h1>

                <motion.p
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="mt-7 max-w-xl text-base md:text-lg text-slate-600 leading-relaxed"
                >
                  I build clean, user-focused digital products that turn ideas into reliable web experiences.
                </motion.p>

                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.55 }}
                  className="mt-9 flex flex-wrap items-center gap-4"
                >
                  <a
                    href="#projects"
                    className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(37,99,235,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
                  >
                    View selected work
                    <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-all duration-300 hover:border-blue-200 hover:text-blue-600"
                  >
                    Let&apos;s talk
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </motion.div>

                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                  className="mt-10 flex items-center gap-4"
                >
                  {[
                    { href: DATA.contact.social.GitHub.url, label: "GitHub", icon: Github },
                    { href: DATA.contact.social.LinkedIn.url, label: "LinkedIn", icon: Linkedin },
                    { href: DATA.contact.social.Instagram.url, label: "Instagram", icon: Instagram },
                    { href: `mailto:${DATA.contact.email}`, label: "Email", icon: Mail },
                  ].map(({ href, label, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={label}
                      className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, scale: 1.08, filter: "blur(12px)" }}
                animate={reduceMotion ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative ml-auto w-full max-w-[430px]"
              >
                <motion.div
                  animate={reduceMotion ? {} : { x: [0, 10, 0], y: [0, -10, 0] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-6 top-10 h-36 w-36 rounded-full bg-blue-200/60 blur-3xl"
                />
                <motion.div
                  animate={reduceMotion ? {} : { x: [0, -14, 0], y: [0, 12, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-8 bottom-10 h-28 w-28 rounded-full bg-cyan-200/50 blur-3xl"
                />

                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 180, damping: 18 }}
                  className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_40px_80px_rgba(15,23,42,0.08)]"
                >
                  <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-100">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-white/10 z-10" />
                    <Image
                      src="/guabanget.jpg"
                      alt={DATA.name}
                      width={900}
                      height={1200}
                      priority
                      className="h-[540px] w-full object-cover object-center"
                    />
                  </div>

                  <div className="absolute inset-x-8 bottom-8 z-20 flex items-end justify-between rounded-2xl border border-white/20 bg-slate-950/30 px-4 py-3 backdrop-blur-md text-white">
                    <div>
                      <p className="text-sm font-semibold tracking-tight">{DATA.name}</p>
                      <p className="mt-1 flex items-center gap-1 text-[11px] text-slate-200">
                        <MapPin className="h-3 w-3 text-blue-300" />
                        {DATA.location}, ID
                      </p>
                    </div>
                    <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em]">
                      SIJA Special
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-16 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-500"
            >
              <span>Scroll to explore</span>
              <ArrowDown className="h-3.5 w-3.5 text-blue-600" />
            </motion.div>
          </div>
        </section>

        <section id="about" className="relative border-t border-slate-200/80 bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-600">01 — About</p>
                <motion.h2
                  initial={reduceMotion ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                  whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6 max-w-md text-4xl font-black tracking-[-0.07em] text-slate-900 md:text-6xl"
                >
                  I build digital experiences that solve real problems.
                </motion.h2>
              </div>

              <div className="space-y-6 text-base leading-relaxed text-slate-600 md:text-lg">
                <motion.p
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.08 }}
                >
                  I study <span className="font-semibold text-slate-900">Information Systems, Networking, and Applications (SIJA)</span> with a strong interest in full-stack web development, clean backend architecture, and system security.
                </motion.p>
                <motion.p
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.16 }}
                >
                  My main focus is building modern web applications using <span className="font-semibold text-slate-900">Next.js</span> and <span className="font-semibold text-slate-900">Laravel</span>, starting from relational database design in MySQL and building RESTful APIs.
                </motion.p>
                <motion.p
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.24 }}
                >
                  Besides web development, I also have a solid foundation in Linux system administration, basic computer networking concepts, and active problem-solving practice through Capture The Flag (CTF) competitions.
                </motion.p>
              </div>
            </motion.div>

            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {[
                { label: "Location", value: "Based in Indonesia (Ciamis & Bogor)", icon: MapPin },
                { label: "Status & Education", value: "Student Developer at SMK TI BAZMA (SIJA)", icon: Terminal },
                { label: "Availability", value: "Open for Internship, Junior Roles & Freelance", icon: Sparkles },
              ].map(({ label, value, icon: Icon }, index) => (
                <motion.div
                  key={label}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-900">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="relative border-t border-slate-200/80 py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 flex items-end justify-between gap-6"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-600">02 — Selected Work</p>
                <h2 className="mt-5 text-4xl font-black tracking-[-0.07em] text-slate-900 md:text-6xl">Things I&apos;ve built.</h2>
              </div>
              <p className="hidden max-w-md text-sm leading-relaxed text-slate-600 md:block">
                A few product-style builds shaped by clean architecture, iteration, and practical problem solving.
              </p>
            </motion.div>

            <div className="space-y-10">
              {[featuredProject, ...secondaryProjects].map((project, index) => {
                const isOdd = index % 2 === 0;
                const isFeatured = index === 0;

                return (
                  <motion.article
                    key={project.title}
                    initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.04)] md:p-6"
                  >
                    <div className="grid items-center gap-8 lg:grid-cols-12">
                      <div className={`lg:col-span-7 ${isOdd ? "lg:order-1" : "lg:order-2"}`}>
                        <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100">
                          <div className="flex h-10 items-center gap-2 border-b border-slate-200 bg-slate-100 px-4">
                            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                          </div>
                          <div className="relative aspect-[16/10] overflow-hidden">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover transition duration-700 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 760px"
                            />
                          </div>
                        </div>
                      </div>

                      <div className={`lg:col-span-5 ${isOdd ? "lg:order-2" : "lg:order-1"}`}>
                        <div className="mb-4 flex items-center justify-between gap-4">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-600">
                            {String(index + 1).padStart(2, "0")} / Project
                          </p>
                          <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-700">
                            {isFeatured ? "Featured" : "Build"}
                          </span>
                        </div>

                        <h3 className="text-3xl font-black tracking-[-0.06em] text-slate-900 md:text-4xl">{project.title}</h3>
                        <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                          {formatProjectDescription(project.description)}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                          {project.links.map((link) => (
                            <a
                              key={link.type}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-all duration-300 hover:border-blue-300 hover:text-blue-600"
                            >
                              {link.type === "Source" ? <Github className="h-3.5 w-3.5" /> : <ArrowUpRight className="h-3.5 w-3.5" />}
                              {link.type}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="relative border-t border-slate-200/80 bg-slate-50/60 py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-600">03 — Experience</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.07em] text-slate-900 md:text-6xl">Journey & growth.</h2>
            </motion.div>

            <div className="relative ml-2 md:ml-6">
              <div className="absolute left-[14px] top-0 h-full w-px bg-slate-200" />
              <div className="space-y-10 md:space-y-12">
                {allExperiences.map((exp, index) => (
                  <motion.div
                    key={`${exp.title}-${exp.period}`}
                    initial={reduceMotion ? false : { opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    whileHover={reduceMotion ? undefined : { x: 8 }}
                    className="relative pl-10"
                  >
                    <span className="absolute left-0 top-3 h-7 w-7 rounded-full border-4 border-white bg-blue-600 shadow-[0_0_0_6px_rgba(191,219,254,0.7)]" />
                    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.04)]">
                      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-3">
                          {exp.logoUrl ? (
                            <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                              <Image src={exp.logoUrl} alt={exp.title} fill className="object-contain p-1" sizes="36px" />
                            </div>
                          ) : (
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">{exp.title.charAt(0)}</div>
                          )}
                          <div>
                            <h3 className="text-lg font-bold text-slate-900">{exp.title}</h3>
                            <p className="text-sm font-medium text-blue-600">{exp.role}</p>
                          </div>
                        </div>
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-600">
                          {exp.period}
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-slate-600">{exp.description}</p>

                      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">{exp.location}</span>
                        {exp.href && exp.href !== "#" ? (
                          <a href={exp.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
                            Learn more <ArrowUpRight className="h-3 w-3" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="relative border-t border-slate-200/80 py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-600">04 — Skills</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.07em] text-slate-900 md:text-6xl">Tools I rely on.</h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.03)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">{category.icon}</div>
                    <h3 className="text-lg font-bold text-slate-900">{category.name}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{category.description}</p>
                  <div className="mt-6 space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="group flex items-center justify-between border-b border-slate-100 pb-2 last:border-b-0 last:pb-0">
                        <span className="text-sm font-medium text-slate-700 transition-colors duration-200 group-hover:text-blue-600">{skill.name}</span>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">{skill.level}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative border-t border-slate-200/80 bg-white py-24 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[radial-gradient(circle_at_top,_rgba(191,219,254,0.65),_transparent_35%),linear-gradient(to_bottom,_#f8fbff_0%,_#ffffff_100%)] p-6 md:p-10"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-600">05 — Contact</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.06em] text-slate-900 md:text-6xl">
                Let&apos;s build something meaningful.
              </h2>

              <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <p className="max-w-xl text-base text-slate-600 md:text-lg">
                  I&apos;m open to internship opportunities, freelance projects, collaborations, and interesting technical discussions.
                </p>
                <a
                  href={`mailto:${DATA.contact.email}`}
                  className="group inline-flex items-center gap-2 self-start rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(37,99,235,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
                >
                  Let&apos;s talk
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {[
                  { label: "Email", value: DATA.contact.email, href: `mailto:${DATA.contact.email}`, icon: Mail },
                  { label: "LinkedIn", value: "rifkyfbrn07", href: DATA.contact.social.LinkedIn.url, icon: Linkedin },
                  { label: "GitHub", value: "rifkyfbrn07", href: DATA.contact.social.GitHub.url, icon: Github },
                ].map(({ label, value, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50/40"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-900">{value}</p>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden border-t border-blue-200/60 bg-white pt-20 md:pt-24">
        <div className="absolute inset-x-[-8%] top-0 h-40 rounded-t-[55%] bg-gradient-to-r from-blue-200/40 via-blue-500 to-blue-300/60 blur-2xl" />
        <div className="relative bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.82),_rgba(37,99,235,0.9)_42%,_rgba(37,99,235,0.72)_100%)] px-6 pb-10 pt-14 text-white md:pb-14">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-100">Ready to build</p>
                <h3 className="mt-4 text-3xl font-black tracking-[-0.06em] md:text-5xl">Let&apos;s make something meaningful.</h3>
              </div>

              <div className="flex flex-wrap gap-3 md:justify-end">
                {[
                  { label: "GitHub", href: DATA.contact.social.GitHub.url },
                  { label: "LinkedIn", href: DATA.contact.social.LinkedIn.url },
                  { label: "Email", href: `mailto:${DATA.contact.email}` },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 transition-colors hover:bg-white/20"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-6 border-t border-white/20 pt-6 text-sm text-blue-50 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 font-bold text-white">{DATA.initials}</div>
                <div>
                  <p className="font-semibold text-white">{DATA.name}</p>
                  <p className="text-xs text-blue-100">Backend / Full-Stack Developer</p>
                </div>
              </div>

              <div className="flex items-center gap-5 text-xs uppercase tracking-[0.2em] text-blue-100">
                <a href="#about" className="transition-colors hover:text-white">About</a>
                <a href="#projects" className="transition-colors hover:text-white">Work</a>
                <a href="#experience" className="transition-colors hover:text-white">Experience</a>
                <a href="#skills" className="transition-colors hover:text-white">Skills</a>
                <a href="#contact" className="transition-colors hover:text-white">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

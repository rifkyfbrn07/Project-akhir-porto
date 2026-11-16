"use client";

import Image from "next/image";
import gsap from "gsap";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { DATA } from "@/data/resume";
import { FEATURED_PROJECTS } from "@/data/featured-projects";
import type { PortfolioProject } from "@/data/project-types";
import NavbarLiquid from "@/components/navbar-liquid";

interface ExperienceItem {
  title: string;
  role: string;
  period: string;
  description: string;
  logoUrl?: string;
  href?: string;
  location?: string;
  division?: string;
  status?: string;
}

export default function Page() {
  const reduceMotion = useReducedMotion();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [activeProjectCategory, setActiveProjectCategory] =
    useState("All Projects");
  const projectSectionRef = useRef<HTMLElement | null>(null);
  const caseStudyRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    if (expandedProject === null || reduceMotion) return;

    const element = caseStudyRefs.current[expandedProject];
    if (!element) return;

    const panels = element.querySelectorAll("[data-case-panel]") as NodeListOf<HTMLElement>;
    const image = element.querySelector("[data-case-image]") as HTMLElement | null;

    gsap.fromTo(
      element,
      { height: 0, opacity: 0, y: 20, clipPath: "inset(0 0 100% 0 round 1.4rem)" },
      {
        height: "auto",
        opacity: 1,
        y: 0,
        clipPath: "inset(0 0 0 0 round 1.4rem)",
        duration: 0.7,
        ease: "power3.out",
        overwrite: true,
      }
    );

    if (panels.length) {
      gsap.fromTo(
        panels,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.06,
          overwrite: true,
        }
      );
    }

    if (image) {
      gsap.fromTo(
        image,
        { scale: 1.08, opacity: 0, clipPath: "inset(12% 0 12% 0 round 1.5rem)" },
        {
          scale: 1,
          opacity: 1,
          clipPath: "inset(0% 0 0% 0 round 1.5rem)",
          duration: 0.9,
          ease: "power3.out",
          overwrite: true,
        }
      );
    }
  }, [expandedProject, reduceMotion]);

  const allExperiences: ExperienceItem[] = DATA.work.map((item) => ({
      title: item.company,
      role: item.title,
      period:
        "period" in item && typeof item.period === "string" && item.period
          ? item.period
          : "start" in item && typeof item.start === "string"
            ? `${item.start} — ${"end" in item && typeof item.end === "string" ? item.end : "Present"}`
            : "",
      description: item.description,
      logoUrl: "logoUrl" in item ? item.logoUrl : undefined,
      href: "href" in item ? item.href : undefined,
      location: "location" in item ? item.location : undefined,
      division: "division" in item ? item.division : undefined,
      status: "status" in item ? item.status : undefined,
    }));

  const featuredProjectLinks = new Set(
    FEATURED_PROJECTS.flatMap((project) =>
      project.links.map((link) =>
        link.href.replace(/^http:/, "https:").replace(/\/+$/, "").toLowerCase()
      )
    )
  );
  const projects: PortfolioProject[] = [
    ...FEATURED_PROJECTS,
    ...DATA.projects.filter(
      (project) =>
        !project.links.some((link) =>
          featuredProjectLinks.has(
            link.href.replace(/^http:/, "https:").replace(/\/+$/, "").toLowerCase()
          )
        )
    ),
  ];
  const getProjectCategory = (project: PortfolioProject) =>
    project.category ?? project.caseStudy?.category ?? "Web Applications";
  const projectCategories = [
    "All Projects",
    ...Array.from(new Set(projects.map(getProjectCategory))),
  ];
  const visibleProjects =
    activeProjectCategory === "All Projects"
      ? projects
      : projects.filter(
          (project) => getProjectCategory(project) === activeProjectCategory
        );

  const skillsByCategory = [
    {
      name: "FRONTEND",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
      ],
    },
    {
      name: "BACKEND",
      skills: ["Node.js", "Laravel", "PHP", "REST APIs"],
    },
    {
      name: "DATABASE",
      skills: ["PostgreSQL", "MySQL", "Prisma"],
    },
    {
      name: "TOOLS & DEPLOYMENT",
      skills: ["Git", "GitHub", "Vercel", "Postman", "VS Code"],
    },
  ];

  const formatProjectDescription = (description: string) =>
    description.replace(/\s*\n\s*/g, " ").replace(/\s{2,}/g, " ").trim();

  return (
    <div className="portfolio-page relative min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <NavbarLiquid />

      {/* Background gradients */}
      <div className="portfolio-backdrop fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(191,219,254,0.2),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(219,234,254,0.3),_transparent_30%),linear-gradient(to_bottom,_#ffffff_0%,_#f8fbff_100%)]" />

      <main className="overflow-x-hidden">
        {/* HERO */}
        <section id="hero" className="relative min-h-screen pt-40 pb-24 md:pt-48 md:pb-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 40 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-end"
            >
              <div>
                <motion.p
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="mb-8 text-xs font-semibold uppercase tracking-[0.4em] text-blue-600"
                >
                  Frontend / Full-Stack Developer
                </motion.p>

                <motion.h1
                  initial={reduceMotion ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                  animate={reduceMotion ? { opacity: 1, clipPath: "inset(0 0 0 0)" } : { opacity: 1, clipPath: "inset(0 0 0 0)" }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-5xl text-[clamp(3rem,7.8vw,6.6rem)] font-black leading-[0.98] tracking-[-0.075em] text-slate-900"
                >
                  Practical Web Apps{" "}
                  <span className="text-blue-600">for Real Work.</span>
                </motion.h1>

                <motion.p
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="mt-10 max-w-2xl text-lg md:text-xl text-slate-600 leading-relaxed"
                >
                  I&apos;m Rifky Febrian Iskandar. I build useful web applications by connecting clear interfaces, backend workflows, and reliable data.
                </motion.p>

                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="mt-12 flex flex-wrap items-center gap-4"
                >
                  <a
                    href="#projects"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold text-sm shadow-[0_12px_32px_rgba(37,99,235,0.25)] hover:shadow-[0_16px_48px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-1"
                  >
                    Explore Projects
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                  <a
                    href={`mailto:${DATA.contact.email}`}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-slate-200 text-slate-800 font-semibold text-sm hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                  >
                    Discuss a project
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                  <a
                    href="/cv.pdf"
                    download
                    className="group inline-flex items-center gap-2 px-3 py-3 text-slate-600 font-semibold text-sm hover:text-blue-600 transition-colors"
                  >
                    Download CV
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </motion.div>

                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  className="mt-12 flex items-center gap-5"
                >
                  {[
                    { href: DATA.contact.social.GitHub.url, icon: Github },
                    { href: DATA.contact.social.LinkedIn.url, icon: Linkedin },
                    { href: DATA.contact.social.Instagram.url, icon: Instagram },
                    { href: `mailto:${DATA.contact.email}`, icon: Mail },
                  ].map(({ href, icon: Icon }) => (
                    <motion.a
                      key={href}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={
                        href.startsWith("mailto:")
                          ? "Email Rifky"
                          : `Visit ${Icon.displayName ?? "social"} profile`
                      }
                      className="flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                      whileHover={reduceMotion ? undefined : { scale: 1.1, y: -2 }}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Profile image */}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, scale: 1.1, y: 40 }}
                animate={reduceMotion ? { opacity: 1, scale: 1, y: 0 } : { opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto w-full max-w-[22rem] lg:mx-0 lg:ml-auto"
              >
                <motion.div
                  animate={reduceMotion ? {} : { x: [0, 8, 0], y: [0, -8, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-8 top-8 w-40 h-40 bg-blue-200/50 rounded-full blur-3xl"
                />

                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
                  className="relative overflow-hidden rounded-[2.5rem] border-2 border-slate-200 bg-slate-100 shadow-[0_40px_80px_rgba(15,23,42,0.12)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent z-10" />
                  <Image
                    src="/rifky.jpg"
                    alt={DATA.name}
                    data-critical-image
                    width={500}
                    height={650}
                    priority
                    sizes="(max-width: 1024px) 80vw, 35vw"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="relative py-32 md:py-48 border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-600 mb-8">01 — About</p>

                <motion.h2
                  initial={reduceMotion ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                  whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl font-black leading-[1] tracking-[-0.06em] text-slate-900"
                >
                  A LITTLE
                </motion.h2>

                <motion.h2
                  initial={reduceMotion ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                  whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-5xl md:text-6xl font-black leading-[1] tracking-[-0.06em] text-blue-600 mt-2"
                >
                  ABOUT ME.
                </motion.h2>
              </motion.div>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="space-y-6 text-base md:text-lg leading-relaxed text-slate-600"
              >
                <p>
                  My technical foundation comes from Software and Networking (SIJA) studies at SMK TI BAZMA and hands-on web application projects.
                </p>

                <p>
                  I work across <span className="font-semibold text-slate-900">frontend engineering, backend development, and database integration</span>, building practical applications, workflow systems, and management dashboards.
                </p>

                <p>
                  I&apos;m interested in solving practical problems with software, from thoughtful interfaces to operational tools and sensor-monitoring applications.
                </p>

                {/* Floating metadata */}
                <div className="grid grid-cols-2 gap-3 pt-6">
                  {[
                    { label: "BASED IN", value: "Ciamis, Indonesia" },
                    { label: "CURRENT", value: "Internship — Ongoing" },
                  ].map(({ label, value }) => (
                    <motion.div
                      key={label}
                      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{label}</p>
                      <p className="mt-1.5 font-semibold text-slate-900">{value}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="relative border-t border-slate-200/60 bg-slate-50/40 py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-14 md:mb-20"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-600">02 — Experience</p>
              <h2 className="mt-6 text-4xl font-black tracking-[-0.06em] text-slate-900 md:text-6xl">
                Experience in practice.
              </h2>
            </motion.div>

            <div className="relative space-y-4 border-l border-slate-200 pl-5 md:pl-8">
              {allExperiences.map((exp, idx) => (
                <motion.div
                  key={`${exp.title}-${idx}`}
                  initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={reduceMotion ? undefined : { x: 6 }}
                  className="experience-card group relative rounded-2xl border border-slate-200/60 bg-white/80 p-6 transition-colors duration-300 hover:border-blue-300 md:p-8"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex min-w-0 flex-1 items-start gap-4">
                      {exp.logoUrl && (
                        <Image
                          src={exp.logoUrl}
                          alt=""
                          width={44}
                          height={44}
                          className="mt-1 h-11 w-11 rounded-xl border border-slate-200 bg-white object-contain p-1.5"
                        />
                      )}
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">{String(idx + 1).padStart(2, "0")}</p>
                        <h3 className="mt-2 text-2xl font-black tracking-[-0.05em] text-slate-900 md:text-3xl">
                          {exp.href ? (
                            <a
                              href={exp.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-sm outline-none transition-colors hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-600"
                            >
                              {exp.title}
                            </a>
                          ) : (
                            exp.title
                          )}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-blue-600 md:text-base">{exp.role}</p>
                        {exp.division && (
                          <p className="mt-2 text-sm text-slate-600">Division: {exp.division}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 md:justify-end">
                      {exp.period && (
                        <span className="rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-semibold text-slate-600">
                          {exp.period}
                        </span>
                      )}
                      {exp.status && (
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-800">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          {exp.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">{exp.description}</p>
                  {exp.location && (
                    <p className="mt-4 border-t border-slate-100 pt-4 text-xs uppercase tracking-[0.2em] text-slate-500">
                      {exp.location}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="relative border-t border-slate-200/60 py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-14 md:mb-20"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-600">03 — Education</p>
              <h2 className="mt-6 text-4xl font-black tracking-[-0.06em] text-slate-900 md:text-6xl">
                Education & technical foundations.
              </h2>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
              {DATA.education.map((item, idx) => {
                const period =
                  "start" in item && typeof item.start === "string"
                    ? `${item.start} — ${"end" in item && typeof item.end === "string" ? item.end : "Present"}`
                    : undefined;
                const degree = "degree" in item ? item.degree : undefined;
                const logoUrl = "logoUrl" in item ? item.logoUrl : undefined;
                const href = "href" in item ? item.href : undefined;

                return (
                  <motion.article
                    key={item.school}
                    initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="flex min-h-44 items-start gap-4 rounded-2xl border border-slate-200/70 bg-white/80 p-6 md:p-8"
                  >
                    {logoUrl && (
                      <Image
                        src={logoUrl}
                        alt=""
                        width={48}
                        height={48}
                        className="h-12 w-12 shrink-0 rounded-xl border border-slate-200 bg-white object-contain p-1.5"
                      />
                    )}
                    <div className="min-w-0">
                      {period && (
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">{period}</p>
                      )}
                      <h3 className="mt-2 text-xl font-black tracking-[-0.04em] text-slate-900 md:text-2xl">
                        {href ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-sm outline-none transition-colors hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-600"
                          >
                            {item.school}
                          </a>
                        ) : (
                          item.school
                        )}
                      </h3>
                      {degree && <p className="mt-2 text-sm leading-relaxed text-slate-600">{degree}</p>}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section
          id="projects"
          ref={projectSectionRef}
          className="relative overflow-hidden py-32 md:py-48 border-t border-slate-200/60"
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-20"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-600">04 — Featured Projects</p>
              <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-[-0.06em] text-slate-900">
                Selected work, built for real workflows.
              </h2>
            </motion.div>

            <div
              className="-mx-1 mb-8 flex gap-2 overflow-x-auto px-1 py-1"
              role="group"
              aria-label="Filter projects by category"
            >
              {projectCategories.map((category) => (
                <motion.button
                  key={category}
                  type="button"
                  aria-pressed={activeProjectCategory === category}
                  onClick={() => {
                    setActiveProjectCategory(category);
                    setExpandedProject(null);
                    setHoveredProject(null);
                  }}
                  whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                  className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    activeProjectCategory === category
                      ? "border-blue-700 bg-blue-700 text-white"
                      : "border-slate-200 bg-white/80 text-slate-600 hover:border-blue-300 hover:text-blue-700"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {visibleProjects.map((project, idx) => {
                const selectedProject = hoveredProject ?? expandedProject;
                const isActive = selectedProject === idx;
                const isDimmed = selectedProject !== null && selectedProject !== idx;
                const isExpanded = expandedProject === idx;
                const caseStudy = project.caseStudy;
                const isComingSoon = project.status === "Coming Soon";
                const projectYear = caseStudy?.year || project.dates;

                return (
                  <div key={project.title} className={`project-select-card relative min-w-0 transition-all duration-500 ${isExpanded ? "sm:col-span-2 xl:col-span-3" : ""} ${isDimmed ? "is-dimmed" : "opacity-100"}`}>
                    <motion.button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={isExpanded ? `case-study-${idx}` : undefined}
                      aria-label={`${isExpanded ? "Close" : "View"} ${project.title} project details`}
                      onPointerEnter={(event) => {
                        if (event.pointerType !== "touch" && expandedProject === null) setHoveredProject(idx);
                      }}
                      onPointerLeave={() => {
                        if (expandedProject === null) setHoveredProject((current) => current === idx ? null : current);
                      }}
                      onFocus={() => {
                        if (expandedProject === null) setHoveredProject(idx);
                      }}
                      onBlur={(event) => {
                        if (expandedProject === null && !event.currentTarget.contains(event.relatedTarget as Node | null)) {
                          setHoveredProject((current) => current === idx ? null : current);
                        }
                      }}
                      onKeyDown={(event) => {
                        const next = event.key === "ArrowRight" || event.key === "ArrowDown" ? idx + 1
                          : event.key === "ArrowLeft" || event.key === "ArrowUp" ? idx - 1 : -1;
                        if (next >= 0 && next < visibleProjects.length) {
                          event.preventDefault();
                          document.getElementById(`project-row-${next}`)?.focus();
                        }
                      }}
                      onClick={() => {
                        setExpandedProject((current) => current === idx ? null : idx);
                        setHoveredProject(null);
                        if (expandedProject !== idx && projectSectionRef.current) {
                          const row = document.getElementById(`project-row-${idx}`);
                          if (row) {
                            const offset = row.getBoundingClientRect().top - projectSectionRef.current.getBoundingClientRect().top - 100;
                            if (offset > 0) window.scrollTo({ top: window.scrollY + offset, behavior: reduceMotion ? "auto" : "smooth" });
                          }
                        }
                      }}
                      id={`project-row-${idx}`}
                      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: reduceMotion ? 0 : 0.48, delay: reduceMotion ? 0 : idx * 0.035 }}
                      className={`group w-full overflow-hidden rounded-2xl border text-left transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 ${isActive ? "border-blue-500 bg-white shadow-[0_20px_48px_rgba(37,99,235,0.13)]" : "border-slate-200/80 bg-white/70 hover:border-blue-300"}`}
                    >
                      <span className="relative block aspect-[16/10] overflow-hidden bg-slate-200">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={`${project.title} interface preview`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1279px) 50vw, 33vw"
                            className={`project-select-image object-cover transition-all ${reduceMotion ? "duration-0" : "duration-700"} ${isActive ? "is-active" : ""}`}
                          />
                        ) : (
                          <span className="project-coming-visual absolute inset-0 grid place-items-center bg-slate-950 text-white">
                            <span className="text-center"><span className="block text-xs font-bold uppercase tracking-[0.32em] text-blue-300">In development</span><span className="mt-3 block text-3xl font-black tracking-[-0.06em]">RF / NEXT</span></span>
                          </span>
                        )}
                        <span className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/0 to-slate-950/5" />
                        <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-slate-950/55 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-white backdrop-blur-sm">{String(idx + 1).padStart(2, "0")} / {String(visibleProjects.length).padStart(2, "0")}</span>
                        <span className={`absolute bottom-4 right-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 ${isActive ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"}`}>View project <ArrowUpRight className="h-4 w-4" /></span>
                      </span>
                      <span className="block p-4 md:p-5">
                        <span className="flex items-start justify-between gap-3">
                          <span className={`text-lg font-black tracking-[-0.04em] transition-colors duration-300 md:text-xl ${isActive ? "text-blue-700" : "text-slate-900"}`}>{project.title}</span>
                          <span className={`mt-1 text-xs font-bold uppercase tracking-[0.22em] transition-colors ${isActive ? "text-blue-600" : "text-slate-400"}`}>{projectYear ?? "—"}</span>
                        </span>
                        <span className="mt-1 block text-xs text-slate-500">{getProjectCategory(project)}{project.role ? ` · ${project.role}` : ""}</span>
                        <span className={`project-select-description block overflow-hidden text-sm leading-relaxed text-slate-600 transition-all duration-300 ${isActive ? "mt-3 max-h-24 translate-y-0 opacity-100" : "mt-0 max-h-0 translate-y-1 opacity-0"}`}>{isComingSoon ? "Details will be added when the project is ready to share." : formatProjectDescription(project.description)}</span>
                      </span>
                    </motion.button>

                    {isExpanded && (
                      <div
                        id={`case-study-${idx}`}
                        ref={(element) => { if (element) caseStudyRefs.current[idx] = element; }}
                        role="region"
                        aria-labelledby={`project-row-${idx}`}
                        className="mt-3 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white/90 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
                      >
                        <div className="border-b border-slate-200 px-4 py-3 md:px-5">
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">{isComingSoon ? "Coming Soon" : getProjectCategory(project)}</span>
                            {projectYear && <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-600">{projectYear}</span>}
                          </div>
                          {(project.projectType || project.role) && <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">{project.projectType && <span>Type: {project.projectType}</span>}{project.role && <span>Role: {project.role}</span>}</div>}
                        </div>

                        {isComingSoon ? (
                          <p className="p-5 text-sm leading-relaxed text-slate-600">Project details will be added when source code and approved assets are available.</p>
                        ) : (
                          <div className="space-y-6 p-4 md:p-6">
                            {project.image ? <div data-case-panel className="overflow-hidden rounded-[1.2rem] border border-slate-200 bg-slate-100"><div data-case-image className="relative aspect-[16/10] overflow-hidden"><Image src={project.image} alt={`${project.title} project screenshot`} fill sizes="(max-width: 768px) 100vw, 45vw" className="h-full w-full object-cover" /></div></div> : <p className="text-xs text-slate-500">No verified project screenshots are available in the current portfolio assets.</p>}
                            {caseStudy?.gallery?.map((image) => <figure key={image.src} data-case-panel className="overflow-hidden rounded-[1.2rem] border border-slate-200 bg-slate-100"><div className="relative aspect-[16/10]"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" /></div></figure>)}
                            <div data-case-panel className="space-y-3"><p className="text-[10px] font-bold uppercase tracking-[0.32em] text-blue-600">Project Overview</p><h3 className="text-2xl font-black tracking-[-0.05em] text-slate-900 md:text-3xl">{project.title}</h3><p className="text-sm leading-relaxed text-slate-600 md:text-base">{caseStudy?.overview ?? project.description}</p></div>
                            <div data-case-panel className="grid gap-6 md:grid-cols-2">{caseStudy?.problemStatement && <div className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-4 md:p-5"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Problem Statement</p><p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{caseStudy.problemStatement}</p></div>}{caseStudy?.proposedSolution && <div className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-4 md:p-5"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Proposed Solution</p><p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{caseStudy.proposedSolution}</p></div>}{caseStudy?.role && <div className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-4 md:p-5"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Project Role</p><p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{caseStudy.role}</p></div>}{caseStudy?.myRole && <div className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-4 md:p-5"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">My Role</p><p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{caseStudy.myRole}</p></div>}</div>
                            {caseStudy?.developmentProcess && <div data-case-panel className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-4 md:p-5"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Development Process</p><p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{caseStudy.developmentProcess}</p></div>}
                            <div data-case-panel className="space-y-4 rounded-[1.2rem] border border-slate-200 bg-white p-4 md:p-5"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Technology Stack</p><div className="flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1.5 text-[11px] font-medium text-slate-700">{tech}</span>)}</div></div>
                            <div data-case-panel className="grid gap-6 md:grid-cols-2">{caseStudy?.features && caseStudy.features.length > 0 && <div className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-4 md:p-5"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Key Features</p><ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600 md:text-base">{caseStudy.features.map((feature) => <li key={feature} className="flex gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-600" /><span>{feature}</span></li>)}</ul></div>}{caseStudy?.whatBuilt && caseStudy.whatBuilt.length > 0 && <div className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-4 md:p-5"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">What I Built</p><ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600 md:text-base">{caseStudy.whatBuilt.map((item) => <li key={item} className="flex gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-600" /><span>{item}</span></li>)}</ul></div>}</div>
                            {caseStudy?.challenges && <div data-case-panel className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-4 md:p-5"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Challenges</p><p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{caseStudy.challenges}</p></div>}
                            {caseStudy?.details && caseStudy.details.length > 0 && <div data-case-panel className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-4 md:p-5"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Project Details</p><div className="mt-4 grid gap-3 sm:grid-cols-3">{caseStudy.details.map((detail) => <div key={detail.label} className="rounded-xl border border-slate-200 bg-white p-3"><p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">{detail.label}</p><p className="mt-2 text-sm font-medium text-slate-800">{detail.value}</p></div>)}</div></div>}
                            <div data-case-panel className="flex flex-wrap gap-3 pt-2">{project.links.map((link) => <a key={link.type} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-blue-600">{link.type}<ArrowUpRight className="h-3.5 w-3.5" /></a>)}</div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="relative py-32 md:py-48 border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-20"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-600">05 — Skills</p>
              <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-[-0.06em] text-slate-900">
                Tools I rely on.
              </h2>
            </motion.div>

            <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-5">
              {skillsByCategory.map((category, catIdx) => (
                <motion.div
                  key={category.name}
                  initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                >
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-8">
                    {category.name}
                  </h3>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skill}
                        initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: catIdx * 0.1 + skillIdx * 0.03 }}
                        whileHover={
                          reduceMotion ? undefined : { x: 6, color: "#2563EB" }
                        }
                        className="text-lg md:text-xl font-semibold text-slate-900 cursor-pointer relative pb-2 hover:text-blue-600 transition-colors"
                      >
                        {skill}
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 bg-blue-600"
                          initial={{ width: 0 }}
                          whileHover={reduceMotion ? undefined : { width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT + FOOTER MERGED */}
        <section id="contact" className="relative py-32 md:py-48 border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-6">
            {/* Contact heading */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-600 mb-8">
                06 — Contact
              </p>

              {["LET'S BUILD", "SOMETHING", "MEANINGFUL."].map((line, idx) => (
                <motion.h2
                  key={line}
                  initial={reduceMotion ? false : { opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="text-5xl md:text-7xl font-black leading-[1.1] tracking-[-0.06em] text-slate-900"
                >
                  {line}
                </motion.h2>
              ))}
            </motion.div>

            {/* Social & CTA */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col items-center gap-8"
            >
              <p className="max-w-2xl text-center text-lg md:text-xl text-slate-600 leading-relaxed">
                I&rsquo;m open to internship opportunities, freelance projects, collaborations, and interesting technical discussions.
              </p>

              <motion.a
                href={`mailto:${DATA.contact.email}`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold text-base shadow-[0_16px_40px_rgba(37,99,235,0.3)] hover:shadow-[0_20px_60px_rgba(37,99,235,0.4)] transition-all"
                whileHover={reduceMotion ? undefined : { scale: 1.05, y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              >
                Let&rsquo;s Talk
                <ArrowUpRight className="w-5 h-5" />
              </motion.a>

              <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
                {[
                  { label: "GitHub", href: DATA.contact.social.GitHub.url },
                  { label: "LinkedIn", href: DATA.contact.social.LinkedIn.url },
                  { label: "Instagram", href: DATA.contact.social.Instagram.url },
                  { label: "X", href: DATA.contact.social.X.url },
                  { label: "Email", href: `mailto:${DATA.contact.email}` },
                ].map(({ label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors relative pb-1"
                    whileHover={
                      reduceMotion ? undefined : { color: "#2563EB" }
                    }
                  >
                    {label}
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-blue-600"
                      initial={{ width: 0 }}
                      whileHover={reduceMotion ? undefined : { width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 text-white">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden py-20 md:py-28"
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-center text-white"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70 mb-6">
                Ready to build
              </p>

              <h3 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-[-0.06em]">
                Let&rsquo;s make something meaningful.
              </h3>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-4"
              >
                {[
                  { label: "GitHub", href: DATA.contact.social.GitHub.url },
                  { label: "LinkedIn", href: DATA.contact.social.LinkedIn.url },
                  { label: "Instagram", href: DATA.contact.social.Instagram.url },
                  { label: "X", href: DATA.contact.social.X.url },
                  { label: "Email", href: `mailto:${DATA.contact.email}` },
                ].map(({ label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="px-4 py-2 rounded-full border border-white/30 text-white font-semibold text-sm hover:border-white/60 hover:bg-white/10 transition-all"
                    whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                  >
                    {label}
                  </motion.a>
                ))}
              </motion.div>

              {/* Footer bottom info */}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/80"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/15 font-bold">
                    {DATA.initials}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-white">{DATA.name}</p>
                    <p className="text-xs text-white/60">Full-Stack Developer</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-xs uppercase tracking-[0.15em] md:gap-x-6">
                  {[
                    { label: "About", href: "#about" },
                    { label: "Experience", href: "#experience" },
                    { label: "Education", href: "#education" },
                    { label: "Projects", href: "#projects" },
                    { label: "Skills", href: "#skills" },
                    { label: "Contact", href: "#contact" },
                  ].map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

        </motion.div>
      </footer>
    </div>
  );
}

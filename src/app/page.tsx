"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";

import { DATA } from "@/data/resume";

import Link from "next/link";
import Markdown from "react-markdown";

import ProfilePhoto from "@/components/ProfilePhoto";
import RotatingText from "@/components/RotatingText";

import TechMarquee from "@/components/TechMarquee";


const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const { theme } = useTheme();

  return (
    <main className="relative w-full overflow-x-hidden bg-background text-foreground">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-50 bg-background" />

      {/* GRID */}
      <div
        className="
          fixed inset-0 -z-50
          bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
          bg-[size:24px_24px]
        "
      />

      {/* GLOW */}
      <div className="fixed top-[-250px] left-[-250px] w-[600px] h-[600px] bg-blue-500/10 blur-[140px] rounded-full -z-40" />

      <div className="fixed bottom-[-250px] right-[-250px] w-[600px] h-[600px] bg-violet-500/10 blur-[140px] rounded-full -z-40" />



      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-32 pb-20 mt-12"
      >
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8 }}
              className="space-y-8"
            >

              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur-xl px-4 py-2 text-sm">

                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

                Available for Internship & Freelance

              </div>

              <div>

                <p className="uppercase tracking-[0.3em] text-blue-500 font-medium text-sm mb-4">

                  FRONTEND DEVELOPER

                </p>

                <h1 className="text-6xl lg:text-7xl font-black leading-none">

                  Hi,

                  <br />

                  I'm

                  <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">

                    {" "}

                    {DATA.name.split(" ")[0]}

                  </span>

                </h1>

              </div>

              <p className="text-muted-foreground text-lg max-w-xl leading-8">

                Passionate about building responsive and modern web applications
                using Next.js and Tailwind CSS while continuously improving my
                frontend development skills through real-world projects.

              </p>

              <div className="flex flex-wrap gap-4">

                <motion.a

                  whileHover={{ scale: 1.04 }}

                  whileTap={{ scale: .96 }}

                  href="/cv.pdf"

                  download

                  className="rounded-full bg-blue-600 px-7 py-3 text-white font-semibold shadow-lg"

                >

                  Download CV

                </motion.a>

                <motion.a

                  whileHover={{ scale: 1.04 }}

                  whileTap={{ scale: .96 }}

                  href="#projects"

                  className="rounded-full border border-border px-7 py-3 backdrop-blur-xl"

                >

                  View Projects

                </motion.a>

              </div>

              <div className="grid grid-cols-3 gap-6 pt-6">

                <div>

                  <h2 className="text-4xl font-black">

                    4+

                  </h2>

                  <p className="text-sm text-muted-foreground">

                    Projects

                  </p>

                </div>

                <div>

                  <h2 className="text-4xl font-black">

                    10+

                  </h2>

                  <p className="text-sm text-muted-foreground">

                    Technologies

                  </p>

                </div>

                <div>

                  <h2 className="text-4xl font-black">

                    2+

                  </h2>

                  <p className="text-sm text-muted-foreground">

                    Years Learning

                  </p>

                </div>

              </div>

              <RotatingText
                texts={[
                  "NEXT.JS",
                  "TAILWINDCSS",
                  "RESPONSIVE UI",
                  "FAST LEARNER",
                ]}
                mainClassName="
          px-6 py-3 rounded-xl
          bg-gradient-to-r from-blue-600 to-violet-600
          text-white font-bold"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 400,
                }}
                rotationInterval={2000}
              />

            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, scale: .9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: .8 }}
              className="flex justify-center items-center"
            >

              <ProfilePhoto
                src="/sindoro.jpg"
                alt="Rifky Febrian"
                name="Rifky Febrian"
                title="Frontend Developer"
              />

            </motion.div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-14">

            <span className="uppercase tracking-[0.3em] text-blue-500 text-sm font-semibold">
              ABOUT ME
            </span>

            <h2 className="mt-3 text-5xl font-black">
              Who Am I?
            </h2>

            <div className="mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />

          </div>

          <motion.div
            whileHover={{ y: -5 }}
            className="
      rounded-3xl
      border
      border-border
      bg-background/60
      backdrop-blur-xl
      p-8
      shadow-sm
      max-w-3xl
      "
          >

            <Markdown
              className="
        prose
        dark:prose-invert
        max-w-none
        leading-8
        "
            >
              {DATA.summary}
            </Markdown>

          </motion.div>

        </div>

      </section>

      {/* TECH STACK */}

      <section id="skills" className="py-28">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-12">

      <span className="uppercase tracking-[0.3em] text-blue-500 text-sm font-semibold">
        TECH STACK
      </span>

      <h2 className="text-5xl font-black mt-3">
        Technologies I Use
      </h2>

      <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
        Modern technologies and tools I use to build responsive and scalable web applications.
      </p>

    </div>

    <TechMarquee />

  </div>

</section>

  <section id="work" className="py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16">

          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">
            Experience & Events
          </h2>

          <div className="space-y-6">

            {DATA.work.map((work, id) => (
              <BlurFade
                key={`${work.company}-${work.start}-${id}`}
                delay={BLUR_FADE_DELAY * 5 + id * 0.05}
              >

                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    rounded-[28px]
                    border border-zinc-200 dark:border-zinc-800
                    bg-white/50 dark:bg-zinc-900/40
                    backdrop-blur-2xl
                    p-2
                    transition-all
                  "
                >

                  <ResumeCard
                    logoUrl={work.logoUrl}
                    altText={work.company}
                    title={work.company}
                    subtitle={work.title}
                    href={work.href}
                    badges={work.badges}
                    period={`${work.start} - ${work.end ?? "Present"}`}
                    description={work.description}
                  />

                </motion.div>

              </BlurFade>
            ))}

          </div>

        </div>
      </section>


      {/* EDUCATION */}
      <section id="education" className="py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">

          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">
            Education
          </h2>

          <div className="space-y-6">

            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 7 + id * 0.05}
              >

                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    rounded-[28px]
                    border border-zinc-200 dark:border-zinc-800
                    bg-white/50 dark:bg-zinc-900/40
                    backdrop-blur-2xl
                    p-2
                  "
                >

                  <ResumeCard
                    href={education.href}
                    logoUrl={education.logoUrl}
                    altText={education.school}
                    title={education.school}
                    subtitle={education.degree}
                    period={`${education.start} - ${education.end}`}
                  />

                </motion.div>

              </BlurFade>
            ))}

          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills-list" className="py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">

          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-10">
            Skills
          </h2>

          <div className="flex flex-wrap gap-4">

            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >

                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                  }}
                >
                  <Badge
                    className="
                      px-5 py-3 rounded-2xl
                      bg-white dark:bg-zinc-900
                      text-zinc-900 dark:text-zinc-100
                      border border-zinc-200 dark:border-zinc-700
                      shadow-sm
                    "
                  >
                    {skill}
                  </Badge>
                </motion.div>

              </BlurFade>
            ))}

          </div>

        </div>
      </section>

      {/* PROJECTS */}

      <section id="projects" className="py-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-14">

            <span className="text-blue-500 uppercase tracking-[0.3em] text-sm">
              Projects
            </span>

            <h2 className="text-5xl font-black mt-2">
              Featured Work
            </h2>

            <p className="text-zinc-500 mt-3 max-w-xl">
              A collection of projects that showcase my passion for building
              modern, responsive, and user-friendly web applications.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {DATA.projects.map((project, id) => (

              <BlurFade
                key={project.title}
                delay={0.1 + id * 0.05}
              >

                <motion.div

                  whileHover={{
                    y: -8,
                    scale: 1.01
                  }}

                  transition={{
                    type: "spring",
                    stiffness: 200
                  }}

                  className="
rounded-[28px]
overflow-hidden
border
border-zinc-200
dark:border-zinc-800
bg-white/60
dark:bg-zinc-900/40
backdrop-blur-xl
shadow-lg
hover:shadow-2xl
duration-300
"
                >

                  <ProjectCard
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />

                </motion.div>

              </BlurFade>

            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-40"
      >

        <div className="max-w-5xl mx-auto px-6">

          <motion.div

            initial={{
              opacity: 0,
              y: 50
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            viewport={{
              once: true
            }}

            className="
rounded-[40px]
border
border-zinc-200
dark:border-zinc-800
bg-gradient-to-br
from-blue-500/10
to-violet-500/10
backdrop-blur-xl
p-14
text-center
"
          >

            <h2 className="text-5xl font-black mb-5">

              Let's Build Something Amazing

            </h2>

            <p className="text-zinc-500 text-lg max-w-xl mx-auto">

              I'm always open to discussing new ideas,
              collaborations, and exciting opportunities.

            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">

              <Link

                href={`mailto:${DATA.contact.email}`}

                className="
              px-8
              py-4
              rounded-full
              bg-blue-600
              text-white
              font-semibold
              hover:scale-105
              duration-300
"
              >

                Email Me

              </Link>

              <Link

                href={DATA.contact.social.GitHub.url}

                className="
px-8
py-4
rounded-full
border
border-zinc-300
dark:border-zinc-700
hover:bg-zinc-100
dark:hover:bg-zinc-800
duration-300
"
              >

                Github

              </Link>

              <Link

                href={DATA.contact.social.LinkedIn.url}

                className="
px-8
py-4
rounded-full
border
border-zinc-300
dark:border-zinc-700
hover:bg-zinc-100
dark:hover:bg-zinc-800
duration-300
"
              >

                LinkedIn

              </Link>

            </div>

          </motion.div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-border bg-background/50 backdrop-blur-sm py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Branding */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg">
                  RF
                </div>
                <span className="font-semibold text-foreground">Rifky</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Full-stack web developer with a passion for modern, responsive design and clean code.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/project"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Project
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sections */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Sections</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#about"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#skills"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Skills
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href={`mailto:${DATA.contact.email}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={DATA.contact.social.GitHub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={DATA.contact.social.LinkedIn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Rifky Febrian. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#hero"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Back to Top
              </a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}

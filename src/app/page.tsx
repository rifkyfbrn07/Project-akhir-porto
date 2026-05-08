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

import ProfileCard from "@/components/MyTiltAvatar";
import GooeyNav from "@/components/ui/GooeyNav";
import RotatingText from "@/components/RotatingText";

const BLUR_FADE_DELAY = 0.04;

const items = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Project", href: "/project" },
];

export default function Page() {
  const { theme } = useTheme();

  const navColors =
    theme === "dark"
      ? [1, 2, 3, 1, 2, 3, 1, 4]
      : [4, 4, 4, 4, 4, 4];

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



      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4">
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="
            rounded-full
            border border-zinc-200/50 dark:border-zinc-800/50
            bg-white/60 dark:bg-zinc-900/50
            backdrop-blur-2xl
            shadow-[0_8px_40px_rgba(0,0,0,0.08)]
            px-3 py-2
          "
        >
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={navColors}
          />
        </motion.div>
      </div>

      {/* HERO */}
      <section
        id="hero"
        className="
          relative
          min-h-screen
          flex items-center
          pt-32
        "
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 w-full">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8 text-center lg:text-left"
            >

              <div className="space-y-3">

                <div
                  className="
                    inline-flex items-center gap-2
                    px-4 py-2 rounded-full
                    border border-zinc-200 dark:border-zinc-800
                    bg-white/50 dark:bg-zinc-900/50
                    backdrop-blur-xl
                    text-sm
                  "
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Available for work
                </div>

                <p className="text-zinc-500 dark:text-zinc-400 text-lg">
                  Backend Developer • Laravel • Cyber Security
                </p>

              </div>

              <div className="space-y-3">

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                  Hi, I&apos;m
                </h1>

                <h1
                  className="
                    text-6xl sm:text-7xl lg:text-8xl
                    font-black tracking-tight leading-none
                    bg-gradient-to-r
                    from-blue-600
                    via-violet-500
                    to-cyan-400
                    bg-clip-text text-transparent
                  "
                >
                  {DATA.name.split(" ")[0]}
                </h1>

              </div>

              <p
                className="
                  text-zinc-600 dark:text-zinc-400
                  text-lg md:text-xl
                  leading-relaxed
                  max-w-2xl
                  mx-auto lg:mx-0
                "
              >
                I build secure and scalable web applications using
                Laravel & Next.js with a strong focus on backend
                systems, APIs, and clean user experiences.
              </p>

              <div
                className="
                  border-l-2 border-blue-500
                  pl-5
                  text-zinc-700 dark:text-zinc-300
                  text-lg
                "
              >
                Full-Stack Web Developer <br />
                Networking & Cyber Security Enthusiast
              </div>

              {/* BUTTON */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">

                <motion.a
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                  whileTap={{ scale: 0.96 }}
                  href="/cv.pdf"
                  download
                  className="
                    px-7 py-3 rounded-full
                    bg-blue-600 text-white font-semibold
                    shadow-[0_10px_40px_rgba(37,99,235,0.35)]
                    transition-all duration-300
                  "
                >
                  Download CV
                </motion.a>

                <motion.a
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                  whileTap={{ scale: 0.96 }}
                  href="#projects"
                  className="
                    px-7 py-3 rounded-full
                    border border-zinc-300 dark:border-zinc-700
                    bg-white/40 dark:bg-zinc-900/40
                    backdrop-blur-xl
                    hover:bg-zinc-100 dark:hover:bg-zinc-800
                    transition-all duration-300
                  "
                >
                  See My Work
                </motion.a>

              </div>

              {/* ROTATING */}
              <div className="pt-4 flex justify-center lg:justify-start">

                <RotatingText
                  texts={[
                    "FULLSTACK DEV",
                    "PROBLEM SOLVER",
                    "FAST LEARNER",
                    "TEAM PLAYER",
                  ]}
                  mainClassName="
                    px-6 py-3
                    rounded-2xl
                    bg-gradient-to-r from-blue-600 to-violet-600
                    text-white font-bold
                    shadow-[0_10px_40px_rgba(99,102,241,0.35)]
                  "
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

              </div>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex justify-center"
            >

              <div className="relative">

                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />

                <ProfileCard
                  name="Rifky Febrian"
                  title="Software Engineer"
                  handle="Rifky"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="./fabian.png"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() =>
                  (window.location.href =
                    "mailto:febrianrfiky590@gmail.com")
                  }
                />

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16">

          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-10">
              About Me
            </h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div
              className="
                rounded-[32px]
                border border-zinc-200 dark:border-zinc-800
                bg-white/50 dark:bg-zinc-900/40
                backdrop-blur-2xl
                p-8 md:p-10
              "
            >
              <Markdown className="prose dark:prose-invert max-w-none">
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>

        </div>
      </section>

      {/* EXPERIENCE */}
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
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16">

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
      <section id="skills" className="py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16">

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
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-black mb-4">
              Featured Projects
            </h2>

            <p className="text-zinc-500 dark:text-zinc-400 text-lg">
              Some projects I’ve worked on recently.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {DATA.projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                }}
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
            ))}

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32">
        <div className="max-w-[900px] mx-auto px-6 lg:px-16 text-center">

          <div
            className="
              rounded-[40px]
              border border-zinc-200 dark:border-zinc-800
              bg-white/50 dark:bg-zinc-900/40
              backdrop-blur-2xl
              p-12
            "
          >

            <h2 className="text-5xl font-black mb-6">
              Let&apos;s Work Together
            </h2>

            <p className="text-zinc-500 dark:text-zinc-400 text-lg mb-10">
              Interested in working together or have a project in mind?
            </p>

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Link
                href={DATA.contact.social.X.url}
                className="
                  inline-flex px-8 py-4 rounded-full
                  bg-blue-600 text-white
                  shadow-[0_10px_40px_rgba(37,99,235,0.35)]
                "
              >
                Contact Me
              </Link>
            </motion.div>

          </div>

        </div>
      </section>

    </main>
  );
}
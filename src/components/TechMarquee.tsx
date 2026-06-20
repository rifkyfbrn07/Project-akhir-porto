"use client";

import Marquee from "react-fast-marquee";

import {
  SiNextdotjs,
  SiReact,
  SiLaravel,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiFigma,
} from "react-icons/si";

const skills = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiReact, name: "React" },
  { icon: SiLaravel, name: "Laravel" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiDocker, name: "Docker (Basic)" },
  { icon: SiGit, name: "Git" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiPostman, name: "Postman" },
  { icon: SiVercel, name: "Vercel" },
  { icon: SiFigma, name: "Figma" },
];

export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-background/60 backdrop-blur-xl py-8">

      <Marquee speed={45} pauseOnHover gradient={false}>

        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={index}
              className="
              mx-4
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-zinc-200
              dark:border-zinc-700
              bg-white
              dark:bg-zinc-900
              px-6
              py-4
              shadow-md
              hover:scale-105
              transition-all
              duration-300
              "
            >
              <Icon size={34} />

              <div>
                <p className="font-bold">{skill.name}</p>

                <p className="text-xs text-muted-foreground">
                  Technology
                </p>
              </div>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}
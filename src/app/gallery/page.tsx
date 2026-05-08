"use client";

import { useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
} from "framer-motion";

import BlurFade from "@/components/magicui/blur-fade";
import GooeyNav from "@/components/ui/GooeyNav";
import CircularGallery from "@/components/CircularGallery";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

const items = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Project", href: "/project" },
];

type GalleryItem = {
  image: string;
  title: string;
  date: string;
  description: string;
  category: string;
};

export default function GalleryPage() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  const { scrollYProgress } = useScroll();

  const gallery: readonly GalleryItem[] = DATA.gallery;

  const groupedGallery = gallery.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }

    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, GalleryItem[]>);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">

      {/* SCROLL BAR */}
      <motion.div
        className="
          fixed top-0 left-0 right-0
          h-1 bg-blue-500
          origin-left z-[999]
        "
        style={{
          scaleX: scrollYProgress,
        }}
      />

  

      {/* FLOATING BG */}
      <div className="absolute inset-0 overflow-hidden -z-20">

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute top-20 left-20
            w-[400px] h-[400px]
            bg-blue-500/10
            rounded-full blur-[120px]
          "
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute bottom-0 right-0
            w-[400px] h-[400px]
            bg-violet-500/10
            rounded-full blur-[120px]
          "
        />

      </div>

      {/* NAVBAR */}
      <div
        className="
          fixed top-0 left-0 w-full z-50
          flex justify-center pt-6
          backdrop-blur-2xl
          bg-white/5 dark:bg-black/10
          border-b border-white/10
        "
      >
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={1}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>

      {/* HERO */}
      <section className="pt-40 pb-24 px-6">

        <div className="max-w-7xl mx-auto">

          <BlurFade delay={BLUR_FADE_DELAY * 3}>

            <div className="text-center space-y-6">

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="
                  inline-flex items-center gap-2
                  px-5 py-2 rounded-full
                  bg-zinc-100 dark:bg-zinc-900
                  border border-zinc-200 dark:border-zinc-800
                  text-sm font-medium
                "
              >
                Gallery Showcase
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="
                  text-5xl md:text-7xl
                  font-black tracking-tight
                "
              >
                My Journey &
                <span className="text-blue-500">
                  {" "}Memories
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="
                  max-w-2xl mx-auto
                  text-zinc-600 dark:text-zinc-400
                  text-lg leading-relaxed
                "
              >
                Collection of experiences, achievements,
                projects, competitions, and memorable moments.
              </motion.p>

            </div>

          </BlurFade>

        </div>

      </section>

      {/* CIRCULAR */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="pb-28"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div
            className="
              relative h-[360px]
              rounded-[40px]
              overflow-hidden
              border border-zinc-200 dark:border-zinc-800
              bg-zinc-100/40 dark:bg-zinc-900/40
              backdrop-blur-xl
            "
          >
            <CircularGallery
              bend={3}
              textColor="#ffffff"
              borderRadius={0.08}
              scrollEase={0.02}
            />
          </div>

        </div>

      </motion.section>

      {/* GALLERY */}
      <section className="pb-32">

        <div className="max-w-7xl mx-auto px-6 space-y-28">

          {Object.entries(groupedGallery).map(([section, items]) => (

            <motion.div
              key={section}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-10"
            >

              {/* TITLE */}
              <div className="flex items-center gap-5">

                <h2
                  className="
                    text-3xl md:text-4xl
                    font-black tracking-tight
                    whitespace-nowrap
                  "
                >
                  {section}
                </h2>

                <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />

              </div>

              {/* GRID */}
              <motion.div
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-3
                  xl:grid-cols-4
                  gap-7
                "
              >

                {items.map((item, i) => (

                  <motion.div
                    key={i}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      show: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                  >

                    <BlurFade
                      delay={BLUR_FADE_DELAY * 10 + i * 0.05}
                    >

                      <motion.div
                        whileHover={{
                          y: -10,
                          scale: 1.02,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                        onClick={() => setActive(item)}
                        className="
                          group cursor-pointer
                          rounded-3xl
                          overflow-hidden
                        "
                      >

                        <div
                          className="
                            relative aspect-square
                            overflow-hidden
                            rounded-3xl
                            border border-zinc-200 dark:border-zinc-800
                            bg-zinc-100 dark:bg-zinc-900
                            shadow-xl
                          "
                        >

                          <Image
                            src={item.image}
                            fill
                            alt={item.title}
                            className="
                              object-cover
                              transition-all duration-700 ease-out
                              group-hover:scale-110
                              group-hover:rotate-1
                              group-hover:brightness-75
                            "
                          />

                          {/* MOUSE GLOW */}
                          <div
                            className="
                              absolute inset-0
                              bg-gradient-to-tr
                              from-white/0
                              via-white/10
                              to-white/0
                              opacity-0
                              group-hover:opacity-100
                              transition duration-500
                            "
                          />

                          {/* OVERLAY */}
                          <div
                            className="
                              absolute inset-0
                              bg-gradient-to-t
                              from-black/70
                              via-black/10
                              to-transparent
                              opacity-0 group-hover:opacity-100
                              transition duration-500
                            "
                          />

                          {/* CONTENT */}
                          <div
                            className="
                              absolute bottom-0 left-0
                              p-5
                              translate-y-6
                              opacity-0
                              group-hover:translate-y-0
                              group-hover:opacity-100
                              transition-all duration-500
                            "
                          >

                            <p className="text-white text-lg font-semibold">
                              {item.title}
                            </p>

                            <p className="text-zinc-300 text-sm">
                              {item.date}
                            </p>

                          </div>

                        </div>

                      </motion.div>

                    </BlurFade>

                  </motion.div>

                ))}

              </motion.div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* MODAL */}
      <AnimatePresence>

        {active && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="
              fixed inset-0 z-[100]
              bg-black/70 backdrop-blur-xl
              flex items-center justify-center
              p-4
            "
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                max-w-4xl w-full
                rounded-[32px]
                overflow-hidden
                bg-white dark:bg-zinc-950
                border border-zinc-200 dark:border-zinc-800
                shadow-2xl
              "
            >

              <div className="relative w-full h-[500px]">

                <Image
                  src={active.image}
                  fill
                  alt={active.title}
                  className="object-cover"
                />

              </div>

              <div className="p-8 space-y-4">

                <div>

                  <h2 className="text-4xl font-black">
                    {active.title}
                  </h2>

                  <p className="text-zinc-500 mt-2">
                    {active.date}
                  </p>

                </div>

                <p
                  className="
                    text-zinc-600 dark:text-zinc-400
                    leading-relaxed text-lg
                  "
                >
                  {active.description}
                </p>

                <button
                  onClick={() => setActive(null)}
                  className="
                    mt-4
                    px-6 py-3
                    rounded-2xl
                    bg-blue-600
                    hover:bg-blue-500
                    text-white font-semibold
                    transition-all
                  "
                >
                  Close
                </button>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </main>
  );
}
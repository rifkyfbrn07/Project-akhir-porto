"use client";

import { useState } from "react";
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import GooeyNav from "@/components/ui/GooeyNav";
import SplashCursor from "@/components/SplashCursor";
import { DATA } from "@/data/resume";
import CircularGallery from "@/components/CircularGallery";

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

  const gallery: readonly GalleryItem[] = DATA.gallery;

  const groupedGallery = gallery.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }

    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, GalleryItem[]>);

  return (
    <>
      <SplashCursor />

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

      <section id="gallery">
        <div className="space-y-20 w-full py-16 px-4 sm:px-6 lg:px-8">

          {/* HERO */}
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="px-4 py-1 text-sm rounded-xl bg-black text-white dark:bg-white dark:text-black">
                Experience Gallery
              </div>

              <h2 className="text-4xl sm:text-6xl font-bold tracking-tight">
                Documenting My Journey
              </h2>

              <p className="text-muted-foreground max-w-2xl md:text-xl">
                Memories, achievements, and meaningful experiences I&apos;ve documented along the way.
              </p>
            </div>
          </BlurFade>

          {/* TOP CIRCULAR */}
          <div className="relative h-[330px]">
            <CircularGallery
              bend={3}
              textColor="#ffffff"
              borderRadius={0.08}
              scrollEase={0.02}
            />
          </div>


          {/* GROUPED GALLERY */}
          {Object.entries(groupedGallery).map(([section, items]) => (
            <section
              key={section}
              className="max-w-7xl mx-auto space-y-8"
            >

              {/* CATEGORY TITLE */}
              <div className="flex items-center gap-5">
                <h2 className="text-4xl font-bold whitespace-nowrap">
                  {section}
                </h2>

                <div className="h-px flex-1 bg-white/20" />
              </div>


              {/* FIXED UNIFORM GRID */}
              <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                gap-6
              ">
                {items.map((item, i) => (
                  <BlurFade
                    key={i}
                    delay={BLUR_FADE_DELAY * 10 + i * .05}
                  >
                    <div
                      onClick={() => setActive(item)}
                      className="group cursor-pointer"
                    >
                      <div className="
                        relative
                        w-full
                        aspect-square
                        rounded-2xl
                        overflow-hidden
                        shadow-xl
                      ">

                        <Image
                          src={item.image}
                          fill
                          alt={item.title}
                          className="
                            object-cover
                            transition-all
                            duration-500
                            group-hover:scale-110
                            group-hover:brightness-75
                          "
                        />

                        <div className="
                          absolute inset-0
                          opacity-0
                          group-hover:opacity-100
                          transition
                          bg-black/30
                          flex items-center justify-center
                          font-medium
                        ">
                          View
                        </div>

                      </div>
                      <p className="mt-2 text-sm font-medium line-clamp-1">
                      {item.title}
                       </p>
                    </div>
                  </BlurFade>
                ))}
              </div>

            </section>
          ))}

        </div>
      </section>



      {/* MODAL */}
      {active && (
        <div
          onClick={() => setActive(null)}
          className="
            fixed inset-0
            bg-black/80
            backdrop-blur-sm
            flex items-center justify-center
            p-4
            z-50
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              bg-neutral-900
              rounded-2xl
              p-5
              max-w-xl
              w-full
            "
          >
            <Image
              src={active.image}
              width={1600}
              height={1200}
              alt={active.title}
              className="
                rounded-xl
                mb-5
                w-full
                object-cover
              "
            />

            <h2 className="text-3xl font-semibold mb-1">
              {active.title}
            </h2>

            <p className="text-gray-400 text-sm mb-3">
              {active.date}
            </p>

            <p className="text-gray-300 leading-relaxed">
              {active.description}
            </p>

            <button
              onClick={() => setActive(null)}
              className="
                mt-5
                w-full
                bg-white
                text-black
                py-3
                rounded-xl
                font-semibold
              "
            >
              Close
            </button>

          </div>
        </div>
      )}

    </>
  );
}
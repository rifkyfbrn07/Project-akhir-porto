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

  const groupedGallery = {
    Competition: gallery.filter(
      (item) => item.category === "Competition"
    ),

    Organization: gallery.filter(
      (item) => item.category === "Organization"
    ),

    Volunteer: gallery.filter(
      (item) => item.category === "Volunteer"
    ),

    Adventure: gallery.filter(
      (item) => item.category === "Adventure"
    ),

    "School Memories": gallery.filter(
      (item) => item.category === "School Memories"
    ),
  };

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
        colors={[1,2,3,1,2,3,1,4]}
      />

      <section id="gallery">
        <div className="space-y-16 w-full py-12 px-6">

          {/* Hero */}
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="flex flex-col items-center text-center space-y-4">

              <div className="inline-block px-3 py-1 text-sm rounded-lg bg-black text-white dark:bg-white dark:text-black">
                Experience Gallery
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter">
                Documenting My Journey
              </h2>

              <p className="max-w-2xl text-muted-foreground md:text-xl">
                Memories, achievements, and meaningful experiences
                I&apos;ve documented along the way.
              </p>

            </div>
          </BlurFade>


          {/* Circular Gallery */}
          <div style={{ height:"300px", position:"relative" }}>
            <CircularGallery
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>


          {/* Grouped Sections */}
          {Object.entries(groupedGallery).map(
            ([section, items]) =>
              items.length > 0 && (
                <div
                  key={section}
                  className="space-y-8"
                >
                  <BlurFade delay={BLUR_FADE_DELAY}>
                    <div className="text-center">
                      <h2 className="text-3xl font-bold">
                        {section}
                      </h2>

                      <div className="w-20 h-1 bg-white/30 mx-auto mt-3 rounded-full" />
                    </div>
                  </BlurFade>


                  <div className="
                    grid
                    grid-cols-2
                    sm:grid-cols-3
                    md:grid-cols-4
                    gap-5
                    max-w-6xl
                    mx-auto
                  ">

                    {items.map((item, i) => (
                      <BlurFade
                        key={i}
                        delay={
                          BLUR_FADE_DELAY * 10 +
                          i * 0.05
                        }
                      >
                        <div
                          onClick={() => setActive(item)}
                          className="
                            relative
                            cursor-pointer
                            rounded-xl
                            overflow-hidden
                            group
                          "
                        >
                          <Image
                            src={item.image}
                            width={800}
                            height={800}
                            alt={item.title}
                            className="
                              rounded-xl
                              object-cover
                              transition-all
                              duration-300
                              group-hover:scale-105
                            "
                          />

                          <div className="
                            absolute inset-0
                            bg-black/40
                            opacity-0
                            group-hover:opacity-100
                            transition
                            rounded-xl
                            flex
                            items-center
                            justify-center
                            text-sm
                          ">
                            Click to view
                          </div>

                        </div>
                      </BlurFade>
                    ))}

                  </div>
                </div>
              )
          )}

        </div>
      </section>


      {/* Modal */}
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
            onClick={(e)=>e.stopPropagation()}
            className="
              bg-neutral-900
              p-4
              rounded-xl
              max-w-lg
              w-full
            "
          >

            <Image
              src={active.image}
              width={1200}
              height={1200}
              alt={active.title}
              className="
                rounded-xl
                mb-4
                hover:scale-105
                transition
              "
            />

            <h2 className="text-2xl font-semibold">
              {active.title}
            </h2>

            <p className="text-gray-400 text-sm mb-1">
              {active.date}
            </p>

            <p className="text-gray-300">
              {active.description}
            </p>

            <button
              onClick={()=>setActive(null)}
              className="
                mt-4
                w-full
                bg-white
                text-black
                py-2
                rounded-lg
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
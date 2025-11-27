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

// ==============================
// TYPE FIX ↓ ↓ ↓
// ==============================
type GalleryItem = {
  image: string;
  title: string;
  date: string;
  description: string;
};
// ==============================

export default function GalleryPage() {
  // FIX: beri tipe agar tidak infer jadi 'never'
  const [active, setActive] = useState<GalleryItem | null>(null);

  const gallery: readonly GalleryItem[] = DATA.gallery;


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
        <div className="space-y-12 w-full py-12 px-6">

          {/* TITLE SECTION */}
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <div className="inline-block px-3 py-1 text-sm rounded-lg bg-black text-white dark:bg-white dark:text-black">
                My Gallery
              </div>

              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                A Collection of Memories
              </h2>

              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl">
                Memories, event documentation, and meaningful moments I&apos;ve experienced.
              </p>
            </div>
          </BlurFade>
      
      

        <div style={{ height: '300px', position: 'relative' }}>
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
        </div>

          {/* GALLERY GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {gallery.map((item, i) => (
              <BlurFade key={i} delay={BLUR_FADE_DELAY * 10 + i * 0.05}>
                <div
                  className="relative cursor-pointer group"
                  onClick={() => setActive(item)}
                >
                  <Image
                    src={item.image}
                    width={800}
                    height={800}
                    alt={item.title}
                    className="rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition rounded-xl flex items-center justify-center text-sm">
                    Click to view
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {active && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm z-50"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-neutral-900 p-4 rounded-xl max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.image}
              width={1200}
              height={1200}
              alt={active.title}
              className="rounded-xl mb-4 transition-transform duration-300 hover:scale-105"
            />

            <h2 className="text-2xl font-semibold">{active.title}</h2>
            <p className="text-gray-400 text-sm mb-1">{active.date}</p>
            <p className="text-gray-300">{active.description}</p>

            <button
              className="mt-4 w-full bg-white text-black py-2 rounded-lg font-semibold"
              onClick={() => setActive(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

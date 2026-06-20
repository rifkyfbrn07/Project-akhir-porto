"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ProfilePhotoProps {
  src: string;
  alt: string;
  name?: string;
  title?: string;
}

export default function ProfilePhoto({
  src,
  alt,
  name = "Rifky Febrian",
  title = "Frontend Developer",
}: ProfilePhotoProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP float animation
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // GSAP image zoom animation on hover
    const handleMouseEnter = () => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          scale: 1.05,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };

    cardRef.current?.addEventListener("mouseenter", handleMouseEnter);
    cardRef.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cardRef.current?.removeEventListener("mouseenter", handleMouseEnter);
      cardRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className="relative">
      {/* Neumorphism Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-violet-400/20 blur-2xl rounded-[40px] -z-10" />

      {/* Main Profile Card - Neumorphism Style */}
      <div
        className="
          relative
          w-full max-w-2xl
          rounded-3xl
          overflow-hidden
          bg-gradient-to-br from-slate-100/80 to-slate-50/80 
          dark:from-slate-900/80 dark:to-slate-800/80
          backdrop-blur-xl
          shadow-[8px_8px_24px_rgba(0,0,0,0.12),-8px_-8px_24px_rgba(255,255,255,0.08)]
          dark:shadow-[8px_8px_24px_rgba(0,0,0,0.4),-8px_-8px_24px_rgba(255,255,255,0.05)]
          border border-white/30 dark:border-white/10
          p-6
        "
      >
        {/* Image Container - Neumorphic Inset */}
        <div
          ref={imageRef}
          className="
            relative w-full aspect-square rounded-2xl overflow-hidden mb-6
            bg-gradient-to-br from-slate-200 to-slate-100
            dark:from-slate-700 dark:to-slate-800
            shadow-[inset_4px_4px_12px_rgba(0,0,0,0.1),inset_-4px_-4px_12px_rgba(255,255,255,0.5)]
            dark:shadow-[inset_4px_4px_12px_rgba(0,0,0,0.5),inset_-4px_-4px_12px_rgba(255,255,255,0.05)]
          "
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-center"
            priority
          />

          {/* Neumorphic Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="
              absolute bottom-4 left-4 right-4
              bg-gradient-to-r from-slate-50 to-slate-100
              dark:from-slate-800 dark:to-slate-700
              backdrop-blur-md
              rounded-full
              px-4 py-2
              flex items-center justify-center
              border border-white/40 dark:border-white/10
              shadow-[0_4px_12px_rgba(0,0,0,0.08)]
              dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]
            "
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2" />
            <span className="text-xs font-medium text-slate-700 dark:text-slate-200">Available</span>
          </motion.div>
        </div>

        {/* Info Section */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{name}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{title}</p>
          </div>

          {/* Neumorphic Action Button */}
          <motion.a
            href="mailto:febrianrifky590@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="
              w-full
              py-3
              rounded-xl
              bg-gradient-to-br from-blue-500 to-blue-600
              text-white font-semibold
              text-center
              shadow-[0_8px_20px_rgba(59,130,246,0.3)]
              hover:shadow-[0_12px_28px_rgba(59,130,246,0.4)]
              transition-all
              duration-300
              block
              border border-blue-400/50
            "
          >
            Get In Touch
          </motion.a>
        </div>
      </div>
    </div>
  );
}

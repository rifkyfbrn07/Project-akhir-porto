"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
      transition={{ 
        opacity: { duration: 0.6 },
        scale: { duration: 0.6 },
        y: { duration: 3, repeat: Infinity, repeatType: "loop" }
      }}
      className="relative"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-violet-500/40 blur-3xl rounded-[40px] -z-10" />

      {/* Main Profile Card */}
      <motion.div
        whileHover={{ scale: 1.02, y: -10 }}
        transition={{ duration: 0.3 }}
        className="
          relative
          w-full max-w-2xl
          rounded-3xl
          overflow-hidden
          border border-border
          bg-gradient-to-br from-background/80 to-background/60
          backdrop-blur-xl
          shadow-2xl
          p-6
        "
      >
        {/* Image Container */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-background">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-center"
            priority
          />

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="
              absolute bottom-3 left-3 right-3
              bg-white/10 dark:bg-black/20
              backdrop-blur-md
              rounded-full
              px-4 py-2
              flex items-center justify-center
              border border-white/20
            "
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2" />
            <span className="text-xs font-medium text-foreground">Available</span>
          </motion.div>
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <div>
            <h3 className="text-lg font-bold text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>

          {/* Action Button */}
          <motion.a
            href="mailto:febrianrifky590@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              w-full
              py-3
              rounded-lg
              bg-gradient-to-r from-blue-600 to-violet-600
              text-white font-semibold
              text-center
              hover:shadow-lg
              transition-all
              duration-300
              block
            "
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";

export default function Navbar() {
  const items = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "Project", href: "/project" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
            RF
          </div>
          <span className="font-semibold hidden sm:inline text-foreground">Rifky</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${DATA.contact.email}`}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Contact
          </motion.a>
          <ModeToggle />
        </div>
      </div>
    </motion.nav>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { DATA } from "@/data/resume";
import { ModeToggle } from "@/components/mode-toggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function NavbarLiquid() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Liquid Glass Navbar */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 hidden md:flex items-center justify-center pointer-events-none"
        initial={reduceMotion ? false : { y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.nav
          aria-label="Main navigation"
          className={`pointer-events-auto mt-6 inline-flex items-center gap-1 rounded-full border px-5 py-3 shadow-[0_8px_32px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 dark:border-slate-700/80 dark:bg-slate-950/85 ${
            isScrolled
              ? "border-slate-200/90 bg-white/90"
              : "border-white/70 bg-white/70"
          }`}
        >
          {/* Logo */}
          <motion.a
            href="#hero"
            aria-label={`${DATA.name} home`}
            onClick={() => handleNavClick("hero")}
            className="mr-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white"
            whileHover={reduceMotion ? undefined : { scale: 1.05 }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
          >
            {DATA.initials}
          </motion.a>

          {/* Navigation Items */}
          <div className="flex items-center gap-0.5">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(item.href.substring(1))}
                aria-current={activeSection === item.href.substring(1) ? "location" : undefined}
                className="relative cursor-pointer rounded-lg px-2.5 py-2 text-xs font-medium text-slate-700 transition-colors duration-200 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 lg:px-3 lg:text-sm dark:text-slate-200"
                whileHover={reduceMotion ? undefined : { color: "#2563EB" }}
              >
                {item.label}
                
                {/* Active indicator pill */}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 -z-10 rounded-lg bg-blue-100/70 dark:bg-blue-950/70"
                    transition={{ type: "spring", stiffness: 180, damping: 25 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <a
            href="/blog"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-200"
          >
            Blog
          </a>

          {/* CTA Button */}
          <ModeToggle />
          <motion.a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="ml-1 cursor-pointer rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-800"
            whileHover={reduceMotion ? undefined : { y: -1 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            Let&rsquo;s Talk
          </motion.a>
        </motion.nav>
      </motion.header>

      {/* Mobile Navbar */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 md:hidden"
        initial={reduceMotion ? false : { y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.nav
          aria-label="Mobile navigation"
          className={`mx-4 mt-4 flex items-center justify-between rounded-full border px-5 py-3 shadow-sm backdrop-blur-xl transition-colors duration-300 dark:border-slate-700/80 dark:bg-slate-950/90 ${
            isScrolled
              ? "border-slate-200/90 bg-white/90"
              : "border-white/70 bg-white/70"
          }`}
        >
          <motion.a
            href="#hero"
            aria-label={`${DATA.name} home`}
            onClick={() => handleNavClick("hero")}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white"
            whileHover={reduceMotion ? undefined : { scale: 1.05 }}
          >
            {DATA.initials}
          </motion.a>

          <div className="flex items-center gap-2">
            <ModeToggle />
            <motion.button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="cursor-pointer rounded-full p-2 text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
              className="absolute left-4 right-4 top-16 space-y-2 rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur-xl dark:border-slate-700 dark:bg-slate-950/95"
            >
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.href}
                  type="button"
                  onClick={() => handleNavClick(item.href.substring(1))}
                  aria-current={activeSection === item.href.substring(1) ? "location" : undefined}
                  className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-blue-50 dark:text-slate-200 dark:hover:bg-slate-800"
                  initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <a
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-blue-50 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Blog
              </a>
              <motion.a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full cursor-pointer rounded-lg bg-blue-700 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-800"
                initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
              >
                Let&rsquo;s Talk
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

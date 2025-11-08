"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuItem from "./MenuItem";
import HamburgerIcon from "./HamburgerIcon";

const menuItems = [
  {
    href: "/",
    label: "Projects",
    subItems: [
      { href: "/projects/trapped-downtown", label: "Trapped Downtown" },
      { href: "/projects/richfield-july-4", label: "Richfield 4th of July" },
      { href: "/projects/little-cup", label: "Little Cup" },
    ],
  },
  { href: "/about", label: "About" },
  // { href: "/contact", label: "CONTACT" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-navy-950/80 shadow-lg border-b border-primary-200/50 dark:border-primary-800/50"
          : "bg-white/60 dark:bg-navy-950/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 relative z-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 relative">
              <Image
                src="/m-logo.svg"
                alt="Meg Shoemaker Logo"
                width={48}
                height={48}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="hidden md:block font-display font-semibold text-lg text-primary-900 dark:text-primary-100 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
              Meg Shoemaker
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="text-primary-700 dark:text-primary-300 hover:text-accent-600 dark:hover:text-accent-400 font-medium transition-colors duration-200 py-2"
                >
                  {item.label}
                  {item.subItems && (
                    <svg className="inline-block w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.subItems && (
                  <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white dark:bg-navy-800 rounded-xl shadow-xl border border-primary-200 dark:border-primary-700 overflow-hidden">
                      {item.subItems.map((subItem, index) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`block px-6 py-3 text-primary-700 dark:text-primary-300 hover:bg-accent-50 dark:hover:bg-accent-900/20 hover:text-accent-600 dark:hover:text-accent-400 transition-colors ${
                            index !== item.subItems!.length - 1 ? 'border-b border-primary-100 dark:border-primary-800' : ''
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <a
              href="mailto:mshoemaker1@gmail.com"
              className="px-6 py-2.5 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              Contact
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-primary-800 dark:text-primary-200 focus:outline-none p-2"
            onClick={toggleNavbar}
            aria-label="Toggle menu"
          >
            <HamburgerIcon isOpen={isOpen} />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-6 space-y-2">
                {menuItems.map((item) => (
                  <div key={item.href} className="space-y-1">
                    <Link
                      href={item.href}
                      onClick={closeNavbar}
                      className="block px-4 py-3 text-primary-700 dark:text-primary-300 hover:bg-accent-50 dark:hover:bg-accent-900/20 hover:text-accent-600 dark:hover:text-accent-400 rounded-lg transition-colors font-medium"
                    >
                      {item.label}
                    </Link>
                    {item.subItems && (
                      <div className="pl-6 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={closeNavbar}
                            className="block px-4 py-2 text-sm text-primary-600 dark:text-primary-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a
                  href="mailto:mshoemaker1@gmail.com"
                  className="block mx-4 mt-4 px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white text-center rounded-lg font-medium transition-colors"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-500 to-sage-500 origin-left"
        style={{
          scaleX: scrolled ? 1 : 0,
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.nav>
  );
};

export default Navbar;

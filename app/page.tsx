"use client";

import { data } from "./projectData";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] w-full items-center justify-center px-6 py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-sage-50 to-accent-50 opacity-40 dark:from-navy-900 dark:via-primary-900 dark:to-accent-900 dark:opacity-20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(129,178,154,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(224,122,95,0.08)_0%,transparent_50%)]"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-5xl mx-auto text-center z-10"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full border border-accent-200 dark:border-accent-700">
              Open to opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-6 font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            Hi! I'm{" "}
            <span className="gradient-text">Meg</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-10 text-xl md:text-3xl lg:text-4xl font-light text-primary-800 dark:text-primary-200 leading-relaxed max-w-4xl mx-auto"
          >
            I'm a UX Designer and Researcher rethinking consumer apps for mature
            organizations.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#projects"
              className="group px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
            >
              View Projects
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/about"
              className="px-8 py-4 bg-white dark:bg-navy-800 hover:bg-cream-100 dark:hover:bg-navy-700 text-primary-800 dark:text-primary-100 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-primary-200 dark:border-primary-700"
            >
              About Me
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 text-sm text-primary-600 dark:text-primary-400"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>8 years in HR & Tech</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>UX Certified 2024</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#projects" className="flex flex-col items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-accent-600 transition-colors">
            <span className="text-xs uppercase tracking-wider font-medium">Scroll</span>
            <motion.svg
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </a>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
            Explore my recent work in UX design and research
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-24">
          {data.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                bg={project.bg}
                path={project.path}
                tags={project.tags}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

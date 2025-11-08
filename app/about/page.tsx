"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import headshot from "../../public/Shoemaker_Meg-28544.jpg";

export default function About() {
  const skills = [
    "User Research",
    "Wireframing",
    "Prototyping",
    "Figma",
    "User Testing",
    "Information Architecture",
    "Competitive Analysis",
    "Heuristic Evaluation",
  ];

  const timeline = [
    {
      year: "2024",
      title: "UX Design Certificate",
      description: "Completed certification and began freelancing",
    },
    {
      year: "2016-2024",
      title: "HR Business Partner",
      description: "8 years at IDEO & NBCUniversal",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cream-100 via-sage-50 to-accent-50 dark:from-navy-900 dark:via-primary-900 dark:to-accent-900 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">About Me</h1>
            <p className="text-xl md:text-2xl text-primary-700 dark:text-primary-300 max-w-3xl mx-auto">
              Designer, Researcher, and Problem Solver
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image Column - Sticky */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:sticky md:top-32"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-200 to-sage-200 rounded-3xl transform rotate-3"></div>
              <Image
                src={headshot}
                alt="Meg Shoemaker headshot"
                className="relative rounded-3xl shadow-2xl"
                placeholder="blur"
              />
            </div>

            {/* Quick Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="p-6 bg-white dark:bg-navy-800 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-accent-600 mb-2">8+</div>
                <div className="text-sm text-primary-600 dark:text-primary-400">Years in Tech & HR</div>
              </div>
              <div className="p-6 bg-white dark:bg-navy-800 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-sage-600 mb-2">3</div>
                <div className="text-sm text-primary-600 dark:text-primary-400">Featured Projects</div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="space-y-12">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm uppercase tracking-wider text-accent-600 dark:text-accent-400 font-semibold mb-4">
                About Meg
              </h2>
              <div className="space-y-6">
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-primary-800 dark:text-primary-200">
                  I'm a UX Designer and Researcher rethinking consumer apps for
                  mature organizations.
                </p>
                <p className="text-lg leading-relaxed text-primary-700 dark:text-primary-300">
                  In my previous career as an HR Business Partner, I partnered with
                  Technology and Design teams for 8 years at companies like IDEO and
                  NBCUniversal.
                </p>
                <p className="text-lg leading-relaxed text-primary-700 dark:text-primary-300">
                  In 2024 I completed my certificate in UX Design and began
                  freelancing with woman-owned and community focused organizations.
                  I was drawn to the creative aspect of wireframing and prototyping.
                </p>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-sm uppercase tracking-wider text-accent-600 dark:text-accent-400 font-semibold mb-6">
                Skills & Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-5 py-3 bg-gradient-to-br from-accent-100 to-sage-100 dark:from-accent-900/30 dark:to-sage-900/30 text-primary-800 dark:text-primary-200 rounded-xl font-medium border border-accent-200 dark:border-accent-700 hover:scale-105 transition-transform"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-sm uppercase tracking-wider text-accent-600 dark:text-accent-400 font-semibold mb-6">
                Journey
              </h2>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-500 to-sage-500 flex items-center justify-center text-white font-bold text-sm">
                        {item.year}
                      </div>
                      {index !== timeline.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-accent-300 to-sage-300 dark:from-accent-700 dark:to-sage-700 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-xl font-semibold mb-2 text-primary-900 dark:text-primary-100">
                        {item.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Personal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 bg-gradient-to-br from-cream-100 to-sage-50 dark:from-navy-800 dark:to-primary-800 rounded-2xl"
            >
              <h2 className="text-sm uppercase tracking-wider text-accent-600 dark:text-accent-400 font-semibold mb-4">
                In My Free Time
              </h2>
              <p className="text-lg leading-relaxed text-primary-800 dark:text-primary-200">
                I'm also a mom of two little kids. And when I get the chance, I
                love catching up on the newest restaurants and experiences in the
                Twin Cities!
              </p>
            </motion.div>

            {/* What's Next */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-8 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/30 dark:to-accent-800/30 rounded-2xl border-2 border-accent-200 dark:border-accent-700"
            >
              <h2 className="text-sm uppercase tracking-wider text-accent-700 dark:text-accent-300 font-semibold mb-4">
                What's Next?
              </h2>
              <p className="text-xl font-medium leading-relaxed text-primary-900 dark:text-primary-100 mb-6">
                I'm looking for a full-time role that is either fully remote or
                hybrid (Minneapolis) on an established design team that celebrates
                diverse experiences.
              </p>
              <a
                href="mailto:mshoemaker1@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              >
                Let's Connect
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

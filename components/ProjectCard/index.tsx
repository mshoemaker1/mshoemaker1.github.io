"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  bg: string;
  path: string;
  tags?: string[];
}

const ProjectCard = ({
  title,
  description,
  image,
  bg,
  path,
  tags,
}: ProjectCardProps) => {
  return (
    <Link href={path} className="group block h-full">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative h-full flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-navy-800 shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        {/* Image Container */}
        <div className="relative h-80 md:h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            width={600}
            height={400}
            placeholder="blur"
          />

          {/* Tags Overlay */}
          {tags && tags.length > 0 && (
            <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-white/90 dark:bg-navy-900/90 text-primary-800 dark:text-primary-200 rounded-full backdrop-blur-sm border border-primary-200/50 dark:border-primary-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Hover Arrow */}
          <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <div className="p-3 bg-accent-600 rounded-full shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-3 text-primary-900 dark:text-primary-100 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-base md:text-lg text-primary-700 dark:text-primary-300 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 text-accent-600 dark:text-accent-400 font-medium">
            <span className="text-sm uppercase tracking-wide">View Case Study</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Accent Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent-500/20 transition-colors duration-300 pointer-events-none"></div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;

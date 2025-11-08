"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  header?: string;
  content?: string[];
  disableBottomPadding?: boolean;
  bgColor?: "sand" | "neutral" | "bronze" | "accent" | "sage";
}

const Section = ({
  header,
  content,
  disableBottomPadding = false,
  bgColor,
}: SectionProps) => {
  const bg = () => {
    switch (bgColor) {
      case "sand":
        return "bg-sand-500 text-black";
      case "bronze":
        return "bg-bronze-500 text-black";
      case "neutral":
        return "bg-neutral-550 text-white";
      case "accent":
        return "bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/30 dark:to-accent-800/30 text-primary-900 dark:text-primary-100";
      case "sage":
        return "bg-gradient-to-br from-sage-50 to-sage-100 dark:from-sage-900/30 dark:to-sage-800/30 text-primary-900 dark:text-primary-100";
      default:
        return "";
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col px-6 py-12 md:px-24 lg:px-32 max-w-7xl mx-auto
      ${bg()}
      ${bgColor ? "rounded-2xl my-8" : ""}
      ${disableBottomPadding ? "pb-0" : "pb-12"}`}
    >
      <div>
        {header && (
          <h3 className="mb-6 text-3xl md:text-4xl font-bold">{header}</h3>
        )}
        {content &&
          content.map((paragraph, index) => (
            <p
              key={index}
              className={`text-lg leading-relaxed ${
                index === content.length - 1 ? "mb-0" : "mb-4"
              }`}
            >
              {paragraph}
            </p>
          ))}
      </div>
    </motion.section>
  );
};

export default Section;

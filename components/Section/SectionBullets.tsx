"use client";

import React from "react";
import { motion } from "framer-motion";

export type Point = {
  [key: string]: string;
};

interface SectionBulletsProps {
  points: Point[] | string[];
  bgColor?: "neutral" | "bronze" | "accent" | "sage";
  disableBottomPadding?: boolean;
}

const SectionBullets = ({
  points,
  bgColor,
  disableBottomPadding = false,
}: SectionBulletsProps) => {
  const bg = () => {
    switch (bgColor) {
      case "neutral":
        return "bg-neutral-550 text-white";
      case "bronze":
        return "bg-bronze-500 text-black";
      case "accent":
        return "bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/30 dark:to-accent-800/30";
      case "sage":
        return "bg-gradient-to-br from-sage-50 to-sage-100 dark:from-sage-900/30 dark:to-sage-800/30";
      default:
        return "";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col px-6 md:px-24 lg:px-32 max-w-7xl mx-auto
      ${bg()} ${bgColor ? "rounded-2xl p-8 my-8" : ""}
      ${!disableBottomPadding && "pb-8 md:pb-12"}`}
    >
      <ul className="space-y-4 px-6">
        {points.map((point, index) => {
          if (typeof point === "string") {
            return (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3 text-lg leading-relaxed"
              >
                <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-accent-600"></span>
                <span>{point}</span>
              </motion.li>
            );
          }
          return (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-3 text-lg leading-relaxed"
            >
              <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-accent-600"></span>
              <span>
                <span className="font-bold text-accent-700 dark:text-accent-400">
                  {Object.keys(point)[0]}
                </span>
                {" - "}
                {Object.values(point)[0]}
              </span>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default SectionBullets;

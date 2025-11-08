"use client";

import { motion } from "framer-motion";

interface TakeawayProps {
  data: {
    title: string;
    description: string;
  }[];
}

const Takeaways = ({ data }: TakeawayProps) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Key Takeaways
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {data.map((takeaway, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative p-8 bg-white dark:bg-navy-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100 dark:border-primary-700"
            >
              <div className="absolute top-0 left-8 w-12 h-1 bg-gradient-to-r from-accent-500 to-sage-500 rounded-full transform -translate-y-1/2"></div>
              <h3 className="text-xl font-bold mb-4 text-accent-700 dark:text-accent-400 group-hover:text-accent-600 dark:group-hover:text-accent-300 transition-colors">
                {takeaway.title}
              </h3>
              <p className="text-lg leading-relaxed text-primary-700 dark:text-primary-300">
                {takeaway.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Takeaways;

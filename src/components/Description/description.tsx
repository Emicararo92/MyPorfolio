"use client";
import { motion } from "framer-motion";

interface DescriptionProps {
  text: string;
}

const Description = ({ text }: DescriptionProps) => {
  return (
    <motion.section
      data-aos="fade-up"
      className="text-center mb-12 mt-8 w-full max-w-2xl"
    >
      <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-8">
        Descripción
      </h3>
      <p className="text-xl text-gray-500 hover:text-white mb-4 transition-colors duration-500">
        <span className="text-blue-400">{text}</span>
      </p>
    </motion.section>
  );
};

export default Description;

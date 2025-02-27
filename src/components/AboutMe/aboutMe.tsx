/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/aboutMe.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiFigma,
  SiCanva,
  SiPostman,
  SiNodedotjs,
} from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      className={styles.aboutMeSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h1 variants={itemVariants} className={styles.aboutMeTitle}>
        Hi! I'm Emiliano Cararo!
      </motion.h1>
      <div className={styles.contentLeft}>
        <motion.p variants={itemVariants}>
          I've always been curious about how websites work and how a few lines
          of code can bring ideas to life. My journey into web development began
          with small personal projects, and over the past two years, I've built
          various projects that taught me to create clean interfaces and
          effective backend solutions. Turning ideas into reality drives me.
        </motion.p>
      </div>
      <div className={styles.contentRight}>
        <motion.div variants={itemVariants} className={styles.sectionBox}>
          <h2 className={styles.sectionTitle}>Technologies I Use</h2>
          <div className={styles.iconGrid}>
            <div className={styles.iconItem}>
              <FaHtml5 size={40} color="#E34F26" />
              <span>HTML</span>
            </div>
            <div className={styles.iconItem}>
              <FaCss3Alt size={40} color="#1572B6" />
              <span>CSS</span>
            </div>
            <div className={styles.iconItem}>
              <FaJs size={40} color="#F7DF1E" />
              <span>JavaScript</span>
            </div>
            <div className={styles.iconItem}>
              <FaReact size={40} color="#61DAFB" />
              <span>React</span>
            </div>
            <div className={styles.iconItem}>
              <SiTypescript size={40} color="#3178C6" />
              <span>TypeScript</span>
            </div>
            <div className={styles.iconItem}>
              <SiNextdotjs size={40} color="#000000" />
              <span>Next.js</span>
            </div>
            <div className={styles.iconItem}>
              <SiNodedotjs size={40} color="#8CC84B" />
              <span>Node.js</span>
            </div>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className={styles.sectionBox}>
          <h2 className={styles.sectionTitle}>Tools & Workflow</h2>
          <div className={styles.iconGrid}>
            <div className={styles.iconItem}>
              <FaGitAlt size={40} color="#F05032" />
              <span>Git</span>
            </div>
            <div className={styles.iconItem}>
              <FaGithub size={40} color="#181717" />
              <span>GitHub</span>
            </div>
            <div className={styles.iconItem}>
              <SiFigma size={40} color="#F24E1E" />
              <span>Figma</span>
            </div>
            <div className={styles.iconItem}>
              <SiCanva size={40} color="#00C4CC" />
              <span>Canva</span>
            </div>

            <div className={styles.iconItem}>
              <SiPostman size={40} color="#FF6C37" />
              <span>Postman</span>
            </div>
            <div className={styles.iconItem}>
              <IoLogoVercel size={40} color="#000000" />
              <span>Vercel</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default AboutMe;

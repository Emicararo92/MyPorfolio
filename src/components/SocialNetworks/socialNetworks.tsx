import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaFilePdf,
} from "react-icons/fa";
import styles from "../../styles/socialNetworks.module.css";

const SocialNetworks: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Connect with me</h2>
      <div className={styles.links}>
        <a
          href="https://www.linkedin.com/in/emilianocararofrontend"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <FaLinkedin className={styles.icon} />
          LinkedIn
        </a>
        <a
          href="https://github.com/Emicararo92"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <FaGithub className={styles.icon} />
          GitHub
        </a>
        <a href="mailto:emicararo92@gmail.com" className={styles.link}>
          <FaEnvelope className={styles.icon} />
          emicararo92@gmail.com
        </a>
        <a href="tel:+5493515174441" className={styles.link}>
          <FaPhone className={styles.icon} />
          +54 9 351 517-4441
        </a>
        <a href="/cv.pdf" download className={styles.link}>
          <FaFilePdf className={styles.icon} />
          Download CV
        </a>
      </div>
    </div>
  );
};

export default SocialNetworks;

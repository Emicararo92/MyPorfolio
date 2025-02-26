"use client";

import React from "react";
import styles from "../../styles/starIcon.module.css";

interface StarIconProps {
  title: string;
}

const StarIcon: React.FC<StarIconProps> = ({ title }) => {
  return (
    <div className={styles.galaxyContainer}>
      <div className={styles.starIcon}></div>
      <div className={styles.starTitle}>{title}</div>
    </div>
  );
};

export default StarIcon;

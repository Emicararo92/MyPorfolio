"use client";

import { useEffect } from "react";
import "../../styles/galaxy.css";

const Background = () => {
  useEffect(() => {
    const createStar = (e: MouseEvent) => {
      const star = document.createElement("div");
      star.className = "star-follow";
      document.body.appendChild(star);

      star.style.left = `${e.clientX}px`;
      star.style.top = `${e.clientY}px`;

      setTimeout(() => {
        star.remove();
      }, 1000);
    };

    document.addEventListener("mousemove", createStar);

    return () => {
      document.removeEventListener("mousemove", createStar);
    };
  }, []);

  return <div className="galaxy-background"></div>;
};

export default Background;

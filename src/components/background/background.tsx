"use client";
import { useEffect } from "react";
import styles from "../../styles/galaxy.module.css";

const Background = () => {
  useEffect(() => {
    const createShootingStar = () => {
      const star = document.createElement("div");
      star.className = styles.shootingStar; // Usa la clase del CSS Module
      // Posición aleatoria en la parte superior de la pantalla
      star.style.left = `${Math.random() * window.innerWidth}px`;
      star.style.top = "0px";
      document.body.appendChild(star);
      // Remueve la estrella después de 5 segundos
      setTimeout(() => star.remove(), 5000);
    };

    // Crea una estrella fugaz cada 3 segundos (ajusta el intervalo a tu gusto)
    const interval = setInterval(createShootingStar, 3000);
    return () => clearInterval(interval);
  }, []);

  return <div className={styles.galaxyBackground}></div>;
};

export default Background;

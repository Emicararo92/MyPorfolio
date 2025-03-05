"use client";

import React, { useState, useEffect } from "react";
import StarIcon from "@/components/starIcon/starIcon";
import Chatbot from "../ChatBot/chatbot";
import MemoryGame from "../Juego/juego";
import SocialNetworks from "../SocialNetworks/socialNetworks";
import AboutMe from "../AboutMe/aboutMe";
import Projects from "../Projects/projects";
import Navbar from "../NavBar/navBar"; // Importamos el nuevo componente Navbar
import galaxyStyles from "../../styles/galaxy.module.css";
import modalStyles from "../../styles/modal.module.css";

interface StarData {
  type: string;
  title: string;
  description?: string;
  links?: { text: string; url: string }[];
  customContent?: React.ReactNode;
}

const orbitStars: StarData[] = [
  { type: "projects", title: "Projects", customContent: <Projects /> },
  { type: "aboutMe", title: "About me", customContent: <AboutMe /> },
  {
    type: "social",
    title: "Social Networks",
    customContent: <SocialNetworks />,
  },
  { type: "memoryGame", title: "Memory Game", customContent: <MemoryGame /> },
  {
    type: "chatbot",
    title: "Chat",
    description: "Interact with my chatbot for a quick chat.",
  },
];

const GalaxyMenu: React.FC = () => {
  const [activeStar, setActiveStar] = useState<StarData | null>(null);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const openStar = (star: StarData) => {
    if (star.type === "chatbot") {
      setChatbotOpen(true);
    } else {
      setActiveStar(star);
    }
  };

  const closeActive = () => {
    setActiveStar(null);
    setChatbotOpen(false);
  };

  // Detectar si la vista es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Ajusta el tamaño según el breakpoint que prefieras
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={`${galaxyStyles.galaxyMenu} relative w-full h-full`}>
      {isMobile ? (
        // Mostrar la navbar en dispositivos móviles
        <Navbar
          openStar={(type) =>
            openStar(orbitStars.find((star) => star.type === type)!)
          }
        />
      ) : (
        // Mostrar las estrellas en pantallas grandes
        orbitStars.map((star, index) => (
          <div
            key={index}
            className={`${galaxyStyles["star-position"]} ${
              galaxyStyles[`star-${star.type}`]
            }`}
            onClick={() => openStar(star)}
          >
            <StarIcon title={star.title} />
          </div>
        ))
      )}

      {/* Mostrar contenido de la estrella activa */}
      {activeStar && (
        <div className={modalStyles["inline-aboutme"]}>
          <button
            onClick={closeActive}
            className={modalStyles["inline-close-btn"]}
          >
            Close
          </button>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            {activeStar.title}
          </h2>
          {activeStar.description && (
            <p style={{ marginBottom: "10px" }}>{activeStar.description}</p>
          )}
          {activeStar.links && (
            <ul style={{ marginBottom: "10px" }}>
              {activeStar.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    target="_blank"
                    style={{ color: "blue", textDecoration: "underline" }}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {activeStar.customContent && activeStar.customContent}
        </div>
      )}

      {/* Mostrar el Chatbot inline */}
      {chatbotOpen && <Chatbot isOpen={true} onClose={closeActive} />}
    </div>
  );
};

export default GalaxyMenu;

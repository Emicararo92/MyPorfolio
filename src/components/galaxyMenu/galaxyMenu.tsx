"use client";

import React, { useState } from "react";
import StarIcon from "@/components/starIcon/starIcon";
import Chatbot from "../ChatBot/chatbot";
import MemoryGame from "../Juego/juego";
import SocialNetworks from "../SocialNetworks/socialNetworks";
import AboutMe from "../AboutMe/aboutMe"; // Importamos AboutMe
import galaxyStyles from "../../styles/galaxy.module.css";
import modalStyles from "../../styles/modal.module.css";
import Projects from "../Projects/projects";

interface StarData {
  type: string;
  title: string;
  description?: string;
  links?: { text: string; url: string }[];
  customContent?: React.ReactNode;
}

// Arreglo de estrellas orbitantes (incluyendo "About me")
const orbitStars: StarData[] = [
  {
    type: "projects",
    title: "Projects",
    customContent: <Projects />,
  },
  {
    type: "aboutMe", // Usamos "aboutMe" para distinguir
    title: "About me",
    customContent: <AboutMe />, // Se usará el componente AboutMe
  },
  {
    type: "social",
    title: "Social Networks",
    description: "",
    customContent: <SocialNetworks />,
  },
  {
    type: "memoryGame",
    title: "Memory Game",
    description: "Test your memory with my interactive memory game.",
    customContent: <MemoryGame />,
  },
  {
    type: "chatbot",
    title: "Chat",
    description: "Interact with my chatbot for a quick chat.",
  },
];

const GalaxyMenu: React.FC = () => {
  const [activeStar, setActiveStar] = useState<StarData | null>(null);
  const [chatbotOpen, setChatbotOpen] = useState(false);

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

  return (
    <div className={`${galaxyStyles.galaxyMenu} relative w-full h-full`}>
      {orbitStars.map((star, index) => (
        <div
          key={index}
          className={`${galaxyStyles["star-position"]} ${
            galaxyStyles[`star-${star.type}`]
          }`}
          onClick={() => openStar(star)}
        >
          <StarIcon title={star.title} />
        </div>
      ))}

      {/* Contenedor inline para el contenido de la estrella seleccionada */}
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

      {/* Renderizado directo del Chatbot inline */}
      {chatbotOpen && <Chatbot isOpen={true} onClose={closeActive} />}
    </div>
  );
};

export default GalaxyMenu;

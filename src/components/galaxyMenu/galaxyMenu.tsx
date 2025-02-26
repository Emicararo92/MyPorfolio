"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import StarIcon from "@/components/starIcon/starIcon";
import Chatbot from "../ChatBot/chatbot";
import MemoryGame from "../Juego/juego";
import galaxyStyles from "../../styles/galaxy.module.css";
import modalStyles from "../../styles/modal.module.css";

// Configuramos react-modal para el cliente
Modal.setAppElement("body");

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
    title: "Proyectos",
    description: "Descubre mis proyectos galácticos.",
    links: [
      { text: "Proyecto 1", url: "https://github.com/tu_usuario/proyecto1" },
      { text: "Proyecto 2", url: "https://github.com/tu_usuario/proyecto2" },
    ],
  },
  {
    type: "description",
    title: "About me",
    description:
      "I’ve always been curious about how websites work and how a few lines of code can bring ideas to life. My journey into web development started with small personal projects, and over the past two years, I’ve worked on various projects that taught me to build clean user interfaces and effective backend solutions. Turning ideas into something tangible is what drives me.",
  },
  {
    type: "social",
    title: "Redes Sociales",
    description: "Connect with me on LinkedIn and Twitter.",
  },
  {
    type: "memoryGame",
    title: "Juego de Memoria",
    description: "Test your memory with my interactive memory game.",
    customContent: <MemoryGame />,
  },
  {
    type: "chatbot",
    title: "Chatbot",
    description: "Interact with my chatbot for a quick chat.",
    customContent: <Chatbot />,
  },
];

const GalaxyMenu: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedStar, setSelectedStar] = useState<StarData | null>(null);

  const openModal = (star: StarData) => {
    setSelectedStar(star);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedStar(null);
  };

  return (
    <div className={`${galaxyStyles.galaxyMenu} relative w-full h-full`}>
      {orbitStars.map((star, index) => (
        <div
          key={index}
          className={`${galaxyStyles["star-position"]} ${
            galaxyStyles[`star-${star.type}`]
          }`}
          onClick={() => openModal(star)}
        >
          <StarIcon title={star.title} />
        </div>
      ))}

      {/* Shooting star (efecto de estrella fugaz) */}
      <div className={galaxyStyles.shootingStar}></div>

      {/* Modal centrado */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Star Modal"
        className={modalStyles["modal-content"]}
        overlayClassName={modalStyles["modal-overlay"]}
      >
        {selectedStar && (
          <div style={{ padding: "20px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              {selectedStar.title}
            </h2>
            {selectedStar.description && (
              <p style={{ marginTop: "10px" }}>{selectedStar.description}</p>
            )}
            {selectedStar.links && (
              <ul style={{ marginTop: "15px" }}>
                {selectedStar.links.map((link, idx) => (
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
            {selectedStar.customContent && (
              <div style={{ marginTop: "15px" }}>
                {selectedStar.customContent}
              </div>
            )}
            <button
              onClick={closeModal}
              style={{
                marginTop: "15px",
                padding: "10px 20px",
                background: "#4f67d5",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default GalaxyMenu;

import React from "react";
import StarIcon from "@/components/starIcon/starIcon";
import Chatbot from "../ChatBot/chatbot"; // Ajusta la ruta
import MemoryGame from "../Juego/juego"; // Ajusta la ruta

interface StarData {
  type: string;
  title: string;
  description?: string;
  links?: { text: string; url: string }[];
  customContent?: React.ReactNode;
}

const stars: StarData[] = [
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
    title: "Sobre Mí",
    description: "Esta es mi historia en el universo del desarrollo.",
  },
  {
    type: "social",
    title: "Redes Sociales",
    description: "Conéctate conmigo en:",
    links: [
      { text: "LinkedIn", url: "https://www.linkedin.com/in/tu_usuario" },
      { text: "Twitter", url: "https://twitter.com/tu_usuario" },
    ],
  },
  {
    type: "memoryGame",
    title: "Juego de Memoria",
    customContent: <MemoryGame />, // Aquí integras tu componente de juego
  },
  {
    type: "chatbot",
    title: "Chatbot",
    customContent: <Chatbot />, // Aquí integras tu componente de chatbot
  },
];

const GalaxyMenu: React.FC = () => {
  return (
    <div className="galaxy-menu relative w-full h-full">
      {stars.map((star, index) => (
        <div key={index} className={`absolute star-position star-${star.type}`}>
          <StarIcon
            title={star.title}
            description={star.description}
            links={star.links}
            customContent={star.customContent}
          />
        </div>
      ))}
    </div>
  );
};

export default GalaxyMenu;

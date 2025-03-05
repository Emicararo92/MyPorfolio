/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect, JSX } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import styles from "../../styles/chatBot.module.css"; // Importamos el CSS

// Se agregan props opcionales para integración en el modal
interface ChatbotProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen: propIsOpen, onClose }) => {
  // Si se pasa onClose, asumimos que se usa en modal y mostramos el chat; de lo contrario, usamos el estado interno.
  const [isOpen, setIsOpen] = useState(false);
  const actualIsOpen = onClose ? true : isOpen;

  const [messages, setMessages] = useState<
    { from: string; text: string | JSX.Element }[]
  >([]);
  const [bounce, setBounce] = useState(false);
  const [language, setLanguage] = useState("es");

  const toggleChat = () => {
    if (!onClose) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        const welcomeMessage = {
          from: "bot",
          text:
            language === "es"
              ? "¡Hola! Soy Emiliano Cararo, desarrollador Front End. ¿En qué puedo ayudarte hoy?"
              : "Hello! I'm Emiliano Cararo, Front End Developer. How can I help you today?",
        };
        setMessages([welcomeMessage]);
      }
    }
  };

  const handleUserSelection = (selection: string) => {
    const newMessage = { from: "user", text: selection };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    const botResponse = handleBotResponse(selection);
    setMessages((prevMessages) => [...prevMessages, botResponse]);
  };

  const handleBotResponse = (selection: string) => {
    let botText: string | JSX.Element;
    switch (selection) {
      case language === "es"
        ? "¿Cuáles son tus tecnologías?"
        : "What technologies do you use?":
        botText =
          language === "es"
            ? "Trabajo con HTML, CSS, JavaScript, React, Next.js, TypeScript y React Native."
            : "I work with HTML, CSS, JavaScript, React, Next.js, TypeScript, and pure CSS.";
        break;
      case language === "es"
        ? "¿Tienes algún proyecto interesante?"
        : "Do you have any interesting projects?":
        botText = (
          <>
            {language === "es"
              ? "¡Sí! Tengo varios proyectos. Puedes verlos en mi sección de proyectos."
              : "Yes! I have several projects. You can see them in my projects section."}
            <button
              onClick={() => (window.location.href = "/Proyectos")}
              className={styles.chatbotLink}
            >
              {language === "es" ? "Ver Proyectos" : "View Projects"}
            </button>
          </>
        );
        break;
      case language === "es"
        ? "¿Cómo puedo contactarte?"
        : "How can I contact you?":
        botText = (
          <>
            {language === "es"
              ? "Te envío mis enlaces: "
              : "Here are my links: "}
            <a
              href="https://github.com/emicararo92"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.chatbotLink}
            >
              GitHub
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/emiliano-cararo-b06862233"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.chatbotLink}
            >
              LinkedIn
            </a>
            ,{" "}
            <a
              href="mailto:tu-email@example.com"
              className={styles.chatbotLink}
            >
              {language === "es" ? "Correo" : "Email"}
            </a>
          </>
        );
        break;
      case language === "es"
        ? "Gracias, eso es todo."
        : "Thank you, that’s all.":
        botText =
          language === "es"
            ? "¡De nada! Si necesitas algo más, no dudes en preguntar. ¡Que tengas un buen día!"
            : "You're welcome! If you need anything else, feel free to ask. Have a nice day!";
        break;
      default:
        botText =
          language === "es"
            ? "Lo siento, no entendí tu pregunta. Por favor elige una opción."
            : "I'm sorry, I didn't understand your question. Please choose an option.";
    }
    return { from: "bot", text: botText };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce((prev) => !prev);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${styles.chatbotWrapper} ${
        actualIsOpen ? styles.open : styles.closed
      }`}
    >
      {!onClose && (
        <button
          onClick={toggleChat}
          className={`${styles.chatbotButton} ${bounce ? styles.bounce : ""}`}
        >
          <AiOutlineMessage size={24} color="white" />
        </button>
      )}
      {actualIsOpen && (
        <div className={styles.chatbotContainer}>
          {/* Botón para cerrar el chat */}
          {onClose && (
            <button onClick={onClose} className={styles.chatbotCloseBtn}>
              ✖
            </button>
          )}
          {/* Efecto de estrellas fugaces */}
          <div className={styles.shootingStars}></div>
          <div className={styles.languageSelector}>
            <button
              className={`${styles.languageBtn} ${
                language === "en" ? styles.active : ""
              }`}
              onClick={() => {
                setLanguage("en");
                setMessages([
                  {
                    from: "bot",
                    text: "Hello! I'm Emiliano Cararo, Front End Developer. How can I help you today?",
                  },
                ]);
              }}
            >
              EN
            </button>
            <button
              className={`${styles.languageBtn} ${
                language === "es" ? styles.active : ""
              }`}
              onClick={() => {
                setLanguage("es");
                setMessages([
                  {
                    from: "bot",
                    text: "¡Hola! Soy Emiliano Cararo, desarrollador Front End. ¿En qué puedo ayudarte hoy?",
                  },
                ]);
              }}
            >
              ES
            </button>
          </div>
          <div className={styles.messagesContainer}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.from === "user" ? styles.userMessage : styles.botMessage
                }
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className={styles.optionsContainer}>
            {[
              language === "es"
                ? "¿Cuáles son tus tecnologías?"
                : "What technologies do you use?",
              language === "es"
                ? "¿Tienes algún proyecto interesante?"
                : "Do you have any interesting projects?",
              language === "es"
                ? "¿Cómo puedo contactarte?"
                : "How can I contact you?",
              language === "es"
                ? "Gracias, eso es todo."
                : "Thank you, that’s all.",
            ].map((text) => (
              <button
                key={text}
                onClick={() => handleUserSelection(text)}
                className={styles.optionButton}
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

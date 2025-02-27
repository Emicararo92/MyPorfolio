"use client";

import { useEffect, useState } from "react";
import {
  FaReact,
  FaNode,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaDocker,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import styles from "../../styles/memoryGame.module.css"; 
import { JSX } from "react/jsx-runtime";

interface Card {
  id: number;
  icon: JSX.Element;
  matched: boolean;
}

const iconSet = [
  { id: 1, icon: <FaReact /> },
  { id: 2, icon: <FaNode /> },
  { id: 3, icon: <FaPython /> },
  { id: 4, icon: <FaJava /> },
  { id: 5, icon: <FaHtml5 /> },
  { id: 6, icon: <FaCss3Alt /> },
  { id: 7, icon: <FaGit /> },
  { id: 8, icon: <FaDocker /> },
];

// Función para generar cartas duplicadas y aleatorizadas
const generateCards = () => {
  const duplicatedIcons = [...iconSet, ...iconSet]; // Se duplican para hacer pares
  return duplicatedIcons
    .map((card, index) => ({ ...card, id: index, matched: false }))
    .sort(() => Math.random() - 0.5); // Se mezclan aleatoriamente
};

const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [gameTime, setGameTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  // Inicializar el juego con cartas mezcladas
  useEffect(() => {
    setCards(generateCards());
  }, []);

  // Temporizador del juego
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStarted) {
      timer = setInterval(() => setGameTime((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [gameStarted]);

  // Lógica para voltear cartas
  const handleCardClick = (id: number) => {
    if (flippedCards.includes(id) || matchedCards.includes(id)) return;
    if (!gameStarted) setGameStarted(true);

    const updatedFlippedCards = [...flippedCards, id];
    setFlippedCards(updatedFlippedCards);

    if (updatedFlippedCards.length === 2) {
      setTimeout(() => checkMatch(updatedFlippedCards), 1000);
    }
  };

  // Verificar si las cartas coinciden
  const checkMatch = (flipped: number[]) => {
    const [firstId, secondId] = flipped;
    const firstCard = cards[firstId];
    const secondCard = cards[secondId];

    if (firstCard.icon.type === secondCard.icon.type) {
      setMatchedCards((prev) => [...prev, firstId, secondId]);

      // Comprobar si el jugador ganó
      if (matchedCards.length + 2 === cards.length) {
        setTimeout(() => {
          Swal.fire({
            title: "🎉 Congratulations!",
            text: `You completed the game in ${gameTime} seconds!`,
            icon: "success",
            confirmButtonText: "Play Again",
          }).then(() => handleRestart());
        }, 500);
      }
    }

    setFlippedCards([]);
  };

  // Reiniciar el juego
  const handleRestart = () => {
    setCards(generateCards());
    setMatchedCards([]);
    setFlippedCards([]);
    setGameTime(0);
    setGameStarted(false);
  };

  return (
    <div className={styles.memoryGameContainer}>
      <h1 className={styles.memoryGameHeader}>Memory Game</h1>
      <p className={styles.memoryGameDescription}>
        Test your memory with a fun programming-themed game!
      </p>
      <div className={styles.memoryGameTimer}>Time: {gameTime}s</div>

      <div className={styles.memoryGameGrid}>
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className={`${styles.memoryGameCard} ${
              flippedCards.includes(card.id) || matchedCards.includes(card.id)
                ? styles.flipped
                : ""
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            {(flippedCards.includes(card.id) ||
              matchedCards.includes(card.id)) && (
              <div className={styles.cardContent}>{card.icon}</div>
            )}
          </motion.div>
        ))}
      </div>

      <button className={styles.memoryGameButton} onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
};

export default MemoryGame;

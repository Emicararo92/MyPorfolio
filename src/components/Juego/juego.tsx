"use client";

import { JSX, useEffect, useState } from "react";
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
import "../../styles/memoryGame.css";

interface Card {
  id: number;
  icon: JSX.Element;
}

const icons: Card[] = [
  { id: 1, icon: <FaReact /> },
  { id: 2, icon: <FaNode /> },
  { id: 3, icon: <FaPython /> },
  { id: 4, icon: <FaJava /> },
  { id: 5, icon: <FaHtml5 /> },
  { id: 6, icon: <FaCss3Alt /> },
  { id: 7, icon: <FaGit /> },
  { id: 8, icon: <FaDocker /> },
  { id: 9, icon: <FaReact /> },
  { id: 10, icon: <FaNode /> },
  { id: 11, icon: <FaPython /> },
  { id: 12, icon: <FaJava /> },
  { id: 13, icon: <FaHtml5 /> },
  { id: 14, icon: <FaCss3Alt /> },
  { id: 15, icon: <FaGit /> },
  { id: 16, icon: <FaDocker /> },
];

const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [disabled, setDisabled] = useState(false);
  const [gameTime, setGameTime] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  useEffect(() => {
    const shuffledCards = [...icons].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, []);

  // Iniciar el temporizador cuando el juego comienza
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStarted && matchedCards.length < cards.length) {
      timer = setInterval(() => {
        setGameTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameStarted, matchedCards.length, cards.length]);

  const handleCardClick = (id: number) => {
    if (!gameStarted) setGameStarted(true);
    if (disabled || flippedCards.includes(id) || matchedCards.includes(id))
      return;

    setFlippedCards((prev) => [...prev, id]);

    if (flippedCards.length === 1) {
      setDisabled(true);
      const firstCard = flippedCards[0];
      const secondCard = id;

      const firstCardIndex = cards.findIndex((card) => card.id === firstCard);
      const secondCardIndex = cards.findIndex((card) => card.id === secondCard);

      if (
        cards[firstCardIndex].icon.type === cards[secondCardIndex].icon.type
      ) {
        setMatchedCards((prev) => [...prev, firstCard, secondCard]);
        setTimeout(() => {
          resetFlippedCards();
          if (matchedCards.length + 2 === cards.length) {
            Swal.fire({
              title: "Congratulations!",
              text: `You have won in ${gameTime} seconds! 🎊`,
              icon: "success",
              confirmButtonText: "OK",
            });
          }
        }, 1500);
      } else {
        setTimeout(() => resetFlippedCards(), 1000);
      }
    }
  };

  const resetFlippedCards = () => {
    setFlippedCards([]);
    setDisabled(false);
  };

  const handleRestart = () => {
    const shuffledCards = [...icons].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setMatchedCards([]);
    setFlippedCards([]);
    setGameTime(0);
    setGameStarted(false);
  };

  return (
    <div className="memory-game-container">
      <h1 className="memory-game-header">Memory Game</h1>
      <p className="memory-game-description">
        In programming, memory is crucial for recalling patterns, syntax, and
        solutions to common problems. A good developer can store and organize a
        lot of information in their mind while working, which enhances
        efficiency and problem-solving capabilities.
      </p>
      <div className="memory-game-timer">Time: {gameTime}s</div>

      <div className="memory-game-grid">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            initial={{ scale: 1 }}
            animate={{
              scale:
                flippedCards.includes(card.id) || matchedCards.includes(card.id)
                  ? 1
                  : 0.95,
              rotateY:
                flippedCards.includes(card.id) || matchedCards.includes(card.id)
                  ? 0
                  : 180,
            }}
            transition={{ duration: 0.5 }}
            className={`memory-game-card ${
              flippedCards.includes(card.id) || matchedCards.includes(card.id)
                ? "flipped"
                : ""
            }`}
          >
            {(flippedCards.includes(card.id) ||
              matchedCards.includes(card.id)) && (
              <div className="card-content">{card.icon}</div>
            )}
          </motion.div>
        ))}
      </div>

      <button className="memory-game-button" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
};

export default MemoryGame;

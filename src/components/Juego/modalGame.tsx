import React from "react";
import MemoryGame from "./juego"; // Asegúrate de que la ruta sea correcta
import "../../styles/memoryGame.module.css";

interface MemoryGameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MemoryGameModal: React.FC<MemoryGameModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <MemoryGame />
      </div>
    </div>
  );
};

export default MemoryGameModal;

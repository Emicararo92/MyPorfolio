import React, { useState } from "react";
import galaxyStyles from "../../styles/navBar.module.css";

interface NavbarProps {
  openStar: (type: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ openStar }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado del menú desplegable
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para cerrar el menú cuando se hace clic en un enlace
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={galaxyStyles.navbarContainer}>
      {/* Botón de la Navbar en dispositivos móviles */}
      <button className={galaxyStyles.menuButton} onClick={toggleMenu}>
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div className={galaxyStyles.navbar}>
          <ul>
            <li
              onClick={() => {
                openStar("projects");
                closeMenu();
              }}
            >
              Projects
            </li>
            <li
              onClick={() => {
                openStar("aboutMe");
                closeMenu();
              }}
            >
              About Me
            </li>
            <li
              onClick={() => {
                openStar("social");
                closeMenu();
              }}
            >
              Social Networks
            </li>
            <li
              onClick={() => {
                openStar("chatbot");
                closeMenu();
              }}
            >
              Chat
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

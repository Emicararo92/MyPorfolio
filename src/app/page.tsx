import Background from "../components/background/background";
import GalaxyMenu from "@/components/galaxyMenu/galaxyMenu";
import styles from "../styles/text.module.css";

const HomePage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Background />
      <GalaxyMenu />
      {/* Contenedor de texto con pointer-events: none para que no bloquee clicks */}
      <div
        className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none"
        style={{ zIndex: 5 }}
      >
        <h1 className={styles.galaxyText}>Welcome to my Universe!</h1>
        <h2 className={styles.tagline}>
          Explore the cosmos of code – click on the galaxies to discover who I
          am.
        </h2>
      </div>
    </div>
  );
};

export default HomePage;

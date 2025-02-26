import Background from "../components/background/background";
import GalaxyMenu from "@/components/galaxyMenu/galaxyMenu";
import "../styles/text..module.css";

const HomePage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Background />

      <div className="flex justify-center items-center">
        <h1 className="galaxy-text">¡Bienvenido a mi Universo!</h1>
      </div>

      <GalaxyMenu />
    </div>
  );
};

export default HomePage;

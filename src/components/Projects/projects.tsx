import React from "react";
import styles from "../../styles/projects.module.css"; // Asegúrate de que el archivo CSS esté importado

function Projects() {
  return (
    <div className={styles.projectsContainer}>
      {/* Video 1 */}
      <div className={styles.videoContainer}>
        <h3>Football Job Board</h3>
        <video width="100%" controls>
          <source
            src="https://res.cloudinary.com/diefdex1h/video/upload/v1741182851/uzqgpfr1p1t36jqppbuh.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>
          This platform allows players to apply for positions, and agents or
          agencies to offer job opportunities. Both roles can access courses,
          news, and a paid subscription section.
        </p>
      </div>

      {/* Video 2 */}
      <div className={styles.videoContainer}>
        <h3>Pokemon ChatBot</h3>
        <video width="100%" controls>
          <source
            src="https://res.cloudinary.com/diefdex1h/video/upload/v1741182732/ly8rckp9u19vkecktrau.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>
          A chatbot designed with a Pokémon theme. It allows users to interact
          and receive information about different Pokémon, and it could be
          expanded into a more dynamic experience with AI-powered interactions.
        </p>
      </div>

      {/* Video 3 */}
      <div className={styles.videoContainer}>
        <h3>Hotel Reservation System</h3>
        <video width="100%" controls>
          <source
            src="https://res.cloudinary.com/diefdex1h/video/upload/v1741182727/safnqstafabu1s3dfosf.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>
          A system that manages hotel reservations and appointments. This
          project allows users to check availability, book rooms, and manage
          bookings, enhancing the customer experience in hospitality.
        </p>
      </div>

      {/* Video 4 (Vertical) */}
      <div className={styles.verticalVideoContainer}>
        <h3>Shipping Cost Calculator</h3>
        <video controls>
          <source
            src="https://res.cloudinary.com/diefdex1h/video/upload/v1741182687/osynojvpiwhyox6kwgwq.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>
          A web application that calculates the shipping costs of products based
          on the distance (in kilometers) between the origin and destination. It
          helps users calculate the cost of sending items efficiently.
        </p>
      </div>

      {/* Video 5 (Vertical, React Native) */}
      <div className={styles.verticalVideoContainer}>
        <h3>Pokedex Mobile App (React Native)</h3>
        <video controls>
          <source
            src="https://res.cloudinary.com/diefdex1h/video/upload/v1741183450/video5.1_ryp3fn.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>
          A mobile app built with React Native that acts as a Pokedex. Users can
          input the name of any Pokémon and view statistics, abilities, and
          other related information.
        </p>
      </div>
    </div>
  );
}

export default Projects;

import React, { useEffect } from "react";
import styles from "../styles/HomeImage.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function HomeImage(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className={styles.overlay}>
        <div className={styles.heading_container}>
          <h2>Rent a Bounce House Today!</h2>
        </div>
        <div className={styles.button_container}>
          <Link to="/rentals" className={styles.button_container_link}>
            <button className={styles.btn}> Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

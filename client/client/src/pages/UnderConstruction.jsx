import React, { useEffect } from "react";
import styles from "../styles/UnderConstruction.module.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function UnderConstruction() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.container} data-aos="fade-up">
      <i className="fa-solid fa-helmet-safety"></i>
      <h1>This page is under construction.</h1>
      <h2>
        We are working hard to bring you the best experience possible. Please
        check back later!
      </h2>
      <button className={styles.button} onClick={() => navigate("/")}>
        Return to Home
      </button>
    </div>
  );
}

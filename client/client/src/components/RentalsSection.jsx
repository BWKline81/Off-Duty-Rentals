import React, { useState, useEffect } from "react";
import styles from "../styles/RentalsSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Blue_Vert from "../assets/Blue_Vert.png";
import Pink_Vert from "../assets/Pink_Vert.png";
import Blue_Vert_Dark from "../assets/Blue_Vert_Dark.png";
import Pink_Vert_Dark from "../assets/Pink_Vert_Dark.png";
import RentalsSectionRental from "./RentalsSectionRental";
import Blue_Slide_Image from "../assets/Blue_Slide/Blue_Slide_Main.jpg";
import Monster_Image from "../assets/Monster_House/Monster_House_Front_Side.jpg";
import { useNavigate } from "react-router-dom";
import Background from "../assets/ODR Background 2.PNG";
import SectionBackground from "./SectionBackground";

export default function RentalsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const navigate = useNavigate();
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  return (
    <div className={styles.container} data-aos="fade-up">
      <SectionBackground image={Background} />

      <div
        className={styles.heading_container}
        data-aos="fade-down"
        data-aos-delay="500"
      >
        <h1 className={styles.heading} onClick={() => navigate("/rentals")}>
          Check Out Our Featured Rentals! →
        </h1>
        <div className={styles.line}></div>
        <h3 className={styles.subheading}>
          These are some of our most popular bounce houses. Click on the "View"
          button to see more details and book your rental today!
        </h3>
      </div>
      <div className={styles.rentals_container}>
        <div
          className={styles.rental_container}
          data-aos="fade-down-right"
          data-aos-delay="600"
        >
          <RentalsSectionRental
            background={prefersDarkMode ? Blue_Vert_Dark : Blue_Vert}
            image={Blue_Slide_Image}
            title="Blue Water Slide"
            description="This is a great bounce house for all ages. Perfect for parties and events."
            buttonColor={prefersDarkMode ? "#8d0d94" : "#f990e8"}
          />
        </div>
        <div
          className={styles.rental_container}
          data-aos="fade-down-left"
          data-aos-delay="600"
        >
          <RentalsSectionRental
            background={prefersDarkMode ? Pink_Vert_Dark : Pink_Vert}
            image={Monster_Image}
            title="Monster Bounce House"
            description="This is a great bounce house for all ages. Perfect for parties and events."
            buttonColor={prefersDarkMode ? "#05008e" : "#0ad2d3"}
          />
        </div>
      </div>
    </div>
  );
}

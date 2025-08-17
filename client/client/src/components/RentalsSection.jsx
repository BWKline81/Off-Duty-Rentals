import React, { useState, useEffect } from "react";
import styles from "../styles/RentalsSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Blue_Vert from "../assets/Blue_Vert.png";
import Pink_Vert from "../assets/Pink_Vert.png";
import RentalsSectionRental from "./RentalsSectionRental";
import template1 from "../assets/BH_Template_Images/bh1.jpg";
import template2 from "../assets/BH_Template_Images/bh2.jpg";
import { useNavigate } from "react-router-dom";

export default function RentalsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const navigate = useNavigate();

  return (
    <div className={styles.container} data-aos="fade-up">
      <div className={styles.background_addon}></div>
      <div className={styles.background_addon2}></div>
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
            background={Blue_Vert}
            image={template1}
            title="Bounce Hosue 1"
            description="This is a great bounce house for all ages. Perfect for parties and events."
            buttonColor="#f990e8"
          />
        </div>
        <div
          className={styles.rental_container}
          data-aos="fade-down-left"
          data-aos-delay="600"
        >
          <RentalsSectionRental
            background={Pink_Vert}
            image={template2}
            title="Bounce Hosue 2"
            description="This is a great bounce house for all ages. Perfect for parties and events."
            buttonColor="#0ad2d3"
          />
        </div>
      </div>
    </div>
  );
}

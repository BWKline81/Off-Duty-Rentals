import React, { useState, useEffect } from "react";
import styles from "../styles/RentalsSectionRental.module.css";
import Blue_Back from "../assets/Blue_Back.png";
import Pink_Back from "../assets/Pink_Back.png";

export default function RentalsSectionRental(props) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${props.background})` }}
    >
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{props.title}</h1>
      </div>
      <button
        className={styles.btn}
        style={{ backgroundColor: `${props.buttonColor}` }}
      >
        View
      </button>
    </div>
  );
}

import React, { useState, useContext } from "react";
import styles from "../styles/RentalPageRental.module.css";
import { ActiveRentalContext, RentalOpenContext } from "../pages/Rentals";

export default function Rentals(props) {
  let { activeRental, setActiveRental } = useContext(ActiveRentalContext);
  let { rentalOpen, setRentalOpen } = useContext(RentalOpenContext);

  const handleClick = () => {
    setActiveRental(props.id);
    setRentalOpen(true);
  };

  let normalSize = (
    <>
      <div className={styles.text_content}>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>Starting at ${props.price}</p>
      </div>
      <button
        onClick={handleClick}
        className={styles.button}
        style={{ backgroundColor: `${props.btnColor}` }}
      >
        More Details
      </button>
    </>
  );

  let reducedSize = (
    <>
      <div className={styles.text_content}>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>Starting at {props.price}</p>

        <button
          onClick={handleClick}
          className={styles.button}
          style={{ backgroundColor: `${props.btnColor}` }}
        >
          More Details
        </button>
      </div>
    </>
  );

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: props.bgColor }}
    >
      <div
        className={styles.image_container}
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      {window.innerWiudth > 700 ? normalSize : reducedSize}
    </div>
  );
}

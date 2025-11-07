import React, { useEffect, useState, useContext } from "react";
import styles from "../styles/Rental.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  RentalOpenContext,
  ActiveRentalContext,
  FormOpenContext,
} from "../pages/Rentals";

export default function Rental(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState(true);
  const [delay, setDelay] = useState(true);
  let imageClass = active ? styles.image : styles.image_off;
  let backgroundAddonClass = delay
    ? styles.background_off
    : styles.background_addon;
  let { rentalOpen, setRentalOpen } = useContext(RentalOpenContext);
  let { activeRental, setActiveRental } = useContext(ActiveRentalContext);
  let { formOpen, setFormOpen } = useContext(FormOpenContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setDelay(false);
    }, 1500); // Wait for 1 second before allowing the image to be active
  });

  useEffect(() => {}, [currentIndex]);

  const Previous = () => {
    setActive(false);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? props.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setTimeout(() => {
      setActive(true);
    }, 50); // Wait for the transition to finish before setting active to true
  };

  const Next = () => {
    setActive(false);
    const isLastSlide = currentIndex === props.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setTimeout(() => {
      setActive(true);
    }, 50); // Wait for the transition to finish before setting active to true
  };

  const goToSlide = (slideIndex) => {
    setActive(false);
    setCurrentIndex(slideIndex);
    setTimeout(() => {
      setActive(true);
    }, 50); // Wait for the transition to finish before setting active to true
  };
  const handleBack = () => {
    setRentalOpen(false);
    setActiveRental(null);
  };

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  return (
    <div className={styles.container}>
      <button className={styles.back_button} onClick={handleBack}>
        ← Back
      </button>
      <div
        className={styles.image_container_wrap}
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <div className={styles.image_container}>
          <div
            className={`${styles.arrow} ${styles.left_arrow}`}
            onClick={Previous}
          >
            ←
          </div>
          <div
            className={`${styles.arrow} ${styles.right_arrow}`}
            onClick={Next}
          >
            →
          </div>
          <div
            className={imageClass}
            style={{
              backgroundImage: `url(${props.images[currentIndex].url})`,
            }}
          ></div>
          <div className={styles.dots_container}>
            {props.images.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className={`${styles.dot} ${
                  slideIndex === currentIndex ? styles.active : ""
                }`}
                onClick={() => goToSlide(slideIndex)}
              >
                ⬤
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={styles.info_container}
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <div className={styles.header_container}>
          <h1 className={styles.heading}>{props.name}</h1>
          <div className={styles.line}></div>
          <h3 className={styles.subheading}>{props.description}</h3>
        </div>
        <h2>Starting at {props.price}</h2>
        <button onClick={handleFormOpen}>Book Now</button>
      </div>
    </div>
  );
}

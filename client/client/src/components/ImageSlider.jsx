import React, { useState, useEffect } from "react";
import styles from "../styles/ImageSlider.module.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Background from "../assets/ODR Background 1.PNG";
import SectionBackground from "./SectionBackground";

export default function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState(true);
  const [delay, setDelay] = useState(true);
  let imageClass = active ? styles.image : styles.image_off;
  let backgroundAddonClass = delay
    ? styles.background_off
    : styles.background_addon;

  useEffect(() => {
    setTimeout(() => {
      setDelay(false);
    }, 1500); // Wait for 1 second before allowing the image to be active
  });

  useEffect(() => {}, [currentIndex]);

  const Previous = () => {
    setActive(false);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setTimeout(() => {
      setActive(true);
    }, 50); // Wait for the transition to finish before setting active to true
  };

  const Next = () => {
    setActive(false);
    const isLastSlide = currentIndex === slides.length - 1;
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

  return (
    <div className={styles.container} data-aos="fade-up">
      <SectionBackground image={Background} />

      <div
        className={styles.heading_container}
        data-aos="zoom-out"
        data-aos-delay="500"
      >
        <h1 className={styles.heading}>Fun Bounce Houses for Everyone!</h1>
        <div className={styles.line}></div>
        <h3 className={styles.subheading}>
          We offer a wide variety of high quality bounce houses to choose from!
          Whether you need a small bounce house for the kids or a large bounce
          house for a group of friends, we have something for everyone!{" "}
        </h3>
      </div>
      <div
        className={styles.image_container_wrap}
        data-aos="zoom-in"
        data-aos-delay="600"
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
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          ></div>
          <div className={styles.dots_container}>
            {slides.map((slide, slideIndex) => (
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
    </div>
  );
}

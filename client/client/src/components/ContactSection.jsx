import React, { useEffect } from "react";
import styles from "../styles/ContactSection.module.css";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Background from "../assets/ODR Background 3.PNG";
import SectionBackground from "./SectionBackground";

export default function ContactSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const navigate = useNavigate();

  return (
    <div className={styles.container} data-aos="fade-up">
      <SectionBackground image={Background} />

      <div
        className={styles.heading_wrap}
        data-aos="flip-left"
        data-aos-delay="500"
      >
        <h1 className={styles.heading} onClick={() => navigate("/contact")}>
          Contact Us! →
        </h1>
        <div className={styles.line}></div>
      </div>
      <div className={styles.content_wrap}>
        <ul className={styles.content_list}>
          <li
            className={styles.content_item}
            data-aos="flip-right"
            data-aos-delay="500"
          >
            <Link
              to="mailto:Offdutyrentals@gmail.com"
              className={styles.link}
              target="_blank"
            >
              <i className="fa-solid fa-envelope"></i>
              <p>Offdutyrentalsfl@gmail.com</p>
            </Link>
          </li>
          <li
            className={styles.content_item}
            data-aos="flip-left"
            data-aos-delay="300"
          >
            <Link to="tel:817-818-6165" className={styles.link} target="_blank">
              <i className="fa-solid fa-phone"></i>
              <p>817-818-6165</p>
            </Link>
          </li>
          <li
            className={styles.content_item}
            data-aos="flip-right"
            data-aos-delay="100"
          >
            <Link
              to="https://m.facebook.com/61577425049892/"
              target="_blank"
              className={styles.link}
            >
              <i className="fa-brands fa-facebook"></i>
              <p>Facebook</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

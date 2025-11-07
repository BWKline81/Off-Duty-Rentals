import React, { useEffect } from "react";
import styles from "../styles/Header.module.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();

  const navigateTo = (dest) => {
    navigate(dest);
  };

  return (
    <div className={styles.header} data-aos="fade-down">
      <div
        className={styles.logo}
        data-aos="fade-right"
        data-aos-delay="300"
      ></div>
      <div className={styles.navbar}>
        <nav style={{ width: "100%", height: "100%" }}>
          <ul className={styles.nav_links}>
            <li
              className={styles.link}
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <button
                className={styles.pressable}
                onClick={() => navigateTo("/")}
              >
                <i className="fa-solid fa-house"></i>
                Home
              </button>
            </li>
            <li
              className={styles.link}
              data-aos="fade-left"
              data-aos-delay="700"
            >
              <button
                className={styles.pressable}
                onClick={() => navigateTo("/rentals")}
              >
                <i className="fa-solid fa-truck-moving"></i>
                Rentals
              </button>
            </li>
            <li
              className={styles.link}
              data-aos="fade-left"
              data-aos-delay="900"
            >
              <button
                className={styles.pressable}
                onClick={() => navigateTo("/about")}
              >
                <i className="fa-solid fa-address-card"></i>
                About
              </button>
            </li>
            <li
              className={styles.link}
              data-aos="fade-left"
              data-aos-delay="1100"
            >
              <button
                className={styles.pressable}
                onClick={() => navigateTo("/contact")}
              >
                <i className="fa-solid fa-phone"></i>
                Contact
              </button>
            </li>
            <li
              className={styles.link}
              data-aos="fade-left"
              data-aos-delay="1300"
            ></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

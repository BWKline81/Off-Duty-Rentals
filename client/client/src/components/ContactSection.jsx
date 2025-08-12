import React, { useEffect } from "react";
import styles from "../styles/ContactSection.module.css";
import { Link } from "react-router-dom";

export default function ContactSection() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundaddon1}></div>
      <div className={styles.backgroundaddon2}></div>
      <div className={styles.heading_wrap}>
        <h1 className={styles.heading}>Contact Us!</h1>
        <div className={styles.line}></div>
      </div>
      <div className={styles.content_wrap}>
        <ul className={styles.content_list}>
          <li className={styles.content_item}>
            <Link
              to="mailto:Offdutyrentals@gmail.com"
              className={styles.link}
              target="_blank"
            >
              <i className="fa-solid fa-envelope"></i>
              <p>Offdutyrentals@gmail.com</p>
            </Link>
          </li>
          <li className={styles.content_item}>
            <Link to="tel:817-818-6165" className={styles.link} target="_blank">
              <i className="fa-solid fa-phone"></i>
              <p>817-818-6165</p>
            </Link>
          </li>
          <li className={styles.content_item}>
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

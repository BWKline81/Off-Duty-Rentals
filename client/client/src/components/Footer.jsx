import React, { useEffect } from "react";
import styles from "../styles/Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.socials_row}>
        <Link
          className={styles.i_link}
          to="https://m.facebook.com/61577425049892/"
          target="_blank"
        >
          <i className="fa-brands fa-facebook"></i>
        </Link>
      </div>
      <div className={styles.nav_row}>
        <Link className={styles.text_link} to="/">
          Home
        </Link>
        <Link className={styles.text_link} to="/rentals">
          Rentals
        </Link>
        <Link className={styles.text_link} to="/about">
          About
        </Link>
        <Link className={styles.text_link} to="/contact">
          Contact
        </Link>
        <Link className={styles.text_link} to="/login">
          Login {/* Will be replaced by user's name */}
        </Link>
      </div>
      <div className={styles.other_row}>
        <Link className={styles.text_link}>Privacy Policy</Link>
        <Link className={styles.text_link}>Terms of Service</Link>
        <Link className={styles.text_link}>Feedback</Link>
      </div>
      <div className={styles.copyright_row}>
        <p>© 2025 Off Duty Rentals</p>
      </div>
    </div>
  );
}

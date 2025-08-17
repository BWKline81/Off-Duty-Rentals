import React, { useEffect } from "react";
import Header from "../components/Header";
import styles from "../styles/About.module.css";
import Footer from "../components/Footer";
import Placeholder from "../../public/Placeholder.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    document.title = "Off Duty Rentals | About";
    AOS.init({ duration: 1000 });
  });

  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <Header />
      </div>
      <div className={styles.content_container} data-aos="fade-up">
        <div className={styles.background_addon1}></div>
        <div className={styles.background_addon2}></div>
        <div
          className={styles.heading_container}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h1 className={styles.heading}>About Us!</h1>
          <div className={styles.line}></div>
          <h3 className={styles.subheading}>
            Learn more about us and our mission!
          </h3>
        </div>
        <div className={styles.text_image_container}>
          <div
            className={styles.text_container}
            data-aos="fade-down-right"
            data-aos-delay="600"
          >
            <p>
              At Off Duty Rentals, we are dedicated to providing safe, reliable,
              and high-quality bounce house rentals for events of all sizes.
              From birthday parties and school functions to corporate events and
              community gatherings, our goal is to create an enjoyable and
              worry-free experience for every client. We take pride in
              maintaining our equipment to the highest standards. Every
              inflatable is thoroughly cleaned, inspected, and securely set up
              by our trained team to ensure both safety and satisfaction. With a
              strong focus on professionalism, punctuality, and customer care,
              we aim to exceed expectations at every event. When you choose Off
              Duty Rentals, you can trust that your celebration will be
              supported by dependable service, attention to detail, and a
              commitment to excellence.
            </p>
          </div>
          <div
            className={styles.image}
            data-aos="fade-down-left"
            data-aos-delay="700"
          >
            <img src={Placeholder} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

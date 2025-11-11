import React, { useEffect } from "react";
import Header from "../components/Header";
import styles from "../styles/About.module.css";
import Footer from "../components/Footer";
import Placeholder from "../../public/Placeholder.png";
import Image from "../assets/Blue_Slide/Blue_Slide_Main.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Background from "../assets/ODR Background 2.PNG";

import SectionBackground from "../components/SectionBackground";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Off Duty Rentals | About";
    AOS.init({ duration: 1000 });
  });

  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <Header />
      </div>
      <div className={styles.content_container} data-aos="fade-up">
        <SectionBackground image={3} />

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
              <span className={styles.bold_text}>
                Welcome to Off Duty Rentals!
              </span>
              <br />
              My name is Max and I am the owner/operator of Off Duty Rentals
              LLC. I am a full time local Firefighter/Paramedic in Florida. With
              having 2 children myself, I know how important it is to be able to
              give them the best party without breaking the bank. My goal is to
              provide just that-fun at an affordable price. I serve Sumter,
              Marion, Lake, and Citrus counties. Please feel free to{" "}
              <Link className={styles.link} to="/contact">
                contact
              </Link>{" "}
              us through call or text at 352-808-5058. You can also reach out to
              us via our Facebook page or email.
            </p>
          </div>
          <div
            className={styles.image}
            data-aos="fade-down-left"
            data-aos-delay="700"
          >
            <img src={Image} alt="Image of an Off Duty Rental Bounce House." />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

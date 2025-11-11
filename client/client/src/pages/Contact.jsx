import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Background1 from "../assets/ODR Background 1.PNG";
import Background2 from "../assets/ODR Background 2.PNG";
import Background3 from "../assets/ODR Background 3.PNG";
import SectionBackground from "../components/SectionBackground";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Off Duty Rentals | Contact";
    AOS.init({ duration: 1000 });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c3a95fa1-16bb-4a15-9068-c3bf5ac85b7a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      window.alert(
        "Message sent successfully! We will get back to you as soon as possible."
      );
      event.target.reset();
      console.log("Success", res);
    } else if (
      (res.message =
        "Sorry, This message has been marked as spam by our server. Contact support if the issue persist.")
    ) {
      console.log("Spam", res);
      event.target.reset();
      window.alert(
        "Your message was marked as spam. If you believe this is an error, please contact us directly at Offdutyrentals@gmail.com or contact bwkline@icloud.com for support"
      );
      setFormOpen(false);
    } else {
      window.alert(
        "Message failed to send. Please try again. If this issue persists, please contact bwkline@icloud.com for support"
      );
      console.log("Error", res);
    }
  };

  const textAreaRef = useRef(null);

  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <Header />
      </div>
      <div className={styles.socials_container} data-aos="fade-up">
        <SectionBackground image={2} />
        <div
          className={styles.heading_container}
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <h1 className={styles.heading}>Follow Us!</h1>
          <div className={styles.line}></div>
          <h3 className={styles.subheading}>
            Check out our socials to find out more about us!
          </h3>
        </div>
        <div className={styles.socials_content_container}>
          <div
            className={styles.social_content}
            data-aos="zoom-out"
            data-aos-delay="600"
          >
            <Link
              to="https://m.facebook.com/61577425049892/"
              target="_blank"
              className={styles.social_link}
            >
              <i className="fa-brands fa-facebook"></i>
              <p>Facebook</p>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.contact_container} data-aos="fade-up">
        <SectionBackground image={3} />
        <div
          className={styles.heading_container}
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <h1 className={styles.heading}>Contact Us!</h1>
          <div className={styles.line}></div>
          <h3 className={styles.subheading}>
            We are available by email or phone to answer any questions you may
            have!
          </h3>
        </div>
        <div className={styles.contact_content_container}>
          <div className={styles.contact_content}>
            <Link
              to="mailto:Offdutyrentalsfl@gmail.com"
              target="_blank"
              className={styles.contact_link}
            >
              <i className="fa-solid fa-envelope"></i>
              <p>Offdutyrentals@gmail.com</p>
            </Link>
          </div>

          <div className={styles.contact_content}>
            <Link
              to="tel:817-818-6165"
              target="_blank"
              className={styles.contact_link}
            >
              <i className="fa-solid fa-phone"></i>
              <p>817-818-6165</p>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.contact_form_container} data-aos="fade-up">
        <SectionBackground image={1} />
        <div
          className={styles.heading_container}
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <h1 className={styles.heading}>Send Us a Message!</h1>
          <div className={styles.line}></div>
          <h3 className={styles.subheading}>
            We would love to hear from you! Please fill out this form and we
            will get back to you as soon as possible!
          </h3>
        </div>
        <div
          className={styles.contact_form_wrap}
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <form onSubmit={onSubmit}>
            <div className={styles.input_box}>
              <input
                type="text"
                required
                className={styles.field}
                name="name"
              />
              <label className={styles.label}>Full Name</label>
            </div>
            <div className={styles.input_box}>
              <input
                type="text"
                required
                className={styles.field}
                name="email"
              />
              <label className={styles.label}>Email Address</label>
            </div>
            <div className={styles.input_box}>
              <textarea
                className={styles.field}
                required
                name="message"
                ref={textAreaRef}
              ></textarea>
              <label className={styles.label}>Your Message</label>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

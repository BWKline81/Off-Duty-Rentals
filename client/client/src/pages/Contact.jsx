import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Off Duty Rentals | Contact";
    AOS.init({ duration: 1000 });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b13bbbdf-c774-4542-b740-f3e796f770b4");

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
      console.log("Success", res);
      Swal.fire({
        title: "Success!",
        text: "Message has been sent!",
        icon: "success",
      });
    } else {
      console.log("Error", res);
      Swal.fire({
        title: "Error!",
        text: "Message has not been sent!",
        icon: "error",
      });
    }
  };

  const textAreaRef = useRef(null);

  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <Header />
      </div>
      <div className={styles.socials_container} data-aos="fade-up">
        <div className={styles.background_addon2}></div>
        <div className={styles.background_addon1}></div>
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
        <div className={styles.background_addon3}></div>
        <div className={styles.background_addon4}></div>
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
              to="mailto:Offdutyrentals@gmail.com"
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
        <div className={styles.background_addon5}></div>
        <div className={styles.background_addon6}></div>
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
      <div className={styles.buffer}>
        <div className={styles.buffer_addon}></div>
      </div>
      <Footer />
    </div>
  );
}

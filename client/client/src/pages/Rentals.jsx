import React, { useEffect, useState, createContext } from "react";
import styles from "../styles/Rentals.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Rental from "../components/Rental";
import RentalPageRental from "../components/RentalPageRental";
import BlueSlideImage from "../assets/Blue_Slide/Blue_Slide_Main.jpg";
import MonsterHouseImage from "../assets/Monster_House/Monster_House_Front_Side.jpg";
import BS1 from "../assets/Blue_Slide/Blue_Slide_Main.jpg";
import BS2 from "../assets/Blue_Slide/Blue_Slide_Front.jpg";
import BS3 from "../assets/Blue_Slide/Blue_Slide_Side.jpg";
import BS4 from "../assets/Blue_Slide/Blue_Slide_Front_kid.jpg";
import BS5 from "../assets/Blue_Slide/Blue_Slide_kid.jpg";
import BS6 from "../assets/Blue_Slide/Blue_Slide_Side_2.jpg";
import MH1 from "../assets/Monster_House/Monster_House_Front_Side.jpg";
import MH2 from "../assets/Monster_House/Monster_House_Slide.jpg";
import MH3 from "../assets/Monster_House/Monster__House_Main.jpg";
import MH4 from "../assets/Monster_House/Monster_House_Inside.jpg";
import MH5 from "../assets/Monster_House/Monster_House_Outside.jpg";
import MH6 from "../assets/Monster_House/Monster_House_Front.jpg";
import Alert from "@mui/material/Alert";
import Background from "../assets/ODR Background 2.PNG";
import Background2 from "../assets/ODR Background 3.PNG";
import SectionBackground from "../components/SectionBackground";

export let ActiveRentalContext = createContext();
export let RentalOpenContext = createContext();
export let FormOpenContext = createContext();

export default function Rentals() {
  let rentalsList = [
    {
      id: 1,
      bgColor: "var(--color-primary)",
      image: BlueSlideImage,
      name: "Tidal Wave Slide",
      descriptionShort: "A fun and exciting blue water slide for all ages!",
      descriptionLong:
        "A fun and exciting blue water slide inflatable that stands tall and provides hours of entertainment for kids and adults alike. Perfect for birthday parties, family gatherings, or any outdoor event, this inflatable slide is sure to be a hit. With its vibrant blue color and thrilling slide, it's an excellent addition to any celebration.",
      price: "$150 for one day, $250 for the weekend.",
      btnColor: "var(--color-secondary)",
    },
    {
      id: 2,
      bgColor: "var(--color-secondary)",
      image: MonsterHouseImage,
      name: "Monster House",
      descriptionShort:
        "A spooky and thrilling inflatable with a slide and basketball hoop!",
      descriptionLong:
        "The Monster House inflatable is a spooky and thrilling addition to any event. Featuring a slide and a basketball hoop, this inflatable provides endless fun for kids and adults alike. The monster-themed design adds an exciting element to birthday parties, Halloween events, or any outdoor gathering. With its vibrant colors and engaging features, the Monster House inflatable is sure to be a crowd-pleaser.",
      price: "$150 for one day, $250 for the weekend.",
      btnColor: "var(--color-primary)",
    },
  ];

  let imagesList = [
    [
      { url: BS1, title: "Image 1" },
      { url: BS2, title: "Image 2" },
      { url: BS3, title: "Image 3" },
      { url: BS4, title: "Image 4" },
      { url: BS5, title: "Image 5" },
      { url: BS6, title: "Image 6" },
    ],
    [
      { url: MH1, title: "Image 1" },
      { url: MH2, title: "Image 2" },
      { url: MH3, title: "Image 3" },
      { url: MH4, title: "Image 4" },
      { url: MH5, title: "Image 5" },
      { url: MH6, title: "Image 6" },
    ],
  ];

  let [activeRental, setActiveRental] = useState(null);
  let [rentalOpen, setRentalOpen] = useState(false);
  let [formOpen, setFormOpen] = useState(false);

  let activeRentalContext = { activeRental, setActiveRental };
  let rentalOpenContext = { rentalOpen, setRentalOpen };
  let formOpenContext = { formOpen, setFormOpen };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Off Duty Rentals | Rentals";
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
      console.log("Success", res);
      window.alert(
        "Message sent successfully! We will get back to you as soon as possible."
      );
      event.target.reset();

      setFormOpen(false);
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
      console.log("Error", res);
      event.target.reset();
      window.alert(
        "There was an error sending the message. Please try again. If the issue persists, contact bwkline@icloud.com for support"
      );

      setFormOpen(false);
    }
  };

  if (formOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  if (!rentalOpen) {
    return (
      <FormOpenContext.Provider value={formOpenContext}>
        <ActiveRentalContext.Provider value={activeRentalContext}>
          <RentalOpenContext.Provider value={rentalOpenContext}>
            <div className={styles.container}>
              <div className={styles.header_container}>
                <Header />
              </div>
              <div className={styles.content_container} data-aos="fade-up">
                <SectionBackground image={Background2} />
                <div
                  className={styles.heading_container}
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  <h1 className={styles.heading}>Check Out Our Rentals!</h1>
                  <div className={styles.line}></div>
                  <h2 className={styles.subheading}>
                    Click on a rental to see more details
                  </h2>
                </div>
                <div
                  className={styles.rentals_container}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  {rentalsList.map((rental) => (
                    <RentalPageRental
                      key={rental.id}
                      id={rental.id}
                      bgColor={rental.bgColor}
                      image={rental.image}
                      title={rental.name}
                      description={rental.descriptionShort}
                      price={rental.price}
                      btnColor={rental.btnColor}
                    />
                  ))}
                </div>
              </div>
              <Footer />
            </div>
          </RentalOpenContext.Provider>
        </ActiveRentalContext.Provider>
      </FormOpenContext.Provider>
    );
  } else if (rentalOpen && activeRental !== null) {
    return (
      <FormOpenContext.Provider value={formOpenContext}>
        <ActiveRentalContext.Provider value={activeRentalContext}>
          <RentalOpenContext.Provider value={rentalOpenContext}>
            <div className={styles.container}>
              <div className={styles.header_container}>
                <Header />
              </div>
              <div className={styles.content_container}>
                <SectionBackground image={Background} />
                <Rental
                  images={imagesList[activeRental - 1]}
                  id={rentalsList[activeRental - 1].id}
                  name={rentalsList[activeRental - 1].name}
                  description={rentalsList[activeRental - 1].descriptionLong}
                  price={rentalsList[activeRental - 1].price}
                />
              </div>
              <div className={styles.buffer}>
                <div className={styles.buffer_addon}></div>
              </div>
              <Footer />
            </div>
            <div
              className={styles.contact_form_back}
              style={{
                display: formOpen ? "flex" : "none",
                animation: formOpen ? `${styles.fadeIn} 0.5s` : "none",
              }}
              data-aos="fade-up"
            >
              <div
                className={styles.contact_form_wrap}
                data-aos="fade-right"
                data-aos-delay="600"
              >
                <form onSubmit={onSubmit}>
                  <h1 className={styles.form_heading}>
                    Contact Us for Booking!
                  </h1>
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
                    ></textarea>
                    <label className={styles.label}>Your Message</label>
                  </div>
                  <div className={styles.form_buttons}>
                    <button
                      style={{ backgroundColor: "red" }}
                      onClick={() => {
                        setFormOpen(false);
                      }}
                    >
                      Cancel
                    </button>
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </RentalOpenContext.Provider>
        </ActiveRentalContext.Provider>
      </FormOpenContext.Provider>
    );
  }
}

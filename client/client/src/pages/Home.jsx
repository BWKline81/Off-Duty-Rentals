import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import HomeImage from "../components/HomeImage";
import ImageSlider from "../components/ImageSlider";
import RentalsSection from "../components/RentalsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import BH6 from "../assets/Blue_Slide/Blue_Slide_Main.jpg";
import BH2 from "../assets/Blue_Slide/Blue_Slide_Front.jpg";
import BH5 from "../assets/Blue_Slide/Blue_Slide_Side.jpg";
import BH4 from "../assets/Monster_House/Monster_House_Slide.jpg";
import BH3 from "../assets/Monster_House/Monster_House_Inside.jpg";
import BH1 from "../assets/Monster_House/Monster_House_Outside.jpg";

function Home() {
  const [loading, setLoading] = useState(true);

  console.log("exist");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Off Duty Rentals | Home";
    console.log(loading);

    setLoading(false);
    console.log(loading);
  }, []);

  const imageSlides = [
    { url: BH1, title: "Image 1" },
    { url: BH2, title: "Image 2" },
    { url: BH3, title: "Image 3" },
    { url: BH4, title: "Image 4" },
    { url: BH5, title: "Image 5" },
    { url: BH6, title: "Image 6" },
  ];

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <Header />
      </div>
      <div
        className={styles.HomeImage_container}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="700"
      >
        <HomeImage image={window.innerWidth > 750 ? BH6 : BH5} />
      </div>
      <ImageSlider slides={imageSlides} />
      <RentalsSection />
      <ContactSection />

      <Footer />
    </div>
  );
}

export default Home;

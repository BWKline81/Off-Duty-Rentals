import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import HomeImage from "../components/HomeImage";
import ImageSlider from "../components/ImageSlider";
import RentalsSection from "../components/RentalsSection";
import ContactSection from "../components/ContactSection";
import BH1 from "../assets/BH_Template_Images/bh1.jpg";
import BH2 from "../assets/BH_Template_Images/bh2.jpg";
import BH3 from "../assets/BH_Template_Images/bh3.jpg";
import BH4 from "../assets/BH_Template_Images/bh4.jpg";
import BH5 from "../assets/BH_Template_Images/bh5.jpg";
import BH6 from "../assets/BH_Template_Images/bh6.jpg";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Off Duty Rentals | Home";

    return () => {
      setLoading(false);
    };
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
        <HomeImage />
      </div>
      <ImageSlider slides={imageSlides} />
      <RentalsSection />
      <ContactSection />
    </div>
  );
}

export default Home;

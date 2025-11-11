import React, { useState, useEffect } from "react";
import styles from "../styles/SectionBackground.module.css";
import Dk_Bg1 from "../assets/ODR Background 1.PNG";
import Dk_Bg2 from "../assets/ODR Background 2.PNG";
import Dk_Bg3 from "../assets/ODR Background 3.PNG";
import Lt_Bg1 from "../assets/ODR_Lt_BG_1.PNG";
import Lt_Bg2 from "../assets/ODr_Lt_BG_2.PNG";
import Lt_Bg3 from "../assets/ODR_Lt_BG_3.PNG";

export default function SectionBackground(props) {
  const [colorScheme, setColorScheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event) => {
      setColorScheme(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Cleanup: remove listener when component unmounts
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const setImage = () => {
    if (colorScheme) {
      switch (props.image) {
        case 1:
          return Dk_Bg1;
        case 2:
          return Dk_Bg2;
        case 3:
          return Dk_Bg3;
        default:
          return Dk_Bg1;
      }
    } else {
      switch (props.image) {
        case 1:
          return Lt_Bg1;
        case 2:
          return Lt_Bg2;
        case 3:
          return Lt_Bg3;
        default:
          return Lt_Bg1;
      }
    }
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${setImage()})` }}
    ></div>
  );
}

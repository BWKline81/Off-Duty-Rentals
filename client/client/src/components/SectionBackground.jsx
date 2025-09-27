import React from "react";
import styles from "../styles/SectionBackground.module.css";

export default function SectionBackground(props) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${props.image})` }}
    ></div>
  );
}

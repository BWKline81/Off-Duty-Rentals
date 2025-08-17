import React from "react";
import styles from "../styles/NotFound.module.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <i className="fa-solid fa-triangle-exclamation"></i>
      <h1>404</h1>
      <h2>The page you are looking for does not exist or has been removed.</h2>
      <button onClick={() => navigate("/")}>Return to Home</button>
    </div>
  );
}

export default NotFound;

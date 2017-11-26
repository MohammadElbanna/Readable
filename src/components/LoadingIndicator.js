import React from "react";
import styles from "./LoadingIndicator.css";

const LoadingIndicator = () => (
  <div
    className={`${styles["la-ball-clip-rotate-multiple"]} ${styles["la-2x"]}`}
  >
    <div />
    <div />
  </div>
);

export default LoadingIndicator;

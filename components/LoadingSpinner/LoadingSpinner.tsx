"use client";

import React from "react";
import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" className={styles.circle} />
          <circle cx="50" cy="50" r="30" className={styles.innerCircle} />
        </svg>
        <div className={styles.pulse} />
        <p className={styles.text}>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;

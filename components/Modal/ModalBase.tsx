"use client";

import React from "react";
import styles from "./ModalBase.module.scss";

interface ModalBaseProps {
  title: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
}

const ModalBase: React.FC<ModalBaseProps> = ({ title, children, footer }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>
      <div className={styles.body}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

export default ModalBase;

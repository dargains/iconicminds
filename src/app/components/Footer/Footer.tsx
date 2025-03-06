import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© Iconic Minds 2024</p>
      <div className={styles.links}>
        <a href="/terms">Termos e Condições</a>
        <a href="/privacy">Política de Privacidade</a>
      </div>
    </footer>
  );
};

export default Footer;

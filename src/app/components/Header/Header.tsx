import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src="/logo white.svg" alt="Iconic Minds" width={227} height={50} />
      <nav className={styles.socials}>
        <a href="x">
          <Image
            src="/x.svg"
            alt="X"
            width={20}
            height={20}
            className={styles.icon}
          />
        </a>
        <a href="y">
          <Image
            src="/instagram.svg"
            alt="Instagram"
            width={20}
            height={20}
            className={styles.icon}
          />
        </a>
        <a href="z">
          <Image
            src="/linkedin.svg"
            alt="LinkedIn"
            width={20}
            height={20}
            className={styles.icon}
          />
        </a>
      </nav>
    </header>
  );
};

export default Header;

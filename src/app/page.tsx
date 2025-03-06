"use client";

import { useState } from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import ConfirmUserButton from "./components/Confirm";
import Footer from "./components/Footer/Footer";
import Overlay from "./components/Overlay/Overlay";

import styles from "./page.module.css";

export default function Page() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const handleToggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {isOverlayOpen && <Overlay handleToggleOverlay={handleToggleOverlay} />}
        <Header />
        <MainContent handleOpenOverlay={handleToggleOverlay} />
        {/* <ConfirmUserButton userId={1} confirm />
        <ConfirmUserButton userId={1} confirm={false} /> */}
        <div className={styles.quote}>
          “O mais importante na vida é que o mais importante seja o mais
          importante.” <strong>Stephen Covey</strong>
        </div>
        <Footer />
      </div>
    </div>
  );
}

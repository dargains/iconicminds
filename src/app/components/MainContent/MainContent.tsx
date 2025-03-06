import React, { useState } from "react";
import Image from "next/image";

import styles from "./MainContent.module.css";
import Button from "../Button/Button";

const MainContent = ({
  handleOpenOverlay,
}: {
  handleOpenOverlay: () => void;
}) => {
  const [isKnowMoreOpen, setIsKnowMoreOpen] = useState(false);

  const toggleKnowMore = () => {
    setIsKnowMoreOpen(!isKnowMoreOpen);
  };

  return (
    <main>
      <div className={styles.container}>
        <div>
          <Image src="/headline.svg" alt="Headline" width={493} height={295} />
          <div className={styles.contentBox}>
            <p>Qual é o seu valor por pessoa?</p>
            <p>V=(C+E)*A</p>
            <p>Valor: (Conhecimento + Experiência) x Atitude</p>
            <p>A Atitude multiplica!</p>
          </div>
          <div className={styles.ctaBlock}>
            <p>
              <span>22 Abril 2025</span> 19:30 Teatro Politeama Lisboa
            </p>
            <div className={styles.buttonContainer}>
              <Button
                label="Registo"
                type="primary"
                handleClick={handleOpenOverlay}
              />
              <Button
                label="Saber Mais"
                type="secondary"
                handleClick={toggleKnowMore}
              />
            </div>
          </div>
        </div>
        <div>
          <Image src="/Victor.png" alt="Victor" width={573} height={727} />
        </div>
      </div>
      {isKnowMoreOpen ? (
        <div className={styles.knowMore}>
          <div className={styles.knowMoreText}>
            <p>
              <strong>Victor Küppers</strong> é um orador nas áreas da motivação
              e desenvolvimento pessoal. Nas suas palestras, Victor ajuda{" "}
              <strong>
                profissionais e equipas a conquistar objetivos, aumentar a
                produtividade
              </strong>{" "}
              e adotar uma mentalidade positiva de sucesso.
            </p>
            <p>
              A sua missão é ajudar as pessoas a viver com paixão, alegria e
              entusiasmo e consciencializar os participantes sobre da
              importância de viver e trabalhar com base em princípios e valores
              humanos Victor é Doutor em Ciências Humanas e Bacharel em
              Administração de empresas.
            </p>
          </div>
          <p className={styles.knowMoreQuote}>
            Acrescente valor à sua organização e melhore a atitude da sua
            equipa.
          </p>
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

export default MainContent;

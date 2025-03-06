import React, { useState } from "react";
import Image from "next/image";
import styles from "./Overlay.module.css";
import Button from "../Button/Button";

const Overlay = ({
  handleToggleOverlay,
}: {
  handleToggleOverlay: () => void;
}) => {
  const [token, settoken] = useState("");
  const [isTokenValid, setisTokenValid] = useState(false);
  const [name, setName] = useState("teste");
  const [lastName, setLastName] = useState("teste");
  const [email, setEmail] = useState("andre.dargains@gmail.com");
  const [phone, setPhone] = useState("123456789");
  const [company, setCompany] = useState("Iconic Minds");
  const [status, setStatus] = useState("done");

  // Function to save user
  const saveUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("A guardar...");

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, company }),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Registo feito com sucesso!");
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch {
      setStatus("Falha no registo.");
    }
  };

  const checkToken = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("check token");
    setisTokenValid(true);
    setStatus(
      "Registo efetuado com sucesso. Em breve, irá receber um e-mail com toda a informação."
    );
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.box}>
        <button className={styles.closeButton} onClick={handleToggleOverlay}>
          X
        </button>
        <Image
          src="/logo black.svg"
          alt="Iconic Minds"
          width={110}
          height={72}
        />
        <Image
          className={styles.ellipse}
          src="/ellipse.png"
          alt="Ellipse"
          width={340}
          height={340}
        />
        {status === "done" ? (
          <>
            <Image src="/success.svg" alt="sucesso" width={64} height={64} />
            <p className={styles.successText}>
              Registo efetuado com sucesso.
              <br />
              Em breve, irá receber um e-mail com toda a informação.
            </p>
          </>
        ) : isTokenValid ? (
          <form onSubmit={saveUser}>
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Apelido"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Button
              label="Registar"
              type="primary"
              role="submit"
              disabled={status === "A guardar..."}
            />
            <p className={styles.disclaimer}>
              Ao clicar “Registar” aceita os nossos termos e política de
              privacidade.
            </p>
          </form>
        ) : (
          <form onSubmit={checkToken}>
            <input
              type="text"
              placeholder="Inserir Código"
              onChange={(e) => settoken(e.target.value)}
              value={token}
            />
            <Button label="Avançar" type="primary" role="submit" />
          </form>
        )}
      </div>
    </div>
  );
};

export default Overlay;

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Overlay.module.css";
import Button from "../Button/Button";

const Overlay = () => {
  const [token, settoken] = useState("");
  const [name, setName] = useState("teste");
  const [email, setEmail] = useState("andre.dargains@gmail.com");
  const [phone, setPhone] = useState("123456789");
  const [company, setCompany] = useState("Iconic Minds");
  const [status, setStatus] = useState("");

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

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending email...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, userId: 1, company }),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Email sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch {
      setStatus("Failed to send email.");
    }
  };

  const checkToken = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("check token");
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.box}>
        <Image src="/logo black.svg" alt="Overlay" width={110} height={72} />
        <form onSubmit={checkToken}>
          <input
            type="text"
            placeholder="Inserir Código"
            onChange={(e) => settoken(e.target.value)}
            value={token}
          />
          <Button label="Avançar" type="primary" role="submit" />
        </form>
        <form onSubmit={saveUser}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            placeholder="Phone (Optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
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
        <p className={styles.status}>{status}</p>
      </div>
    </div>
  );
};

export default Overlay;

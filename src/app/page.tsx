"use client";

import { useState } from "react";
import ConfirmUserButton from "./components/Confirm";

export default function UserForm() {
  const [name, setName] = useState("teste");
  const [email, setEmail] = useState("teste@email.com");
  const [phone, setPhone] = useState("123456789");
  const [company, setCompany] = useState("Iconic Minds");
  const [status, setStatus] = useState("");

  // Function to save user
  const saveUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Saving...");

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, company }),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("User saved successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch {
      setStatus("Failed to save user.");
    }
  };

  return (
    <div>
      <h2>Save User</h2>
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
        <button type="submit">Save</button>
      </form>

      <p>{status}</p>
      <ConfirmUserButton userId={1} confirm />
      <ConfirmUserButton userId={1} confirm={false} />
    </div>
  );
}

"use client";

import { useState } from "react";

export default function ConfirmUserButton({
  userId,
  confirm,
}: {
  userId: number;
  confirm: boolean;
}) {
  const [status, setStatus] = useState("");

  const confirmUser = async () => {
    setStatus("Updating...");

    const params = confirm ? { confirmed: true } : { declined: true };

    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("User confirmed successfully!");
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch (error) {
      setStatus("Failed to update user.");
    }
  };

  return (
    <div>
      <button onClick={confirmUser} disabled={status === "Updating..."}>
        {status === "Updating..."
          ? "Updating..."
          : confirm
          ? "Confirm User"
          : "Decline User"}
      </button>
      <p>{status}</p>
    </div>
  );
}

import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  label: string;
  type: "primary" | "secondary";
  handleClick?: () => void;
  role?: string;
  disabled?: boolean;
};

const Button = ({ label, type, handleClick, role, disabled }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[type]} ${
        disabled && styles.disabled
      }`}
      onClick={handleClick}
      role={role}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;

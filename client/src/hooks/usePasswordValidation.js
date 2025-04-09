import { useState } from "react";

/**
 * Creates state variables for password validation fields.
 * Also exposes a function to set a standard error message
 */
export const usePasswordValidation = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setError] = useState("");

  const setPasswordError = () => setError("Passwords do not match");

  return {
    password,
    confirmPassword,
    passwordError,
    setPassword,
    setConfirmPassword,
    setPasswordError,
  };
};

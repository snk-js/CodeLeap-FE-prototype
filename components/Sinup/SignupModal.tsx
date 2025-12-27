import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ModalOverlay from "../Modal/ModalOverlay";
import styles from "./SignupModal.module.scss";
import ModalBase from "../Modal/ModalBase";

const SignupModal = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!username.trim()) {
      setError("Username is required");
      return;
    }
    localStorage.setItem("username", username);
    setError("");
    router.push("/");
  };

  return (
    <ModalOverlay>
      <ModalBase title="Welcome to CodeLeap network!">
        <div className={styles.form}>
          <div className={styles.labelInput}>
            <label>Please enter your username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}
          <button
            className="w-max ml-auto text-base"
            onClick={handleSubmit}
            disabled={!username.trim()}
          >
            ENTER
          </button>
        </div>
      </ModalBase>
    </ModalOverlay>
  );
};

export default SignupModal;

import React, { useState } from "react";
import ModalOverlay from "../Modal/ModalOverlay";
import styles from "./SignupModal.module.scss";
import ModalBase from "../Modal/ModalBase";
import { useUser } from "@/app/providers/UserContext";

const SignupModal = () => {
  const [username, setUsername] = useState("");
  const { login, error } = useUser();

  const handleSubmit = () => {
    login(username);
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

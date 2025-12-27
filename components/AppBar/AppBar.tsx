"use client";

import ThemeSwitch from "../ThemeSwitch/ThemeSwitcher";
import styles from "./AppBar.module.scss";
import { useUser } from "@/app/providers/UserContext";

const AppBar = () => {
  const { logout, username } = useUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className={styles.AppBar} suppressHydrationWarning>
      <span className={styles.username}>@{username}</span>
      <div className={styles.center}>
        <ThemeSwitch />
      </div>
      <div className={styles.right}>
        {username && (
          <button className={styles.logout} onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default AppBar;

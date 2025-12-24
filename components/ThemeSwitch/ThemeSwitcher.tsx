"use client";

import { useTheme } from "next-themes";
import { startTransition, useEffect, useState } from "react";
import {
  HiOutlineMoon as MoonIcon,
  HiOutlineSun as SunIcon,
} from "react-icons/hi";

import styles from "./ThemeSwitch.module.scss";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  if (!mounted) {
    return null;
  }

  if (currentTheme === "dark") {
    return (
      <SunIcon
        className={`${styles.themeIcon} ${styles.sunIcon}`}
        onClick={() => setTheme("light")}
      />
    );
  }

  if (currentTheme === "light") {
    return (
      <MoonIcon
        className={`${styles.themeIcon} ${styles.moonIcon}`}
        onClick={() => setTheme("dark")}
      />
    );
  }
}

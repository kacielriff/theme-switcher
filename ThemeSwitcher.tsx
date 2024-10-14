"use client";

import React from "react";
import styles from "./styles.module.css";
import useThemeSwitcher from "./useThemeSwitcher";

interface ThemeSwitcherProps {
  lightBgColor?: string;
  darkBgColor?: string;
}

export default function ThemeSwitcher({lightBgColor = "#d5d5d5", darkBgColor = "#323334" }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useThemeSwitcher();

  return (
    <input
      type="checkbox"
      name="theme-switcher"
      id="theme-switcher"
      checked={theme === 'dark'}
      onChange={toggleTheme}
      className={styles.themeSwitcher}
      style={{
        "--light-bg-color": lightBgColor,
        "--dark-bg-color": darkBgColor,
      } as React.CSSProperties}
    />
  );
}
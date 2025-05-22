"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => null,
});

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "theme",
}) {
  const [theme, setTheme] = useState(() => {
    // Check if window is defined (browser environment)
    if (typeof window !== "undefined") {
      // Try to get theme from localStorage
      const storedTheme = localStorage.getItem(storageKey);

      if (storedTheme) {
        return storedTheme;
      }

      // If user prefers dark mode
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }

    // Default theme if nothing is found
    return defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove the old theme class
    root.classList.remove("light", "dark");

    // Add the new theme class
    root.classList.add(theme);

    // Save theme to localStorage
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  const value = {
    theme,
    setTheme: (newTheme) => setTheme(newTheme),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

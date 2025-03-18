"use client"
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return theme === "light" ? (
    <Moon onClick={toggleTheme} />
  ) : (
    <Sun  onClick={toggleTheme} />
  );
}

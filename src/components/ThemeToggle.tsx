import { useEffect, useState } from "react";
import { RiMoonLine } from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button
      className="fixed bottom-4 right-4 p-3 rounded-full bg-primary-500 text-white bg-neutral-800 border border-white dark:border-neutral-600 dark:text-white/80 dark:bg-neutral-700"
      onClick={toggleTheme}
    >
      {theme === "light" ? <RiMoonLine /> : <BsFillSunFill />}
    </button>
  );
};

export default ThemeToggle;

// components/Navbar.tsx
import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else if (savedTheme === "light") {
      setIsDarkMode(false);
      document.body.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDark);
      document.body.classList.toggle("dark", prefersDark);
    }
  }, []);

  return (
    <nav className="bg-blue text-white px-6 py-4 dark:bg-dark-blue dark:text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-golden text-xl font-bold dark:text-dark-golden">
          MiSitio
        </div>

        <ul className="flex space-x-6">
          <li>
            <a
              href="#"
              className="hover:text-silver dark:hover:text-dark-silver transition"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-silver dark:hover:text-dark-silver transition"
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-silver dark:hover:text-dark-silver transition"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

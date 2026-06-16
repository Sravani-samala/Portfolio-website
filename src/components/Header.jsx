import { Link } from "react-router-dom";
import LogoLight from "../assets/images/logo.svg";
import LogoDark from "../assets/images/logo-dark.svg";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About me", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);


  return (
    <header className="py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center dark:bg-[#b4b4b4] bg-black dark:bg-opacity-10 bg-opacity-20 py-3 px-5 rounded-[50px]">
          <img src={LogoDark} alt="Logo" className="w-[150px] h-auto dark:hidden block" />
          <img src={LogoLight} alt="Logo" className="w-[150px] h-auto dark:block hidden" />
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-[25px]">
              {navItems.map((item) => (
                <li key={item.name} className="text-center">
                  <a
                    href={item.path}
                    className="text-black dark:text-white text-sm uppercase font-normal font-Jost tracking-wider transition-all duration-300 ease-in-out hover:text-secondary menu-link relative"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className="p-2 rounded-full bg-secondary text-black dark:text-white ml-4"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-20"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              // Close Icon SVG
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon SVG
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`lg:hidden fixed top-0 right-0 h-full w-[40%] bg-[#1a1a1a] transform ${isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out z-10`}
        >
          <ul className="flex flex-col items-center gap-6 pt-24">
            {navItems.map((item) => (
              <li key={item.name} className="text-center">
                <Link
                  to={item.path}
                  className="text-black dark:text-white text-sm uppercase font-normal font-Unbounded tracking-wide transition-all duration-300 ease-in-out hover:text-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

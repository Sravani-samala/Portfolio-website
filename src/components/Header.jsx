import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About me", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center bg-[#b4b4b4] bg-opacity-10 py-3 px-5 rounded-[50px]">
          <img src={Logo} alt="Logo" className="w-[200px] h-auto" />
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-[25px]">
              {navItems.map((item) => (
                <li key={item.name} className="text-center">
                  <Link
                    to={item.path}
                    className="text-white text-sm uppercase font-normal font-Unbounded tracking-wide transition-all duration-300 ease-in-out hover:text-secondary menu-link relative"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
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
          className={`lg:hidden fixed top-0 right-0 h-full w-[40%] bg-[#1a1a1a] transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-10`}
        >
          <ul className="flex flex-col items-center gap-6 pt-24">
            {navItems.map((item) => (
              <li key={item.name} className="text-center">
                <Link
                  to={item.path}
                  className="text-white text-sm uppercase font-normal font-Unbounded tracking-wide transition-all duration-300 ease-in-out hover:text-secondary"
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

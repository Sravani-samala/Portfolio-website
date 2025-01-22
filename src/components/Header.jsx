import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto">
        <div className="flex justify-between bg-[#b4b4b4] bg-opacity-10 py-3 px-5 rounded-[50px]">
          <img src={Logo} alt="Logo" className="w-[200px] h-auto" />
          <ul className="flex items-center justify-between gap-[25px]">
            <li className="text-center">
              <Link
                href="#"
                className="text-white text-sm text-center uppercase font-normal font-Unbounded tracking-wide transition-all duration-300 ease-in-out hover:text-secondary menu-link relative"
              >
                Home
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="#"
                className="text-white text-sm text-center uppercase font-normal font-Unbounded tracking-wide transition-all duration-300 ease-in-out hover:text-secondary menu-link relative"
              >
                About me
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="#"
                className="text-white text-sm text-center uppercase font-normal font-Unbounded tracking-wide transition-all duration-300 ease-in-out hover:text-secondary menu-link relative"
              >
                Services
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="#"
                className="text-white text-sm text-center uppercase font-normal font-Unbounded tracking-wide transition-all duration-300 ease-in-out hover:text-secondary menu-link relative"
              >
                Projects
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="#"
                className="text-white text-sm text-center uppercase font-normal font-Unbounded tracking-wide transition-all duration-300 ease-in-out hover:text-secondary menu-link relative"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

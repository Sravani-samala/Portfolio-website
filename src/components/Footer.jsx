// import react from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#111] py-4 ">
        <p className="text-center text-white mb-0">
          &copy; {currentYear} All rights reserved | Design & Developed by
          Sravani.
        </p>
      </footer>
    </>
  );
};

export default Footer;

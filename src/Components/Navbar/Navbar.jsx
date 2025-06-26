import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`bg-[#2c3e50] fixed z-40 top-0 left-0 right-0 transition-all duration-300 ${
          scrolled ? "py-4" : "py-8"
        }`}
      >
        <div className="container mx-auto w-4/5 text-white flex justify-between items-center">
          <NavLink
            to="home"
          >
            <h1 className="uppercase font-bold text-lg md:text-xl lg:text-3xl">
              start Framework
            </h1>
          </NavLink>
          <ul className="hidden lg:flex md:gap-6">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return `${
                    isActive ? "bg-[#1abd9c]" : ""
                  } p-2 rounded-md font-bold`;
                }}
                onClick={() => {
                  document.title = "About";
                }}
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => {
                  return `${
                    isActive ? "bg-[#1abd9c]" : ""
                  } p-2 rounded-md font-bold`;
                }}
                onClick={() => {
                  document.title = "Portfolio";
                }}
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return `${
                    isActive ? "bg-[#1abd9c]" : ""
                  } p-2 rounded-md font-bold`;
                }}
                onClick={() => {
                  document.title = "Contact";
                }}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center justify-center px-3 pt-1 text-white rounded-md">
            <button onClick={() => setIsOpen(!isOpen)} className="outline-none">
              {!isOpen ? (
                <i class="fa-solid fa-bars text-xl md:text-2xl"></i>
              ) : (
                <i class="fa-solid fa-xmark text-xl md:text-2xl"></i>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${
            isOpen ? "flex" : "hidden"
          } flex-col items-start justify-center text-white font-semibold mt-4 transition-[disply] duration-300 space-y-2`}
        >
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return `${
                isActive ? "bg-[#1abd9c]" : ""
              } w-fit rounded-md p-2 mx-4  text-xs md:text-sm `;
            }}
            onClick={() => {
              document.title = "About";
            }}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => {
              return `${
                isActive ? "bg-[#1abd9c]" : ""
              } w-fit rounded-md p-2 mx-4 text-xs md:text-sm`;
            }}
            onClick={() => {
              document.title = "Portfolio";
            }}
          >
            PORTFOLIO
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => {
              return `${
                isActive ? "bg-[#1abd9c]" : ""
              } w-fit rounded-md p-2 mx-4 text-xs md:text-sm`;
            }}
            onClick={() => {
              document.title = "Contact";
            }}
          >
            CONTACT
          </NavLink>
        </div>
      </nav>
    </>
  );
}

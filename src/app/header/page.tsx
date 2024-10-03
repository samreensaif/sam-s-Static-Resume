"use client"


import { useState } from "react"; // Import useState for state management
import { buttonVariants } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  return (
    <nav className="w-full h-16 bg-orange-400 overflow-hidden flex justify-between items-center px-4 md:px-10">
      {/* Logo or Name */}
      <div id="heading" className="text-red-800 ml-6 md:ml-8 text-xl md:text-2xl">Samreen Saif</div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-10  mr-16">
        <Link
          href={"/"}
          className={`${buttonVariants({
            variant: "outline",
          })} text-lg font-bold transition-colors duration-300 hover:bg-red-800 hover:text-white active:scale-90`}
        >
          Home
        </Link>
        <Link
          href={"/about"}
          className={`${buttonVariants({
            variant: "outline",
          })} text-lg font-bold transition-colors duration-300 hover:bg-red-800 hover:text-white active:scale-90`}
        >
          About
        </Link>
        <Link
          href={"/projects"}
          className={`${buttonVariants({
            variant: "outline",
          })} text-lg font-bold transition-colors duration-300 hover:bg-red-800 hover:text-white active:scale-90`}
        >
          Projects
        </Link>
          <Link
            href={"/contact"}
            className={`${buttonVariants({
              variant: "outline",
            })} text-lg font-bold transition-colors duration-300 hover:bg-red-800 hover:text-white active:scale-90`}
          >
            Contact
          </Link>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="text-2xl mr-8" />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute z-50 top-16 right-0 w-1/4 bg-orange-400 border-2 border-red-900 rounded-l-lg shadow-lg opacity-90">
          <div className="flex flex-col items-left py-2">
            <Link
              href={"/"}
              className={`${buttonVariants({
                variant: "ghost",
              })} mt-5 mb-10 text-xl text-red-900 transition-colors duration-300 hover:bg-red-800 hover:text-white border:none `}
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className={`${buttonVariants({
                variant: "ghost",
              })} mb-10 text-xl text-red-900 transition-colors duration-300 hover:bg-red-800 hover:text-white `}
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              About
            </Link>
            <Link
              href={"/projects"}
              className={`${buttonVariants({
                variant: "ghost",
              })} mb-10 text-xl text-red-900 transition-colors duration-300 hover:bg-red-800 hover:text-white `}
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              Projects
            </Link>
            <Link
              href={"/contact"}
              className={`${buttonVariants({
                variant: "ghost",
              })}  mb-5 text-xl text-red-900 transition-colors duration-300 hover:bg-red-800 hover:text-white `}
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              Contact
            </Link>
            
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
 
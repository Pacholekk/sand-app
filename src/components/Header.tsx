import React, { useState } from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";

interface ButtonData {
  text: string;
  path?: string;
  className?: string;
}

interface HeaderProps {
  buttonsL: ButtonData[];
  buttonsR: ButtonData[];
  restaurantType: string;
}

function Header({ buttonsL, buttonsR, restaurantType }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const allButtons = [...buttonsL, ...buttonsR];

  return (
    <>
      <div className="w-full grid grid-cols-3 items-center bg-[#ffffff]">
        <div className="justify-self-start hidden md:flex space-x-5 pl-10">
          <Buttons buttons={buttonsL} />
        </div>

        <div className="justify-self-start md:hidden pl-6">
          <button
            onClick={toggleMenu}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center col-span-1">
          <Link
            className="font-['Rigot',_sans-serif] text-4xl md:text-[5rem] text-black tracking-wider text-center"
            to={"/"}
          >
            SAND
          </Link>
          <p className="tracking-widest pb-7">{restaurantType}</p>
        </div>

        <div className="justify-self-end hidden md:flex space-x-5 pr-10">
          <Buttons buttons={buttonsR} />
        </div>
      </div>

      <div
        className={`w-full bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4">
          <Buttons
            buttons={allButtons}
            className="flex flex-col space-y-4 items-center"
          />
        </div>
      </div>
    </>
  );
}

export default Header;

import React from "react";
import Buttons from "./Buttons";

// Wykorzystujemy istniejący interfejs z komponentu Buttons
interface ButtonData {
  text: string;
  path?: string;
  className?: string;
}

interface HeaderProps {
  buttons: ButtonData[];
}

function Header({ buttons }: HeaderProps) {
  return (
    <div className="flex justify-center w-full">
      <Buttons buttons={buttons} />
    </div>
  );
}

export default Header;

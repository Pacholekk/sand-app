import "../src/index.css";
import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonData {
  text: string;
  path?: string;
  className?: string;
}
interface ButtonsProps {
  buttons: ButtonData[];
}

export default function Buttons({ buttons }: ButtonsProps) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center space-x-4 p-4">
      {buttons.map((button, index) => (
        <button
          className={button.className}
          key={index}
          onClick={() => button.path && navigate(button.path)}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
}

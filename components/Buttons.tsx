import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

interface ButtonData {
  text: string;
  path?: string;
  className?: string;
}

interface ButtonsProps {
  buttons: ButtonData[];
  className?: string; // Added this prop to pass styling to the container
}

function Buttons({ buttons, className = "" }: ButtonsProps) {
  return (
    <div className={className}>
      {buttons.map((button, index) =>
        button.path ? (
          <Link
            key={index}
            to={button.path}
            className={`uppercase tracking-wider text-sm hover:text-gray-600 transition-colors ${
              button.className || ""
            }`}
          >
            {button.text}
          </Link>
        ) : (
          <span
            key={index}
            className={`uppercase tracking-wider text-sm ${
              button.className || ""
            }`}
          >
            {button.text}
          </span>
        )
      )}
    </div>
  );
}

export default Buttons;

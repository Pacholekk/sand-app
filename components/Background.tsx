import React from "react";
import "../src/index.css"; // Make sure this includes the styles below

interface BackgroundProps {
  imageSrc: string;
}

export default function Background({ imageSrc }: BackgroundProps) {
  return (
    <div className="h-screen w-screen flex items-stretch justify-stretch relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={imageSrc}
          alt="restaurant background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

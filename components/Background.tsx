import React from "react";
import "../src/index.css"; // Make sure this includes the styles below

interface BackgroundProps {
  className?: string;
  text?: string;
  imgSrc: string;
}

export default function Background({
  className,
  text,
  imgSrc,
}: BackgroundProps) {
  return (
    <div className="h-screen w-screen flex items-stretch justify-stretch relative text-center">
      <img src={imgSrc}></img>
      <div className="absolute top-0 left-0 w-full h-full">
        <h1 className={className}>{text}</h1>
      </div>
    </div>
  );
}

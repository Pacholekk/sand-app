import React from "react";

interface MenuPossitionProps {
  title: string;
  desc: React.ReactNode;
  price: string;
}

export default function MenuPossition({
  title,
  desc,
  price,
}: MenuPossitionProps) {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-x-2 mb-4 ml-10">
      <div className="flex flex-col justify-start">
        <h1 className="font-bold text-left text-[20px]">{title}</h1>
        <p className="text-left text-[17px]  ">{desc}</p>
      </div>
      <h2 className="self-start font-bold mr-2.5 mt-4 text-[18px]">{price}</h2>
    </div>
  );
}

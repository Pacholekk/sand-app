import React from "react";
import "../index.css";
import { Outlet } from "react-router-dom";
import Background from "../components/Background";
import Buttons from "../components/Buttons";

export default function MainPage() {
  return (
    <>
      <Background
        imgSrc="/images/bg.jpg"
        text="SAND"
        className="font-['Rigot',_sans-serif] text-[20rem] text-black tracking-wider text-center"
      />

      <div className="absolute inset-0 flex justify-center items-center w-full p-4">
        <Buttons
          buttons={[
            {
              text: "B I S T R O  ",
              path: "/bistro",
              className:
                " text-black text-[1.5rem] px-4 py-2 rounded rounded hover:underline",
            },
            {
              text: "C A F F E  ",
              path: "/caffe",
              className:
                " text-black text-[1.5rem] px-4 py-2 rounded rounded hover:underline",
            },
            {
              text: "B E A C H \u00A0\u00A0 B A R   ",
              path: "/beachbar",
              className:
                " text-black text-[1.5rem] px-4 py-2 rounded rounded hover:underline",
            },
          ]}
        />
      </div>
      <Outlet />
    </>
  );
}

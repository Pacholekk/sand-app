import React from "react";
import "../src/index.css"; // Upewnij się, że zawiera style poniżej
import { Outlet } from "react-router-dom";
import Background from "../components/Background";
import Buttons from "../components/Buttons";
import sandImage from "/images/SAND.jpg"; // Note the direct reference from public

export default function MainPage() {
  return (
    <>
      <Background imageSrc={sandImage} />

      <div className="absolute inset-0 flex justify-center items-center w-full p-4">
        <Buttons
          buttons={[
            {
              text: "B I S T R O",
              path: "/bistro",
              className:
                " text-black px-4 py-2 rounded rounded hover:underline",
            },
            {
              text: "C A F F E",
              path: "/caffe",
              className:
                " text-black px-4 py-2 rounded rounded hover:underline",
            },
            {
              text: "B E A C H \u00A0\u00A0 B A R",
              path: "/beachbar",
              className:
                " text-black px-4 py-2 rounded rounded hover:underline",
            },
          ]}
        />
      </div>
      <Outlet />
    </>
  );
}

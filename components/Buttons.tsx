import React from "react";
import "../src/index.css";

export default function Buttons() {
  return (
    <div className="flex space-x-4 p-4">
      {" "}
      {/* Użyj flex z odstępami i paddingiem */}
      <button className=" text-black px-4 py-2 rounded rounded hover:underline">
        B I S T R O
      </button>
      <button className=" text-black px-4 py-2 rounded hover:underline">
        C A F F E
      </button>
      <button className=" text-black px-4 py-2 rounded  rounded hover:underline">
        B E A C H<span className="inline-block w-2"></span>B A R
      </button>
    </div>
  );
}

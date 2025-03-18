import React from "react";
import "../src/index.css";

export default function Buttons() {
  return (
    <div className="flex space-x-4 p-4">
      {" "}
      {/* Użyj flex z odstępami i paddingiem */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        text1
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        text2
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        text2
      </button>
    </div>
  );
}

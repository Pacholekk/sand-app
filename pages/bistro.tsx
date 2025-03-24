import React from "react";
import Background from "../components/Background";
import BorderPage from "../components/BorderPage";
import sandImage from "/images/SANDs.jpg";

export default function BistroPage() {
  return (
    <>
      <Background imageSrc={sandImage} />

      <div className="absolute inset-0 flex justify-center items-center">
        <BorderPage>
          {/* Tutaj treść strony Bistro */}
          <div>
            <h1 className="text-2xl mb-4">Bistro</h1>
            <p>Witamy w naszym bistro...</p>
          </div>
        </BorderPage>
      </div>
    </>
  );
}

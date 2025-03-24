import React, { ReactNode } from "react";
import Header from "./Header";

interface BorderPageProps {
  children: ReactNode;
}

export default function BorderPage({ children }: BorderPageProps) {
  return (
    <div className="relative w-full max-w-md mx-auto my-8">
      {/* Prosta ramka - usuwamy minHeight: "70vh" i używamy min-h */}
      <div className="border border-black min-h-[600px] min-w-[600px]">
        <div className="border-b border-black min-w-[600px] text-center">
          <Header
            buttons={[
              { text: "O NAS" },
              { text: "MENU" },
              { text: "KONTAKT" },
              { text: "BISTRO" },
              { text: "CAFFE" },
            ]}
          />
        </div>
        {/* Kropka na górze ramki */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-0.5 text-sm"></div>

        {/* Zawartość */}
        <div className="p-8 text-center">{children}</div>
      </div>
    </div>
  );
}

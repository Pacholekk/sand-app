import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MenuContent from "../../components/MenuContent";

export default function Menu() {
  return (
    <div className="flex flex-col min-h-screen overflow-auto">
      <Header
        restaurantType="B I S T R O"
        buttonsL={[
          {
            text: "O NAS",
            className: "text-black px-4 py-2 rounded hover:underline",
            path: "/Bistro",
          },
          {
            text: "MENU",
            className: "text-black px-4 py-2 rounded hover:underline",
            path: "/Bistro/Menu",
          },
          {
            text: "GALERIA",
            className: "text-black px-4 py-2 rounded hover:underline",
          },
        ]}
        buttonsR={[
          {
            text: "KONTAKT",
            className: "text-black px-4 py-2 rounded hover:underline",
          },
          {
            text: "CAFFE",
            className: "text-black px-4 py-2 rounded hover:underline",
          },
          {
            text: "BEACH BAR",
            className: "text-black px-4 py-2 rounded hover:underline",
          },
        ]}
      />
      <main
        className="relative z-10 py-12 overflow-y-auto"
        style={{ backgroundImage: "url('/images/sandBg.jpg')" }}
      >
        <div className="container mx-auto px-4">
          <MenuContent
            type="B I S T R O"
            content="ŚNIADANIA - LUNCH - COCTAILS"
            food1="ŚNIADANIE"
            food2="BAJGLE"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

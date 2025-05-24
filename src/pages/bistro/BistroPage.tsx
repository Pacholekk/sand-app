import React from "react";
import Header from "../../components/Header";
import PageContent from "../../components/PageContent";
import Footer from "../../components/Footer";

export default function BistroPage() {
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
            text: "EVENTY",
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
      <PageContent />
      <Footer />
    </div>
  );
}

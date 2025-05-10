import React from "react";
import AboutUs from "./AboutUs";
import MenuCard from "./MenuCard";
import GalleryCard from "./GalleryCard";
import Contact from "./Contact";

export default function PageContent() {
  return (
    <main
      className="relative z-10 py-12 overflow-y-auto "
      style={{ backgroundImage: "url('/images/sandBg.jpg')" }}
    >
      <div className="container mx-auto px-4">
        <AboutUs
          about1=" SAND BISTRO to wyjątkowe miejsce na kulinarnej mapie, gdzie łączymy
            śródziemnomorskie inspiracje z lokalnymi składnikami. Nasz szef
            kuchni tworzy dania, które zachwycają nie tylko smakiem, ale również
            wyglądem."
          about2=" W SAND BISTRO wierzymy, że jedzenie to nie tylko sposób na
            zaspokojenie głodu, ale również forma sztuki i okazja do spędzenia
            czasu z bliskimi. Dlatego stworzyliśmy miejsce, które łączy
            elegancję z przyjazną atmosferą."
          hours1="9:00 - 20:00"
          hours2="9:00 - 22:00"
          hours3="9:00 - 21:00"
        />
        <MenuCard
          card1Text="Śniadania"
          card1Desc="Przepyszne sycace sniadania"
          card2Text="Dania Główne"
          card2Desc="Przpyszna pizza, buregery, sałatki i wiele więcej"
          card3Text="Desery"
          card3Desc="Przepyszne desery, które sa meguś"
        />
        <GalleryCard />
        <Contact />
      </div>
    </main>
  );
}

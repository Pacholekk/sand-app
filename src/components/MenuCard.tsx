import React from "react";
import { Link } from "react-router-dom";

interface MenuCardProps {
  card1Text: string;
  card1Desc: string;
  card2Text: string;
  card2Desc: string;
  card3Text: string;
  card3Desc: string;
}

export default function MenuCard({
  card1Text,
  card1Desc,
  card2Text,
  card2Desc,
  card3Desc,
  card3Text,
}: MenuCardProps) {
  return (
    <section id="menu" className="container mx-auto px-4">
      <h2 className="text-3xl font-['Rigot',_sans-serif] tracking-wider mb-6">
        MENU
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="h-48 bg-gray-200">
            <img
              src="/images/SANDs.jpg"
              alt="Przystawki"
              className="w-full h-full object-cover"
              onError={(e) =>
                (e.currentTarget.src =
                  "https://via.placeholder.co£m/400x300/f5efe0/333333?text=Przystawki")
              }
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold tracking-wider mb-2">{card1Text}</h3>
            <p className="text-sm text-gray-600">{card1Desc}</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="h-48 bg-gray-200">
            <img
              src="/images/SANDs.jpg"
              alt="Dania główne"
              className="w-full h-full object-cover"
              onError={(e) =>
                (e.currentTarget.src =
                  "https://via.placeholder.com/400x300/f5efe0/333333?text=Dania+Główne")
              }
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold tracking-wider mb-2">{card2Text}</h3>
            <p className="text-sm text-gray-600">{card2Desc}</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="h-48 bg-gray-200">
            <img
              src="/images/SANDs.jpg"
              alt="Desery"
              className="w-full h-full object-cover"
              onError={(e) =>
                (e.currentTarget.src =
                  "https://via.placeholder.com/400x300/f5efe0/333333?text=Desery")
              }
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold tracking-wider mb-2">{card3Text}</h3>
            <p className="text-sm text-gray-600">{card3Desc}</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <Link
          className="px-6 py-2 border border-black tracking-wider hover:bg-black hover:text-white transition-colors"
          to={"/Bistro/Menu"}
        >
          PEŁNE MENU
        </Link>
      </div>
    </section>
  );
}

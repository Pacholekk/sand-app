import React from "react";
import Header from "../components/Header";

import Footer from "../components/Footer";

export default function BistroPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-auto">
      {/* Header section */}
      <Header
        buttonsL={[
          {
            text: "O NAS",
            className: "text-black px-4 py-2 rounded hover:underline",
          },
          {
            text: "MENU",
            className: "text-black px-4 py-2 rounded hover:underline",
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

      {/* Main content */}
      <main
        className="relative z-10 py-12 overflow-y-auto "
        style={{ backgroundImage: "url('/images/sandBg.jpg')" }}
      >
        <div className="container mx-auto px-4">
          {/* About section */}
          <section id="about" className="mb-16">
            <h2 className="text-3xl font-['Rigot',_sans-serif] tracking-wider mb-6">
              O NAS
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  SAND BISTRO to wyjątkowe miejsce na kulinarnej mapie, gdzie
                  łączymy śródziemnomorskie inspiracje z lokalnymi składnikami.
                  Nasz szef kuchni tworzy dania, które zachwycają nie tylko
                  smakiem, ale również wyglądem.
                </p>
                <p>
                  W SAND BISTRO wierzymy, że jedzenie to nie tylko sposób na
                  zaspokojenie głodu, ale również forma sztuki i okazja do
                  spędzenia czasu z bliskimi. Dlatego stworzyliśmy miejsce,
                  które łączy elegancję z przyjazną atmosferą.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl mb-3 tracking-wider">
                  GODZINY OTWARCIA
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Poniedziałek - Czwartek</span>
                    <span>12:00 - 22:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Piątek - Sobota</span>
                    <span>12:00 - 23:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Niedziela</span>
                    <span>12:00 - 21:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Menu section */}
          <section id="menu" className="mb-16">
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
                        "https://via.placeholder.com/400x300/f5efe0/333333?text=Przystawki")
                    }
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold tracking-wider mb-2">
                    ŚNIADANIA
                  </h3>
                  <p className="text-sm text-gray-600">
                    Odkryj nasze wyjątkowe przystawki, które rozbudzą Twoje
                    kubki smakowe.
                  </p>
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
                  <h3 className="font-semibold tracking-wider mb-2">
                    DANIA GŁÓWNE
                  </h3>
                  <p className="text-sm text-gray-600">
                    Nasze flagowe dania łączące tradycję z nowoczesnością.
                  </p>
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
                  <h3 className="font-semibold tracking-wider mb-2">DESERY</h3>
                  <p className="text-sm text-gray-600">
                    Słodkie zakończenie, które pozostawia niezapomniane
                    wrażenia.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="px-6 py-2 border border-black tracking-wider hover:bg-black hover:text-white transition-colors">
                PEŁNE MENU
              </button>
            </div>
          </section>

          {/* Gallery section */}
          <section id="gallery" className="mb-16">
            <h2 className="text-3xl font-['Rigot',_sans-serif] tracking-wider mb-6">
              GALERIA
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="aspect-square bg-gray-200 overflow-hidden"
                >
                  <img
                    src={`/images/gallery/img${item}.jpg`}
                    alt={`Gallery image ${item}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) =>
                      (e.currentTarget.src = `https://via.placeholder.com/300x300/f5efe0/333333?text=Zdjęcie+${item}`)
                    }
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="px-6 py-2 border border-black tracking-wider hover:bg-black hover:text-white transition-colors">
                WIĘCEJ ZDJĘĆ
              </button>
            </div>
          </section>

          {/* Contact section */}
          <section id="contact" className="mb-16">
            <h2 className="text-3xl font-['Rigot',_sans-serif] tracking-wider mb-6">
              KONTAKT
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  Zapraszamy do kontaktu z nami. Odpowiemy na wszystkie pytania
                  dotyczące rezerwacji czy organizacji wydarzeń specjalnych.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="mr-2">📍</span>
                    <span>ul. Rogowo 117, 72-330 Rogowo</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📞</span>
                    <span>+48 123 456 789</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✉️</span>
                    <span>sandrogowo@gmail.com</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#f5efe0] p-6 rounded-lg">
                <h3 className="text-xl mb-3 tracking-wider">REZERWACJA</h3>
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Imię i nazwisko"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      placeholder="Wiadomość"
                      className="w-full p-2 border border-gray-300 rounded h-32"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-2 uppercase tracking-wider hover:bg-gray-800 transition-colors"
                  >
                    Wyślij
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

import React from "react";

export default function Contact() {
  return (
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
  );
}

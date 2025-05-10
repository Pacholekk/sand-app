import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="font-['Rigot',_sans-serif] text-xl mb-2">SAND</h3>
              <p className="text-sm">© 2025 Wszystkie prawa zastrzeżone</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-600">
                Facebook
              </a>
              <a href="#" className="hover:text-gray-600">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

import React from "react";

export default function GalleryCard() {
  return (
    <section id="gallery" className="mb-16 container mx-auto px-4">
      <h2 className="text-3xl font-['Rigot',_sans-serif] tracking-wider mb-6">
        GALERIA
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="aspect-square bg-gray-200 overflow-hidden">
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
  );
}

import React from "react";

interface AboutUsProps {
  about1: string;
  about2: string;
  hours1: string;
  hours2?: string;
  hours3?: string;
}

export default function AboutUs({
  about1,
  about2,
  hours1,
  hours2,
  hours3,
}: AboutUsProps) {
  return (
    <section id="about" className="mb-16 container mx-auto px-4">
      <h2 className="text-3xl font-['Rigot',_sans-serif] tracking-wider mb-6">
        O NAS
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">{about1}</p>
          <p>{about2}</p>
        </div>
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-xl mb-3 tracking-wider">GODZINY OTWARCIA</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Poniedziałek - Czwartek</span>
              <span>{hours1}</span>
            </li>
            <li className="flex justify-between">
              <span>Piątek - Sobota</span>
              <span>{hours2}</span>
            </li>
            <li className="flex justify-between">
              <span>Niedziela</span>
              <span>{hours3}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

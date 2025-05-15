import React from "react";
import MenuPossition from "./MenuPossition";

interface MenuContentProps {
  type: string;
  content: string;
  food1: string;
  food2: string;
}

export default function MenuContent({
  type,
  content,
  food1,
  food2,
}: MenuContentProps) {
  return (
    <>
      <section className="max-w-6xl mx-auto border border-black">
        <div className="flex flex-col justify-center">
          <div>
            <h1 className="font-['Rigot',_sans-serif] text-4xl md:text-[5rem] text-black tracking-wider text-center">
              SAND
            </h1>
            <h2 className="text-center">{type}</h2>
            <p className="text-center text-sm mt-1">{content}</p>
            <hr className="w-full max-w-[1150px] mx-auto mt-2 border-black" />
            <hr className="w-full max-w-[1150px] mx-auto mt-5 border-black" />
          </div>
        </div>

        <div className="relative gap-10">
          <div className="absolute left-1/2 top-0 h-full w-px bg-black -translate-x-1/2"></div>

          <div className="grid grid-cols-[auto_1fr_auto_1fr]  pt-4">
            <div className="flex items-center justify-end">
              <p className="-rotate-90 font-bold tracking-widest  ml-[-50px] flex items-center text-2xl">
                {food1}
              </p>
            </div>

            <div className="pr-8">
              <MenuPossition
                title="BUŁKA CLASSIC"
                desc="Zapytaj nas co dzisiaj mamy dostępnego w witrynie"
                price="12.00 zł"
              />
              <MenuPossition
                title="OMLET CLASSIC"
                desc={
                  <>
                    Omlet z 3 jajek, mix warzyw,
                    <br /> mix sałat z sosem vinaigrette,
                    <br /> bułka pszenna / żytnia, masło.{" "}
                  </>
                }
                price="26.00 zł"
              />
              <MenuPossition
                title="DLA DWOJGA "
                desc={
                  <>
                    Jajecznica z 5 jaj, <br />
                    bułki żytnie / pszenne (4 szt), masło, <br />
                    ser żółty, szynka wieprzowa, <br />
                    mix sałat z sosem vinaigrette,
                    <br /> mix warzyw, sos holenderski,
                    <br />
                    kiełbaski wieprzowe (4 szt), dżem, ketchup, musztarda.{" "}
                  </>
                }
                price="49.00 zł"
              />
              <MenuPossition
                title="PANCAKE "
                desc="4 puszyste pankejki z owocami sezonowymi i syropem klonowym.  "
                price="25.00 zł"
              />
            </div>

            <div className="flex items-center justify-center ml-[-30px]">
              <p className="-rotate-90 font-bold tracking-widest flex items-center mr-auto text-2xl">
                {food2}
              </p>
            </div>

            <div className="grid">
              <MenuPossition
                title="Z TUŃCZYKIEM I MAJONEZOWYM "
                desc={
                  <>
                    Bajgiel, tuńczyk, sos majonezowy, <br />
                    szalotka i kapary piklowane, sałata.{" "}
                  </>
                }
                price="32.00 zł"
              />
              <MenuPossition
                title="Z JAJKIEM SADZONYM I BEKONEM"
                desc={
                  <>
                    Bajgiel, sos majonezowy, sałata, bekon, <br />
                    jajko sadzone, kiełki.{" "}
                  </>
                }
                price="32.00 zł"
              />
              <MenuPossition
                title="Z KURCZAKIEM W SOSIE MIODOWO MUSZTARDOWYM"
                desc={
                  <>
                    Bajgiel, filet z kurczaka, <br />
                    sos miodowo-musztardowy, <br />
                    masło orzechowe, ser cheddar, <br />
                    bekon, pikle.{" "}
                  </>
                }
                price="35.00 zł"
              />
            </div>
          </div>
        </div>
        <div>
          <hr className="w-full max-w-[1150px] mx-auto mt-2 border-black" />
          <hr className="w-full max-w-[1150px] mx-auto mt-5 border-black" />
        </div>
        <div className="mt-8 px-4 mb-10 text-center">
          <p className="text-sm font-medium mb-1">
            ZAPRASZAMY DO SKŁADANIA ZAMÓWIEŃ PRZY BARZE.
          </p>
          <p className="text-sm font-medium mb-1">
            ZAPYTAJ NAS O ALERGENY W POSZCZEGÓLNYCH DANIACH.
          </p>
          <p className="text-sm  font-bold">
            OFERTĘ ŚNIADANIOWĄ ORAZ BAJGLE SERWUJEMY DO GODZ. 12:00
          </p>
        </div>
      </section>
    </>
  );
}

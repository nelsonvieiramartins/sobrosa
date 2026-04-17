import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function QuemSomosHero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-52 lg:pb-40 px-6 overflow-hidden bg-[#0A0A0A]">
      {/* Decorative background text */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none select-none flex items-center justify-end overflow-hidden">
        <p
          className="font-tanker text-[30vw] leading-none uppercase"
          style={{ WebkitTextStroke: "1px rgba(255,140,0,0.4)", color: "transparent" }}
        >
          1994
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="inline-block px-3 py-1 border text-[10px] font-bold uppercase tracking-[0.4em] mb-8" style={{ borderColor: "#FF8C00", color: "#FF8C00", backgroundColor: "rgba(255,140,0,0.1)" }}>
              Fundada em Goiânia
            </span>
            <h1 className="font-tanker text-6xl md:text-8xl lg:text-9xl leading-[0.9] uppercase mb-10 text-white">
              Tradição que veste o esporte há{" "}
              <span style={{ color: "#FF8C00" }}>30 anos.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              A SobrOsa nasceu com um propósito claro: elevar o padrão do material esportivo no Centro-Oeste. Com sede em Goiânia, consolidamos nossa história através de três décadas de evolução constante, transformando tecidos em mantos que carregam a identidade de equipes em todo o Brasil.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={200}>
            <div className="relative group">
              <div
                className="absolute -inset-4 border translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"
                style={{ borderColor: "rgba(255,140,0,0.3)" }}
              />
              <div className="relative z-10 aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800"
                  alt="Equipe SobrOsa"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

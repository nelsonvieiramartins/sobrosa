import { Icon } from "@iconify/react";
import Image from "next/image";

const features = [
  {
    icon: "lucide:shield-check",
    title: "Qualidade Total",
    desc: "Inspecionamos cada peça antes do envio.",
  },
  {
    icon: "lucide:truck",
    title: "Envio Rápido",
    desc: "Logística otimizada para todo o Brasil.",
  },
  {
    icon: "lucide:zap",
    title: "Tecnologia",
    desc: "Sublimação digital de alta definição.",
  },
];

export default function ProductionBanner() {
  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 hidden lg:block">
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800"
          alt="Factory Detail"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16 relative">
        {/* Left content */}
        <div className="lg:w-2/3">
          <h2 className="font-tanker text-[50px] md:text-[80px] leading-none text-white uppercase mb-8">
            Produção 100% <br />
            <span style={{ color: "#FF8C00" }}>Própria</span> em Goiânia
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl">
            Nossa fábrica no coração do Brasil garante controle total de
            qualidade, desde a tecelagem até o acabamento final. Sem
            terceirização, sem surpresas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <Icon
                  icon={f.icon}
                  className="text-3xl shrink-0"
                  style={{ color: "#FF8C00" }}
                />
                <div>
                  <p className="text-white font-bold uppercase text-sm tracking-widest mb-2">
                    {f.title}
                  </p>
                  <p className="text-xs text-gray-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="lg:w-1/3 flex justify-center w-full">
          <a href="#contato" className="group relative w-full">
            <div
              className="absolute -inset-1 opacity-20 blur group-hover:opacity-40 transition"
              style={{ backgroundColor: "#FF8C00" }}
            />
            <div className="relative bg-white p-10 text-center">
              <p className="font-tanker text-3xl text-black uppercase mb-4 italic">
                Quer conhecer <br />nosso processo?
              </p>
              <span className="bg-black text-white px-8 py-3 font-bold uppercase text-xs tracking-widest inline-block">
                Agendar Visita
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Decorative text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.03] pointer-events-none select-none">
        <p className="font-tanker text-[200px] leading-none uppercase outline-text-white">
          CENTRO-OESTE PERFORMANCE FACTORY
        </p>
      </div>
    </section>
  );
}

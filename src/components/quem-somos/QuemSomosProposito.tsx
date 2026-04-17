"use client";
import { Icon } from "@iconify/react";
import Reveal from "@/components/Reveal";

const values = [
  {
    icon: "lucide:star",
    title: "Exclusividade",
    text: "Cada cliente merece um projeto único. Fugimos do comum para criar o extraordinário.",
  },
  {
    icon: "lucide:check-circle",
    title: "Qualidade Imbatível",
    text: "Rigor em cada ponto da costura e pixel da impressão. Perfeição é o nosso padrão.",
  },
  {
    icon: "lucide:clock",
    title: "Compromisso",
    text: "Respeito absoluto aos prazos e à confiança depositada. Pontualidade é nossa marca.",
  },
  {
    icon: "lucide:heart",
    title: "Paixão pelo Esporte",
    text: "Entendemos a emoção de quem veste a camisa. Vivemos o esporte junto com você.",
  },
];

export default function QuemSomosProposito() {
  return (
    <section className="py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Mission & Vision */}
          <div className="lg:col-span-4">
            <Reveal>
              <h3 className="font-tanker text-5xl uppercase mb-8 text-white">
                Nosso <span style={{ color: "#FF8C00" }}>Propósito</span>
              </h3>
              <div className="space-y-12">
                <div className="pl-8 border-l-2" style={{ borderColor: "#FF8C00" }}>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "#FF8C00" }}>
                    Missão
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Proporcionar excelência em uniformes personalizados através de design inovador e tecnologia avançada, fortalecendo a identidade e o orgulho de nossos clientes.
                  </p>
                </div>
                <div className="pl-8 border-l-2" style={{ borderColor: "#FF8C00" }}>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "#FF8C00" }}>
                    Visão
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Ser a principal referência nacional em personalização esportiva, reconhecida pela inovação constante e pelo atendimento excepcional que humaniza cada entrega.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Value cards */}
          <div className="lg:col-span-8">
            <Reveal delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="group p-10 cursor-default transition-all duration-300"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FF8C00")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)")}
                  >
                    <Icon
                      icon={v.icon}
                      className="text-4xl mb-6 transition-colors duration-300 group-hover:text-black"
                      style={{ color: "#FF8C00" }}
                    />
                    <h5 className="font-tanker text-2xl uppercase mb-4 text-white group-hover:text-black transition-colors duration-300">
                      {v.title}
                    </h5>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-black/80 transition-colors duration-300">
                      {v.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

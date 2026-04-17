import Image from "next/image";
import Reveal from "@/components/Reveal";

const cards = [
  {
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
    label: "Maquinário Moderno",
    alt: "Maquinário de sublimação",
  },
  {
    src: "https://images.unsplash.com/photo-1454165833767-027ff33027ef?q=80&w=800",
    label: "Fibras Técnicas",
    alt: "Tecidos técnicos esportivos",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800",
    label: "Controle de Qualidade",
    alt: "Controle de qualidade",
  },
];

export default function QuemSomosTecnologia() {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="text-center mb-24">
            <h2 className="font-tanker text-5xl md:text-7xl uppercase mb-6 text-white">
              Tecnologia de ponta e <br />
              <span style={{ color: "#FF8C00" }}>Sublimação Digital.</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Nossa estrutura conta com tecnologia de sublimação digital de última geração, garantindo cores vibrantes que não desbotam e nitidez absoluta em cada detalhe.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div key={card.label} className="group relative h-[500px] overflow-hidden">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
                <div className="absolute bottom-8 left-8">
                  <h4 className="font-tanker text-3xl uppercase text-white">{card.label}</h4>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

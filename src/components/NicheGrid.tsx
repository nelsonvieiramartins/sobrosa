import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const niches = [
  {
    id: "ciclismo",
    slug: "ciclismo",
    title: "Ciclismo",
    description: "Tecnologia Dry-Fit, proteção UV e modelagem aerodinâmica.",
    icon: "lucide:bike",
    image: "/img/ciclismo.jpg",
  },
  {
    id: "tiro",
    slug: "tiro-esportivo",
    title: "Tiro Esportivo",
    description: "Conforto tático, tecidos reforçados e alta mobilidade.",
    icon: "lucide:target",
    image: "/img/tiro.jpg",
  },
  {
    id: "pesca",
    slug: "pesca",
    title: "Pesca",
    description: "Proteção solar máxima e secagem ultrarrápida.",
    icon: "lucide:anchor",
    image: "/img/pesca.jpeg",
  },
  {
    id: "futebol",
    slug: "futebol",
    title: "Futebol",
    description: "Uniformes completos para times amadores e profissionais.",
    icon: "lucide:trophy",
    image: "/img/futebol.jpg",
  },
];

export default function NicheGrid() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-tanker text-5xl md:text-6xl uppercase mb-4">
            Escolha seu Nicho
          </h2>
          <p className="text-gray-500 font-medium tracking-wide">
            Soluções especializadas para cada modalidade esportiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {niches.map((niche) => (
            <Link
              key={niche.id}
              href={`/categorias/${niche.slug}`}
              className="group relative h-[450px] overflow-hidden bg-black"
            >
              <Image
                src={niche.image}
                alt={niche.title}
                fill
                className="object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                <div>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#FF8C00" }}
                  >
                    <Icon icon={niche.icon} className="text-black text-2xl" />
                  </div>
                  <h3 className="font-tanker text-4xl text-white uppercase">
                    {niche.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-2 max-w-xs">
                    {niche.description}
                  </p>
                </div>
                <span
                  className="font-bold uppercase text-xs tracking-widest border-b-2 pb-1"
                  style={{ color: "#FF8C00", borderColor: "#FF8C00" }}
                >
                  Ver Coleção
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

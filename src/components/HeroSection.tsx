import { Icon } from "@iconify/react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center px-6 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1920"
          alt="Athlete Action"
          fill
          className="object-cover opacity-60 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-sm" style={{ backgroundColor: "#FF8C00" }}>
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-black">
              Disponível para todo Brasil
            </p>
          </div>

          <h1 className="font-tanker text-[60px] md:text-[90px] lg:text-[110px] leading-[0.9] uppercase text-white mb-8 tracking-tight">
            Uniformes de Alta{" "}
            <br />
            <span style={{ color: "#FF8C00" }}>Performance</span> sob Medida
          </h1>

          <p className="text-xl text-gray-300 mb-10 max-w-2xl font-medium">
            Criamos a identidade visual completa do seu time com tecnologia
            têxtil de elite. Design exclusivo, conforto térmico e durabilidade
            extrema.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="#"
              className="w-full sm:w-auto text-black px-12 py-6 font-bold uppercase text-sm tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-3"
              style={{ backgroundColor: "#FF8C00" }}
            >
              Solicitar Orçamento{" "}
              <Icon icon="lucide:chevron-right" />
            </a>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <Image
                    key={i}
                    src={`https://i.pravatar.cc/100?u=${i}`}
                    alt={`Atleta ${i}`}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full border-2 border-black object-cover"
                  />
                ))}
              </div>
              <p className="text-white text-xs font-bold uppercase tracking-wider">
                +15.000 Atletas{" "}
                <br />
                <span className="opacity-60">Vestindo SobrOsa</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

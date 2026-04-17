import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function QuemSomosEstudio() {
  return (
    <section className="py-32 px-6 bg-[#0F0F0F]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Image grid */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=400"
                  alt="Design esportivo"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <div className="relative aspect-square overflow-hidden mt-12">
                <Image
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400"
                  alt="Criação de uniforme"
                  fill
                  className="object-cover"
                  style={{ boxShadow: "0 0 20px rgba(255,140,0,0.2)" }}
                />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=400"
                  alt="Estúdio criativo"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=400"
                  alt="Processo criativo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <Reveal delay={200}>
            <h2 className="font-tanker text-5xl md:text-7xl uppercase mb-8 leading-tight text-white">
              Onde a sua ideia <br />
              <span style={{ color: "#FF8C00" }}>ganha identidade.</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-10">
              Acreditamos que cada projeto é único. Por isso, mantemos um estúdio de criação exclusivo, composto por designers especialistas em design esportivo. Aqui, não trabalhamos com modelos prontos ou &ldquo;copia e cola&rdquo;. Cada linha, cor e textura é pensada do zero para que o seu uniforme seja uma peça de arte exclusiva.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="w-12 h-12 rounded-full border-2 border-[#0F0F0F] flex items-center justify-center font-bold text-black text-sm"
                    style={{ backgroundColor: "#FF8C00" }}
                  >
                    {n}
                  </div>
                ))}
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-white">
                Processo 100% Autoral
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

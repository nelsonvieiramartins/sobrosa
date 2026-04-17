import Image from "next/image";
import type { Category } from "@/lib/categories";

export default function CategoryModels({ category }: { category: Category }) {
  return (
    <section className="py-24 px-6 bg-[#0F0F0F]">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#FF8C00" }}>
            Modelos Disponíveis
          </p>
          <h2 className="font-tanker text-5xl md:text-6xl uppercase text-white leading-none">
            Escolha seu <span style={{ color: "#FF8C00" }}>Modelo</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.models.map((model, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden relative mb-6 bg-[#1a1a1a]">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div
                  className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform flex justify-between items-center"
                  style={{ backgroundColor: "#0A0A0A" }}
                >
                  <span className="text-xs font-bold uppercase text-white tracking-widest">
                    Solicitar Orçamento
                  </span>
                  <span style={{ color: "#FF8C00" }}>→</span>
                </div>
              </div>
              <h3 className="font-bold text-lg uppercase text-white mb-1">{model.name}</h3>
              <p className="text-sm" style={{ color: "#FF8C00" }}>{model.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

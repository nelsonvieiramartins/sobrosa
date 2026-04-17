import { Icon } from "@iconify/react";
import Image from "next/image";
import type { Category } from "@/lib/categories";

export default function CategoryHero({ category }: { category: Category }) {
  return (
    <section className="relative h-screen flex items-center pt-20 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src={category.heroImage}
          alt={category.label}
          fill
          className="object-cover opacity-60 scale-105"
          style={category.heroImageFlip ? { transform: "scaleX(-1)" } : undefined}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10">
        <div className="max-w-3xl">
          <p className="font-bold uppercase tracking-[0.3em] mb-6 text-sm" style={{ color: "#FF8C00" }}>
            Performance Sob Medida
          </p>
          <h1 className="font-tanker text-[70px] md:text-[90px] lg:text-[100px] leading-[0.9] uppercase mb-8 text-white">
            {category.heroTitle}
            <br />
            <span style={{ color: "#FF8C00" }}>{category.heroHighlight}</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-xl">
            {category.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="#orcamento"
              className="text-black px-12 py-6 font-bold uppercase text-sm tracking-widest hover:bg-white transition-colors"
              style={{ backgroundColor: "#FF8C00" }}
            >
              Solicitar Kit Equipe
            </a>
            <a
              href="#vantagens"
              className="border border-white/20 px-12 py-6 font-bold uppercase text-sm tracking-widest hover:text-orange-400 transition-all"
              style={{ color: "white" }}
            >
              Ver Tecnologia
            </a>
          </div>
        </div>
      </div>

      {/* Decorative text */}
      <div className="absolute bottom-10 right-10 hidden lg:block opacity-10 pointer-events-none select-none">
        <p className="font-tanker text-[120px] leading-none uppercase" style={{ WebkitTextStroke: "1px rgba(255,140,0,0.4)", color: "transparent" }}>
          {category.heroDecorText}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] text-white uppercase tracking-widest">Scroll</span>
        <Icon icon="lucide:chevron-down" className="text-white text-xl animate-bounce" />
      </div>
    </section>
  );
}

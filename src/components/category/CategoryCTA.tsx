import { Icon } from "@iconify/react";
import type { Category } from "@/lib/categories";

export default function CategoryCTA({ category }: { category: Category }) {
  return (
    <section id="orcamento" className="py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-6" style={{ color: "#FF8C00" }}>
              Próximo passo
            </p>
            <h2 className="font-tanker text-6xl md:text-7xl uppercase text-white leading-none mb-8">
              Monte seu <span style={{ color: "#FF8C00" }}>Kit</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Fale com nossa equipe e receba um orçamento personalizado para{" "}
              <strong className="text-white">{category.label}</strong> em até 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/556299999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-10 py-5 font-bold uppercase text-sm tracking-widest text-black transition-colors hover:bg-white"
                style={{ backgroundColor: "#FF8C00" }}
              >
                <Icon icon="lucide:message-circle" />
                WhatsApp Agora
              </a>
              <a
                href="/#contato"
                className="flex items-center justify-center gap-3 border border-white/20 px-10 py-5 font-bold uppercase text-sm tracking-widest text-white hover:border-[#FF8C00] transition-all"
              >
                <Icon icon="lucide:file-text" />
                Preencher Formulário
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {[
              { value: "+500", label: "Equipes Atendidas" },
              { value: "20 dias", label: "Prazo de Entrega" },
              { value: "5 anos", label: "No Mercado" },
              { value: "100%", label: "Produção Própria" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-white/10 p-8 hover:border-orange-500 transition-colors"
              >
                <p className="font-tanker text-5xl mb-2" style={{ color: "#FF8C00" }}>
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Icon } from "@iconify/react";
import type { Category } from "@/lib/categories";

export default function CategoryAdvantages({ category }: { category: Category }) {
  return (
    <section id="vantagens" className="py-32 px-6 bg-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-20 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#FF8C00" }}>
            Por que SobrOsa
          </p>
          <h2 className="font-tanker text-5xl md:text-6xl uppercase text-white">
            3 Vantagens <span style={{ color: "#FF8C00" }}>Estratégicas</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {category.advantages.map((adv, i) => (
            <div key={i}>
              <div
                className="w-16 h-16 flex items-center justify-center mb-8 border"
                style={{ backgroundColor: "rgba(255,140,0,0.08)", borderColor: "#FF8C00" }}
              >
                <Icon icon={adv.icon} className="text-3xl" style={{ color: "#FF8C00" }} />
              </div>
              <h3 className="font-tanker text-3xl uppercase mb-6 text-white">
                {adv.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

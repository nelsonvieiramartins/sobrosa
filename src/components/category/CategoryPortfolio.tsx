import Image from "next/image";
import type { Category } from "@/lib/categories";

export default function CategoryPortfolio({ category }: { category: Category }) {
  return (
    <section id="portfolio" className="py-24 px-6 bg-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="font-tanker text-5xl md:text-6xl uppercase leading-none text-white">
              Portfólio <span style={{ color: "#FF8C00" }}>Pro Series</span>
            </h2>
            <p className="text-gray-400 mt-6 max-w-lg">
              Alguns dos designs exclusivos criados para as maiores equipes do Brasil.
            </p>
          </div>
          <a
            href="#orcamento"
            className="font-bold uppercase text-xs tracking-widest pb-2 border-b-2 whitespace-nowrap"
            style={{ color: "#FF8C00", borderColor: "#FF8C00" }}
          >
            Solicitar o Seu
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {category.portfolio.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-6 bg-[#111] relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                />
                <div
                  className="absolute bottom-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                  style={{
                    backgroundColor: item.badgeColor,
                    color: item.badgeColor === "#fff" ? "#0A0A0A" : "#fff",
                  }}
                >
                  {item.badge}
                </div>
              </div>
              <h4 className="font-bold uppercase tracking-wider text-white">{item.name}</h4>
              <p className="text-xs mt-1 uppercase tracking-widest" style={{ color: "#FF8C00" }}>
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

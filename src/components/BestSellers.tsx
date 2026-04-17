import { Icon } from "@iconify/react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Jersey Pro Elite Orange",
    category: "Performance Road",
    price: "R$ 189",
    badge: "Esgotando",
    badgeStyle: { backgroundColor: "#0A0A0A", color: "#fff" },
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600",
  },
  {
    id: 2,
    name: "Camisa Tática Hunter",
    category: "Tiro Esportivo",
    price: "R$ 215",
    badge: "Destaque",
    badgeStyle: { backgroundColor: "#FF8C00", color: "#0A0A0A" },
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=600",
  },
  {
    id: 3,
    name: "Windbreaker Aero",
    category: "Ciclismo Outdoor",
    price: "R$ 299",
    badge: "Lançamento",
    badgeStyle: { backgroundColor: "#0A0A0A", color: "#fff" },
    image: "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?q=80&w=600",
  },
];

export default function BestSellers() {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4 text-gray-400">
              Os favoritos do mês
            </p>
            <h2 className="font-tanker text-6xl uppercase leading-none">
              Best Sellers
            </h2>
          </div>
          <a
            href="#"
            className="pb-2 border-b-2 font-bold uppercase text-sm tracking-widest flex items-center gap-2 group"
            style={{ borderColor: "#FF8C00" }}
          >
            Ver Loja Completa{" "}
            <Icon
              icon="lucide:arrow-right"
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden relative mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute top-4 left-4 text-[10px] font-bold uppercase px-3 py-1"
                  style={product.badgeStyle}
                >
                  {product.badge}
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-black text-white p-4 translate-y-full group-hover:translate-y-0 transition-transform flex justify-between items-center">
                  <span className="text-xs font-bold uppercase">
                    Adicionar ao Carrinho
                  </span>
                  <Icon icon="lucide:shopping-cart" />
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg uppercase">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="font-tanker text-2xl">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

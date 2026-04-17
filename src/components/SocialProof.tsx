"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const testimonials = [
  {
    text: "O melhor uniforme de ciclismo que já usei. Respirabilidade nota 10 e o design superou todas as expectativas do nosso grupo de pedal.",
    name: "Ana Costa",
    team: "Equipe Pedala GO",
    accentStyle: { borderColor: "#FF8C00" },
  },
  {
    text: "A durabilidade das peças de tiro esportivo é incomparável. Resiste bem ao uso tático pesado no campo de tiro.",
    name: "João Silva",
    team: "Clube de Tiro Sniper",
    accentStyle: { borderColor: "#0A0A0A" },
  },
  {
    text: "Uniforme de pesca com qualidade excepcional. A proteção UV e o tecido de secagem rápida fazem toda a diferença nas longas jornadas no rio.",
    name: "Carlos Mendes",
    team: "Pesca Esportiva Pantanal",
    accentStyle: { borderColor: "#FF8C00" },
  },
  {
    text: "Nosso time ficou impressionado com o nível de personalização. Cada detalhe do brasão foi reproduzido com perfeição na sublimação.",
    name: "Roberto Alves",
    team: "EC Goiás Sub-20",
    accentStyle: { borderColor: "#0A0A0A" },
  },
  {
    text: "Uniforme corporativo entregue no prazo e com acabamento impecável. A equipe toda adorou o resultado final.",
    name: "Fernanda Lima",
    team: "Grupo Empresarial Centro-Oeste",
    accentStyle: { borderColor: "#FF8C00" },
  },
];

const brands = [
  { icon: "simple-icons:nike", label: "Nike" },
  { icon: "simple-icons:adidas", label: "Adidas" },
  { icon: "simple-icons:puma", label: "Puma" },
  { icon: "simple-icons:underarmour", label: "Under Armour" },
  { icon: "simple-icons:newbalance", label: "New Balance" },
  { icon: "simple-icons:reebok", label: "Reebok" },
  { icon: "simple-icons:asics", label: "Asics" },
  { icon: "simple-icons:fila", label: "Fila" },
  { icon: "simple-icons:mizuno", label: "Mizuno" },
];

export default function SocialProof() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-24 px-6 bg-[#F8F8F8]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-12 items-center">
          {/* Testimonials carousel */}
          <div className="col-span-12 lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">
              Testemunhos
            </p>
            <h2 className="font-tanker text-5xl uppercase leading-tight mb-8">
              A Confiança de <br />Quem Vence
            </h2>

            <div className="relative">
              {/* Card */}
              <div
                key={current}
                className="bg-white p-8 border-l-4 shadow-sm"
                style={{ ...t.accentStyle, minHeight: "220px" }}
              >
                <div className="flex gap-1 mb-4" style={{ color: "#FF8C00" }}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Icon key={s} icon="mdi:star" />
                  ))}
                </div>
                <p className="italic text-gray-600 mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-sm uppercase">{t.name}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      {t.team}
                    </p>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className="w-2 h-2 rounded-full transition-all duration-300"
                      style={{ backgroundColor: i === current ? "#FF8C00" : "#D1D5DB" }}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 border border-black/10 flex items-center justify-center hover:border-orange-400 hover:text-orange-400 transition-colors"
                  >
                    <Icon icon="lucide:arrow-left" className="text-sm" />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 border border-black/10 flex items-center justify-center hover:border-orange-400 hover:text-orange-400 transition-colors"
                  >
                    <Icon icon="lucide:arrow-right" className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Logos */}
          <div className="col-span-12 lg:col-span-7">
            <div className="bg-white p-12">
              <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-12">
                Marcas e Clubes que confiam
              </p>
              <div className="grid grid-cols-3 gap-10 items-center">
                {brands.map((brand) => (
                  <div
                    key={brand.label}
                    className="flex items-center justify-center opacity-30 hover:opacity-60 transition-opacity"
                  >
                    <Icon
                      icon={brand.icon}
                      className="w-32 h-12"
                      style={{ filter: "grayscale(1)" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

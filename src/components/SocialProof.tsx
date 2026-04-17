import { Icon } from "@iconify/react";

const testimonials = [
  {
    text: "O melhor uniforme de ciclismo que já usei. Respirabilidade nota 10 e o design superou todas as expectativas do nosso grupo de pedal.",
    name: "Ana Costa",
    team: "Equipe Pedala GO",
    borderColor: "border-orange-500",
    accentStyle: { borderColor: "#FF8C00" },
  },
  {
    text: "A durabilidade das peças de tiro esportivo é incomparável. Resiste bem ao uso tático pesado no campo de tiro.",
    name: "João Silva",
    team: "Clube de Tiro Sniper",
    accentStyle: { borderColor: "#0A0A0A" },
  },
];

const brands = [
  { icon: "simple-icons:nike", label: "Nike" },
  { icon: "simple-icons:adidas", label: "Adidas" },
  { icon: "simple-icons:puma", label: "Puma" },
  { icon: "simple-icons:underarmour", label: "Under Armour" },
  { icon: "simple-icons:newbalance", label: "New Balance" },
  { icon: "simple-icons:reebok", label: "Reebok" },
];

export default function SocialProof() {
  return (
    <section className="py-24 px-6 bg-[#F8F8F8]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-12 items-center">
          {/* Testimonials */}
          <div className="col-span-12 lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">
              Testemunhos
            </p>
            <h2 className="font-tanker text-5xl uppercase leading-tight mb-8">
              A Confiança de <br />Quem Vence
            </h2>

            <div className="space-y-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white p-8 border-l-4 shadow-sm"
                  style={t.accentStyle}
                >
                  <div className="flex gap-1 mb-4" style={{ color: "#FF8C00" }}>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Icon key={s} icon="mdi:star" />
                    ))}
                  </div>
                  <p className="italic text-gray-600 mb-6">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                    <div>
                      <p className="font-bold text-sm uppercase">{t.name}</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        {t.team}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Logos */}
          <div className="col-span-12 lg:col-span-7">
            <div className="bg-white p-12">
              <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-12">
                Marcas e Clubes que confiam
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center">
                {brands.map((brand) => (
                  <div key={brand.label} className="flex items-center justify-center opacity-30 hover:opacity-50 transition-opacity">
                    <Icon
                      icon={brand.icon}
                      className="w-24 h-10"
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

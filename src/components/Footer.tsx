"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const modalidades = [
  { label: "Ciclismo", href: "/categorias/ciclismo" },
  { label: "Tiro Esportivo", href: "/categorias/tiro-esportivo" },
  { label: "Pesca", href: "/categorias/pesca" },
  { label: "Futebol", href: "/categorias/futebol" },
  { label: "Corrida", href: "/categorias/corrida" },
  { label: "Eventos / Promocional", href: "/categorias/eventos-promocional" },
  { label: "Corporativa", href: "/categorias/corporativa" },
  { label: "Personalizado", href: "/#contato" },
];

const institucional = [
  { label: "Início", href: "/" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Produção", href: "/#producao" },
  { label: "Contato", href: "/#contato" },
];

const socialIcons = ["lucide:instagram", "lucide:twitter", "lucide:facebook"];

export default function Footer({ hideNewsletter = false }: { hideNewsletter?: boolean }) {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto">
        {/* Newsletter */}
        {!hideNewsletter && (
          <div className="grid grid-cols-12 gap-8 items-center pb-20 border-b border-white/10">
            <div className="col-span-12 lg:col-span-6">
              <h3 className="font-tanker text-5xl uppercase mb-4">Junte-se ao Time</h3>
              <p className="text-gray-400 max-w-md">
                Receba lançamentos exclusivos e promoções diretamente no seu e-mail.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <form className="flex border-b border-white/30 focus-within:border-orange-400 transition-colors pb-4">
                <input
                  type="email"
                  placeholder="SEU MELHOR E-MAIL"
                  className="bg-transparent border-none outline-none w-full font-bold uppercase text-sm tracking-widest placeholder:text-white/20"
                />
                <button
                  type="submit"
                  className="text-black px-8 py-3 font-bold uppercase text-xs tracking-widest"
                  style={{ backgroundColor: "#FF8C00" }}
                >
                  Assinar
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-8">
              <Image
                src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/265bed1b-7a83-4b68-87a9-fbb24516aae4/1776286409420-e36e05eb/08ba2d79ec884cbf93d314a2b169da0f.png"
                alt="SobrOsa Logo"
                width={128}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Elevando o padrão do vestuário esportivo com inovação e autenticidade diretamente do centro-oeste para o mundo.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center transition-all hover:text-black"
                  style={{ color: "white" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#FF8C00";
                    (e.currentTarget as HTMLElement).style.color = "#0A0A0A";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                >
                  <Icon icon={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Modalidades */}
          <div>
            <h4 className="font-bold uppercase text-sm tracking-widest mb-8">Modalidades</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {modalidades.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-orange-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="font-bold uppercase text-sm tracking-widest mb-8">Institucional</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {institucional.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-orange-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold uppercase text-sm tracking-widest mb-8">Contato</h4>
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex gap-3">
                <Icon icon="lucide:map-pin" style={{ color: "#FF8C00" }} />
                <span>
                  Goiânia - GO, Brasil
                  <br />
                  Polo Industrial
                </span>
              </li>
              <li className="flex gap-3">
                <Icon icon="lucide:phone" style={{ color: "#FF8C00" }} />
                <span>+55 (62) 9999-9999</span>
              </li>
              <li className="flex gap-3">
                <Icon icon="lucide:mail" style={{ color: "#FF8C00" }} />
                <span>contato@sobrosa.esp.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            © 2025 SOBROSA. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex items-center gap-6 opacity-30">
            <Icon icon="logos:mastercard" className="text-2xl" />
            <Icon icon="logos:pix" className="text-xl" style={{ filter: "grayscale(1) invert(1)" }} />
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

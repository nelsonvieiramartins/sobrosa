"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const mixPhotos = [
  { image: "https://images.unsplash.com/photo-1541625602330-2277a4cd1f59?q=80&w=600", modalidade: "Ciclismo", slug: "ciclismo" },
  { image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=600", modalidade: "Futebol", slug: "futebol" },
  { image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=600", modalidade: "Corrida", slug: "corrida" },
  { image: "https://images.unsplash.com/photo-1529230117013-bc53b207908b?q=80&w=600", modalidade: "Pesca", slug: "pesca" },
  { image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=600", modalidade: "Ciclismo", slug: "ciclismo" },
  { image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600", modalidade: "Eventos", slug: "eventos-promocional" },
  { image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600", modalidade: "Corrida", slug: "corrida" },
  { image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600", modalidade: "Corporativo", slug: "corporativa" },
  { image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=600", modalidade: "Futebol", slug: "futebol" },
  { image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=600", modalidade: "Pesca", slug: "pesca" },
];

export default function HomeCommunityGallery() {
  const photos = [...mixPhotos, ...mixPhotos];

  return (
    <section className="py-24 bg-[#0F0F0F] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 mb-16">
        <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#FF8C00" }}>
          Comunidade SobrOsa
        </p>
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <h2 className="font-tanker text-5xl md:text-6xl uppercase leading-none text-white">
            Quem Usa na <span style={{ color: "#FF8C00" }}>Prática</span>
          </h2>
          <a
            href="https://www.instagram.com/sobrosa_marca_de_atleta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 text-sm hover:text-[#FF8C00] transition-colors"
          >
            <Icon icon="lucide:instagram" />
            @sobrosa_marca_de_atleta
          </a>
        </div>
      </div>

      <div
        className="flex gap-4 w-max"
        style={{ animation: "marquee 40s linear infinite" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.animationPlayState = "running";
        }}
      >
        {photos.map((photo, i) => (
          <Link
            key={i}
            href={`/categorias/${photo.slug}`}
            className="group relative flex-shrink-0 w-72 aspect-square overflow-hidden bg-[#1a1a1a]"
          >
            <Image
              src={photo.image}
              alt={photo.modalidade}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <div className="flex items-center gap-2">
                <Icon icon="lucide:tag" className="text-sm" style={{ color: "#FF8C00" }} />
                <span className="text-white text-xs font-bold uppercase tracking-wider">
                  {photo.modalidade}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

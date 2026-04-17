"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import type { Category } from "@/lib/categories";

export default function CommunityGallery({ category }: { category: Category }) {
  const photos = [...category.communityPhotos, ...category.communityPhotos];

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
          <p className="text-gray-400 max-w-xs text-sm">
            Fotos reais dos nossos clientes em campo. A comunidade SobrOsa em movimento.
          </p>
        </div>
      </div>

      {/* Marquee container */}
      <div
        className="flex gap-4 w-max"
        style={{
          animation: "marquee 32s linear infinite",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.animationPlayState = "running";
        }}
      >
        {photos.map((photo, i) => (
          <a
            key={i}
            href={`https://instagram.com/${photo.instagramHandle.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex-shrink-0 w-72 aspect-square overflow-hidden bg-[#1a1a1a]"
          >
            <Image
              src={photo.image}
              alt={photo.user}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <div className="flex items-center gap-2 mb-1">
                <Icon icon="lucide:instagram" className="text-sm" style={{ color: "#FF8C00" }} />
                <span className="text-white text-xs font-bold uppercase tracking-wider">
                  {photo.instagramHandle}
                </span>
              </div>
              <p className="text-gray-300 text-xs">{photo.user}</p>
            </div>
          </a>
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

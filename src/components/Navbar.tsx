"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { categories } from "@/lib/categories";

interface NavbarProps {
  dark?: boolean;
}

const personalizado = {
  slug: "personalizado",
  label: "Personalizado",
  href: "/#contato",
  image: "/img/personalizado.jpg",
};

const allNavItems = [
  ...categories.map((c) => ({ slug: c.slug, label: c.label, href: `/categorias/${c.slug}`, image: c.heroImage, subtitle: c.heroSubtitle })),
  { ...personalizado, subtitle: "Criamos algo único para você. Fale com nossa equipe." },
];

const col1 = allNavItems.slice(0, 4);
const col2 = allNavItems.slice(4);

export default function Navbar({ dark = false }: NavbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredSlug, setHoveredSlug] = useState(categories[0].slug);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const activeCategory = categories.find((c) => c.slug === hoveredSlug);

  const bg = dark ? "bg-black/95 border-white/10" : "bg-white/95 border-black/5";
  const textColor = dark ? "text-white" : "text-black";
  const hoverColor = dark ? "hover:text-orange-400" : "hover:text-orange-500";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b ${bg}`}>
      <nav className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/265bed1b-7a83-4b68-87a9-fbb24516aae4/1776286409420-e36e05eb/08ba2d79ec884cbf93d314a2b169da0f.png"
            alt="SobrOsa Logo"
            width={160}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className={`hidden md:flex items-center space-x-10 text-sm font-bold uppercase tracking-wider ${textColor}`}>
          <li>
            <Link href="/" className={`transition-colors ${hoverColor}`}>Início</Link>
          </li>
          <li>
            <span className="cursor-default opacity-40">Quem Somos</span>
          </li>

          {/* Modalidades — mega dropdown */}
          <li
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button
              className={`flex items-center gap-1 transition-colors uppercase ${hoverColor}`}
              style={{ color: dropdownOpen ? "#FF8C00" : undefined }}
            >
              Modalidades
              <Icon
                icon="lucide:chevron-down"
                className={`text-base transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Bridge — prevents gap from firing onMouseLeave */}
            <div className="absolute top-full left-0 w-full h-3" />

            {/* Mega menu panel — anchored to viewport left edge */}
            <div
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
              className={`fixed left-0 right-0 top-20 bg-white border-b border-black/8 shadow-2xl transition-all duration-250 origin-top ${
                dropdownOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="max-w-[1440px] mx-auto px-6 py-8 flex gap-0">

                {/* LEFT — dynamic image */}
                <div className="w-72 flex-shrink-0 relative overflow-hidden bg-black">
                  <div className="relative h-52 w-full">
                    {allNavItems.map((item) => (
                      <Image
                        key={item.slug}
                        src={item.image}
                        alt={item.label}
                        fill
                        className={`object-cover transition-opacity duration-300 ${
                          item.slug === hoveredSlug ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-1" style={{ color: "#FF8C00" }}>
                        Modalidade
                      </p>
                      <p className="font-tanker text-2xl text-white uppercase leading-none">
                        {activeCategory?.label ?? "Personalizado"}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-[#0A0A0A]">
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                      {allNavItems.find(i => i.slug === hoveredSlug)?.subtitle ?? ""}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-px bg-black/8 mx-8 self-stretch" />

                {/* RIGHT — 2 columns */}
                <div className="flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">
                    Escolha sua Modalidade
                  </p>
                  <div className="grid grid-cols-2 gap-x-8">
                    {[col1, col2].map((col, ci) => (
                      <ul key={ci} className="space-y-1">
                        {col.map((item) => (
                          <li key={item.slug}>
                            <Link
                              href={item.href}
                              onMouseEnter={() => setHoveredSlug(item.slug)}
                              className={`group flex items-center justify-between px-4 py-3 transition-all duration-150 ${
                                hoveredSlug === item.slug
                                  ? "bg-black text-white"
                                  : "text-black hover:bg-black hover:text-white"
                              }`}
                              onClick={() => setDropdownOpen(false)}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-1 h-5 flex-shrink-0 transition-opacity duration-150 ${
                                    hoveredSlug === item.slug ? "opacity-100" : "opacity-0"
                                  }`}
                                  style={{ backgroundColor: "#FF8C00" }}
                                />
                                <span className="font-bold uppercase text-xs tracking-widest whitespace-nowrap">
                                  {item.label}
                                </span>
                              </div>
                              <Icon
                                icon="lucide:arrow-right"
                                className={`text-sm flex-shrink-0 ml-2 transition-all duration-150 ${
                                  hoveredSlug === item.slug
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 -translate-x-1"
                                }`}
                                style={{ color: "#FF8C00" }}
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <Link href="/#producao" className={`transition-colors ${hoverColor}`}>Produção</Link>
          </li>
          <li>
            <Link href="/#contato" className={`transition-colors ${hoverColor}`}>Contato</Link>
          </li>
        </ul>

        {/* Icons */}
        <div className={`flex items-center gap-6 ${textColor}`}>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon icon={mobileOpen ? "lucide:x" : "lucide:menu"} className="text-2xl" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-8">
          <ul className="space-y-6 text-sm font-bold uppercase tracking-wider text-white">
            <li>
              <Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-orange-400 transition-colors">
                Início
              </Link>
            </li>
            <li className="opacity-40">Quem Somos</li>
            <li>
              <p className="mb-3" style={{ color: "#FF8C00" }}>Modalidades</p>
              <ul className="space-y-3 pl-4">
                {allNavItems.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/#producao" onClick={() => setMobileOpen(false)} className="hover:text-orange-400 transition-colors">
                Produção
              </Link>
            </li>
            <li>
              <Link href="/#contato" onClick={() => setMobileOpen(false)} className="hover:text-orange-400 transition-colors">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

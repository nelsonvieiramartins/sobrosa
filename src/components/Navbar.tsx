"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { categories } from "@/lib/categories";

interface NavbarProps {
  dark?: boolean;
}

export default function Navbar({ dark = false }: NavbarProps) {
  const [cartCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const bg = dark
    ? "bg-black/95 border-white/10"
    : "bg-white/95 border-black/5";
  const textColor = dark ? "text-white" : "text-black";
  const hoverColor = dark ? "hover:text-orange-400" : "hover:text-orange-500";
  const cartBadgeBg = dark ? "bg-white text-black" : "bg-black text-white";

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
            <Link href="/" className={`transition-colors ${hoverColor}`}>
              Início
            </Link>
          </li>
          <li>
            <span className="cursor-default opacity-50">Quem Somos</span>
          </li>

          {/* Modalidades dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 transition-colors ${hoverColor}`}
              style={{ color: dropdownOpen ? "#FF8C00" : undefined }}
            >
              Modalidades
              <Icon
                icon="lucide:chevron-down"
                className={`text-base transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown panel */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-black border border-white/10 shadow-2xl transition-all duration-200 origin-top ${
                dropdownOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
              }`}
            >
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/categorias/${cat.slug}`}
                  className="flex items-center gap-3 px-5 py-4 text-white hover:bg-orange-500 hover:text-black transition-colors text-xs tracking-widest uppercase font-bold"
                >
                  <span>{cat.label}</span>
                </Link>
              ))}
            </div>
          </li>

          <li>
            <Link href="/#producao" className={`transition-colors ${hoverColor}`}>
              Produção
            </Link>
          </li>
          <li>
            <Link href="/#contato" className={`transition-colors ${hoverColor}`}>
              Contato
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className={`flex items-center gap-6 ${textColor}`}>
          <button className="hover:opacity-60 transition-opacity">
            <Icon icon="lucide:search" className="text-2xl" />
          </button>
          <a href="#" className="relative hover:opacity-60 transition-opacity">
            <Icon icon="lucide:shopping-bag" className="text-2xl" />
            <span className={`absolute -top-1 -right-2 text-[10px] w-4 h-4 rounded-full flex items-center justify-center ${cartBadgeBg}`}>
              {cartCount}
            </span>
          </a>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon icon={mobileOpen ? "lucide:x" : "lucide:menu"} className="text-2xl" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-8">
          <ul className="space-y-6 text-sm font-bold uppercase tracking-wider text-white">
            <li><Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-orange-400 transition-colors">Início</Link></li>
            <li className="opacity-50">Quem Somos</li>
            <li>
              <p className="text-orange-400 mb-3">Modalidades</p>
              <ul className="space-y-3 pl-4">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/categorias/${cat.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li><Link href="/#producao" onClick={() => setMobileOpen(false)} className="hover:text-orange-400 transition-colors">Produção</Link></li>
            <li><Link href="/#contato" onClick={() => setMobileOpen(false)} className="hover:text-orange-400 transition-colors">Contato</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}

"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [cartCount] = useState(0);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-black/5">
      <nav className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/265bed1b-7a83-4b68-87a9-fbb24516aae4/1776286409420-e36e05eb/08ba2d79ec884cbf93d314a2b169da0f.png"
            alt="SobrOsa Logo"
            width={160}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-12 text-sm font-bold uppercase tracking-wider">
          <li><a href="#" className="hover:text-black transition-colors">Início</a></li>
          <li><span className="cursor-default">Quem Somos</span></li>
          <li><a href="#" className="hover:text-black transition-colors">Modalidades</a></li>
          <li><a href="#" className="hover:text-black transition-colors">Produção</a></li>
          <li><a href="#" className="hover:text-black transition-colors">Contato</a></li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button className="hover:opacity-60 transition-opacity">
            <Icon icon="lucide:search" className="text-2xl" />
          </button>
          <a href="#" className="relative hover:opacity-60 transition-opacity">
            <Icon icon="lucide:shopping-bag" className="text-2xl" />
            <span className="absolute -top-1 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </a>
          <button className="md:hidden">
            <Icon icon="lucide:menu" className="text-2xl" />
          </button>
        </div>
      </nav>
    </header>
  );
}

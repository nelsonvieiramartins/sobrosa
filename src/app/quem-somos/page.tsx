import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuemSomosHero from "@/components/quem-somos/QuemSomosHero";
import QuemSomosEstudio from "@/components/quem-somos/QuemSomosEstudio";
import QuemSomosTecnologia from "@/components/quem-somos/QuemSomosTecnologia";
import QuemSomosProposito from "@/components/quem-somos/QuemSomosProposito";

export const metadata: Metadata = {
  title: "Quem Somos | SobrOsa Performance",
  description: "Conheça a SobrOsa — 30 anos de tradição em uniformes esportivos personalizados, com sede em Goiânia.",
};

export default function QuemSomosPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] overflow-x-hidden">
      <Navbar dark />
      <main>
        <QuemSomosHero />
        <QuemSomosEstudio />
        <QuemSomosTecnologia />
        <QuemSomosProposito />
      </main>
      <Footer />
    </div>
  );
}

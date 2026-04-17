import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NicheGrid from "@/components/NicheGrid";
import SocialProof from "@/components/SocialProof";
import ProductionBanner from "@/components/ProductionBanner";
import BestSellers from "@/components/BestSellers";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <NicheGrid />
        <SocialProof />
        <ProductionBanner />
        <BestSellers />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

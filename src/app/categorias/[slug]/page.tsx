import { notFound } from "next/navigation";
import { getCategoryBySlug, categories } from "@/lib/categories";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryHero from "@/components/category/CategoryHero";
import CategoryAdvantages from "@/components/category/CategoryAdvantages";
import CategoryModels from "@/components/category/CategoryModels";
import CategoryPortfolio from "@/components/category/CategoryPortfolio";
import CommunityGallery from "@/components/category/CommunityGallery";
import CategoryCTA from "@/components/category/CategoryCTA";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: `${category.label} | SobrOsa Performance`,
    description: category.heroSubtitle,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar dark />
      <main>
        <CategoryHero category={category} />
        <CategoryAdvantages category={category} />
        <CategoryModels category={category} />
        <CategoryPortfolio category={category} />
        <CommunityGallery category={category} />
        <CategoryCTA category={category} />
      </main>
      <Footer />
    </div>
  );
}

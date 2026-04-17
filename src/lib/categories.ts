export interface Advantage {
  icon: string;
  title: string;
  description: string;
}

export interface Model {
  name: string;
  tag: string;
  image: string;
}

export interface PortfolioItem {
  name: string;
  subtitle: string;
  image: string;
  badge: string;
  badgeColor: string;
}

export interface CommunityPhoto {
  image: string;
  user: string;
  instagramHandle: string;
}

export interface Category {
  slug: string;
  label: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  heroImage: string;
  heroDecorText: string;
  advantages: Advantage[];
  models: Model[];
  portfolio: PortfolioItem[];
  communityPhotos: CommunityPhoto[];
}

export const categories: Category[] = [
  {
    slug: "ciclismo",
    label: "Ciclismo",
    heroTitle: "Respirabilidade e",
    heroHighlight: "Tecnologia de Elite",
    heroSubtitle:
      "Desenvolvido para as estradas mais desafiadoras. Nossas peças combinam aerodinâmica avançada com conforto térmico absoluto.",
    heroImage:
      "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=2000",
    heroDecorText: "CYCLING",
    advantages: [
      {
        icon: "lucide:wind",
        title: "Tecido Ultra-Respirável",
        description:
          "Tecnologia Dry-Sense que expulsa a umidade instantaneamente, mantendo o corpo seco mesmo em subidas de categoria especial.",
      },
      {
        icon: "lucide:zap",
        title: "Zíperes Inteligentes",
        description:
          "Zíperes YKK com trava semi-automática. Abertura suave com apenas uma mão durante o pedal.",
      },
      {
        icon: "lucide:maximize",
        title: "Modelagem Ergonômica",
        description:
          "Corte a laser com compressão estratégica. Reduz o arrasto aerodinâmico e previne fadiga muscular.",
      },
    ],
    models: [
      {
        name: "Jersey Slim Masculino",
        tag: "Manga Curta / Zíper 3/4",
        image:
          "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600",
      },
      {
        name: "Jersey Feminino Race",
        tag: "Manga Longa / Compressão",
        image:
          "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=600",
      },
      {
        name: "Kit Infantil Junior",
        tag: "Tamanhos 10 a 16 anos",
        image:
          "https://images.unsplash.com/photo-1486218119243-13301143a72d?q=80&w=600",
      },
    ],
    portfolio: [
      {
        name: "Kit Neon Strike",
        subtitle: "Cores Vibrantes / Aero Fit",
        image:
          "https://images.unsplash.com/photo-1534150123024-cba61238b5bb?q=80&w=600",
        badge: "Road Elite",
        badgeColor: "#FF8C00",
      },
      {
        name: "Stealth Mountain",
        subtitle: "Resistência / Térmico",
        image:
          "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?q=80&w=600",
        badge: "Mountain",
        badgeColor: "#fff",
      },
      {
        name: "Canyon Blue Team",
        subtitle: "Sublimação Digital",
        image:
          "https://images.unsplash.com/photo-1471506480208-89946d29ad05?q=80&w=600",
        badge: "Track Master",
        badgeColor: "#3b82f6",
      },
      {
        name: "Apex Racing Red",
        subtitle: "Alta Visibilidade",
        image:
          "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=600",
        badge: "Pro-Peloton",
        badgeColor: "#dc2626",
      },
    ],
    communityPhotos: [
      { image: "https://images.unsplash.com/photo-1541625602330-2277a4cd1f59?q=80&w=600", user: "Equipe Pedala GO", instagramHandle: "@pedalago" },
      { image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600", user: "Ricardo Santos", instagramHandle: "@ricardopro" },
      { image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=600", user: "MTB Cerrado", instagramHandle: "@mtbcerrado" },
      { image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=600", user: "Clube Road GO", instagramHandle: "@cluberoadgo" },
      { image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=600", user: "Julia Medeiros", instagramHandle: "@juliamtb" },
      { image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600", user: "Felipe Ramos", instagramHandle: "@feliperamos" },
    ],
  },
  {
    slug: "tiro-esportivo",
    label: "Tiro Esportivo",
    heroTitle: "Precisão e",
    heroHighlight: "Conforto Tático",
    heroSubtitle:
      "Peças desenvolvidas para os mais exigentes ambientes de competição. Tecidos reforçados com máxima liberdade de movimento.",
    heroImage:
      "https://images.unsplash.com/photo-1605218403033-04022416f404?q=80&w=2000",
    heroDecorText: "SHOOTING",
    advantages: [
      {
        icon: "lucide:shield",
        title: "Tecido Reforçado",
        description:
          "Material de alta resistência nos pontos de apoio do fuzil, com costura tripla nas áreas de maior atrito.",
      },
      {
        icon: "lucide:move",
        title: "Mobilidade Total",
        description:
          "Corte especial nos ombros e cotovelos que permite posições de tiro sem restrição de movimento.",
      },
      {
        icon: "lucide:sun",
        title: "Proteção UV 50+",
        description:
          "Proteção solar máxima para treinos e competições ao ar livre, sem abrir mão do conforto.",
      },
    ],
    models: [
      {
        name: "Camisa Tática Masculina",
        tag: "Manga Longa / Botões",
        image:
          "https://images.unsplash.com/photo-1605218403033-04022416f404?q=80&w=600",
      },
      {
        name: "Camisa Tática Feminina",
        tag: "Manga Curta / Slim Fit",
        image:
          "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=600",
      },
      {
        name: "Calça Tática Pro",
        tag: "Cargo / Elástico Reforçado",
        image:
          "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600",
      },
    ],
    portfolio: [
      {
        name: "Kit Hunter Pro",
        subtitle: "Tiro de Longa Distância",
        image: "https://images.unsplash.com/photo-1605218403033-04022416f404?q=80&w=600",
        badge: "Long Range",
        badgeColor: "#FF8C00",
      },
      {
        name: "Conjunto IPSC",
        subtitle: "Modalidade Dinâmica",
        image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=600",
        badge: "Dynamic",
        badgeColor: "#fff",
      },
      {
        name: "Kit Sniper Club",
        subtitle: "Clube de Tiro Exclusivo",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600",
        badge: "Precision",
        badgeColor: "#16a34a",
      },
      {
        name: "Uniforme Olímpico",
        subtitle: "Padrão Competição",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600",
        badge: "Olympic",
        badgeColor: "#1d4ed8",
      },
    ],
    communityPhotos: [
      { image: "https://images.unsplash.com/photo-1605218403033-04022416f404?q=80&w=600", user: "Clube Sniper GO", instagramHandle: "@snipergo" },
      { image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=600", user: "João Silva", instagramHandle: "@joaosilvatiro" },
      { image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600", user: "IPSC Brasil", instagramHandle: "@ipscbrasil" },
      { image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600", user: "Federação GO", instagramHandle: "@fedesportgo" },
      { image: "https://images.unsplash.com/photo-1605218403033-04022416f404?q=80&w=600", user: "Team Precision", instagramHandle: "@teamprecision" },
      { image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=600", user: "Maria Andrade", instagramHandle: "@mariatiro" },
    ],
  },
  {
    slug: "pesca",
    label: "Pesca",
    heroTitle: "Proteção e",
    heroHighlight: "Secagem Ultrarrápida",
    heroSubtitle:
      "Peças pensadas para os desafios da natureza. UV 50+, secagem instantânea e total liberdade nos movimentos.",
    heroImage:
      "https://images.unsplash.com/photo-1529230117013-bc53b207908b?q=80&w=2000",
    heroDecorText: "FISHING",
    advantages: [
      {
        icon: "lucide:sun",
        title: "UV 50+ Certificado",
        description:
          "Proteção solar máxima para horas de exposição no barco, rio ou represa, sem prejuízo ao conforto.",
      },
      {
        icon: "lucide:droplets",
        title: "Repelência à Água",
        description:
          "Tecnologia DWR que repele respingos e umidade, mantendo o pescador seco durante toda a jornada.",
      },
      {
        icon: "lucide:wind",
        title: "Secagem em 15min",
        description:
          "Tecido microporoso com secagem ultra-rápida. Suor e água evaporam em minutos.",
      },
    ],
    models: [
      {
        name: "Camisa Manga Longa",
        tag: "Gola Careca / UV 50+",
        image:
          "https://images.unsplash.com/photo-1529230117013-bc53b207908b?q=80&w=600",
      },
      {
        name: "Camisa com Capuz",
        tag: "Proteção Solar Total",
        image:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600",
      },
      {
        name: "Kit Masculino + Feminino",
        tag: "Par de Uniformes",
        image:
          "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=600",
      },
    ],
    portfolio: [
      {
        name: "Kit Dourado do Rio",
        subtitle: "Pesca Esportiva Fluvial",
        image: "https://images.unsplash.com/photo-1529230117013-bc53b207908b?q=80&w=600",
        badge: "Fluvial",
        badgeColor: "#FF8C00",
      },
      {
        name: "Tucunaré Pro",
        subtitle: "Amazônia / Pantanal",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600",
        badge: "Tropical",
        badgeColor: "#16a34a",
      },
      {
        name: "Surf Casting",
        subtitle: "Pesca na Costa",
        image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=600",
        badge: "Costeiro",
        badgeColor: "#0284c7",
      },
      {
        name: "Kit Torneio",
        subtitle: "Competição Oficial",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=600",
        badge: "Torneio",
        badgeColor: "#fff",
      },
    ],
    communityPhotos: [
      { image: "https://images.unsplash.com/photo-1529230117013-bc53b207908b?q=80&w=600", user: "Pescaria GO", instagramHandle: "@pescariago" },
      { image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600", user: "Time Dourado", instagramHandle: "@timedourado" },
      { image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=600", user: "Carlos Pesca", instagramHandle: "@carlospesca" },
      { image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=600", user: "Torneio Araguaia", instagramHandle: "@torneioaraguaia" },
      { image: "https://images.unsplash.com/photo-1529230117013-bc53b207908b?q=80&w=600", user: "Ana Pescadora", instagramHandle: "@anapescadora" },
      { image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600", user: "Guia do Peixe", instagramHandle: "@guiadopeixe" },
    ],
  },
  {
    slug: "futebol",
    label: "Futebol",
    heroTitle: "Uniformes que",
    heroHighlight: "Vencem com Você",
    heroSubtitle:
      "Do campo amador ao profissional. Uniformes completos com design exclusivo, sublimação digital e entrega para todo o Brasil.",
    heroImage:
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2000",
    heroDecorText: "FUTEBOL",
    advantages: [
      {
        icon: "lucide:layers",
        title: "Sublimação Total",
        description:
          "Cor que não desbota nem descasca. Impressão digital direta no tecido com resolução de alta definição.",
      },
      {
        icon: "lucide:shirt",
        title: "Kit Completo",
        description:
          "Camisa, calção e meião com design unificado. Numeração, nome e patrocínio inclusos.",
      },
      {
        icon: "lucide:truck",
        title: "Entrega em 20 dias",
        description:
          "Produção própria em Goiânia com logística expressa para todo território nacional.",
      },
    ],
    models: [
      {
        name: "Kit Clássico",
        tag: "Camisa + Calção + Meião",
        image:
          "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=600",
      },
      {
        name: "Kit Feminino",
        tag: "Modelagem Exclusiva",
        image:
          "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=600",
      },
      {
        name: "Kit Infantil",
        tag: "Tamanhos PP ao G",
        image:
          "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?q=80&w=600",
      },
    ],
    portfolio: [
      {
        name: "Goiás EC Treino",
        subtitle: "Kit Oficial de Treino",
        image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=600",
        badge: "Profissional",
        badgeColor: "#16a34a",
      },
      {
        name: "Resenha FC",
        subtitle: "Time Amador / Goiânia",
        image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=600",
        badge: "Amador",
        badgeColor: "#FF8C00",
      },
      {
        name: "Kit Escola Sport",
        subtitle: "Projeto Social",
        image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?q=80&w=600",
        badge: "Social",
        badgeColor: "#7c3aed",
      },
      {
        name: "Torneio City League",
        subtitle: "Competição Anual",
        image: "https://images.unsplash.com/photo-1475440197469-e367ec8eeb19?q=80&w=600",
        badge: "Torneio",
        badgeColor: "#fff",
      },
    ],
    communityPhotos: [
      { image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=600", user: "Resenha FC", instagramHandle: "@resenhafc" },
      { image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=600", user: "City League GO", instagramHandle: "@cityleaguego" },
      { image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?q=80&w=600", user: "Time Favela", instagramHandle: "@timefavela" },
      { image: "https://images.unsplash.com/photo-1475440197469-e367ec8eeb19?q=80&w=600", user: "Torneio Central", instagramHandle: "@torneiocentralgo" },
      { image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=600", user: "Fut7 Arena", instagramHandle: "@fut7arena" },
      { image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=600", user: "Pelada das Estrelas", instagramHandle: "@peladaestrelas" },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

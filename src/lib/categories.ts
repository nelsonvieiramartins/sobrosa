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
  {
    slug: "corrida",
    label: "Corrida",
    heroTitle: "Leveza e",
    heroHighlight: "Velocidade Máxima",
    heroSubtitle:
      "Do treino à largada. Camisetas técnicas, shorts de compressão e kits completos para corridas de rua, trail e ultramaratona.",
    heroImage:
      "https://images.unsplash.com/photo-1544899489-a083461b088c?q=80&w=2000",
    heroDecorText: "RUNNING",
    advantages: [
      {
        icon: "lucide:wind",
        title: "Leveza Extrema",
        description:
          "Tecidos de 120g/m² com tecnologia mesh que mantém o corpo fresco mesmo nos treinos mais intensos.",
      },
      {
        icon: "lucide:activity",
        title: "Compressão Estratégica",
        description:
          "Shorts e calças com compressão graduada que reduzem a fadiga muscular e melhoram o desempenho.",
      },
      {
        icon: "lucide:sun",
        title: "Proteção UV 50+",
        description:
          "Ideal para corridas ao ar livre. Proteção solar máxima sem abrir mão da respirabilidade.",
      },
    ],
    models: [
      {
        name: "Camiseta Speed Masculina",
        tag: "Dry-Fit / Gola V",
        image: "https://images.unsplash.com/photo-1544899489-a083461b088c?q=80&w=600",
      },
      {
        name: "Camiseta Speed Feminina",
        tag: "Slim Fit / Recortes",
        image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=600",
      },
      {
        name: "Kit Trail Runner",
        tag: "Camisa + Shorts Compressão",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600",
      },
    ],
    portfolio: [
      {
        name: "Kit Maratona GO",
        subtitle: "Corrida de Rua / Goiânia",
        image: "https://images.unsplash.com/photo-1544899489-a083461b088c?q=80&w=600",
        badge: "Road",
        badgeColor: "#FF8C00",
      },
      {
        name: "Trail Series",
        subtitle: "Ultra / Mountain Run",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600",
        badge: "Trail",
        badgeColor: "#16a34a",
      },
      {
        name: "5K Fun Run",
        subtitle: "Corridas de Lazer",
        image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=600",
        badge: "Fun",
        badgeColor: "#fff",
      },
      {
        name: "Kit Escola Atleta",
        subtitle: "Corrida Escolar",
        image: "https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?q=80&w=600",
        badge: "Escolar",
        badgeColor: "#7c3aed",
      },
    ],
    communityPhotos: [
      { image: "https://images.unsplash.com/photo-1544899489-a083461b088c?q=80&w=600", user: "Maratona GO", instagramHandle: "@maratonago" },
      { image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=600", user: "Run Cerrado", instagramHandle: "@runcerrado" },
      { image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600", user: "Trail Chapada", instagramHandle: "@trailchapada" },
      { image: "https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?q=80&w=600", user: "5K Goiânia", instagramHandle: "@5kgoiania" },
      { image: "https://images.unsplash.com/photo-1544899489-a083461b088c?q=80&w=600", user: "Grupo Pedala Corre", instagramHandle: "@pedalacorre" },
      { image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=600", user: "Ana Runner", instagramHandle: "@anarunner" },
    ],
  },
  {
    slug: "eventos-promocional",
    label: "Eventos / Promocional",
    heroTitle: "Sua Marca no",
    heroHighlight: "Centro do Evento",
    heroSubtitle:
      "Camisetas promocionais, uniformes de equipe de eventos e kits corporativos. Produção rápida para datas especiais e grandes volumes.",
    heroImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000",
    heroDecorText: "EVENTOS",
    advantages: [
      {
        icon: "lucide:calendar",
        title: "Entrega Expressa",
        description:
          "Produção prioritária para eventos com data marcada. Confirmamos prazo antes de fechar o pedido.",
      },
      {
        icon: "lucide:users",
        title: "Grandes Volumes",
        description:
          "Capacidade para produzir desde 50 até 10.000 peças. Preços escalonados por quantidade.",
      },
      {
        icon: "lucide:palette",
        title: "Sublimação Total",
        description:
          "Impressão de logos, patrocinadores e arte em alta definição. Cor fiel ao seu manual de marca.",
      },
    ],
    models: [
      {
        name: "Camiseta Evento Básica",
        tag: "Dry-Fit / Gola Redonda",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600",
      },
      {
        name: "Polo Promocional",
        tag: "Manga Curta / Botões",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600",
      },
      {
        name: "Kit Staff Evento",
        tag: "Camisa + Colete + Boné",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600",
      },
    ],
    portfolio: [
      {
        name: "Festival Cerrado",
        subtitle: "10.000 camisetas",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600",
        badge: "Festival",
        badgeColor: "#FF8C00",
      },
      {
        name: "Corrida Solidária",
        subtitle: "ONG / Projeto Social",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600",
        badge: "Social",
        badgeColor: "#16a34a",
      },
      {
        name: "Congresso Médico",
        subtitle: "Kit Staff + Participantes",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600",
        badge: "Corporativo",
        badgeColor: "#1d4ed8",
      },
      {
        name: "Game Day Fãs",
        subtitle: "Kit Torcida Organizada",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600",
        badge: "Torcida",
        badgeColor: "#fff",
      },
    ],
    communityPhotos: [
      { image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600", user: "Festival Cerrado", instagramHandle: "@festivalcerrado" },
      { image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600", user: "Corrida Solidária GO", instagramHandle: "@corridasolidaria" },
      { image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600", user: "Staff Arena GO", instagramHandle: "@staffarenago" },
      { image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600", user: "Torcida Goiás", instagramHandle: "@torcidagoias" },
      { image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600", user: "Expo Goiânia", instagramHandle: "@expogoiania" },
      { image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600", user: "ONG Movimento", instagramHandle: "@ongmovimento" },
    ],
  },
  {
    slug: "corporativa",
    label: "Corporativa",
    heroTitle: "Identidade Visual",
    heroHighlight: "que Representa",
    heroSubtitle:
      "Uniformes corporativos que comunicam profissionalismo. Polos, camisetas e kits completos com a identidade da sua empresa.",
    heroImage:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000",
    heroDecorText: "CORP",
    advantages: [
      {
        icon: "lucide:briefcase",
        title: "Identidade Unificada",
        description:
          "Todos os colaboradores com visual padronizado e alinhado ao branding da empresa.",
      },
      {
        icon: "lucide:badge-check",
        title: "Qualidade Premium",
        description:
          "Tecidos de alta durabilidade para uso diário intenso. Manutenção fácil e resistência garantida.",
      },
      {
        icon: "lucide:repeat",
        title: "Reposição Simples",
        description:
          "Cadastramos seu pedido e facilitamos a reposição de estoque com o mesmo padrão de sempre.",
      },
    ],
    models: [
      {
        name: "Polo Corporativa",
        tag: "Bordado / Manga Curta",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600",
      },
      {
        name: "Camiseta Técnica",
        tag: "Dry-Fit / Estampada",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600",
      },
      {
        name: "Kit Completo RH",
        tag: "Polo + Camiseta + Boné",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600",
      },
    ],
    portfolio: [
      {
        name: "Rede de Franquias",
        subtitle: "500 colaboradores",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600",
        badge: "Franquia",
        badgeColor: "#FF8C00",
      },
      {
        name: "Startup Tech",
        subtitle: "Kit Onboarding",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600",
        badge: "Tech",
        badgeColor: "#1d4ed8",
      },
      {
        name: "Construtora Atlas",
        subtitle: "Uniforme de Campo",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600",
        badge: "Construção",
        badgeColor: "#fff",
      },
      {
        name: "Clínica Vida",
        subtitle: "Equipe de Saúde",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600",
        badge: "Saúde",
        badgeColor: "#16a34a",
      },
    ],
    communityPhotos: [
      { image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600", user: "Franquias GO", instagramHandle: "@franquiasgo" },
      { image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600", user: "Startup Hub GO", instagramHandle: "@startuphubgo" },
      { image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600", user: "Atlas Construtora", instagramHandle: "@atlasconstrutora" },
      { image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600", user: "Clínica Vida", instagramHandle: "@clinicavida" },
      { image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600", user: "RH Excellence", instagramHandle: "@rhexcellence" },
      { image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600", user: "Team Builder GO", instagramHandle: "@teambuildergo" },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

@AGENTS.md

# SobrOsa — Contexto Completo do Projeto

## Visão Geral

Site institucional/comercial de uma marca brasileira de uniformes esportivos personalizados, sediada em Goiânia-GO. Fundada em 1994. Especializada em sublimação digital para ciclismo, tiro esportivo, pesca, futebol, corrida, eventos e corporativo.

- **Repo GitHub:** https://github.com/nelsonvieiramartins/sobrosa
- **Deploy (Vercel):** https://sobrosa.vercel.app
- **Deploy local:** `npm run dev` → http://localhost:3000
- **Para fazer deploy:** `npx vercel --prod` (do diretório do projeto)

---

## Stack Técnica

- **Framework:** Next.js 16.2.4 (App Router, Turbopack)
- **Linguagem:** TypeScript
- **CSS:** Tailwind v4 — configuração via `@import "tailwindcss"` + `@theme` no CSS. **Não existe `tailwind.config.ts`.**
- **Fontes:** Tanker + Satoshi via Fontshare, carregadas como `<link rel="stylesheet">` no `src/app/layout.tsx`. NÃO usar `@import url()` no CSS (não funciona no Tailwind v4 + Next.js).
- **Ícones:** `@iconify/react` — `<Icon icon="lucide:..." />`, `<Icon icon="simple-icons:..." />`, `<Icon icon="mdi:..." />`
- **Imagens:** `next/image` com `fill` ou `width/height`. Imagens locais em `public/img/`.
- **Design Superdesign:** CLI `superdesign` disponível. Comando para buscar design: `superdesign get-design --draft-id <id>`

### Imagens remotas permitidas (next.config.ts)
- `images.unsplash.com`, `plus.unsplash.com`
- `i.pravatar.cc`
- `vgbujcuwptvheqijyjbe.supabase.co` (logo SobrOsa)
- `upload.wikimedia.org`
- `www.shutterstock.com`

---

## Design System

| Token | Valor |
|-------|-------|
| Laranja principal | `#FF8C00` |
| Preto fundo | `#0A0A0A` |
| Preto secundário | `#0F0F0F` |
| Fonte títulos | `font-tanker` (classe Tailwind) |
| Fonte corpo | Satoshi (padrão do body) |
| Max-width container | `max-w-[1440px] mx-auto px-6` |

**Regras visuais:**
- Fundo das páginas de categoria e Quem Somos: `bg-[#0A0A0A]` (dark)
- Home: mistura de fundo branco e escuro por seção
- Nunca usar roxo/violeta
- Botão CTA primário: `style={{ backgroundColor: "#FF8C00" }}` + texto preto, uppercase
- Bordas decorativas laranja: `style={{ borderColor: "#FF8C00" }}`

---

## Estrutura de Arquivos

```
src/
  app/
    layout.tsx                  — lang="pt-BR", carrega fontes via <link> no <head>
    page.tsx                    — Home page
    quem-somos/
      page.tsx                  — Página Quem Somos (estática)
    categorias/[slug]/
      page.tsx                  — Página dinâmica de categoria (SSG)

  components/
    Navbar.tsx                  — "use client", dark?: boolean, mega menu image-based
    Footer.tsx                  — "use client", hideNewsletter?: boolean
    HeroSection.tsx             — Hero da home
    NicheGrid.tsx               — Grid 4 categorias na home (Link para /categorias/slug)
    SocialProof.tsx             — "use client", carrossel depoimentos + 9 logos marcas
    ProductionBanner.tsx        — Seção produção
    BestSellers.tsx             — Seção produtos
    Reveal.tsx                  — "use client", wrapper animação scroll (IntersectionObserver)

    category/
      CategoryHero.tsx          — Hero da página de categoria
      CategoryAdvantages.tsx    — Seção vantagens
      CategoryModels.tsx        — Modelos disponíveis
      CategoryPortfolio.tsx     — Portfólio
      CommunityGallery.tsx      — "use client", marquee infinito com hover pause
      CategoryCTA.tsx           — CTA final

    quem-somos/
      QuemSomosHero.tsx         — Seção Legado (30 anos)
      QuemSomosEstudio.tsx      — Seção Estúdio / Criação
      QuemSomosTecnologia.tsx   — Seção Tecnologia / Sublimação
      QuemSomosProposito.tsx    — "use client", Missão, Visão e 4 valores

  lib/
    categories.ts               — FONTE DA VERDADE de todas as categorias

public/
  img/
    ciclismo.jpg
    tiro.jpg
    pesca.jpeg
    futebol.jpg
    evento.jpg
    corporativo.jpg
    personalizado.jpg
```

---

## Páginas e Rotas

| Rota | Tipo | Componente |
|------|------|------------|
| `/` | Static | `app/page.tsx` |
| `/quem-somos` | Static | `app/quem-somos/page.tsx` |
| `/categorias/ciclismo` | SSG | `app/categorias/[slug]/page.tsx` |
| `/categorias/tiro-esportivo` | SSG | idem |
| `/categorias/pesca` | SSG | idem |
| `/categorias/futebol` | SSG | idem |
| `/categorias/corrida` | SSG | idem |
| `/categorias/eventos-promocional` | SSG | idem |
| `/categorias/corporativa` | SSG | idem |

---

## Navbar — Estrutura

```
Logo | Início | Quem Somos | [Modalidades ▼] | Produção | Contato
```

- "Modalidades" tem mega menu image-based: coluna esquerda com foto dinâmica, coluna direita com 2 colunas de links
- `dark` prop: fundo preto/branco
- `allNavItems` = 7 categorias + "Personalizado" (link para `/#contato`, sem página própria)
- `col1 = slice(0,4)`, `col2 = slice(4)` — divide em 2 colunas no dropdown
- Hover delay com `useRef` timer (150ms) + bridge `<div>` invisível para evitar fechar ao cruzar o gap

---

## Footer — Estrutura

4 colunas: **Logo+redes sociais | Modalidades | Institucional | Contato**

- Modalidades: links para todas as 8 categorias (incluindo Personalizado → `/#contato`)
- Institucional: Início, Quem Somos, Produção, Contato
- Bottom bar: Mastercard + Pix (Visa removida), links Privacidade/Termos
- `hideNewsletter` prop: usado nas páginas de categoria

---

## Dados — categories.ts

Interface `Category`:
```ts
{
  slug: string
  label: string
  heroImageFlip?: boolean    // espelha imagem horizontalmente no hero
  heroTitle: string
  heroHighlight: string      // texto em laranja #FF8C00
  heroSubtitle: string
  heroImage: string          // path local /img/ ou URL Unsplash
  heroDecorText: string      // texto decorativo gigante no canto
  advantages: Advantage[]    // 3 vantagens com icon (lucide:*)
  models: Model[]            // 3 modelos com imagem
  portfolio: PortfolioItem[] // 4 itens de portfólio
  communityPhotos: CommunityPhoto[] // 6 fotos para o marquee
}
```

Categorias com `heroImageFlip: true`: `ciclismo`, `tiro-esportivo`, `pesca`

Categoria corrida usa Unsplash para heroImage (as outras usam `/img/` local).

---

## Componentes Especiais

### Reveal.tsx
Wrapper `"use client"` que anima entrada com scroll via `IntersectionObserver`. Aceita `delay` (ms).
```tsx
<Reveal delay={200}>...</Reveal>
```

### CommunityGallery.tsx
Marquee infinito `"use client"`. CSS `@keyframes marquee` inline. `animation-play-state: paused` no hover. Fotos vindas de `category.communityPhotos`.

### SocialProof.tsx
`"use client"`. Carrossel de 5 depoimentos com auto-advance 5s + setas + dots. 9 logos de marcas (Nike, Adidas, Puma, Under Armour, New Balance, Reebok, Asics, Fila, Mizuno) via `simple-icons` iconify, grayscale.

---

## Padrões de Código

- Componentes server por padrão; adicionar `"use client"` apenas quando necessário (handlers, useState, useEffect, useRef)
- `<Icon>` do `@iconify/react` em vez de `<iconify-icon>` web component
- `<Link>` do Next.js para navegação interna; `<a>` só para externos/âncoras
- Inline style para cores da marca (`#FF8C00`, `#0A0A0A`) — não criar classes Tailwind customizadas para isso
- `style={{ transform: "scaleX(-1)" }}` para flip horizontal de imagens
- Sem comentários desnecessários no código

---

## Deploy

1. `git add` + `git commit` + `git push origin master`
2. `npx vercel --prod` (o GitHub push **não** aciona deploy automático — sempre rodar vercel manualmente)

---

## Pendências / Próximos Passos

- [ ] Imagens reais dos produtos (modelos, portfolio) — substituir Unsplash por fotos da SobrOsa
- [ ] Seção `#producao` na home (ProductionBanner) — revisar conteúdo
- [ ] Formulário de contato / orçamento funcional (`/#contato`)
- [ ] Instagram handles reais na CommunityGallery
- [ ] Telefone e e-mail reais no Footer
- [ ] SEO: Open Graph images, sitemap.xml
- [ ] Imagem hero de Corrida — substituir Unsplash por foto local quando disponível

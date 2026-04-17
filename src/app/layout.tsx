import type { Metadata } from "next";
import "./globals.css";

const fontshareUrl =
  "https://api.fontshare.com/v2/css?f[]=tanker@400&f[]=satoshi@400,500,700,900&display=swap";

export const metadata: Metadata = {
  title: "SobrOsa | Uniformes de Alta Performance",
  description: "Criamos a identidade visual completa do seu time com tecnologia têxtil de elite. Design exclusivo, conforto térmico e durabilidade extrema.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="stylesheet" href={fontshareUrl} />
      </head>
      <body className="min-h-full antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}

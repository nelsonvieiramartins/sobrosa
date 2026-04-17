import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-full antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}

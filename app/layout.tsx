// layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lacrei Saúde",
  description: "Plataforma dedicada à promoção da saúde e bem-estar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

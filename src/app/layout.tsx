import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A'Decor | Peintre à Noyon - Travaux de rénovation",
  description: "A'Decor, artisan peintre à Noyon. Travaux de peinture intérieure, extérieure et rénovation. Devis gratuit et rapide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

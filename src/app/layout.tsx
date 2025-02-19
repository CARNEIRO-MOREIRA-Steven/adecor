import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A'Decor",
  description: "Artisant peintre Noyon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}

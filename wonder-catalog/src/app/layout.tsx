import type { Metadata } from "next";
import {
  Geist_Mono,
  Inter,
  Playfair_Display,
} from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { WhatsAppFloating } from "@/components/layout/whatsapp-floating";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wonder Travel | Catálogo",
  description:
    "Catálogo estático de experiencias Wonder Travel. Inspiración visual y contacto inmediato por WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${playfair.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-[calc(100vh-8rem)] bg-background text-foreground">
          {children}
        </main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}

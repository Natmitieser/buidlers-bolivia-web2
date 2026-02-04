import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Ticker from "@/components/Ticker/Ticker";
import logs from "@/data/logs.json";
import "./globals.css";
import gridStyles from "@/components/GridOverlay.module.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Buidlers - Web3 + AI",
  description: "Construimos herramientas que empoderan a las personas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${spaceMono.variable} antialiased`}>
        <div className={gridStyles.gridOverlay} />
        <Ticker items={logs} />
        <Navbar />
        <main style={{ marginTop: '80px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display, DM_Sans } from "next/font/google"; 
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
 const dmsans = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans" });

export const metadata: Metadata = {
  title: "Ecosistema Digital",
  description: "Formación docente en entornos digitales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={`${playfair.variable} ${dmsans.variable} antialiased`} 
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}

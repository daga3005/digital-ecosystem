import type { Metadata } from "next";

import { Playfair_Display, DM_Sans } from "next/font/google"; 
import "./globals.css";

import Navbar from "./components/header/Header";
import FloatingSurveyButton from "./components/FloatingSurveyButton";
import SurveyInvitation from "./components/SurveyInvitation";
import ScrollToTopButton from "./components/ScrollToTopButton";

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
        <ScrollToTopButton/>
        <FloatingSurveyButton />
        <SurveyInvitation />
      </body>
    </html>
  );
}

// components/Header.tsx - Versión refactorizada
"use client";

import LinksDestop from "./LinksDestop";
import LinksMobile from "./LinksMobile";
import NavigationButtons from "./NavigationButtons";
import Logo from "./Logo";
import MobileMenuButton from "./MobileMenuButton";
import { getHeaderStyles } from "./HeaderStyles";
import { useScrollEffect } from "@/app/hooks/useScrollEffect";
import { useMobileMenu } from "@/app/hooks/useMobileMenu";

export default function Header() {
  const scrolled = useScrollEffect(50);
  const { menuOpen, setMenuOpen } = useMobileMenu();

  return (
    <>
      <header className={getHeaderStyles({ scrolled })}>
        <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between">
          {/* Botones de navegación + LOGO (lado izquierdo) */}
          <div className="flex items-center gap-3">
            <NavigationButtons showTooltips={true} />
            
            {/* Separador vertical */}
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-yellow-400/50 to-transparent"></div>
            
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <LinksDestop />

          {/* Mobile Menu Button */}
          <MobileMenuButton 
            menuOpen={menuOpen} 
            onClick={() => setMenuOpen(!menuOpen)} 
          />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-all duration-500
          ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <LinksMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}
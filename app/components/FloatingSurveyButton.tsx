// components/FloatingSurveyButton.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function FloatingSurveyButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar después de hacer scroll 50% de la página
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setIsVisible(scrollPercent > 0.3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <Link
      href="/encuesta"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        {/* Efecto de pulso */}
        <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
        
        {/* Botón principal */}
        <div className="relative bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-sm font-semibold hidden md:inline">Encuesta</span>
        </div>
        
        {/* Tooltip */}
        <span className="absolute -top-8 right-0 bg-gray-900 text-yellow-400 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Danos tu opinión
        </span>
      </div>
    </Link>
  );
}
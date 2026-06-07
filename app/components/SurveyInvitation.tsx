// components/SurveyInvitation.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SurveyInvitation() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem("survey_invitation_seen");
    if (!hasSeen) {
      const timer = setTimeout(() => setShow(true), 20000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("survey_invitation_seen", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-sm z-50 animate-in slide-in-from-bottom-5 duration-500">
      <div className="relative bg-gradient-to-br from-blue-900/98 via-teal-900/95 to-blue-900/98 backdrop-blur-xl rounded-2xl p-5 border border-yellow-400/30 shadow-2xl shadow-yellow-400/10">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-teal-400 to-blue-400 rounded-t-2xl"></div>
        
        <button 
          onClick={handleClose}
          className="absolute top-3 right-3 text-blue-300 hover:text-white transition-colors"
        >
          ✕
        </button>

        <div className="flex items-start gap-3 pr-6">
          <div className="text-3xl">📊</div>
          <div>
            <h4 className="text-white font-bold text-sm mb-1">
              ¿1 minuto para ayudarnos?
            </h4>
            <p className="text-blue-100/70 text-xs mb-3">
              Tu opinión mejora EcoDigital para todos
            </p>
            <Link
              href="/encuesta"
              onClick={handleClose}
              className="inline-block text-xs bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Ir a la encuesta →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
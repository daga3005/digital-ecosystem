// app/encuesta/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SurveyPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [formUrl, setFormUrl] = useState("");

  useEffect(() => {
    // Reemplaza con tu URL de Google Forms
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfDvtFHqBf1PK6OiSTC9545nPwlxjkHx965KE-y7TXc_QvkCw/viewform?embedded=true";
    setFormUrl(GOOGLE_FORM_URL);
    setIsLoading(false);
  }, []);

  return (
    <main className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-blue-950 via-teal-950/50 to-blue-950">
      {/* Hero Section de la encuesta */}
      <section className="relative mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-teal-500/10 to-yellow-500/5 blur-xl"></div>
        
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-900/40 backdrop-blur-sm border border-teal-400/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
            <span className="text-blue-100/80 text-sm">📊 Tu opinión importa</span>
          </div>

          {/* Línea decorativa */}
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-teal-400 to-blue-400 rounded-full mx-auto mb-6"></div>

          {/* Título */}
          <h1 className="font-bold text-white mb-4">
            <span className="text-3xl md:text-5xl bg-gradient-to-r from-yellow-400 via-teal-300 to-blue-300 bg-clip-text text-transparent">
              Cuéntanos tu experiencia
            </span>
          </h1>

          {/* Descripción */}
          <p className="text-blue-100/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Solo te tomará 1 minuto. Tus respuestas nos ayudan a mejorar 
            <span className="text-yellow-400"> EcoDigital</span> para ti.
          </p>

          {/* Indicador de tiempo */}
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-blue-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>⏱️ 1 minuto · 8 preguntas · Anónimo</span>
          </div>
        </div>
      </section>

      {/* Contenedor del Formulario */}
      <section className="px-4 max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-br from-blue-900/40 via-teal-900/30 to-blue-900/40 backdrop-blur-sm rounded-2xl border border-blue-400/20 hover:border-yellow-400/30 transition-all duration-300 overflow-hidden">
          {/* Línea decorativa superior */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-teal-400 to-blue-400"></div>
          
          {isLoading ? (
            // Estado de carga
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-blue-400/30 border-t-yellow-400 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-teal-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              <p className="text-blue-200/70 mt-4">Cargando encuesta...</p>
            </div>
          ) : (
            // Iframe de Google Forms
            <iframe
              src={formUrl}
              className="w-full min-h-[600px] md:min-h-[700px] bg-white/5"
              style={{ border: "none" }}
              title="Encuesta de satisfacción EcoDigital"
              loading="lazy"
            />
          )}
        </div>

        {/* Información adicional */}
        <div className="mt-8 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-yellow-400 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </section>

      {/* Sección de beneficios */}
      <section className="mt-16 px-4 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4 text-center">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-4 rounded-xl bg-blue-900/20 border border-blue-400/10">
              <div className="text-2xl mb-2">{benefit.icon}</div>
              <p className="text-blue-200/80 text-sm">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

const benefits = [
  { icon: "🔒", text: "Tus respuestas son anónimas y seguras" },
  { icon: "⚡", text: "Nos ayuda a mejorar la velocidad" },
  { icon: "🎨", text: "Influye directamente en el diseño" },
];
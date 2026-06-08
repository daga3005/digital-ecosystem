// app/contacto/page.tsx - Versión Glassmorphism
"use client"

import Link from "next/link";
import Hero from "../components/Hero";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a]">
      
      {/* HERO */}
      <Hero title="Contacto" bg_color="bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a]"/>

      {/* CONTACT INFO */}
      <section className="relative pb-28">
        <div className="max-w-5xl mx-auto px-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Email Card */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-yellow-400/10 flex items-center justify-center text-2xl group-hover:bg-yellow-400/20 transition-colors">
                  ✉️
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <Link href="mailto:amhfonseca@ucf.edu.cu" 
                     className="text-white/60 hover:text-yellow-400 transition-colors text-sm break-all">
                    amhfonseca@ucf.edu.cu
                  </Link>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-teal-400/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-teal-400/10 flex items-center justify-center text-2xl group-hover:bg-teal-400/20 transition-colors">
                  📱
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">Teléfono</h3>
                  <Link href="tel:+5355850892" 
                     className="text-white/60 hover:text-teal-400 transition-colors">
                    +53 55850892
                  </Link>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-blue-400/10 flex items-center justify-center text-2xl group-hover:bg-blue-400/20 transition-colors">
                  📍
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">Ubicación</h3>
                  <p className="text-white/60">Universidad de Cienfuegos, Cuba</p>
                </div>
              </div>
            </div>

            {/* Schedule Card */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-purple-400/10 flex items-center justify-center text-2xl group-hover:bg-purple-400/20 transition-colors">
                  🕒
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">Horario</h3>
                  <p className="text-white/60">Lun - Vie: 9am - 5pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link
              href="mailto:investigacion.docente@institucion.edu"
              className="inline-flex items-center gap-2 bg-white text-blue-950 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              <span>✉️</span>
              <span>Escríbenos ahora</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
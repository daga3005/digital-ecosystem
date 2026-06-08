import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#0A1628] text-white/70 border-t border-yellow-400/20 px-6 py-12 overflow-hidden">
  
  {/*  <!-- Glow animado --> */}
  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_80%,rgba(232,184,75,0.08),transparent_60%)] animate-footerGlow"></div>

  <div className="relative max-w-6xl mx-auto">

    {/* <!-- GRID --> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-8 border-b border-white/10 mb-6">

      {/* <!-- BRAND --> */}
      <div className="space-y-3 animate-fadeUp">
        <h3 className="text-white font-playfair text-xl">🌐 EcoDigital</h3>
        <p className="text-sm leading-relaxed max-w-xs">
          Plataforma dedicada a la formación continua de docentes mediante un ecosistema digital integrado, colaborativo y evolutivo.
        </p>
      </div>

      {/* <!-- COL 1 --> */}
      <div className="animate-fadeUp [animation-delay:0.1s]">
        <h4 className="text-yellow-400 text-xs tracking-[0.12em] uppercase mb-3">Plataforma</h4>
        <ul className="space-y-2">
          <li><Link className="footer-link" href="#ecosistema">Ecosistema</Link></li>
           <li><Link className="footer-link" href="#fuentes">Fuentes</Link></li>
          <li><Link className="footer-link" href="#cop">Comunidad CoP</Link></li>
         
        </ul>
      </div>

      {/* <!-- COL 2 --> */}
      <div className="animate-fadeUp [animation-delay:0.2s]">
        <h4 className="text-yellow-400 text-xs tracking-[0.12em] uppercase mb-3">Herramientas</h4>
        <ul className="space-y-2">
          <li><Link className="footer-link" href="/curso">Cursos</Link></li>
          <li><Link className="footer-link" href="/repositorios">Repositorios</Link></li>
          <li><Link className="footer-link" href="#">Foros y Wikis</Link></li>
          <li><Link className="footer-link" href="#">Comunicación</Link></li>
        </ul>
      </div>

      {/* <!-- COL 3 --> */}
      <div className="animate-fadeUp [animation-delay:0.3s]">
        <h4 className="text-yellow-400 text-xs tracking-[0.12em] uppercase mb-3">Contacto</h4>
        <ul className="space-y-2">
          <li><Link className="footer-link" href="/Resumen-del-proyecto">Sobre el Proyecto</Link></li>
          <li><Link className="footer-link" href="/revisores">Revisores</Link></li>
          <li><Link className="footer-link" href="#">Referencias</Link></li>
          <li><Link className="footer-link" href="/contacto">Contacto</Link></li>
        </ul>
      </div>

    </div>

    {/* <!-- BOTTOM --> */}
    <div className=" bg-[#0A1628] fixed bottom-0 flex flex-col sm:flex-row justify-between items-center text-white/40 text-xs gap-2 animate-fadeUp [animation-delay:0.4s]">
      <span>© 2026 EcoDigital · Formación Continua Docente</span>
      <span>Basado en <em className="text-yellow-400 not-italic">Pérez M. A. (2025)</em> · <em className="text-yellow-400 not-italic">Morales (2025)</em></span>
    </div>

  </div>
</footer>

  );
}

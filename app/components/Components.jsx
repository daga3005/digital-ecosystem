export default function Components() {
  return (
    <section
      id="componentes"
      className="bg-[#0A1628] py-24 px-6"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* TAG */}
        <span className="text-yellow-400 text-xs tracking-[0.15em] uppercase font-medium">
          Componentes del Sistema
        </span>

        {/* TITLE */}
        <h2 className="text-4xl font-playfair font-bold text-white mt-2 mb-4">
          Estructura del Ecosistema
        </h2>

        {/* LEAD */}
        <p className="text-white/60 max-w-2xl mb-12">
          El ecosistema resultante del proyecto integra seis componentes principales que trabajan de forma coordinada.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* CARD */}
          <div className="
            relative bg-white/5 border border-white/10 rounded-2xl p-8
            transition-all duration-300 overflow-hidden
            hover:bg-white/10 hover:-translate-y-1
          ">
            <div className="
              absolute bottom-0 left-0 right-0 h-[3px]
              bg-gradient-to-r from-teal-400 to-yellow-400
              scale-x-0 origin-left transition-transform duration-300
              group-hover:scale-x-100
            "></div>

            <span className="text-4xl mb-5 block">📖</span>
            <h3 className="font-dmsans text-white text-[1rem] font-medium mb-3">
              b-MOOC en Moodle
            </h3>
            <p className="text-white/60 text-sm leading-[1.65]">
              Curso masivo en línea combinado, creado mediante el Learning Management System Moodle como núcleo de aprendizaje estructurado.
            </p>
            <span className="text-yellow-400 text-[0.7rem] tracking-[0.1em] uppercase font-medium mt-4 inline-block">
              LMS · Aprendizaje
            </span>
          </div>

          {/* CARD */}
          <div className="
            relative bg-white/5 border border-white/10 rounded-2xl p-8
            transition-all duration-300 overflow-hidden
            hover:bg-white/10 hover:-translate-y-1
          ">
            <span className="text-4xl mb-5 block">💬</span>
            <h3 className="font-dmsans text-white text-[1rem] font-medium mb-3">
              Herramientas de Comunicación
            </h3>
            <p className="text-white/60 text-sm leading-[1.65]">
              Acceso integrado a WhatsApp, Telegram y Messenger para facilitar la interacción inmediata entre docentes e investigadores.
            </p>
            <span className="text-yellow-400 text-[0.7rem] tracking-[0.1em] uppercase font-medium mt-4 inline-block">
              Comunicación
            </span>
          </div>

          {/* CARD */}
          <div className="
            relative bg-white/5 border border-white/10 rounded-2xl p-8
            transition-all duration-300 overflow-hidden
            hover:bg-white/10 hover:-translate-y-1
          ">
            <span className="text-4xl mb-5 block">🗂️</span>
            <h3 className="font-dmsans text-white text-[1rem] font-medium mb-3">
              Recursos Educativos Digitales
            </h3>
            <p className="text-white/60 text-sm leading-[1.65]">
              Repositorios con fuentes fiables sobre el contenido de la formación, identificadas y validadas por los investigadores del proyecto.
            </p>
            <span className="text-yellow-400 text-[0.7rem] tracking-[0.1em] uppercase font-medium mt-4 inline-block">
              Repositorio · Contenido
            </span>
          </div>

          {/* CARD */}
          <div className="
            relative bg-white/5 border border-white/10 rounded-2xl p-8
            transition-all duration-300 overflow-hidden
            hover:bg-white/10 hover:-translate-y-1
          ">
            <span className="text-4xl mb-5 block">💡</span>
            <h3 className="font-dmsans text-white text-[1rem] font-medium mb-3">
              Espacios Colaborativos
            </h3>
            <p className="text-white/60 text-sm leading-[1.65]">
              Foros de discusión y wikis colaborativas que permiten la construcción colectiva del conocimiento en torno al MEH.
            </p>
            <span className="text-yellow-400 text-[0.7rem] tracking-[0.1em] uppercase font-medium mt-4 inline-block">
              Foros · Wikis
            </span>
          </div>

          {/* CARD — SPECIAL BORDER */}
          <div className="
            relative bg-white/5 border border-[rgba(232,184,75,0.3)] rounded-2xl p-8
            transition-all duration-300 overflow-hidden
            hover:bg-white/10 hover:-translate-y-1
          ">
            <span className="text-4xl mb-5 block">🤝</span>
            <h3 className="font-dmsans text-white text-[1rem] font-medium mb-3">
              Comunidad de Práctica (CoP)
            </h3>
            <p className="text-white/60 text-sm leading-[1.65]">
              Espacio virtual novedoso donde docentes comparten buenas prácticas, dudas y hallazgos relacionados con el MEH colaborativamente.
            </p>
            <span className="text-yellow-400 text-[0.7rem] tracking-[0.1em] uppercase font-medium mt-4 inline-block">
              ★ Elemento Clave · MEH
            </span>
          </div>

          {/* CARD */}
          <div className="
            relative bg-white/5 border border-white/10 rounded-2xl p-8
            transition-all duration-300 overflow-hidden
            hover:bg-white/10 hover:-translate-y-1
          ">
            <span className="text-4xl mb-5 block">🧩</span>
            <h3 className="font-dmsans text-white text-[1rem] font-medium mb-3">
              Integración Sistémica
            </h3>
            <p className="text-white/60 text-sm leading-[1.65]">
              Los seis componentes operan como un sistema unificado donde cada elemento potencia y complementa a los demás.
            </p>
            <span className="text-yellow-400 text-[0.7rem] tracking-[0.1em] uppercase font-medium mt-4 inline-block">
              Ecosistema · TIC
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

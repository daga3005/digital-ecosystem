import Link from "next/link";
import { fuentes } from "@/app/definiciones/fuentes";

export default function ListaFuentes() {
 

  const getColorStyles = (color: string) => {
    switch(color) {
      case 'teal':
        return {
          bg: 'bg-[rgba(13,115,119,0.08)]',
          border: 'border-teal-500/30',
          borderHover: 'hover:border-teal-500/70',
          button: 'bg-teal-500 hover:bg-teal-400',
          shadow: 'hover:shadow-[0_8px_25px_-10px_rgba(13,115,119,0.4)]'
        };
      case 'rose':
        return {
          bg: 'bg-[rgba(244,63,94,0.08)]',
          border: 'border-rose-500/30',
          borderHover: 'hover:border-rose-500/70',
          button: 'bg-rose-500 hover:bg-rose-400',
          shadow: 'hover:shadow-[0_8px_25px_-10px_rgba(244,63,94,0.4)]'
        };
      case 'blue':
        return {
          bg: 'bg-[rgba(59,130,246,0.08)]',
          border: 'border-blue-500/30',
          borderHover: 'hover:border-blue-500/70',
          button: 'bg-blue-500 hover:bg-blue-400',
          shadow: 'hover:shadow-[0_8px_25px_-10px_rgba(59,130,246,0.4)]'
        };
      case 'orange':
        return {
          bg: 'bg-[rgba(249,115,22,0.08)]',
          border: 'border-orange-500/30',
          borderHover: 'hover:border-orange-500/70',
          button: 'bg-orange-500 hover:bg-orange-400',
          shadow: 'hover:shadow-[0_8px_25px_-10px_rgba(249,115,22,0.4)]'
        };
      case 'purple':
        return {
          bg: 'bg-[rgba(168,85,247,0.08)]',
          border: 'border-purple-500/30',
          borderHover: 'hover:border-purple-500/70',
          button: 'bg-purple-500 hover:bg-purple-400',
          shadow: 'hover:shadow-[0_8px_25px_-10px_rgba(168,85,247,0.4)]'
        };
      case 'green':
        return {
          bg: 'bg-[rgba(34,197,94,0.08)]',
          border: 'border-green-500/30',
          borderHover: 'hover:border-green-500/70',
          button: 'bg-green-500 hover:bg-green-400',
          shadow: 'hover:shadow-[0_8px_25px_-10px_rgba(34,197,94,0.4)]'
        };
      case 'indigo':
        return {
          bg: 'bg-[rgba(99,102,241,0.08)]',
          border: 'border-indigo-500/30',
          borderHover: 'hover:border-indigo-500/70',
          button: 'bg-indigo-500 hover:bg-indigo-400',
          shadow: 'hover:shadow-[0_8px_25px_-10px_rgba(99,102,241,0.4)]'
        };
      case 'amber':
        return {
          bg: 'bg-[rgba(245,158,11,0.08)]',
          border: 'border-amber-500/30',
          borderHover: 'hover:border-amber-500/70',
          button: 'bg-amber-500 hover:bg-amber-400',
          shadow: 'hover:shadow-[0_8px_25px_-10px_rgba(245,158,11,0.4)]'
        };
      default:
        return {
          bg: 'bg-[rgba(13,115,119,0.08)]',
          border: 'border-teal-500/30',
          borderHover: 'hover:border-teal-500/70',
          button: 'bg-teal-500 hover:bg-teal-400',
          shadow: 'hover:shadow-[0_8px_25px_-10px_rgba(13,115,119,0.4)]'
        };
    }
  };

  return (
    <section
      id="fuentes"
      className="
        relative py-24 md:py-28 overflow-hidden
        bg-gradient-to-b from-[rgba(4,30,70,0.98)] to-[rgba(6,48,110,0.97)]
      "
    >
      {/* FONDO CON PUNTOS DE LUZ */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8">
        {/* CABECERA DE SECCIÓN */}
        <div className="text-center mb-12">
          <div
            className="
              inline-flex items-center gap-2
              bg-[rgba(232,184,75,0.12)]
              border border-[rgba(232,184,75,0.35)]
              text-yellow-400 text-[0.7rem] font-medium tracking-[0.15em]
              uppercase px-4 py-1.5 rounded-full mb-6
            "
          >
            ✧ Formación Continua ✧
          </div>

          <h2
            className="
              font-playfair text-white text-center
              text-[clamp(2rem,4vw,3rem)] leading-[1.2] mb-4
            "
          >
            Programa de{' '}
            <span className="text-yellow-400 italic">Formación Docente</span>
          </h2>

          <p className="text-white/70 max-w-[680px] mx-auto text-[0.98rem]">
            8 fuentes especializados para fortalecer tus competencias en el
            Modelo Educativo Híbrido y la innovación pedagógica
          </p>
        </div>

        {/* CONTADOR DE Fuentes */}
        <div className="text-center mb-8">
          <span className="text-white/40 text-sm">
            📚 {fuentes.length} fuentes disponibles
          </span>
        </div>

        {/* GRID DE CURSOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fuentes.map((fuente, index) => {
            const styles = getColorStyles(fuente.color);
            return (
              <div
                key={fuente.id}
                className={`
                  group rounded-2xl p-6 transition-all duration-300
                  ${styles.bg} ${styles.border} ${styles.borderHover} ${styles.shadow}
                  border backdrop-blur-sm animate-fadeSlideUp
                `}
                style={{ animationDelay: `${0.05 + index * 0.03}s` }}
              >
                {/* ICONO */}
                <div className="text-5xl mb-4">{fuente.icono}</div>

                {/* TÍTULO */}
                <h3 className="text-white text-xl font-semibold mb-3 font-playfair leading-tight">
                  {fuente.titulo}
                </h3>

                {/* DESCRIPCIÓN */}
                <p className="text-white/60 text-sm leading-relaxed mb-6 min-h-[70px]">
                  {fuente.descripcion}
                </p>

                {/* BOTÓN */}
                <Link
                  href={fuente.url}
                  target="blank"
                  rel="noopener noreferrer"
                  className={`
                    inline-flex items-center justify-between w-full
                    px-4 py-2.5 rounded-lg text-white text-sm font-medium
                    transition-all duration-300
                    ${styles.button}
                    hover:translate-x-1 group-hover:shadow-lg
                  `}
                >
                  <span>Ver fuente</span>
                  <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative min-h-[92vh] flex items-center overflow-hidden
        bg-[rgba(6,48,110,0.97)]
      "
    >
      {/* BACKGROUND GRADIENTS ANIMADOS */}
      <div
        className="
          absolute inset-0 bg-animated
          bg-[radial-gradient(ellipse_70%_60%_at_70%_50%,rgba(13,115,119,0.35),transparent_70%),
              radial-gradient(ellipse_40%_50%_at_20%_80%,rgba(232,184,75,0.12),transparent_60%),
              radial-gradient(ellipse_50%_60%_at_85%_20%,rgba(14,160,133,0.15),transparent_60%)]
        "
      />

      {/* GRID OVERLAY */}
      <div
        className="
          absolute inset-0 opacity-[0.25]
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
              linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative z-10 max-w-[1200px] mx-auto
          grid grid-cols-1 md:grid-cols-2 gap-16
          px-8 py-20 items-center
        "
      >
        {/* LEFT SIDE */}
        <div className="animate-fadeSlideUp">
          <div
            className="
              inline-flex items-center gap-2
              bg-[rgba(232,184,75,0.12)]
              border border-[rgba(232,184,75,0.35)]
              text-yellow-400 text-[0.75rem] font-medium tracking-[0.1em]
              uppercase px-4 py-1.5 rounded-full mb-6
            "
          >
            ✦ Investigación 2026 · Formación Docente
          </div>

          <h1
            className="
              font-playfair text-white leading-[1.1]
              text-[clamp(2.2rem,3.5vw,3.6rem)] mb-6
              animate-fadeSlideUp [animation-delay:0.15s]
            "
          >
            El <em className="italic text-yellow-400">Ecosistema Digital</em> en la Formación Continua de Docentes
          </h1>

          <p
            className="
              text-white/70 text-[1.05rem] leading-[1.75]
              max-w-[480px] mb-10
              animate-fadeSlideUp [animation-delay:0.3s]
            "
          >
            Una red interconectada de actores, recursos, plataformas y procesos
            que crean valor y conocimiento de forma colaborativa y evolutiva para docentes.
          </p>

          <div className="flex flex-wrap gap-4 animate-fadeSlideUp [animation-delay:0.45s]">
            <Link
              href="#ecosistema"
              className="
                bg-teal-500 text-white px-8 py-3 rounded-lg font-medium
                border-2 border-teal-500 transition-all
                hover:bg-teal-400 hover:border-teal-400 hover:-translate-y-[2px]
              "
            >
              Explorar el Ecosistema
            </Link>

            <Link
              href="#cursos"
              className="
                bg-transparent text-white px-8 py-3 rounded-lg font-normal
                border-2 border-white/25 transition-all
                hover:border-white/60 hover:-translate-y-[2px]
              "
            >
              Ver Cursos
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE – DIAGRAMA */}
        <div className="flex justify-center items-center animate-fadeSlideUp [animation-delay:0.6s]">
          <div className="relative w-full max-w-[460px] aspect-square">

            {/* ORBIT RINGS */}
            <div
              className="
                absolute top-1/2 left-1/2
                w-[230px] h-[230px]
                border border-dashed border-amber-300 rounded-full
                -translate-x-1/2 -translate-y-1/2
                animate-spinSlow 
              "
            />

            <div
              className="
                absolute top-1/2 left-1/2
                w-[350px] h-[350px]
                border border-dashed border-teal-300 rounded-full
                -translate-x-1/2 -translate-y-1/2
                animate-spinReverse
              "
            />

            {/* CENTER NODE */}
            <div
              className="
                absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[130px] h-[130px] rounded-full
                bg-gradient-to-br from-teal-600 to-yellow-400
                flex flex-col items-center justify-center
                shadow-[0_0_60px_rgba(13,115,119,0.5)]
                glow-pulse
                z-20
              "
            >
              <span className="text-4xl">🌐</span>
              <p className="text-white text-[0.62rem] font-medium tracking-wide uppercase mt-1">
                Ecosistema Digital
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

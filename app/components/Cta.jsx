export default function Cta() {
  return (
    <section
      id="contacto"
      className="
        text-center py-24 px-6
        bg-gradient-to-br from-teal-500 to-[#0A1628]
      "
    >
      {/* TITLE */}
      <h2
        className="
          font-playfair text-white
          text-[clamp(1.8rem,3vw,2.8rem)]
          mb-4
        "
      >
        Únete al Ecosistema Digital
      </h2>

      {/* DESCRIPTION */}
      <p
        className="
          text-white/70 text-[1.05rem] leading-[1.7]
          max-w-[520px] mx-auto mb-10
        "
      >
        Forma parte de una comunidad de docentes comprometidos con la innovación educativa
        y el aprendizaje continuo a través del MEH.
      </p>

      {/* ACTIONS */}
      <div className="flex flex-wrap justify-center gap-4">

        {/* GOLD BUTTON */}
        <a
          href="#"
          className="
            bg-yellow-400 border-2 border-yellow-400 text-[#0A1628]
            px-8 py-3 rounded-lg font-medium text-[0.95rem]
            transition-all duration-200
            hover:opacity-85 hover:-translate-y-[2px]
            font-dmsans
          "
        >
          Acceder a la CoP
        </a>

        {/* OUTLINE BUTTON */}
        <a
          href="#ecosistema"
          className="
            bg-transparent border-2 border-white/40 text-white
            px-8 py-3 rounded-lg font-normal text-[0.95rem]
            transition-all duration-200
            hover:border-white hover:-translate-y-[2px]
            font-dmsans
          "
        >
          Conocer más
        </a>

      </div>
    </section>
  );
}

export default function Definition() {
  return (
    <section id="ecosistema" className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* TAG */}
        <span className="
          inline-block text-yellow-400 text-xs tracking-[0.15em] uppercase
          font-medium mb-3
        ">
          Marco Conceptual
        </span>

        {/* TITLE */}
        <h2 className="
          text-4xl font-playfair font-bold text-[#0A1628] mb-4
        ">
          ¿Qué es el Ecosistema Digital?
        </h2>

        {/* LEAD */}
        <p className="
          text-lg text-gray-600 max-w-2xl mb-12
        ">
          Definido por Pérez M. A. (2025) como una red viva y dinámica que trasciende la simple colección de herramientas tecnológicas.
        </p>

        {/* GRID LAYOUT */}
        <div className="
          grid grid-cols-1 md:grid-cols-2 gap-12 items-start
        ">

          {/* QUOTE CARD */}
          <div className="
            relative bg-[#0A1628] text-white rounded-2xl p-10 overflow-hidden
          ">
            {/* GIANT QUOTE MARK */}
            <div className="
              absolute top-[-20px] left-6 text-[8rem] leading-none
              text-[rgba(13,115,119,0.25)] font-playfair
            ">
              “
            </div>

            <p className="
              relative z-10 font-playfair italic text-[1.1rem]
              text-white/90 leading-[1.75] mb-5
            ">
              "Red interconectada de actores, recursos, plataformas y procesos que interactúan entre sí en un entorno digital común, creando valor y conocimiento de forma colaborativa y evolutiva."
            </p>

            <span className="
              text-yellow-400 text-sm tracking-[0.05em] font-medium
            ">
              — Pérez M. A., 2025, pág. 1
            </span>
          </div>

          {/* DEFINITION POINTS */}
          <div className="flex flex-col gap-5">

            {/* POINT */}
            <div className="
              flex gap-4 items-start p-5 bg-white rounded-xl border border-gray-200
              transition-all duration-200 hover:border-teal-500 hover:shadow-lg hover:translate-x-1
            ">
              <span className="text-2xl">🔗</span>
              <div>
                <h4 className="font-dmsans text-[0.95rem] font-medium text-[#0A1628] mb-1">
                  Interconexión Total
                </h4>
                <p className="text-sm text-gray-600 leading-[1.6]">
                  Cada componente influye y es influenciado por los demás, no son herramientas aisladas.
                </p>
              </div>
            </div>

            {/* POINT */}
            <div className="
              flex gap-4 items-start p-5 bg-white rounded-xl border border-gray-200
              transition-all duration-200 hover:border-teal-500 hover:shadow-lg hover:translate-x-1
            ">
              <span className="text-2xl">🤝</span>
              <div>
                <h4 className="font-dmsans text-[0.95rem] font-medium text-[#0A1628] mb-1">
                  Valor Colaborativo
                </h4>
                <p className="text-sm text-gray-600 leading-[1.6]">
                  El conocimiento se construye de forma colectiva entre todos los actores del ecosistema.
                </p>
              </div>
            </div>

            {/* POINT */}
            <div className="
              flex gap-4 items-start p-5 bg-white rounded-xl border border-gray-200
              transition-all duration-200 hover:border-teal-500 hover:shadow-lg hover:translate-x-1
            ">
              <span className="text-2xl">🌱</span>
              <div>
                <h4 className="font-dmsans text-[0.95rem] font-medium text-[#0A1628] mb-1">
                  Evolución Continua
                </h4>
                <p className="text-sm text-gray-600 leading-[1.6]">
                  El ecosistema se adapta y crece con las necesidades cambiantes de los docentes.
                </p>
              </div>
            </div>

            {/* POINT */}
            <div className="
              flex gap-4 items-start p-5 bg-white rounded-xl border border-gray-200
              transition-all duration-200 hover:border-teal-500 hover:shadow-lg hover:translate-x-1
            ">
              <span className="text-2xl">🎯</span>
              <div>
                <h4 className="font-dmsans text-[0.95rem] font-medium text-[#0A1628] mb-1">
                  Gestión Integrada
                </h4>
                <p className="text-sm text-gray-600 leading-[1.6]">
                  Permite gestionar la información y las TIC de forma integrada en instituciones universitarias.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

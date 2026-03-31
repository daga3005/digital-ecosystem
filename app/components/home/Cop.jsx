export default function Cop() {
  return (
    <section id="cop" className="bg-[#F7F3EB] py-24 px-6">
      <div className="max-w-[1200px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-20 items-center">

          {/* LEFT CARD */}
          <div>
            <div className="
              relative bg-white rounded-2xl p-12 border border-gray-200
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            ">
              {/* LABEL */}
              <div className="
                absolute top-0 right-8 translate-y-[-1px]
                bg-teal-600 text-white text-[0.7rem] font-semibold
                tracking-[0.1em] px-3 py-1 rounded-b-md
              ">
                CoP
              </div>

              <h3 className="font-playfair text-[1.5rem] text-[#0A1628] mb-4">
                La Comunidad de Práctica
              </h3>

              <p className="text-gray-600 leading-[1.7] text-[0.95rem]">
                El elemento más <strong className="text-teal-600">novedoso e innovador</strong> de la propuesta.
                Las CoP son personas que comparten un interés y aprenden colaborativamente sobre un tema específico.
              </p>

              <p className="text-gray-500 text-[0.875rem] mt-3">— Morales, 2025</p>

              {/* STATS GRID */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-[#F7F3EB] rounded-xl p-5 text-center">
                  <strong className="font-playfair text-[1.8rem] text-teal-600 block">∞</strong>
                  <span className="text-gray-600 text-[0.75rem]">Aprendizaje continuo</span>
                </div>

                <div className="bg-[#F7F3EB] rounded-xl p-5 text-center">
                  <strong className="font-playfair text-[1.8rem] text-teal-600 block">CoP</strong>
                  <span className="text-gray-600 text-[0.75rem]">Práctica compartida</span>
                </div>

                <div className="bg-[#F7F3EB] rounded-xl p-5 text-center">
                  <strong className="font-playfair text-[1.8rem] text-teal-600 block">MEH</strong>
                  <span className="text-gray-600 text-[0.75rem]">Enfoque central</span>
                </div>

                <div className="bg-[#F7F3EB] rounded-xl p-5 text-center">
                  <strong className="font-playfair text-[1.8rem] text-teal-600 block">100%</strong>
                  <span className="text-gray-600 text-[0.75rem]">Virtual e inclusivo</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <span className="text-xs tracking-[0.15em] uppercase text-gray-700 font-medium">
              Comunidad de Práctica
            </span>

            <h2 className="text-4xl font-playfair font-bold text-[#0A1628] mt-2 mb-6">
              Un espacio para compartir y crecer juntos
            </h2>

            <p className="text-gray-600 text-[1rem] leading-[1.8] mb-5">
              La idea central es que los docentes tengan un espacio virtual para compartir buenas prácticas,
              sus dudas y hallazgos en relación con el MEH.
            </p>

            <p className="text-gray-600 text-[1rem] leading-[1.8] mb-6">
              Este elemento representa el corazón social del ecosistema, donde el conocimiento no solo se consume
              sino que se crea colectivamente.
            </p>

            {/* FEATURES */}
            <div className="flex flex-col">

              <div className="flex items-start gap-3 py-4 border-b border-gray-200">
                <div className="
                  w-9 h-9 bg-[rgba(13,115,119,0.08)] rounded-lg
                  flex items-center justify-center text-[1.1rem]
                ">
                  📝
                </div>
                <div>
                  <h4 className="font-dmsans text-[0.9rem] font-medium text-[#0A1628] mb-1">
                    Buenas Prácticas
                  </h4>
                  <p className="text-gray-600 text-[0.8rem]">
                    Los docentes comparten estrategias metodológicas efectivas con el MEH.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 py-4 border-b border-gray-200">
                <div className="
                  w-9 h-9 bg-[rgba(13,115,119,0.08)] rounded-lg
                  flex items-center justify-center text-[1.1rem]
                ">
                  ❓
                </div>
                <div>
                  <h4 className="font-dmsans text-[0.9rem] font-medium text-[#0A1628] mb-1">
                    Resolución Colectiva
                  </h4>
                  <p className="text-gray-600 text-[0.8rem]">
                    Las dudas se resuelven en comunidad, con el apoyo de pares y expertos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 py-4 border-b border-gray-200">
                <div className="
                  w-9 h-9 bg-[rgba(13,115,119,0.08)] rounded-lg
                  flex items-center justify-center text-[1.1rem]
                ">
                  🔬
                </div>
                <div>
                  <h4 className="font-dmsans text-[0.9rem] font-medium text-[#0A1628] mb-1">
                    Hallazgos e Investigación
                  </h4>
                  <p className="text-gray-600 text-[0.8rem]">
                    Se documentan y difunden los descubrimientos pedagógicos del grupo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 py-4">
                <div className="
                  w-9 h-9 bg-[rgba(13,115,119,0.08)] rounded-lg
                  flex items-center justify-center text-[1.1rem]
                ">
                  🌐
                </div>
                <div>
                  <h4 className="font-dmsans text-[0.9rem] font-medium text-[#0A1628] mb-1">
                    Entorno 100% Virtual
                  </h4>
                  <p className="text-gray-600 text-[0.8rem]">
                    Accesible en cualquier momento y lugar para todos los docentes.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

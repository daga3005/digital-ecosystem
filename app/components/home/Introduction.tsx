export default function Introduccion() {
  return (
    <section
      id="introduccion"
      className="
        relative py-15 md:py-32 overflow-hidden
        bg-gradient-to-b from-[rgba(6,48,110,0.97)] to-[rgba(4,30,70,0.98)]
      "
    >
    
      <div className="relative z-10 max-w-[1500px] mx-auto px-8">
      
        {/* PÁRRAFOS DE INTRODUCCIÓN */}
        <div className="max-w-[1100px] mx-auto space-y-5">
          <p
            className="
              text-white/80 text-[1.02rem] md:text-[1.05rem] leading-relaxed
              text-justify animate-fadeSlideUp [animation-delay:0.15s]
            "
          >
            El <strong className="text-teal-300">Modelo Educativo Híbrido (MEH)</strong> se ha convertido en una vía estratégica para transformar la enseñanza universitaria en un escenario donde convergen lo presencial y lo digital. En el contexto cubano, esta transformación adquiere un valor especial: las instituciones de educación superior enfrentan el desafío de actualizar sus prácticas docentes sin perder de vista las condiciones reales del país, las necesidades de los estudiantes y las posibilidades tecnológicas disponibles. El proyecto <em className="text-yellow-400/90">“El modelo educativo híbrido (MEH): propuestas para la formación continua de docentes universitarios”</em> surge precisamente para acompañar a los profesores en este proceso de cambio, ofreciéndoles herramientas, conocimientos y espacios de intercambio que fortalezcan su desempeño profesional.
          </p>

          <p
            className="
              text-white/75 text-[1.02rem] md:text-[1.05rem] leading-relaxed
              text-justify animate-fadeSlideUp [animation-delay:0.25s]
            "
          >
            El <strong className="text-teal-300">ecosistema digital</strong> que se presenta constituye un entorno formativo integral diseñado para apoyar la apropiación del MEH desde una perspectiva didáctica, flexible y contextualizada. Su estructura articula diversos componentes que permiten a los docentes avanzar de manera autónoma y colaborativa en la comprensión y aplicación del modelo. Entre estos componentes se incluyen un aula virtual con un curso especializado sobre el MEH, recursos de autopreparación que facilitan el estudio independiente, actividades y tareas que promueven la reflexión pedagógica, así como herramientas de comunicación y evaluación que modelan el propio enfoque híbrido.
          </p>

          <p
            className="
              text-white/75 text-[1.02rem] md:text-[1.05rem] leading-relaxed
              text-justify animate-fadeSlideUp [animation-delay:0.35s]
            "
          >
            Un elemento especialmente innovador dentro del ecosistema es la{' '}
            <strong className="text-yellow-400">Comunidad de Práctica (CoP) dedicada al MEH</strong>. Este espacio virtual está concebido para que los docentes compartan experiencias, buenas prácticas, dudas y hallazgos relacionados con la implementación del modelo. Las Comunidades de Práctica, entendidas como grupos de personas que comparten un interés y aprenden colaborativamente sobre un tema específico <span className="text-white/50 text-[0.9rem]">(Morales, 2025)</span>, representan una oportunidad única para construir conocimiento colectivo y fortalecer la cultura de innovación pedagógica en la educación superior cubana. Su inclusión en este ecosistema no solo amplía las posibilidades de aprendizaje, sino que también promueve el sentido de pertenencia y la colaboración entre colegas.
          </p>

          <p
            className="
              text-white/80 text-[1.02rem] md:text-[1.05rem] leading-relaxed
              text-justify animate-fadeSlideUp [animation-delay:0.45s]
              font-medium border-l-3 border-teal-500 pl-5
            "
          >
            El propósito final de este ecosistema es acompañar a los profesores en el tránsito hacia un desempeño más competente, creativo y seguro dentro del MEH. Cada recurso, actividad y espacio ha sido diseñado para que el docente se sienta acompañado en su proceso de formación continua y pueda trasladar lo aprendido a sus propias asignaturas. Explorar este entorno es una invitación a transformar la práctica educativa desde una mirada contemporánea, colaborativa y profundamente comprometida con la calidad de la enseñanza universitaria.
          </p>
        </div>

      </div>
    </section>
  );
}
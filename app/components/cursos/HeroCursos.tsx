

export default function HeroCursos({name}:{name:string}) {

    return (
        <section
            className="relative py-24 md:py-28 overflow-hidden
        bg-gradient-to-b from-[rgba(4,30,70,0.98)] to-[rgba(6,48,110,0.97)]
      "
        >
            <div className="text-center mb-12 mt-300">
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
                <h3 className="m-300 p-10 justify-center items-center text-white">
                    {name}</h3>
            </div>
        </section>
    )
}
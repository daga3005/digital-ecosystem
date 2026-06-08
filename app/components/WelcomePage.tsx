import Link from "next/link";


export default function WelcomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Estilos adaptados */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-blue-900/95 via-teal-900/90 to-blue-900/95">
        {/* Gradiente de fondo decorativo */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-teal-500/10 to-yellow-500/5 blur-xl"></div>
        
        {/* Elemento decorativo central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative text-center px-4 max-w-6xl mx-auto">
          {/* Badge de estado - estilo actualizado */}
          <div className="inline-flex items-center gap-2 bg-blue-900/40 backdrop-blur-sm border border-teal-400/30 text-teal-300 text-[0.7rem] font-medium tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-6 hover:border-yellow-400/50 transition-all duration-300">
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
            <span className="text-blue-100/80 text-sm">✧ Ecosistema Digital ✧</span>
          </div>

          {/* Línea decorativa superior del título */}
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-teal-400 to-blue-400 rounded-full mx-auto mb-8"></div>

          {/* Título principal con gradiente mejorado */}
          <h1 className="font-bold text-white mb-6">
            <span className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-yellow-400 via-teal-300 to-blue-300 bg-clip-text text-transparent italic block mt-2">
              Bienvenido al Ecosistema Digital
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-blue-100/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-6 animate-fadeSlideUp [animation-delay:0.3s]">
            Explora un entorno innovador donde la tecnología, el conocimiento y la transformación digital se unen.
            Inicia sesión y accede a herramientas exclusivas para potenciar tu presencia en el mundo digital.
          </p>

          {/* Botón CTA - Login*/}
          <div className="mt-10 animate-fadeSlideUp [animation-delay:0.5s]">
            <Link href={'/dashboard'} className="group relative inline-flex items-center gap-2 bg-gradient-to-br from-blue-600 via-teal-600 to-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25 border border-blue-400/30 hover:border-yellow-400/50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Acceder al Ecosistema
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></span>
            </Link>
            {/* <p className="text-blue-200/50 text-sm mt-4">
              ¿Nuevo en el ecosistema? <Link href="/signUp" className="text-yellow-400 hover:text-yellow-300 transition-colors">Crear cuenta</Link>
            </p> */}
          </div>
        </div>
      </section>

      {/* Sección de características - Estilo cards con los nuevos efectos */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-teal-950/50 to-blue-950">
        <div className="max-w-6xl mx-auto px-4">
          {/* Línea decorativa y título de sección */}
          <div className="text-center mb-12">
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 via-teal-400 to-blue-400 rounded-full mx-auto mb-6"></div>
            <span className="text-teal-300 text-sm font-semibold tracking-wider uppercase bg-blue-900/40 backdrop-blur-sm px-4 py-1.5 rounded-full border border-teal-400/30">
              Explora el Ecosistema
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Lo que <span className="bg-gradient-to-r from-yellow-400 via-teal-300 to-blue-300 bg-clip-text text-transparent">descubrirás</span> al ingresar
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-blue-900/40 via-teal-900/30 to-blue-900/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20 overflow-hidden"
              >
                {/* Gradiente de fondo con azul y teal al hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-teal-500/10 to-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* Línea decorativa superior */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-teal-400 to-blue-400 rounded-t-2xl"></div>
                
                <div className="relative">
                  {/* Icono con gradiente */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 via-teal-500/20 to-yellow-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-blue-400/30 group-hover:border-yellow-400/50">
                    {feature.icon}
                  </div>
                  
                  {/* Título con efecto degradado */}
                  <h3 className="text-xl font-bold mb-3 transition-colors duration-300 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:to-yellow-200">
                    {feature.title}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-blue-100/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de CTA intermedio - Inmersión digital */}
      <section className="py-16 bg-gradient-to-br from-blue-950 via-teal-900/30 to-blue-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="relative bg-gradient-to-br from-blue-900/40 via-teal-900/30 to-blue-900/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-400/20 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/10">
            {/* Línea decorativa superior */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-teal-400 to-blue-400 rounded-t-2xl"></div>
            
            <svg className="w-12 h-12 text-teal-400/50 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            <p className="text-blue-100/80 text-lg md:text-xl leading-relaxed italic">
              El ecosistema digital es el nuevo continente del conocimiento. 
              Inicia sesión y comienza a explorar todas sus posibilidades.
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 via-teal-400 to-blue-400 rounded-full mx-auto mt-6"></div>
            <p className="text-teal-300 mt-4 font-semibold">— Ecosistema Digital Team</p>
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-teal-300 group-hover:text-yellow-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Plataforma Digital",
    description: "Accede a herramientas y recursos digitales de última generación diseñados para potenciar tu presencia online."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-teal-300 group-hover:text-yellow-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9" />
      </svg>
    ),
    title: "Comunidad Conectada",
    description: "Forma parte de una red de innovadores, desarrolladores y creadores que están transformando el ecosistema digital."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-teal-300 group-hover:text-yellow-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Contenido Dinámico",
    description: "Explora cursos, workshops y material exclusivo que se actualiza constantemente con las últimas tendencias digitales."
  }
];

// Animaciones CSS - Añadir al archivo globals.css -- estan anadidos ya
/*
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeSlideUp {
  animation: fadeSlideUp 0.6s ease-out forwards;
}
*/
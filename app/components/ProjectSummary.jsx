// components/ProjectSummary.jsx
import React from 'react';

export default function ProjectSummary ()  {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#041e46] to-[#0a2a5a] py-12 px-4 sm:px-6 lg:px-8 mt-15">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-tr from-yellow-400 to-teal-400 bg-clip-text text-transparent mb-4">
              RESUMEN DEL PROYECTO
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-teal-400 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
          <div className="space-y-6 text-gray-100">
            
            {/* Primer párrafo - UNESCO */}
            <p className="text-lg leading-relaxed">
              Ante el avance que experimentan las TIC en el contexto actual, la UNESCO ha declarado que 
              para empoderar a los educandos tanto en la adquisición de un dominio completo de las 
              disciplinas que estudian, como para que sepan utilizarlas como herramientas para generar 
              nuevos conocimientos, los docentes necesitan emplear métodos pedagógicos adecuados a 
              sociedades del conocimiento <span className="text-yellow-400">(UNESCO, 2019)</span>. Los autores de este proyecto consideran 
              que, entre los métodos pedagógicos adecuados, se ubica el modelo educativo híbrido 
              (también llamado aprendizaje híbrido, aprendizaje mezclado, blended learning o modelo 
              educativo semipresencial).
            </p>

            {/* Estudio teórico */}
            <p className="text-lg leading-relaxed">
              El estudio teórico realizado revela que se necesitan precisiones desde la teoría acerca 
              de la formación y los recursos que deben poseer los docentes para aplicar dicho modelo 
              pedagógico. Se han encontrado variadas propuestas que engloban competencias digitales a 
              alcanzar en los docentes que pueden servir de base para la formulación de políticas y 
              programas de formación por cada región y país como declara la UNESCO <span className="text-teal-400">(2019)</span>. 
              Todas tienen un gran valor, sin embargo, no favorecen la atención adecuada a las 
              especificidades formativas que el modelo educativo híbrido demanda.
            </p>

            {/* Arias et al. */}
            <p className="text-lg leading-relaxed">
              Arias et al. <span className="text-yellow-400">(2020)</span>, expresan que para implementar el modelo educativo híbrido, 
              se requiere no solo distribuir tareas entre educación presencial y virtual, es preciso 
              repensar la educación. Identifican 4 ingredientes claves para su aplicación, uno de ellos 
              se centra en las nuevas habilidades y perfil docente. Al respecto, el nivel de teorización 
              alcanzado todavía es insuficiente, pues existen limitaciones desde los presupuestos 
              filosóficos, sociológicos, pedagógicos y didácticos del contexto cubano, que oriente sobre 
              las dimensiones hacia las cuales dirigir la formación de los docentes, así como otros 
              componentes de los procesos formativos, en relación con esta modalidad educativa.
            </p>

            {/* Proyecto */}
            <div className="bg-white/5 rounded-xl p-6 border-l-4 border-teal-400">
              <p className="text-lg leading-relaxed">
                Por tales razones, se decidió desarrollar el proyecto <span className="font-semibold text-yellow-300">
                `El modelo educativo híbrido (semipresencial): propuestas para la formación continua 
                de docentes universitarios`</span>, asociado al Programa Sectorial `Educación Superior y 
                Desarrollo Sostenible`.
              </p>
            </div>

            {/* Universidades participantes */}
            <p className="text-lg leading-relaxed">
              El proyecto tiene como entidad ejecutora principal la <span className="font-semibold text-teal-300">
              Universidad de Cienfuegos `Carlos Rafael Rodríguez`</span> y como entidades ejecutoras 
              participantes la <span className="font-semibold text-teal-300">Universidad de las Ciencias Informáticas</span> y la 
              <span className="font-semibold text-teal-300"> Universidad de Sancti Spíritus `José Martí Pérez` (UNISS)</span>. 
              Se ha diseñado para contribuir a la solución del problema referido a las limitaciones 
              existentes en la preparación de los docentes universitarios para aplicar el modelo educativo 
              híbrido (semipresencial), en lo adelante MEH, en el proceso de enseñanza-aprendizaje desde 
              los presupuestos filosóficos, sociológicos, pedagógicos, didácticos y normativos del contexto 
              cubano.
            </p>

            {/* Objetivo */}
            <div className="bg-gradient-to-r from-yellow-400/10 to-teal-400/10 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-yellow-300 mb-3">Objetivo</h2>
              <p className="text-lg leading-relaxed">
                Proponer una estrategia de formación continua para los docentes universitarios que 
                favorezca la aplicación del MEH en el proceso de enseñanza-aprendizaje.
              </p>
            </div>

            {/* Resultados */}
            <div>
              <h2 className="text-2xl font-bold text-teal-300 mb-4">Principales resultados</h2>
              <ul className="space-y-3">
                {[
                  "Concepción para la formación continua del docente universitario cubano para la implementación del MEH.",
                  "Programa de un Curso en Línea Masivo y Abierto (MOOC), para la formación de los docentes universitarios, en relación con el MEH.",
                  "Sistema de acciones metodológicas para la formación de los docentes universitarios, en relación con el MEH.",
                  "Ecosistema digital para la formación de docentes en relación con el MEH.",
                  "Estrategia para la gestión de la formación continua de los docentes universitarios, orientada a la implementación del MEH."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-yellow-400 text-xl mt-1">▹</span>
                    <span className="text-gray-100 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


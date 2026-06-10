import Link from "next/link"


interface Repository {
  id: string
  titulo: string
  subtitulo: string
  enlace: string
}

export default function RepoCard({ repo }: { repo: Repository }) {
  return (
    <div className="group relative">
      {/* Gradiente de fondo con azul y teal */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-teal-500/10 to-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      
      <div className="relative bg-gradient-to-br from-blue-900/40 via-teal-900/30 to-blue-900/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20">
        
        {/* Línea decorativa superior */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-teal-400 to-blue-400 rounded-t-2xl"></div>
        
        {/* Título con efecto degradado */}
        <h3 className="text-xl font-bold mb-3 transition-colors duration-300 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:to-yellow-200">
          {repo.titulo}
        </h3>
        
        {/* Subtítulo */}
        <p className="text-blue-100/80 text-sm mb-6 line-clamp-3 min-h-[60px]">
          {repo.subtitulo}
        </p>
        
        {/* Botón de enlace con gradiente amarillo/teal */}
        <Link
          href={repo.enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-between w-full
            px-4 py-2.5 rounded-lg
            bg-gradient-to-r from-green-500/20 to-teal-500/20
            border border-yellow-400/30
            text-yellow-400 
            hover:from-yellow-400 hover:to-teal-400
            hover:text-blue-900
            transition-all duration-300
            font-medium text-sm
            group/btn
          "
        >
          <span>Ver curso</span>
          <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
        </Link>
        
        {/* Elementos decorativos flotantes */}
        <div className="absolute bottom-3 right-3 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 to-teal-400 blur-md"></div>
        </div>
      </div>
    </div>
  )
}
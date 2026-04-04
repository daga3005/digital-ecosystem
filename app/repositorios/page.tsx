// app/repositorios/page.tsx
"use client"

import { useState } from "react"
import Hero from "../components/Hero"
import RepoCard from "../components/repositorios/RepoCard"
import RepoFilters from "../components/repositorios/RepoFilters"
import { repositoriosData } from "../definiciones/definiciones"



export default function RepositoriosPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filtrar SOLO por nombre (título)
  const filteredRepos = repositoriosData.filter((repo) => {
    return repo.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#041e46] to-[#0a2a5a]">
      <Hero 
      title="Repositorios del Ecosistema Inteligente"
      gradientColors="bg-gradient-to-tr from-yellow-400 to-teal-400" />
      
      <div className="max-w-7xl mx-auto px-4 pb-20">
        
        {/* Barra de búsqueda solo por nombre */}
        <RepoFilters 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        {/* Grid de cards */}
        {filteredRepos.length > 0 ? (
          <>
            <div className="text-teal-300/60 text-sm mb-4 text-center">
              Mostrando {filteredRepos.length} repositorio{filteredRepos.length !== 1 ? 's' : ''}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRepos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-yellow-400 text-xl font-bold mb-2">No se encontraron repositorios</h3>
            <p className="text-teal-300/60">
              No hay repositorios que coincidan con &quot;{searchTerm}&quot;
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
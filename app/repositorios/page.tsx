// app/repositorios/page.tsx
"use client"

import Hero from "../components/Hero"
import RepoCard from "../components/repositorios/RepoCard"
import CardsFilters from "../components/CardsFilters"
import { repositoriosData } from "../definiciones/repositorios"
import { useFilters } from "../hooks/useFilters"

export default function RepositoriosPage() {
  const { 
    searchTerm, 
    setSearchTerm, 
    filteredItems: filteredRepos, 
    hasResults, 
    resultsText 
  } = useFilters(repositoriosData, {
    searchFields: ["descripcion", "categoria"], // Campos adicionales si los tienes
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#041e46] to-[#0a2a5a]">
      <Hero 
        title="Repositorios del Ecosistema Inteligente"
        gradientColors="bg-gradient-to-tr from-yellow-400 to-teal-400" 
      />
      
      <div className="max-w-7xl mx-auto px-4 pb-20">
        
        {/* Barra de búsqueda */}
        <CardsFilters 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        {/* Grid de cards */}
        {hasResults ? (
          <>
            <div className="text-teal-300/60 text-sm mb-4 text-center">
              {resultsText}
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
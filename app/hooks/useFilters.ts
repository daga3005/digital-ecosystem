// hooks/useFilters.ts
import { useState, useMemo } from "react"

interface FilterableItem {
  titulo: string
  [key: string]: any
}

interface UseFiltersOptions {
  searchFields?: string[]
}

export function useFilters<T extends FilterableItem>(
  items: T[],
  options: UseFiltersOptions = {}
) {
  const { searchFields = [] } = options
  const [searchTerm, setSearchTerm] = useState("")

  // ✅ Todo el filtrado ocurre durante el renderizado, sin efectos secundarios
  const filteredItems = useMemo(() => {
    const term = searchTerm.toLowerCase().trim()
    
    if (!term) return items

    return items.filter((item) => {
      // Buscar en el título
      if (item.titulo.toLowerCase().includes(term)) return true
      
      // Buscar en campos adicionales
      for (const field of searchFields) {
        const fieldValue = item[field]
        if (fieldValue && String(fieldValue).toLowerCase().includes(term)) {
          return true
        }
      }
      
      return false
    })
  }, [items, searchTerm, searchFields])

  const hasResults = filteredItems.length > 0
  const resultsCount = filteredItems.length
  
  // Derivar el texto durante el renderizado (no en useMemo ni useEffect)
  const getResultsText = () => {
    // Detecta el tipo de item basado en propiedades específicas
    const sampleItem = items[0]
    let itemType = "elemento"
    
    if (sampleItem) {
      if ('duracion' in sampleItem) itemType = "curso"
      else if ('url' in sampleItem) itemType = "repositorio"
      else if ('degree' in sampleItem) itemType = "revisor"
    }
    
    return `Mostrando ${resultsCount} ${itemType}${resultsCount !== 1 ? 's' : ''}`
  }

  const resetSearch = () => setSearchTerm("")

  return {
    searchTerm,
    setSearchTerm,
    filteredItems,
    hasResults,
    resultsCount,
    resultsText: getResultsText(),
    resetSearch,
  }
}
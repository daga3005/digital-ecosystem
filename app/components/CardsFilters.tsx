
interface SearchProps {
  searchTerm: string
  onSearchChange: (term: string) => void
}

export default function CardsFilters({ searchTerm, onSearchChange }: SearchProps) {
  return (
    <div className="relative max-w-md mx-auto mb-12 -mt-8">
      <input
        type="text"
        placeholder="🔍 Buscar por nombre..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="
          w-full px-6 py-3 rounded-full
          bg-blue-950/50 backdrop-blur-sm
          border border-teal-400/30
          text-white placeholder:text-teal-200/40
          focus:outline-none focus:border-yellow-400/50
          transition-all duration-300
        "
      />
    </div>
  )
}
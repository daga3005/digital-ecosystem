
import { useNavigation } from '@/app/hooks/useNavigation';

interface NavigationButtonsProps {
  showTooltips?: boolean;
}

export default function NavigationButtons({ showTooltips = true }: NavigationButtonsProps) {
  const { canGoBack, handleGoBack, handleGoForward } = useNavigation();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleGoBack}
        disabled={!canGoBack}
        className={`
          relative group p-2 rounded-lg transition-all duration-300
          ${canGoBack 
            ? "bg-blue-800/50 hover:bg-blue-700/70 cursor-pointer hover:scale-105" 
            : "bg-blue-900/30 cursor-not-allowed opacity-40"
          }
          border border-blue-400/30 hover:border-yellow-400/50
        `}
        aria-label="Ir atrás"
      >
        <svg 
          className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {showTooltips && canGoBack && (
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-yellow-400 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Atrás
          </span>
        )}
      </button>

      <button
        onClick={handleGoForward}
        className={`
          relative group p-2 rounded-lg transition-all duration-300
          bg-blue-800/50 hover:bg-blue-700/70 cursor-pointer hover:scale-105
          border border-blue-400/30 hover:border-yellow-400/50
        `}
        aria-label="Ir adelante"
      >
        <svg 
          className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        {showTooltips && (
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-yellow-400 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Adelante
          </span>
        )}
      </button>
    </div>
  );
}
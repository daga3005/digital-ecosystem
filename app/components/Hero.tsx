// app/components/Hero.tsx - Versión completa
interface HeroProps {
  title: string
  subtitle?: string
  bg_color?: string
  badgeText?: string
  showPulse?: boolean
  gradientColors?: string
}

export default function Hero({ 
  title, 
  subtitle, 
  bg_color = "bg-gradient-to-b from-[rgba(4,30,70,0.98)] to-[rgba(6,48,110,0.97)]",
  badgeText = "✧ Formación Continua ✧",
  showPulse = true,
  gradientColors = "from-yellow-400 via-orange-400 to-red-400",
}: HeroProps) {
  return (
    <section className={`relative py-20 md:py-28 overflow-hidden ${bg_color}`}>
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative text-center px-4 max-w-6xl mx-auto">
        {/* Badge de estado - moderno */}
        <div className="inline-flex items-center gap-2 bg-[rgba(206,149,16,0.12)] border border-[rgba(232,184,75,0.35)] text-yellow-400 text-[0.7rem] font-medium tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-6">
         {showPulse && <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>}
          <span className="text-white/70 text-sm">{badgeText}</span>
        </div>
        

        {/* Título principal - combinación de estilos */}
        <h1 className="font-playfair font-bold text-white mb-6">
          
          <span className={`text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent italic block mt-2`}>
            {title}
          </span>
        </h1>

        {/* Subtítulo */}
        {subtitle && (
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-6 animate-fadeSlideUp [animation-delay:0.3s]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
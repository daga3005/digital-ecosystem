"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { images } from "@/app/definiciones/imagenes";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  

  return (
    <div className="relative w-full group">
      {/* Viewport con estilo premium y formato rectangular (más ancho que alto) */}
      <div 
        className="
          overflow-hidden rounded-2xl 
          shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]
          border border-white/10
        " 
        ref={emblaRef}
      >
        <div className="flex">
          {images.map((image, idx) => (
            <div 
              key={idx} 
              className="relative flex-[0_0_100%] h-[400px] md:h-[450px] bg-gradient-to-br from-teal-900/20 to-blue-900/20"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={idx === 0}
                sizes="100vw"
              />
              
              {/* Overlay decorativo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/5 via-transparent to-yellow-400/5 pointer-events-none rounded-2xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Botones con animación y estilo acorde */}
      <button
        onClick={scrollPrev}
        className="
          absolute left-2 md:left-4 top-1/2 -translate-y-1/2 
          bg-white/10 backdrop-blur-md 
          hover:bg-teal-500 hover:backdrop-blur-none
          text-white p-2 md:p-3 rounded-full 
          transition-all duration-300 
          opacity-0 group-hover:opacity-100 focus:opacity-100 
          md:opacity-100
          hover:scale-110
          border border-white/20
          shadow-xl
          z-10
        "
        aria-label="Anterior"
      >
        <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
      </button>

      <button
        onClick={scrollNext}
        className="
          absolute right-2 md:right-4 top-1/2 -translate-y-1/2 
          bg-white/10 backdrop-blur-md 
          hover:bg-teal-500 hover:backdrop-blur-none
          text-white p-2 md:p-3 rounded-full 
          transition-all duration-300 
          opacity-0 group-hover:opacity-100 focus:opacity-100 
          md:opacity-100
          hover:scale-110
          border border-white/20
          shadow-xl
          z-10
        "
        aria-label="Siguiente"
      >
        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
      </button>

      {/* Indicadores estilo premium */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`
              transition-all duration-300 rounded-full
              ${selectedIndex === idx 
                ? 'w-6 bg-teal-400 h-2' 
                : 'w-2 bg-white/40 hover:bg-white/60 h-2'
              }
            `}
            onClick={() => emblaApi?.scrollTo(idx)}
            aria-label={`Ir al slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
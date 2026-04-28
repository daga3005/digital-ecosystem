"use client";

import Image from "next/image";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const images = [
    { src: "/carousel/rel-blue.png", alt: "Slide 1" },
    { src: "/carousel/green.jpg", alt: "Slide 2" },
    { src: "/carousel/take.png", alt: "Slide 3" },
  ];

  return (
    <div className="relative w-full group">
      {/* Viewport */}
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((image, idx) => (
            <div key={idx} className="relative flex-[0_0_100%] h-[500px]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={idx === 0}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Botones - Solo visibles en hover en desktop */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 md:opacity-100"
        aria-label="Anterior"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 md:opacity-100"
        aria-label="Siguiente"
      >
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
  );
}
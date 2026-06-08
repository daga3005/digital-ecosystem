// components/header/Logo.tsx
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 no-underline group">
      <div
        className="
          w-9 h-9 rounded-lg flex items-center justify-center text-white text-lg
          bg-white
          transition-transform duration-300 group-hover:scale-105
          overflow-hidden
        "
      >
        <Image
          src="/LogoSoloSinContorno.png"  // Cambia por la ruta de tu imagen
          alt="EcoDigital Logo"
          width={36}
          height={36}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="leading-tight">
        <span className="font-playfair text-white text-[1.1rem] font-bold">
          EcoDigital
        </span>
        <span
          className="
            block text-[0.65rem] text-yellow-400 tracking-[0.1em]
            uppercase font-dmsans
          "
        >
          Formación Docente
        </span>
      </div>
    </Link>
  );
}
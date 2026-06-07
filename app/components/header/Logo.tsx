// components/header/Logo.tsx
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 no-underline group">
      <div
        className="
          w-9 h-9 rounded-lg flex items-center justify-center text-white text-lg
          bg-gradient-to-br from-teal-400 to-yellow-400
          transition-transform duration-300 group-hover:scale-105
        "
      >
        🌐
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
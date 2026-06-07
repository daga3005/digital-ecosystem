"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { links } from "@/app/definiciones/links";
import { useSmoothScroll } from "@/app/hooks/useSmoothScroll";

export default function LinksDestop() {
    const { handleSmoothScroll } = useSmoothScroll();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Detectar si es desktop
        const checkScreen = () => {
            setIsVisible(window.innerWidth >= 768); // 768px = md
        };
        
        checkScreen();
        window.addEventListener('resize', checkScreen);
        
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    if (!isVisible) return null;

    return (
        <ul className="flex items-center gap-8 list-none">
            {links.map(([label, href]) => (
                <li key={href}>
                    <Link
                        href={href}
                        onClick={(e) => handleSmoothScroll(href, e)}
                        className="text-white/80 text-[0.9rem] tracking-wide relative transition hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        {label}
                    </Link>
                </li>
            ))}
          <Link
            href="/signIn"
            className="hidden md:block bg-yellow-400 text-[#0A1628] px-5 py-2 rounded-md font-medium hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
          >
            Loggin
          </Link>
          <Link
            href="/signOut"
           className="hidden md:block bg-yellow-400 text-[#0A1628] px-5 py-2 rounded-md font-medium hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
          >
            Cerrar Sessión
          </Link >
        </ul>
    );
}
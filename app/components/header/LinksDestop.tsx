"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { links } from "@/app/definiciones/links";
import { useSmoothScroll } from "@/app/hooks/useSmoothScroll";
import { useSession } from "@/app/hooks/useSession";

export default function LinksDestop() {
    const { handleSmoothScroll } = useSmoothScroll();
    const { isAuthenticated } = useSession();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsVisible(window.innerWidth >= 768);
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
                        className="group relative text-white/80 text-[1.1rem] font-bold tracking-wide transition-all duration-300 hover:text-white"
                    >
                        {label}
                        {/* Línea animada inferior */}
                        <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-teal-400 transition-all duration-300 group-hover:w-full"></span>
                        {/* Efecto glow al hover */}
                        <span className="absolute inset-0 opacity-0 blur-xl group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-yellow-400/20 to-teal-400/20 -z-10"></span>
                    </Link>
                </li>
            ))}

            {/* Botón de autenticación dinámico */}
            {/* <li className="ml-4">
                {isAuthenticated ? (
                    <Link
                        href="/signOut"
                        className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-teal-400 text-[#041e46] px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25 group"
                    >
                        <span className="relative z-10">Cerrar Sesión</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-teal-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </Link>
                ) : (
                    <Link
                        href="/signIn"
                        className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-teal-400 text-[#041e46] px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25 group"
                    >
                        <span className="relative z-10">Iniciar Sesión</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-teal-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </Link>
                )}
            </li> */}
        </ul>
    );
}
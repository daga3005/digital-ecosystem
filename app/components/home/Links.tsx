"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navLinks } from "@/app/definiciones/navLinks";

export default function Links() {
    const pathname = usePathname();
    const router = useRouter();

    const handleClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
        // Separar la ruta base del anchor
        const [basePath, anchor] = href.split('#');
        
        // Si es la misma página (ignorando el anchor)
        if (basePath === pathname) {
            e.preventDefault();
            
            if (anchor) {
                // Caso 1: Tiene anchor - scroll a la sección específica
                const element = document.getElementById(anchor);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }else {
                // Caso 2: Sin anchor - scroll al top
                window.scrollTo({ top: 0, behavior: 'smooth' });
                // Opcional: refrescar datos
                // router.replace(pathname);
            }
        }
    };
    
    return (
        <ul className="flex items-center gap-8 list-none">
            {navLinks.map(([label, href]) => (
                <li key={href}>
                    <Link
                        href={href}
                        onClick={(e) => handleClick(href, e)}
                        className="
                  text-white/80 text-[0.9rem] tracking-wide relative transition
                  hover:text-white
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:w-0 after:h-[1px] after:bg-yellow-400 after:transition-all after:duration-300
                  hover:after:w-full
                "
                    >
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
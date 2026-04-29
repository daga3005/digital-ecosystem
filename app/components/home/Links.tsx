"use client";
import Link from "next/link";

import { navLinks } from "@/app/definiciones/navLinks";
import { useSmoothScroll } from "@/app/hooks/useSmoothScroll";

export default function Links() {
    const {handleSmoothScroll}= useSmoothScroll()
    return (
        <ul className="flex items-center gap-8 list-none">
            {navLinks.map(([label, href]) => (
                <li key={href}>
                    <Link
                        href={href}
                        onClick={(e) => handleSmoothScroll(href, e)}
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
import Link from "next/link"
import { navLinks } from "@/app/definiciones/definiciones"

export default function Links() {
    
    return (
        <ul className="flex items-center gap-8 list-none">
            {navLinks.map(([label, href]) => (
                <li key={href}>
                    <Link
                        href={href}
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
    )
}
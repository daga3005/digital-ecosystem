import Link from "next/link";

interface LinksMobileProps {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}
export default function LinksMobile({ menuOpen, setMenuOpen }: LinksMobileProps) {
    const links = [
        { id: 1, name: "Inicio", href: "/dashboard" },
        { id: 2, name: "Cursos", href: "/#cursos" },
        { id: 3, name: "Repositorios", href: "/repositorios" },
        { id: 4, name: "Contacto", href: "/contacto" },
    ];

    return (
        <div
            className={`
          md:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-[#0A1628] z-40 
          transition-transform duration-500 shadow-2xl
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
            <div className="flex flex-col items-center justify-center h-full gap-6 px-4">
                {links.map((item) => (
                    <Link
                        key={item.id}
                        href={item.href}
                        className="text-xl text-gray-300 hover:text-yellow-400 transition-colors py-2"
                        onClick={() => setMenuOpen(false)}
                    >
                        {item.name}
                    </Link>
                ))}
                <Link
                    href="/signUp"
                    className="px-8 py-3 rounded-md bg-yellow-400 text-[#0A1628] font-bold hover:bg-yellow-300 transition-all duration-300 mt-4"
                    onClick={() => setMenuOpen(false)}
                >
                    Únete
                </Link >
                <Link
                    href="/signOut"
                    className="px-8 py-3 rounded-md bg-yellow-400 text-[#0A1628] font-bold hover:bg-yellow-300 transition-all duration-300 mt-4"
                    onClick={() => setMenuOpen(false)}
                >
                    Sign Out
                </Link >
            </div>
        </div>
    )
}
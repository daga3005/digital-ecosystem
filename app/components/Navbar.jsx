import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-[1000]
        h-[72px] flex items-center px-8
        bg-[rgba(17,56,114,0.97)] backdrop-blur-xl
        border-b border-[rgba(232,184,75,0.2)]
        transition-colors duration-300
      "
    >
      <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between">

        {/* LOGO */}
        <Link href="#" className="flex items-center gap-3 no-underline">
          <div
            className="
              w-9 h-9 rounded-lg flex items-center justify-center text-white text-lg
              bg-gradient-to-br from-teal-400 to-yellow-400
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

        {/* LINKS */}
        <ul className="flex items-center gap-8 list-none">
          {[
            ["Ecosistema", "#ecosistema"],
            ["Componentes", "#componentes"],
            ["Comunidad CoP", "#cop"],
            ["Recursos", "#recursos"],
          ].map(([label, href]) => (
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

          {/* CTA */}
          <li>
            <Link
              href="/auth/signup"
              className="
                bg-yellow-400 text-[#0A1628]
                px-5 py-2 rounded-md font-medium
                hover:bg-yellow-300 transition
              "
            >
              Únete
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

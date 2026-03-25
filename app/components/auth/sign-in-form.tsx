import Link from "next/link";

export default function SignInForm() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0A1628] px-6 py-20">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-2xl w-full max-w-md shadow-xl">

        <h2 className="text-3xl font-playfair text-white text-center mb-2">
          Iniciar Sesión
        </h2>
        <p className="text-white/60 text-center mb-8 text-sm">
          Accede a tu cuenta del Ecosistema Digital
        </p>

        <form className="space-y-5">
          <div>
            <label className="text-white/80 text-sm">Correo electrónico</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-teal-400"
              placeholder="tuemail@ejemplo.com"
            />
          </div>

          <div>
            <label className="text-white/80 text-sm">Contraseña</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-teal-400"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-[#0A1628] font-medium py-3 rounded-lg hover:opacity-90 transition"
          >
            Entrar
          </button>
        </form>
        <p className="text-right text-sm mt-1">
          <Link href="/auth/forgot-password" className="text-yellow-400 hover:underline">
            ¿Olvidaste tu contraseña?
          </Link>
        </p>
        <p className="text-white/60 text-center text-sm mt-6">
          ¿No tienes cuenta?{" "}
          <Link href="/auth/signup" className="text-yellow-400 hover:underline">
            Regístrate aquí
          </Link>
        </p>

      </div>
    </section>
  );
}

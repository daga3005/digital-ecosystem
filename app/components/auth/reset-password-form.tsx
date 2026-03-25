import Link from "next/link";

export default function ResetPasswordForm() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0A1628] px-6 py-20">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-2xl w-full max-w-md shadow-xl">

        <h2 className="text-3xl font-playfair text-white text-center mb-2">
          Restablecer Contraseña
        </h2>

        <p className="text-white/60 text-center mb-8 text-sm">
          Ingresa tu nueva contraseña para completar el proceso.
        </p>

        <form className="space-y-5">

          <div>
            <label className="text-white/80 text-sm">Nueva contraseña</label>
            <input
              type="password"
              className="
                w-full mt-1 px-4 py-3 rounded-lg
                bg-white/5 border border-white/20 text-white
                placeholder-white/40
                focus:outline-none focus:border-teal-400
              "
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="text-white/80 text-sm">Confirmar contraseña</label>
            <input
              type="password"
              className="
                w-full mt-1 px-4 py-3 rounded-lg
                bg-white/5 border border-white/20 text-white
                placeholder-white/40
                focus:outline-none focus:border-teal-400
              "
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="
              w-full bg-yellow-400 text-[#0A1628] font-medium py-3 rounded-lg
              hover:opacity-90 transition
            "
          >
            Guardar nueva contraseña
          </button>
        </form>

        <p className="text-white/60 text-center text-sm mt-6">
          ¿Ya puedes acceder?{" "}
          <Link href="/auth/signin" className="text-yellow-400 hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </section>
  );
}

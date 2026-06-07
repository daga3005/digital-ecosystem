'use client'
import { signup } from "@/app/lib/actions";
import Link from "next/link";
import { useActionState } from "react";

export default function SignUpForm() {

  const [errorMessage, formAction, isPending] = useActionState(signup, undefined)


  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0A1628] px-6 py-20">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-2xl w-full max-w-md shadow-xl">

        <h2 className="text-3xl font-playfair text-white text-center mb-2">
          Crear Cuenta
        </h2>
        <p className="text-white/60 text-center mb-8 text-sm">
          Únete al Ecosistema Digital y forma parte de la CoP
        </p>

        <form action={formAction} className="space-y-5">
          <div>
            <label htmlFor="name" className="text-white/80 text-sm">Nombre completo</label>
            <input
              id="name"
              type="text"
              name="name"
              className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-teal-400"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-white/80 text-sm">Correo electrónico</label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-teal-400"
              placeholder="tuemail@ejemplo.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-white/80 text-sm">Contraseña</label>
            <input
              id="password"
              type="password"
              name="password"
              className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-teal-400"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="text-white/80 text-sm">Confirmar contraseña</label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-teal-400"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-yellow-400 text-[#0A1628] font-medium py-3 rounded-lg hover:opacity-90 transition"

          >
            {isPending ? 'Creando cuenta...' : 'Registrarse'}
          </button>
        </form>

        <p className="text-white/60 text-center text-sm mt-6">
          ¿Ya tienes una cuenta?{" "}
          <Link href="/signIn" className="text-yellow-400 hover:underline">
            Inicia sesión
          </Link>
        </p>
        {errorMessage && (
          <div className="flex items-center gap-2 text-red-500 text-sm mt-2 p-2 bg-red-50 rounded">
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

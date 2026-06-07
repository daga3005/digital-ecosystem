'use client'

import { signingOut } from "@/app/lib/actions";
import { useActionState } from "react";

export default function LogoutForm() {
  const [errorMessage, formAction, isPending] = useActionState(signingOut, undefined)

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0A1628] px-6 py-20">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-2xl w-full max-w-md shadow-xl text-center">

        {/* Icono de salida (opcional) */}
        <div className="flex justify-center mb-4">
          <div className="bg-red-500/20 p-4 rounded-full">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 w-12 text-red-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
              />
            </svg>
          </div>
        </div>

        <h2 className="text-3xl font-playfair text-white text-center mb-2">
          Cerrar Sesión
        </h2>
        <p className="text-white/60 text-center mb-8 text-sm">
          ¿Estás seguro que deseas salir de tu cuenta?
        </p>

        <form action={formAction} className="space-y-5">
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? 'Cerrando sesión...' : 'Sí, salir'}
          </button>
        </form>

        <button
          onClick={() => window.history.back()}
          className="mt-4 text-white/60 hover:text-white text-sm transition"
        >
          Cancelar
        </button>

        {errorMessage && (
          <div className="flex items-center gap-2 text-red-500 text-sm mt-4 p-2 bg-red-500/10 rounded">
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}
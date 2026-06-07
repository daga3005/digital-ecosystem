// app/ui/login-form.tsx
'use client';

import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { authenticate } from '@/app/lib/actions';
import Link from 'next/link';

export default function SignInForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0A1628] px-6 py-20">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-2xl w-full max-w-md shadow-xl">

        <h2 className="text-3xl font-playfair text-white text-center mb-2">
          Iniciar Sesión
        </h2>
        <p className="text-white/60 text-center mb-8 text-sm">
          Accede a tu cuenta del Ecosistema Digital
        </p>

        <form action={formAction} className="space-y-5">
          <div>
            <label className="text-white/80 text-sm">Correo electrónico</label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-teal-400"
              placeholder="tuemail@ejemplo.com"
            />
          </div>

          <div>
            <label className="text-white/80 text-sm">Contraseña</label>
            <input
              type="password"
              name="password"
              required
              minLength={6}
              className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-teal-400"
              placeholder="••••••••"
            />
          </div>

          <input type="hidden" name="redirectTo" value={callbackUrl} />

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-yellow-400 text-[#0A1628] font-medium py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>

          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <p className="text-sm text-red-500">{errorMessage}</p>
            )}
          </div>
        </form>

        <p className="text-right text-sm mt-1">
          <Link href="/auth/forgot-password" className="text-yellow-400 hover:underline">
            ¿Olvidaste tu contraseña?
          </Link>
        </p>

        <p className="text-white/60 text-center text-sm mt-6">
          ¿No tienes cuenta?{" "}
          <Link href="/signUp" className="text-yellow-400 hover:underline">
            Regístrate aquí
          </Link>
        </p>

      </div>
    </section>
  );
}
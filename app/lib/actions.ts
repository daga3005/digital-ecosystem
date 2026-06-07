// app/lib/actions.ts
'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
import postgres from 'postgres';
import z from 'zod';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirectTo: '/dashboard',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          console.error(error)
          return 'Credenciales inválidas.';
        default:
          return 'Algo salió mal.';
      }
    }
    throw error;
  }
  return undefined;
}

export async function signingOut() {
  await signOut({ redirectTo: '/' })
}

const sql = postgres(process.env.POSTGRES_URL!, { ssl: false });
// Esquema de validación para signup
const SignupSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
  confirmPassword: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

export async function signup(prevState: string | undefined, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;

   // Validar datos
  const validatedFields = SignupSchema.safeParse({
    name,
    email,
    password,
    confirmPassword,
  });
  console.log('validatedFields',validatedFields)
   if (!validatedFields.success) {
    const errors = validatedFields.error.flatten();
    // Retornar el primer error encontrado
    return Object.values(errors.fieldErrors)[0]?.[0] || 'Datos inválidos';
  }
  try {
    // Verificar si el usuario ya existe
    const existingUser = await sql`
      SELECT * FROM users WHERE email = ${email}
    `;
    if (existingUser.length > 0) {
      return 'Este correo electrónico ya está registrado.';
    }
    // Insertar el nuevo usuario
    const result = await sql`
      INSERT INTO users (username, email, password)
      VALUES (${name}, ${email}, ${password})
      RETURNING id, username, email
    `;
    const newUser = result[0];
    // Iniciar sesión automáticamente después del registro
    await signIn('credentials', {
      email,
      password,
      redirectTo: '/dashboard',
    });
    } catch (error) {
    console.error('Error en signup:', error);
    // El error NEXT_REDIRECT es normal, lo relanzamos para que Next.js maneje la redirección
    if (error instanceof Error && error.message === 'NEXT_REDIRECT') {
      throw error; // Esto es normal, Next.js lo maneja
    }
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Error al iniciar sesión automáticamente. Por favor, inicia sesión manualmente.';
        default:
          return 'Error al crear la cuenta. Por favor, intenta de nuevo.';
      }
    }
    return 'Error al crear la cuenta. Por favor, intenta de nuevo.';
  }
  // Esta línea solo se ejecuta si hay un error en signIn
  redirect('/dashboard');
}



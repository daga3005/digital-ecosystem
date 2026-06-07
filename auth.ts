// auth.ts
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import postgres from 'postgres';

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
}
// Conexión a PostgreSQL local
const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: false // Para desarrollo local, deshabilitar SSL
});


async function getUser(email: string) {
  try {
    const users = await sql`
      SELECT * FROM users 
      WHERE email = ${email}
    `;
    return users[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        // Validar credenciales
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);

          if (!user) return null;

          // ⚠️ COMPARACIÓN DIRECTA SIN HASH (TEMPORAL)
          // Reemplazar después con bcrypt.compare()
          const passwordsMatch = (password === user.password);

          if (passwordsMatch) {
            return {
              id: user.id,
              email: user.email,
              name: user.name,
            }
          }
        }
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
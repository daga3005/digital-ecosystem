import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/signIn',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const pathname = nextUrl.pathname;
      
     const publicRoutes = ['/signIn', '/signUp'];
      const protectedRoutes = [
        '/a'
        
        
      ];
      
      // Verifica si la ruta actual está protegida
      const isProtectedRoute = protectedRoutes.some(route => 
        pathname.startsWith(route)
      );
      
      // Redirige a login si no está autenticado
      if (isProtectedRoute && !isLoggedIn) {
        return false; // Redirige a /login
      }
      
      // Redirige a dashboard si ya está logueado y va a login/register
      if (isLoggedIn && pathname === '/signIn') {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
// app/hooks/useSession.ts
'use client';

import { useEffect, useState } from 'react';

// Crear un sistema de eventos global
type SessionListener = (session: any) => void;
const listeners: SessionListener[] = [];

let globalSession: any = null;
let isInitialized = false;

// Función para notificar cambios de sesión
export const notifySessionChange = (newSession: any) => {
  globalSession = newSession;
  listeners.forEach(listener => listener(newSession));
};

// Función para obtener la sesión actual
export const getCurrentSession = () => globalSession;

// Hook principal
export function useSession() {
  const [session, setSession] = useState(globalSession);
  const [loading, setLoading] = useState(!isInitialized);

  useEffect(() => {
    // Función que se ejecutará cuando la sesión cambie
    const handleSessionChange = (newSession: any) => {
      setSession(newSession);
      setLoading(false);
    };

    // Suscribirse a los cambios
    listeners.push(handleSessionChange);

    // Cargar sesión inicial si no está cargada
    if (!isInitialized) {
      fetch('/api/auth/session')
        .then(res => res.json())
        .then(data => {
          globalSession = data;
          setSession(data);
          setLoading(false);
          isInitialized = true;
        });
    }

    // Limpiar suscripción
    return () => {
      const index = listeners.indexOf(handleSessionChange);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return {
    session,
    loading,
    isAuthenticated: !!session?.user,
  };
}
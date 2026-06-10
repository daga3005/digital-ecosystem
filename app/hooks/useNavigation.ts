// hooks/useNavigation.ts
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useNavigation() {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const updateNavigationState = () => {
      setCanGoBack(window.history.length > 1);
      // Nota: detectar canGoForward es más complejo, Next.js no tiene una API directa
      setCanGoForward(true); // Por defecto true, pero puedes mejorarlo
    };

    updateNavigationState();
    window.addEventListener("popstate", updateNavigationState);
    
    return () => window.removeEventListener("popstate", updateNavigationState);
  }, []);

  const handleGoBack = () => {
    if (canGoBack && !isNavigating) {
      setIsNavigating(true);
      router.back();
      
      // Timeout de seguridad por si la navegación falla
      setTimeout(() => setIsNavigating(false), 1000);
    }
  };

  const handleGoForward = () => {
    if (!isNavigating) {
      setIsNavigating(true);
      router.forward();
      setTimeout(() => setIsNavigating(false), 1000);
    }
  };

  return { canGoBack, canGoForward, handleGoBack, handleGoForward, isNavigating };
}
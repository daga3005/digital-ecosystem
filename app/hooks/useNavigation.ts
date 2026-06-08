// hooks/useNavigation.ts
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useNavigation() {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    const updateNavigationState = () => {
      setCanGoBack(window.history.length > 1);
    };

    updateNavigationState();
    window.addEventListener("popstate", updateNavigationState);
    
    return () => window.removeEventListener("popstate", updateNavigationState);
  }, []);

  const handleGoBack = () => {
    if (canGoBack) {
      router.back();
    }
  };

  const handleGoForward = () => {
    router.forward();
    
  };

  return { canGoBack, handleGoBack, handleGoForward };
}
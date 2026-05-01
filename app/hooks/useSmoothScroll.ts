'use client'
import { usePathname } from "next/navigation";
import { useCallback } from "react";

export const useSmoothScroll = () => {
  const pathname = usePathname();

  const handleSmoothScroll = useCallback((
    href: string, 
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const [basePath, anchor] = href.split('#');
    
    // Normalizar pathname (considerando home page)
    const currentPath = pathname === '/' ? '' : pathname;
    const targetPath = basePath === '/' ? '' : basePath;

    if (targetPath === currentPath) {
      e.preventDefault();

      if (anchor) {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [pathname]);

  return { handleSmoothScroll };
};
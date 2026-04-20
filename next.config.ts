import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',  // <-- Línea clave para el modo estático
  trailingSlash: true, // Opcional, ayuda con las rutas
  images: {
    unoptimized: true, // Necesario si usas el componente <Image /> de Next.js
  },
};

export default nextConfig;

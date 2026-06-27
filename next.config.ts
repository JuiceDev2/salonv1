import path from 'path';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.4'],
  turbopack: {
    // Esto fuerza a Turbopack a usar la carpeta actual como raíz,
    // ignorando cualquier lockfile en directorios padres (como Documents).
    root: __dirname, 
  },
};

export default nextConfig;   
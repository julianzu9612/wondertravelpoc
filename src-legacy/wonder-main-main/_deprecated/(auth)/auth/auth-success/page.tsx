'use client'; 
// pages/auth-success.tsx
import { useEffect } from 'react';

export default function AuthSuccess() {
  useEffect(() => {
    // Indica que la autenticación fue exitosa
    sessionStorage.setItem('auth-success', 'true');

    // Cierra la pestaña después de un pequeño retraso
    setTimeout(() => {
      window.close();
    }, 100);
  }, []);

  return (
    <div>
      <p>Autenticación exitosa. Puedes cerrar esta pestaña.</p>
    </div>
  );
}

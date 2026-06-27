'use client'

import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [supabase] = useState(() => createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  ))

  useEffect(() => {
    // Escucha cambios en la autenticación (LOGIN, LOGOUT, REFRESH)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        // ¡Esto es lo que falta! Fuerza la recarga de la página al hacer login
        router.refresh() 
        // Opcional: redirigir manualmente si lo prefieres
        // router.push('/admin') 
      }
      if (event === 'SIGNED_OUT') {
        router.refresh()
        router.push('/login')
      }
      if (event === 'TOKEN_REFRESHED') {
        router.refresh()
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [router, supabase])

  return <>{children}</>
}   
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        // CORRECCIÓN AQUÍ: Simplificamos el setAll para evitar conflictos de tipos en Next.js 16
        setAll(cookiesToSet) {
          // 1. Actualizamos las cookies en la petición (para que el servidor las vea)
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          
          // 2. Recreamos la respuesta para poder modificar sus cookies
          supabaseResponse = NextResponse.next({
            request,
          })
          
          // 3. Establecemos las cookies en la respuesta (solo nombre y valor, sin opciones complejas)
          cookiesToSet.forEach(({ name, value }) =>
            supabaseResponse.cookies.set(name, value)
          )
        },
      },
    }
  )

  // Refresca la sesión del usuario
  await supabase.auth.getUser()

  // Lógica de protección (opcional, ajusta según tus rutas protegidas)
  const { data: { user } } = await supabase.auth.getUser()
  
  // Ejemplo: Si no hay usuario y está intentando entrar a /admin, lo mandamos al login
  if (!user && request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return supabaseResponse
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}   
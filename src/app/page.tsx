import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold text-pink-600 text-center">
        ALEJANDRA SALON
      </h1>

      <p className="mt-6 text-gray-600 text-xl text-center max-w-xl">
        Plataforma profesional para administración
        de salón de belleza, citas y clientes , servicio exclusivo del establecimiento.
      </p>

      <div className="flex gap-4 mt-10">
        <Link
          href="/login"
          className="bg-black text-white px-8 py-4 rounded-xl"
        >
          Entrar al sistema
        </Link>

        <Link
          href="/clientes"
          className="border border-black px-8 py-4 rounded-xl"
        >
          Ver clientes
        </Link>
      </div>
    </main>
  );
}
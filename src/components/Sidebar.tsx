import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-10">
        Salon Admin
      </h1>

      <nav className="flex flex-col gap-4">
        <Link
          href="/admin"
          className="hover:bg-white hover:text-black p-3 rounded-xl transition"
        >
          Dashboard
        </Link>

        <Link
          href="/clientes"
          className="hover:bg-white hover:text-black p-3 rounded-xl transition"
        >
          Clientes
        </Link>

        <Link
          href="/citas"
          className="hover:bg-white hover:text-black p-3 rounded-xl transition"
        >
          Citas
        </Link>

        <Link
          href="/"
          className="hover:bg-red-500 p-3 rounded-xl transition mt-10"
        >
          Salir
        </Link>
      </nav>
    </aside>
  );
}
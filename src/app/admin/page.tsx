import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import StatsCard from "../../components/StatsCard";

export default function AdminPage() {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />

      <main className="flex-1 min-h-screen">
        <Navbar />

        <div className="p-8">
          <div className="grid grid-cols-3 gap-6">
            <StatsCard
              title="Clientes"
              value="120"
            />

            <StatsCard
              title="Citas"
              value="48"
            />

            <StatsCard
              title="Ingresos"
              value="$24,500"
            />
          </div>

          <div className="mt-10 bg-white p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-bold mb-4">
              Próximas citas
            </h2>

            <div className="space-y-4">
              <div className="border p-4 rounded-xl">
                Corte premium — 3:00 PM
              </div>

              <div className="border p-4 rounded-xl">
                Manicure — 5:00 PM
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
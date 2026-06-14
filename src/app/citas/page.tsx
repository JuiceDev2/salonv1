import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

export default function CitasPage() {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />

      <main className="flex-1 min-h-screen">
        <Navbar />

        <div className="p-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <h1 className="text-3xl font-bold mb-6">
              Citas
            </h1>

            <div className="space-y-4">
              <div className="border p-4 rounded-xl">
                María — Corte — 3:00 PM
              </div>

              <div className="border p-4 rounded-xl">
                Fernanda — Uñas — 5:00 PM
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
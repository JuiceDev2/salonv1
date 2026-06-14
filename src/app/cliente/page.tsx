import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

export default function ClientesPage() {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />

      <main className="flex-1 min-h-screen">
        <Navbar />

        <div className="p-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <h1 className="text-3xl font-bold mb-6">
              Clientes
            </h1>

            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-4">Nombre</th>
                  <th className="p-4">Correo</th>
                  <th className="p-4">Teléfono</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="p-4">
                    Ana López
                  </td>

                  <td className="p-4">
                    ana@gmail.com
                  </td>

                  <td className="p-4">
                    3312345678
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
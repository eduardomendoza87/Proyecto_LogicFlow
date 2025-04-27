import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

function Horario() {
  const [horarioTref, horarioTInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [horarioData, setHorarioData] = useState([]);

  useEffect(() => {
    const datosGuardados = JSON.parse(localStorage.getItem("horarioAlumno"));

    if (datosGuardados && Array.isArray(datosGuardados)) {
      setHorarioData(datosGuardados);
    } else {
      setHorarioData([
        {
          hora: "08:00 AM",
          lunes: null,
          martes: { materia: "Historia", profesor: "Mtro. Carlos Reyes", enlace: "/reunion-llamada" },
          miercoles: null,
          jueves: null,
          viernes: null,
        },
        {
          hora: "10:00 AM",
          lunes: { materia: "Cálculo I", profesor: "Mtra. Laura Ramírez", enlace: "/reunion-llamada" },
          martes: null,
          miercoles: { materia: "Física", profesor: "Mtro. Andrés López", enlace: "/reunion-llamada" },
          jueves: null,
          viernes: { materia: "Cálculo I", profesor: "Mtra. Laura Ramírez", enlace: "/reunion-llamada" },
        },
        {
          hora: "12:00 PM",
          lunes: { materia: "Química", profesor: "Mtra. Ana Pérez", enlace: "/reunion-llamada" },
          martes: { materia: "Inglés", profesor: "Lic. Sofía Moreno", enlace: "/reunion-llamada" },
          miercoles: null,
          jueves: { materia: "Física", profesor: "Mtro. Andrés López", enlace: "/reunion-llamada" },
          viernes: { materia: "Inglés", profesor: "Lic. Sofía Moreno", enlace: "/reunion-llamada" },
        },
      ]);
    }
  }, []);

  return (
    <div className="bg-cafe4Personalizado container mx-auto p-6 min-h-screen">
      <h3
        ref={horarioTref}
        className={`text-3xl font-bold text-center mb-28 text-negroPersonalizado transition-opacity duration-1000 ${
          horarioTInView ? "opacity-100" : "opacity-0"
        }`}
      >
        Mi horario semanal
      </h3>

      {horarioData.length === 0 ? (
        <div className="text-center text-negroPersonalizado text-xl">No tienes clases asignadas aún.</div>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-negroPersonalizado border border-gray-300">
            <thead className="bg-cafe3Personalizado text-white">
              <tr>
                <th className="px-6 py-3">Hora</th>
                <th className="px-6 py-3">Lunes</th>
                <th className="px-6 py-3">Martes</th>
                <th className="px-6 py-3">Miércoles</th>
                <th className="px-6 py-3">Jueves</th>
                <th className="px-6 py-3">Viernes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {horarioData.map((fila, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 font-semibold bg-gray-50">{fila.hora}</td>
                  {["lunes", "martes", "miercoles", "jueves", "viernes"].map((dia) => (
                    <td key={dia} className="px-6 py-4 relative group">
                      {fila[dia] ? (
                        <>
                          <div className="flex flex-col">
                            <span className="font-medium">{fila[dia].materia}</span>
                            <Link
                              to={fila[dia].enlace}
                              className="mt-1 text-blue-600 hover:underline text-xs"
                            >
                              Ir a clase
                            </Link>
                          </div>
                          <div className="absolute z-10 hidden group-hover:flex flex-col bg-white text-xs text-black border rounded shadow-lg p-3 w-56 top-full mt-2 left-0">
                            <p>👨‍🏫 <strong>Profesor:</strong> {fila[dia].profesor}</p>
                          </div>
                        </>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Horario;

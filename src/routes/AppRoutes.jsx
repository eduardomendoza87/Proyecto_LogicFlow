import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/alumnos/Inicio";
import AlumnosLayout from "../layouts/AlumnosLayout";
import AcercadeNosotros from "../pages/alumnos/AcercadeNosotros";
import IniciarSesion from "../pages/alumnos/IniciarSesion";
import Registrarse from "../pages/alumnos/Registrarse";
import Perfil from "../pages/alumnos/Perfil";
import Soporte from "../pages/alumnos/Soporte";
import CursosActual from "../pages/alumnos/CursosActual";
import ClasesVirtuales from "../pages/alumnos/ClasesVirtuales";
import Horario from "../pages/alumnos/Horario";
import CursosDisponibles from "../pages/alumnos/CursosDisponibles";
import Inscribirse from "../pages/alumnos/Inscribirse";
import FormularioInscripcion from "../components/Formularios/FormularioInscripcion";
import EvaluacionesCursos from "../pages/alumnos/EvalucacionesCursos";
import VerExamen from "../components/componenteEvaluacion/VerExamen";
import VerResultados from "../pages/alumnos/VerResultados";
import VerDetalles from "../components/componenteEvaluacion/VerDetalles";

 

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AlumnosLayout />}>
        <Route index element={<Home />} />
        <Route path="/acerca-de-nosotros" element={<AcercadeNosotros />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/soporte" element={<Soporte />} />
        <Route path="/cursos-actuales" element={<CursosActual />} />
        <Route path="/clases-virtuales" element={<ClasesVirtuales />} />
        <Route path="/horario" element={<Horario />} />
        <Route path="/explorarclase" element={<CursosDisponibles />} />
        <Route path="/inscribirse" element={<Inscribirse />} />
        <Route path="/formulario-inscripcion" element={<FormularioInscripcion />} />
        <Route path="/evaluaciones-cursos" element={<EvaluacionesCursos />} />
        <Route path="/VerExamen" element={<VerExamen />} />
        <Route path="/resultados" element={<VerResultados />} />
        <Route path="/ver-detalles" element={<VerDetalles />} />

      </Route>
    </Routes>
  );
}
export default AppRoutes;
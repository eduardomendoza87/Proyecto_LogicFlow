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
import FormularioPerfil from "../components/Formularios/FormularioPerfil";
import ReunionLLamada from "../pages/alumnos/ReunionLlamada"


//*Aqui van las importaciones de docentes
import DocentesLayout from "../layouts/DocentesLayout";
import InicioDocente from "../pages/docentes/InicioDocente";
import MisCursos from "../pages/docentes/MisCursos";  
import CrearCurso from "../pages/docentes/CrearCurso"; 
import AdminEvaluaciones from "../pages/docentes/AdminEvaluaciones"; 
import CrearEvaluacion from "../components/ComponenteDocente/CrearEvaluacion"; 
import VerEvaluacion from "../components/ComponenteDocente/VerEvaluacion";
import CalificarRespuestas from "../components/ComponenteDocente/CalificarRespuestas";
import VerRespuestas from "../components/ComponenteDocente/VerRespuestas";
import EditarEvaluacion from "../components/ComponenteDocente/EditarEvaluacion";
import Seguimiento from "../pages/docentes/Seguimiento"; 
import VerDetallesAlumno from "../components/ComponenteDocente/VerDetallesAlumno"; 
import PerfilDocente from "../pages/docentes/PerfilDocente";
import EditarPerfilDocente from "../components/ComponenteDocente/EditarPerfilDocente";
import MaterialesCurso from "../components/ComponenteDocente/MaterialesCurso";
import FormularioSubirArchivo from "../components/ComponenteDocente/FormularioSubirArchivo";
import EditarMateriales from "../components/ComponenteDocente/EditarMateriales";
import ModulosyClases from "../components/ComponenteDocente/ModulosyClases";
import CrearModulo from "../components/ComponenteDocente/CrearModulo";
import CrearClase from "../components/ComponenteDocente/CrearClase";
import VerClases from "../components/ComponenteDocente/VerClases";
import VerDetallesClase from "../components/ComponenteDocente/VerDetallesClases";
import EditarClase from "../components/ComponenteDocente/EditarClase";
import EvaluacionesDelCurso from "../components/ComponenteDocente/EvaluacionesDelCurso";
import Estudiantes from "../components/ComponenteDocente/Estudiantes";
import DetallesAlumnoCurso from "../components/ComponenteDocente/DetallesAlumnoCurso";
import VerRespuestasEvaluacion from "../components/ComponenteDocente/VerRespuestasEvaluacion";
import EditarCurso from "../components/ComponenteDocente/EditarCurso";

function AppRoutes() {
  return (
    <Routes>
      {/* Rutas para el layout de alumnos */}
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
        <Route path="/formulario-perfil" element={<FormularioPerfil />} />
        <Route path="/reunion-llamada" element={<ReunionLLamada />} />
        </Route>

        {/*Rutas para el layout de docentes */}
        <Route path="/docente" element={<DocentesLayout />}>
  <Route path="inicio" element={<InicioDocente />} />
  <Route path="mis-cursos" element={<MisCursos />} />
  <Route path="crear-curso" element={<CrearCurso />} /> 
  <Route path="admin-evaluaciones" element={<AdminEvaluaciones />} />
  <Route path="crear-evaluacion" element={<CrearEvaluacion />} />
  <Route path="ver-evaluacion" element={<VerEvaluacion />} />
  <Route path="calificar-respuestas" element={<CalificarRespuestas />} />
  <Route path="ver-respuestas" element={<VerRespuestas />} />
  <Route path="editar-evaluacion" element={<EditarEvaluacion/>} /> 
  <Route path="seguimiento" element={<Seguimiento />} />
  <Route path="ver-detalles-alumno" element={<VerDetallesAlumno />} /> 
  <Route path="perfil-docente" element={<PerfilDocente/>}/>
  <Route path="editar-perfil-docente" element={<EditarPerfilDocente/>}/>
  <Route path="materiales-curso" element={<MaterialesCurso/>}/>
  <Route path="formulario-materiales" element={<FormularioSubirArchivo/>}/>
  <Route path="editar-materiales" element={<EditarMateriales/>}/>
  <Route path="modulos-y-clases" element={<ModulosyClases/>}/>
  <Route path="crear-modulo" element={<CrearModulo/>}/>
  <Route path="crear-clase" element={<CrearClase/>}/>
  <Route path="ver-clases" element={<VerClases/>}/>
  <Route path="ver-detalles-clase" element={<VerDetallesClase/>}/>
  <Route path="editar-clase" element={<EditarClase/>}/>
  <Route path="evaluacion-curso" element={<EvaluacionesDelCurso/>}/>
  <Route path="estudiantes" element={<Estudiantes/>}/>
  <Route path="detalles-alumno-curso" element={<DetallesAlumnoCurso/>}/>
  <Route path="ver-respuesta-evaluacion" element={<VerRespuestasEvaluacion/>}/>
  <Route path="editar-curso" element={<EditarCurso/>}/>
  
</Route>

    </Routes>
  );
}
export default AppRoutes;
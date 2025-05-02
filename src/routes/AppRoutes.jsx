import React from "react";
import { Routes, Route } from "react-router-dom";
import RutaPrivada from "../components/RutaPrivada";

// Layouts
import AlumnosLayout from "../layouts/AlumnosLayout";
import DocentesLayout from "../layouts/DocentesLayout";

// Páginas públicas
import Home from "../pages/alumnos/Inicio";
import AcercadeNosotros from "../pages/alumnos/AcercadeNosotros";
import IniciarSesion from "../pages/alumnos/IniciarSesion";
import Registrarse from "../pages/alumnos/Registrarse";

// Páginas privadas alumnos
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
import ReunionLLamada from "../pages/alumnos/ReunionLlamada";
import VerModulos from "../components/componentesAlumnos/VerModulos";
import VerClase from "../components/componentesAlumnos/VerClase";
import Materiales from "../components/componentesAlumnos/Materiales";
import EvaluacionesEspecifica from "../components/componentesAlumnos/EvaluacionEspecifica";
import VerEnvio from "../components/componenteEvaluacion/VerEnvio";
import VerCalificacion from "../components/componenteEvaluacion/VerCalificacion";
import DetallesClase from "../components/componentesAlumnos/DetallesClase";

// Páginas docentes
import InicioDocente from "../pages/docentes/InicioDocente";
import MisCursos from "../pages/docentes/MisCursos";   
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
import Vermas from "../components/componentesAlumnos/Vermas";


//Paginas de admin
import AdminLayout from "../layouts/AdminLayout";
import InicioAdmin from "../pages/administrador/InicioAdmin";
import GestionUsuarios from "../pages/administrador/GestionUsuarios";
import AgregarUsuario from "../components/componenteAdmin/AgregarUsuario";
import EditarUsuario from "../components/componenteAdmin/EditarUsuario";
import VerDetallesUsuarios from "../components/componenteAdmin/VerDetallesUsuario";
import GestionCursos from "../pages/administrador/GestionCursos";
import CrearCurso from "../components/componenteAdmin/CrearCurso";
import EditarCurso from "../components/componenteAdmin/EditarCurso";
import VerDetallesCursos from "../components/componenteAdmin/VerDetallesCursos";


function AppRoutes() {
  return (
    <Routes>
      {/* Layout alumnos */}
      <Route path="/" element={<AlumnosLayout />}>
        <Route index element={<Home />} />
        <Route path="/acerca-de-nosotros" element={<AcercadeNosotros />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/registrarse" element={<Registrarse />} />

        {/* Protegidas por RutaPrivada (rol: alumno) */}
        <Route path="/perfil" element={<RutaPrivada rolPermitido="alumno"><Perfil /></RutaPrivada>} />
        <Route path="/soporte" element={<RutaPrivada rolPermitido="alumno"><Soporte /></RutaPrivada>} />
        <Route path="/cursos-actuales" element={<RutaPrivada rolPermitido="alumno"><CursosActual /></RutaPrivada>} />
        <Route path="/clases-virtuales" element={<RutaPrivada rolPermitido="alumno"><ClasesVirtuales /></RutaPrivada>} />
        <Route path="/horario" element={<RutaPrivada rolPermitido="alumno"><Horario /></RutaPrivada>} />
        <Route path="/explorarclase" element={<RutaPrivada rolPermitido="alumno"><CursosDisponibles /></RutaPrivada>} />
        <Route path="/inscribirse" element={<RutaPrivada rolPermitido="alumno"><Inscribirse /></RutaPrivada>} />
        <Route path="/formulario-inscripcion" element={<RutaPrivada rolPermitido="alumno"><FormularioInscripcion /></RutaPrivada>} />
        <Route path="/evaluaciones-cursos" element={<RutaPrivada rolPermitido="alumno"><EvaluacionesCursos /></RutaPrivada>} />
        <Route path="/ver-examen" element={<RutaPrivada rolPermitido="alumno"><VerExamen /></RutaPrivada>} />
        <Route path="/resultados" element={<RutaPrivada rolPermitido="alumno"><VerResultados /></RutaPrivada>} />
        <Route path="/ver-detalles" element={<RutaPrivada rolPermitido="alumno"><VerDetalles /></RutaPrivada>} />
        <Route path="/formulario-perfil" element={<RutaPrivada rolPermitido="alumno"><FormularioPerfil /></RutaPrivada>} />
        <Route path="/reunion-llamada" element={<RutaPrivada rolPermitido="alumno"><ReunionLLamada /></RutaPrivada>} />
        <Route path="/ver-modulos" element={<RutaPrivada rolPermitido="alumno"><VerModulos/></RutaPrivada>}/>
        <Route path="/ver-clase" element={<RutaPrivada rolPermitido="alumno"><VerClase/></RutaPrivada>}/>
        <Route path="/materiales" element={<RutaPrivada rolPermitido="alumno"><Materiales/></RutaPrivada>}/>
        <Route path="/evaluacion-especifica" element={<RutaPrivada rolPermitido="alumno"><EvaluacionesEspecifica/></RutaPrivada>}/>
        <Route path="/ver-envio" element={<RutaPrivada rolPermitido="alumno"><VerEnvio/></RutaPrivada>}/>
        <Route path="/ver-calificacion" element={<RutaPrivada rolPermitido="alumno"><VerCalificacion/></RutaPrivada>}/>
        <Route path="/detalles-clase" element={<RutaPrivada rolPermitido="alumno"><DetallesClase/></RutaPrivada>}/>
        <Route path="/ver-mas" element={<RutaPrivada rolPermitido="alumno"><Vermas/></RutaPrivada>}/>




      </Route>

      {/* Layout docentes protegido por rol docente */}
      <Route
        path="/docente"
        element={
          <RutaPrivada rolPermitido="docente">
            <DocentesLayout />
          </RutaPrivada>
        }
      >
        <Route path="inicio" element={<InicioDocente />} />
        <Route path="mis-cursos" element={<MisCursos />} />
        <Route path="admin-evaluaciones" element={<AdminEvaluaciones />} />
        <Route path="crear-evaluacion" element={<CrearEvaluacion />} />
        <Route path="ver-evaluacion" element={<VerEvaluacion />} />
        <Route path="calificar-respuestas" element={<CalificarRespuestas />} />
        <Route path="ver-respuestas" element={<VerRespuestas />} />
        <Route path="editar-evaluacion" element={<EditarEvaluacion />} />
        <Route path="seguimiento" element={<Seguimiento />} />
        <Route path="ver-detalles-alumno" element={<VerDetallesAlumno />} />
        <Route path="perfil-docente" element={<PerfilDocente />} />
        <Route path="editar-perfil-docente" element={<EditarPerfilDocente />} />
        <Route path="materiales-curso" element={<MaterialesCurso />} />
        <Route path="formulario-materiales" element={<FormularioSubirArchivo />} />
        <Route path="editar-materiales" element={<EditarMateriales />} />
        <Route path="modulos-y-clases" element={<ModulosyClases />} />
        <Route path="crear-modulo" element={<CrearModulo />} />
        <Route path="crear-clase" element={<CrearClase />} />
        <Route path="ver-clases" element={<VerClases />} />
        <Route path="ver-detalles-clase" element={<VerDetallesClase />} />
        <Route path="editar-clase" element={<EditarClase />} />
        <Route path="evaluacion-curso" element={<EvaluacionesDelCurso />} />
        <Route path="estudiantes" element={<Estudiantes />} />
        <Route path="detalles-alumno-curso" element={<DetallesAlumnoCurso />} />
        <Route path="ver-respuesta-evaluacion" element={<VerRespuestasEvaluacion />} />
        
      </Route>

      {/*Layout de admin protegido*/}
      <Route
      path="/admin"
      element={
        <RutaPrivada rolPermitido="admin">
          <AdminLayout/>
        </RutaPrivada>
      }
      >
        <Route path="inicio" element={<InicioAdmin/>}/>
        <Route path="gestion-usuarios" element={<GestionUsuarios/>}/>
        <Route path="agregar-usuario" element={<AgregarUsuario/>}/>
        <Route path="editar-usuario" element={<EditarUsuario/>}/>
        <Route path="ver-detalles-usuarios" element={<VerDetallesUsuarios/>}/>
        <Route path="gestion-cursos" element={<GestionCursos/>}/>
        <Route path="crear-curso" element={<CrearCurso />} />
        <Route path="editar-curso" element={<EditarCurso />} />
        <Route path="ver-detalles-cursos" element={<VerDetallesCursos/>}/>

      </Route>
    </Routes>
  );
}
export default AppRoutes;
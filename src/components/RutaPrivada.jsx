import React from "react";
import { Navigate } from "react-router-dom";

/**
 * Componente para proteger rutas por rol (alumno/docente).
 * @param {ReactNode} children - El componente hijo (la vista protegida).
 * @param {string} rolPermitido - El rol requerido para acceder a esta ruta.
 */
function RutaPrivada({ children, rolPermitido }) {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  // Si no hay usuario o el rol no coincide
  if (!usuario || usuario.rol !== rolPermitido) {
    return <Navigate to="/iniciar-sesion" replace />;
  }

  // Si pasa el control de acceso
  return children;
}

export default RutaPrivada;

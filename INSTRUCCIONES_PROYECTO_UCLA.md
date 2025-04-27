📄 INSTRUCCIONES_PROYECTO_UCLA.md
🎯 Descripción del Proyecto
Esta es la plataforma educativa UCLA Virtual, que permite la gestión académica de:

Alumnos

Docentes

Administradores (en desarrollo)

Actualmente ya se encuentra funcional la sección de alumnos (frontend), utilizando LocalStorage para el control básico de usuarios.

🚀 Tecnologías Utilizadas
Frontend: React.js

Enrutamiento: react-router-dom

Animaciones: react-intersection-observer

Videollamadas: @jitsi/react-sdk

Protección de rutas: Componente personalizado RutaPrivada.jsx

Estilos: TailwindCSS con paleta personalizada UCLA

Datos simulados: LocalStorage para usuarios y perfiles

Estructura modular: Separación de layouts, componentes y páginas según rol.

🛠 Flujo de Trabajo a Seguir
Diseñar primero la interfaz visual (sin meter toda la lógica backend aún).

Agregar datos simulados para probar navegación y flujos.

Agregar lógica funcional básica como edición, validación, filtros, búsquedas.

Pensar siempre en la futura conexión con backend.

No mezclar roles: separar Alumno, Docente y Administrador en carpetas específicas.

👨‍💻 Usuarios de Prueba

Rol	Email	Contraseña
Alumno	alumno@ucla.edu	1234
Docente	docente@ucla.edu	4321

📦 Formato del usuario en LocalStorage
{
  "email": "alumno@ucla.edu",
  "rol": "alumno",
  "perfil": {
    "identificacion": {...},
    "academicoActual": {...},
    "contacto": {...},
    "personal": {...},
    "historialAcademico": {...}
  }
}
🗂 Estructura de Carpetas
plaintext
Copiar
Editar
src/
├── components/
│   ├── componentsPerfil/
│   ├── ComponenteDocente/
│   ├── Formularios/
│   └── ...
├── layouts/
│   ├── AlumnosLayout.jsx
│   ├── DocentesLayout.jsx
│   └── AdminLayout.jsx (por crear)
├── pages/
│   ├── alumnos/
│   ├── docentes/
│   ├── admin/ (por crear)
├── AppRoutes.jsx
├── RutaPrivada.jsx
└── main.jsx

📌 Cosas Importantes a Respetar
Cada sección tiene su propio Layout.

Las rutas están protegidas por rol.

Todo dato importante está en LocalStorage mientras no haya backend.

Mantener los estilos y estructura de diseño actuales (coherencia visual).

Antes de agregar funcionalidad compleja, preguntar o planificar.

Modularizar componentes: cada cosa importante debe ser un componente.

📋 Pendientes de Desarrollo
Terminar sección de Docentes.

Terminar sección de Administrador.

Preparar integración futura con backend/API real.

✅ Instrucciones para empezar
Clona el repositorio.

Ejecuta npm install para instalar dependencias.

Corre el proyecto con npm run dev.

Inicia sesión con alguno de los usuarios de prueba.

Explora el flujo y continúa el desarrollo modularmente.

📣 Nota final
Este documento debe actualizarse conforme avanza el desarrollo.
¡Trabajemos en equipo de manera ordenada y limpia!
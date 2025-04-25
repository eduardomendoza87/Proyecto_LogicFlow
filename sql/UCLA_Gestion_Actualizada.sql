
-- Eliminación de la base anterior si existe y creación de la nueva
DROP DATABASE IF EXISTS UCLA_Gestion;
CREATE DATABASE UCLA_Gestion;
USE UCLA_Gestion;

-- Tabla de usuarios
CREATE TABLE Usuarios (
    usuario_id INT IDENTITY(1,1) PRIMARY KEY,
    usuario_correo NVARCHAR(100) UNIQUE NOT NULL,
    usuario_clave NVARCHAR(255) NOT NULL
);

-- Tabla de datos personales
CREATE TABLE Personas (
    persona_id INT IDENTITY(1,1) PRIMARY KEY,
    persona_nombre NVARCHAR(100) NOT NULL,
    persona_paterno NVARCHAR(100) NOT NULL,
    persona_materno NVARCHAR(100) NOT NULL,
    usuario_id INT UNIQUE NOT NULL,
    persona_curp NVARCHAR(18),
    persona_direccion NVARCHAR(255),
    persona_telefono NVARCHAR(20),
    persona_fecha_nacimiento DATE,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(usuario_id)
);

-- Tabla de estudiantes
CREATE TABLE Estudiantes (
    estudiante_id INT IDENTITY(1,1) PRIMARY KEY,
    usuario_id INT UNIQUE NOT NULL,
    estu_matricula NVARCHAR(20) UNIQUE NOT NULL,
    estu_carrera NVARCHAR(100) NOT NULL,
    estu_modalidad NVARCHAR(20),
    estu_plan_estudios NVARCHAR(100),
    estu_periodo_ingreso NVARCHAR(20),
    estu_periodos_validados NVARCHAR(100),
    estu_estado NVARCHAR(50),
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(usuario_id)
);

-- Tabla de profesores
CREATE TABLE Profesores (
    profesor_id INT IDENTITY(1,1) PRIMARY KEY,
    usuario_id INT UNIQUE NOT NULL,
    prof_especialidad NVARCHAR(100) NOT NULL,
    prof_area NVARCHAR(100),
    prof_formacion NVARCHAR(255),
    prof_certificaciones NVARCHAR(255),
    prof_experiencia_anios INT,
    prof_cv NVARCHAR(255),
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(usuario_id)
);

-- Tabla de cursos
CREATE TABLE Cursos (
    curso_id INT IDENTITY(1,1) PRIMARY KEY,
    curso_nombre NVARCHAR(100) NOT NULL,
    curso_descripcion NVARCHAR(MAX),
    curso_duracion NVARCHAR(50),
    curso_modalidad NVARCHAR(50),
    curso_area NVARCHAR(100),
    curso_tipo NVARCHAR(50),
    curso_profesor_id INT NOT NULL,
    curso_estado NVARCHAR(50),
    curso_horario NVARCHAR(100),
    curso_fecha_inicio DATE,
    curso_fecha_fin DATE,
    curso_max_alumnos INT,
    FOREIGN KEY (curso_profesor_id) REFERENCES Profesores(profesor_id)
);

-- Tabla de materiales del curso
CREATE TABLE MaterialesCurso (
    material_id INT IDENTITY(1,1) PRIMARY KEY,
    curso_id INT NOT NULL,
    tipo_material NVARCHAR(50),
    titulo NVARCHAR(255),
    archivo NVARCHAR(255),
    url NVARCHAR(255),
    fecha_subida DATE DEFAULT GETDATE(),
    FOREIGN KEY (curso_id) REFERENCES Cursos(curso_id)
);

-- Tabla de módulos
CREATE TABLE Modulos (
    modulo_id INT IDENTITY(1,1) PRIMARY KEY,
    curso_id INT NOT NULL,
    nombre_modulo NVARCHAR(100),
    descripcion_modulo NVARCHAR(MAX),
    fecha_creacion DATE DEFAULT GETDATE(),
    estado NVARCHAR(50),
    FOREIGN KEY (curso_id) REFERENCES Cursos(curso_id)
);

-- Tabla de clases
CREATE TABLE Clases (
    clase_id INT IDENTITY(1,1) PRIMARY KEY,
    modulo_id INT NOT NULL,
    nombre_clase NVARCHAR(100),
    descripcion_clase NVARCHAR(MAX),
    fecha_clase DATE,
    duracion_min INT,
    estado NVARCHAR(50),
    tipo_material NVARCHAR(50),
    archivo NVARCHAR(255),
    url NVARCHAR(255),
    FOREIGN KEY (modulo_id) REFERENCES Modulos(modulo_id)
);

-- Tabla de evaluaciones
CREATE TABLE Evaluaciones (
    evaluacion_id INT IDENTITY(1,1) PRIMARY KEY,
    curso_id INT NOT NULL,
    nombre NVARCHAR(100),
    descripcion NVARCHAR(MAX),
    tipo NVARCHAR(50),
    fecha_entrega DATE,
    duracion INT,
    estado NVARCHAR(50),
    instrucciones NVARCHAR(MAX),
    preguntas NVARCHAR(MAX),
    material_adicional NVARCHAR(255),
    url NVARCHAR(255),
    FOREIGN KEY (curso_id) REFERENCES Cursos(curso_id)
);

-- Tabla de entregas por estudiante
CREATE TABLE Entregas (
    entrega_id INT IDENTITY(1,1) PRIMARY KEY,
    evaluacion_id INT NOT NULL,
    estudiante_id INT NOT NULL,
    fecha_entrega DATE,
    estado NVARCHAR(50),
    calificacion DECIMAL(5,2),
    respuestas NVARCHAR(MAX),
    retroalimentacion NVARCHAR(MAX),
    FOREIGN KEY (evaluacion_id) REFERENCES Evaluaciones(evaluacion_id),
    FOREIGN KEY (estudiante_id) REFERENCES Estudiantes(estudiante_id)
);

-- Tabla de inscripciones
CREATE TABLE Inscripciones (
    inscripcion_id INT IDENTITY(1,1) PRIMARY KEY,
    estudiante_id INT NOT NULL,
    curso_id INT NOT NULL,
    fecha_inscripcion DATE DEFAULT GETDATE(),
    FOREIGN KEY (estudiante_id) REFERENCES Estudiantes(estudiante_id),
    FOREIGN KEY (curso_id) REFERENCES Cursos(curso_id)
);

-- Tabla de clases virtuales
CREATE TABLE ClasesVirtuales (
    clase_id INT IDENTITY(1,1) PRIMARY KEY,
    curso_id INT NOT NULL,
    fecha DATETIME NOT NULL,
    enlace NVARCHAR(255),
    descripcion NVARCHAR(MAX),
    FOREIGN KEY (curso_id) REFERENCES Cursos(curso_id)
);

-- Asistencia a clases
CREATE TABLE AsistenciaClases (
    asistencia_id INT IDENTITY(1,1) PRIMARY KEY,
    clase_id INT NOT NULL,
    estudiante_id INT NOT NULL,
    estado_asistencia NVARCHAR(50),
    FOREIGN KEY (clase_id) REFERENCES ClasesVirtuales(clase_id),
    FOREIGN KEY (estudiante_id) REFERENCES Estudiantes(estudiante_id)
);

-- Tabla plataforma
CREATE TABLE Plataforma (
    plat_id INT IDENTITY(1,1) PRIMARY KEY,
    plat_usuario_id INT,
    plat_configuracion NVARCHAR(MAX),
    plat_fecha_modificacion DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (plat_usuario_id) REFERENCES Usuarios(usuario_id)
);

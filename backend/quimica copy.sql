-- 1. Tabla de Usuarios
CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  apellidos VARCHAR(100) NOT NULL,
  contraseña_hash VARCHAR(255) NOT NULL, -- podría ser el DNI hasheado
  rol ENUM('admin', 'docente', 'estudiante') NOT NULL,
  estado BOOLEAN DEFAULT TRUE,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ---------------

-- --------------------------------------------------------
-- 13. Tabla de Cursos (nueva)
-- --------------------------------------------------------
CREATE TABLE cursos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  codigo VARCHAR(20) UNIQUE NOT NULL,
  descripcion TEXT,
  docente_id INT NOT NULL,
  fecha_inicio DATE,
  fecha_fin DATE,
  estado BOOLEAN DEFAULT TRUE,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (docente_id) REFERENCES usuarios(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- --------------------------------------------------------
-- 14. Tabla de Estudiantes en Cursos (nueva)
-- --------------------------------------------------------
CREATE TABLE curso_estudiantes (
  curso_id INT NOT NULL,
  estudiante_id INT NOT NULL,
  fecha_inscripcion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  estado BOOLEAN DEFAULT TRUE,
  PRIMARY KEY (curso_id, estudiante_id),
  FOREIGN KEY (curso_id) REFERENCES cursos(id) ON DELETE CASCADE,
  FOREIGN KEY (estudiante_id) REFERENCES usuarios(id) ON DELETE CASCADE
) ENGINE=InnoDB;


-- ---------------------------------------
-- 2. Tabla de Grados/Secciones 
-- --------------------------------------------------------
CREATE TABLE grados_secciones (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL, -- Ej: "1° A", "2° B", "3° C"
  nivel VARCHAR(50) NOT NULL, -- Ej: "Primaria", "Secundaria"
  seccion CHAR(1) NOT NULL, -- A, B, C, etc.
  docente_id INT NOT NULL,
  año_academico VARCHAR(9) NOT NULL, -- Ej: "2023-2024"
  estado BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (docente_id) REFERENCES usuarios(id) ON DELETE CASCADE,
  UNIQUE KEY (nombre, año_academico) -- Evita duplicados en mismo año
);

-- --------------------------------------------------------
-- 3. Tabla de Estudiantes en Grados/Secciones
-- --------------------------------------------------------
CREATE TABLE grado_estudiantes (
  grado_id INT NOT NULL,
  estudiante_id INT NOT NULL,
  fecha_inscripcion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  estado BOOLEAN DEFAULT TRUE,
  PRIMARY KEY (grado_id, estudiante_id),
  FOREIGN KEY (grado_id) REFERENCES grados_secciones(id) ON DELETE CASCADE,
  FOREIGN KEY (estudiante_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- --------------------------------------------------------
-- 4. Tabla de Elementos Químicos (Tabla Periódica)
-- --------------------------------------------------------
CREATE TABLE elementos_quimicos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  simbolo VARCHAR(5) NOT NULL,
  numero_atomico INT NOT NULL,
  peso_atomico DECIMAL(10,4),
  grupo VARCHAR(50),
  periodo INT,
  bloque CHAR(1), -- s, p, d, f
  tipo ENUM('metal', 'no metal', 'metaloide', 'gas noble') NOT NULL,
  estado_ambiente ENUM('sólido', 'líquido', 'gas', 'desconocido') DEFAULT 'sólido',
  electronegatividad DECIMAL(4,2),
  configuracion_electronica VARCHAR(150),
  valencia VARCHAR(20),
  radio_atomico DECIMAL(5,2),
  energia_ionizacion DECIMAL(6,2),
  afinidad_electronica DECIMAL(6,2),
  densidad DECIMAL(6,3),
  punto_fusion DECIMAL(6,2), -- En °C
  punto_ebullicion DECIMAL(6,2), -- En °C
  descripcion TEXT,
  color VARCHAR(20),
  estado BOOLEAN DEFAULT TRUE
);

-- --------------------------------------------------------
-- 5. Tabla de Preguntas (ahora relacionadas con grado/sección)
-- --------------------------------------------------------
CREATE TABLE preguntas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  texto TEXT NOT NULL,
  tipo ENUM('test', 'texto', 'disparo') NOT NULL,
  opciones JSON, -- Para tipo 'test': ["Op1", "Op2", "Op3", "Op4"]
  respuesta_correcta VARCHAR(255) NOT NULL,
  nivel_dificultad ENUM('básico', 'intermedio', 'avanzado') DEFAULT 'básico',
  puntos INT DEFAULT 10,
  tiempo_limite INT NULL, -- En segundos (opcional)
  estado BOOLEAN DEFAULT TRUE,
  grado_id INT NOT NULL, -- Ahora relacionado con grado/sección
  elemento_id INT NULL, -- Relación con elemento químico
  FOREIGN KEY (grado_id) REFERENCES grados_secciones(id) ON DELETE CASCADE,
  FOREIGN KEY (elemento_id) REFERENCES elementos_quimicos(id)
);

-- --------------------------------------------------------
-- 6. Tabla de Juegos/Modos de Juego
-- --------------------------------------------------------
CREATE TABLE juegos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,  -- Básico, Avanzado, Disparo
  descripcion TEXT,
  nivel_recomendado ENUM('primaria', 'secundaria') DEFAULT 'primaria'
);

-- --------------------------------------------------------
-- 7. Tabla de Partidas
-- --------------------------------------------------------
CREATE TABLE partidas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  estudiante_id INT NOT NULL,
  juego_id INT NOT NULL,
  grado_id INT NOT NULL, -- Para saber en qué grado se jugó
  puntaje_total INT DEFAULT 0,
  completado BOOLEAN DEFAULT FALSE,
  fecha_inicio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_fin DATETIME,
  estado BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (estudiante_id) REFERENCES usuarios(id) ON DELETE CASCADE,
  FOREIGN KEY (juego_id) REFERENCES juegos(id) ON DELETE CASCADE,
  FOREIGN KEY (grado_id) REFERENCES grados_secciones(id) ON DELETE CASCADE
);

-- --------------------------------------------------------
-- 8. Tabla de Respuestas
-- --------------------------------------------------------
CREATE TABLE respuestas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  partida_id INT NOT NULL,
  pregunta_id INT NOT NULL,
  respuesta_dada VARCHAR(255) NOT NULL,
  es_correcta BOOLEAN NOT NULL,
  tiempo_segundos INT,
  fecha_respuesta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  puntos INT DEFAULT 1,
  FOREIGN KEY (partida_id) REFERENCES partidas(id) ON DELETE CASCADE,
  FOREIGN KEY (pregunta_id) REFERENCES preguntas(id)
);

-- --------------------------------------------------------
-- 9. Tabla de Evaluaciones (por grado/sección)
-- --------------------------------------------------------
CREATE TABLE evaluaciones (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(100) NOT NULL,
  descripcion TEXT,
  grado_id INT NOT NULL, -- Ahora relacionado con grado/sección
  fecha_inicio DATETIME NOT NULL,
  fecha_fin DATETIME NOT NULL,
  tiempo_limite INT, -- en minutos
  estado ENUM('activo', 'cerrado') DEFAULT 'activo',
  FOREIGN KEY (grado_id) REFERENCES grados_secciones(id) ON DELETE CASCADE
);

-- --------------------------------------------------------
-- 10. Tabla de Preguntas para Evaluaciones
-- --------------------------------------------------------
CREATE TABLE evaluacion_preguntas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  evaluacion_id INT NOT NULL,
  texto TEXT NOT NULL,
  tipo ENUM('test', 'texto') NOT NULL,
  opciones JSON, -- solo si tipo = test
  respuesta_correcta TEXT NOT NULL,
  puntos INT DEFAULT 1,
  FOREIGN KEY (evaluacion_id) REFERENCES evaluaciones(id) ON DELETE CASCADE
);

-- --------------------------------------------------------
-- 11. Tabla de Respuestas de Evaluaciones
-- --------------------------------------------------------
CREATE TABLE respuestas_evaluacion (
  id INT PRIMARY KEY AUTO_INCREMENT,
  evaluacion_id INT NOT NULL,
  pregunta_id INT NOT NULL,
  estudiante_id INT NOT NULL,
  respuesta_dada TEXT NOT NULL,
  es_correcta BOOLEAN,
  fecha_respuesta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (evaluacion_id) REFERENCES evaluaciones(id) ON DELETE CASCADE,
  FOREIGN KEY (pregunta_id) REFERENCES evaluacion_preguntas(id) ON DELETE CASCADE,
  FOREIGN KEY (estudiante_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- --------------------------------------------------------
-- 12. Tabla de Progreso por Niveles
-- --------------------------------------------------------
CREATE TABLE progreso_niveles (
  estudiante_id INT NOT NULL,
  juego_id INT NOT NULL,
  nivel INT NOT NULL,
  completado BOOLEAN DEFAULT FALSE,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (estudiante_id, juego_id, nivel),
  FOREIGN KEY (estudiante_id) REFERENCES usuarios(id) ON DELETE CASCADE,
  FOREIGN KEY (juego_id) REFERENCES juegos(id) ON DELETE CASCADE
);

CREATE TABLE login_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  nombre VARCHAR(100),
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);
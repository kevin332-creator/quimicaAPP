-- 1. Tabla de Usuarios (tabla central)
CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  apellidos VARCHAR(100) NOT NULL,
  contraseña_hash VARCHAR(255) NOT NULL,
  rol ENUM( 'docente', 'estudiante') NOT NULL,
  estado BOOLEAN DEFAULT TRUE,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tabla de Juegos (relacionada con usuarios para creador)
CREATE TABLE juegos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  creador_id INT NOT NULL, -- Docente o admin que creó el juego
  imagen_url VARCHAR(255),
  estado BOOLEAN DEFAULT TRUE,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (creador_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- 3. Tabla de Preguntas (relacionada con juegos y usuarios)
CREATE TABLE preguntas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  texto TEXT NOT NULL,
  tipo ENUM('test', 'texto', 'disparo') NOT NULL,
  opciones JSON,
  respuesta_correcta VARCHAR(255) NOT NULL,
  nivel_dificultad ENUM('básico', 'intermedio', 'avanzado') DEFAULT 'básico',
  puntos INT DEFAULT 10,
  tiempo_limite INT NULL,
  estado BOOLEAN DEFAULT TRUE,
  creador_id INT NOT NULL, -- Usuario que creó la pregunta
  juego_id INT NOT NULL, -- Juego al que pertenece
  FOREIGN KEY (creador_id) REFERENCES usuarios(id) ON DELETE CASCADE,
  FOREIGN KEY (juego_id) REFERENCES juegos(id) ON DELETE CASCADE
);

-- 4. Tabla de Partidas (relacionada con usuarios y juegos)
CREATE TABLE partidas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  estudiante_id INT NOT NULL,
  juego_id INT NOT NULL,
  puntaje_total INT DEFAULT 0,
  completado BOOLEAN DEFAULT FALSE,
  fecha_inicio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_fin DATETIME,
  estado BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (estudiante_id) REFERENCES usuarios(id) ON DELETE CASCADE,
  FOREIGN KEY (juego_id) REFERENCES juegos(id) ON DELETE CASCADE
);

-- 5. Tabla de Respuestas (relacionada con partidas, preguntas y usuarios)
CREATE TABLE respuestas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  partida_id INT NOT NULL,
  pregunta_id INT NOT NULL,
  estudiante_id INT NOT NULL,
  respuesta_dada VARCHAR(255) NOT NULL,
  es_correcta BOOLEAN NOT NULL,
  tiempo_segundos INT,
  fecha_respuesta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  puntos INT DEFAULT 1,
  FOREIGN KEY (partida_id) REFERENCES partidas(id) ON DELETE CASCADE,
  FOREIGN KEY (pregunta_id) REFERENCES preguntas(id),
  FOREIGN KEY (estudiante_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- 6. Tabla de Progreso (relacionada con usuarios y juegos)
CREATE TABLE progreso_niveles (
  estudiante_id INT NOT NULL,
  juego_id INT NOT NULL,
  nivel INT NOT NULL,
  completado BOOLEAN DEFAULT FALSE,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  puntaje_total INT DEFAULT 0,
  PRIMARY KEY (estudiante_id, juego_id, nivel),
  FOREIGN KEY (estudiante_id) REFERENCES usuarios(id) ON DELETE CASCADE,
  FOREIGN KEY (juego_id) REFERENCES juegos(id) ON DELETE CASCADE
);


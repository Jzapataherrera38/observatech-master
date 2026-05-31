CREATE DATABASE IF NOT EXISTS observatech
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE observatech;

CREATE TABLE IF NOT EXISTS usuarios (
  id       INT AUTO_INCREMENT PRIMARY KEY,
  nombre   VARCHAR(100) NOT NULL,
  email    VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  rol      ENUM('admin','profesor','alumno') NOT NULL DEFAULT 'alumno',
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  estado   ENUM('activo','inactivo') NOT NULL DEFAULT 'activo'
);

CREATE TABLE IF NOT EXISTS narrativas (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  titulo     VARCHAR(200) NOT NULL,
  contenido  TEXT         NOT NULL,
  autor      VARCHAR(150) NOT NULL,
  fecha_creacion      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  estado     ENUM('activa','inactiva') NOT NULL DEFAULT 'activa'
);

CREATE TABLE IF NOT EXISTS evaluaciones (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  titulo       VARCHAR(200) NOT NULL,
  tipo         ENUM('diagnostica','final','autoevaluacion') NOT NULL DEFAULT 'diagnostica',
  descripcion  TEXT,
  creada_por   INT,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  estado       ENUM('activa','cerrada') NOT NULL DEFAULT 'activa',
  FOREIGN KEY (creada_por) REFERENCES usuarios(id) ON DELETE SET NULL
);

-- Usuario de prueba (password: admin123)
INSERT IGNORE INTO usuarios (nombre, email, password, rol)
VALUES ('Administrador','admin@observatech.edu.co','admin123','admin');

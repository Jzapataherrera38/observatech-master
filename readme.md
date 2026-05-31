
🚀 Guía de Instalación - ObservaTech (Windows)
Este documento contiene los pasos necesarios para configurar el entorno de desarrollo de ObservaTech en un sistema operativo Windows.

1. Requisitos Previos
Antes de comenzar, asegúrate de tener instalado:

Git for Windows: Descargar aquí (necesario para clonar y usar comandos básicos).

VS Code: (Recomendado) El editor de código para trabajar.

2. Instalación de Node.js
Para Windows, la mejor forma es descargar el instalador oficial:

Ve a nodejs.org.

Descarga la versión LTS (Long Term Support).

Sigue el instalador (Next, Next, Finish).

Verificación: Abre una terminal (PowerShell o CMD) y escribe:

Bash
node -v
npm -v
3. Instalación de la Base de Datos (MySQL)
Tienes dos opciones comunes en Windows:

Opción A: XAMPP (Más fácil)
Descarga XAMPP desde apachefriends.org.

Instala y abre el XAMPP Control Panel.

Haz clic en Start en el módulo de MySQL.

Entra a http://localhost/phpmyadmin en tu navegador para gestionar la DB.

Opción B: MySQL Installer
Descarga el MySQL Community Server.

Configura el usuario root y una contraseña (anótala, la necesitarás en el código).

4. Configuración del Proyecto
1. Clonar el repositorio
Abre una terminal en la carpeta donde quieras guardar el proyecto:

Bash
git clone <url-del-repositorio>
cd observatech-master
2. Configurar la Base de Datos
Abre tu gestor de MySQL (phpMyAdmin o MySQL Workbench).

Crea una base de datos llamada observatech.

Importa el archivo database.sql que se encuentra en la raíz del proyecto.

3. Configurar el Backend
Bash
cd observatech-backend
npm install
Importante: Abre src/config/db.js y asegúrate de que el user, password y host coincidan con tu instalación de MySQL en Windows (usualmente el password en XAMPP es vacío "").

4. Configurar el Frontend
Abre otra terminal (no cierres la del backend):

Bash
cd observatech-fronted
npm install
5. Ejecución del Proyecto
Debes tener dos terminales abiertas simultáneamente:

Terminal 1 (Backend):

Bash
cd observatech-backend
npm run dev
Deberías ver: Servidor corriendo en puerto 3000.

Terminal 2 (Frontend):

Bash
cd observatech-fronted
npm run dev
Deberías ver: Vite | Local: http://localhost:5173.

6. Credenciales de Acceso
URL: http://localhost:5173

Usuario: admin@observatech.edu.co

Password: admin123

## quimicaAPP

**quimicaAPP** es una aplicación web educativa diseñada para facilitar el aprendizaje y la gestión de contenidos de química. Combina un backend robusto con Node.js y una interfaz moderna hecha con React + Vite. Está conectada a una base de datos relacional en **MariaDB**.

---

##  Resumen del Proyecto

| 🧩 Sección         | 📌 Descripción                                                                                      |
|-------------------|------------------------------------------------------------------------------------------------------|
| 🎯 Objetivo        | Facilitar el aprendizaje de los elementos químicos de la tabla periódica mediante contenidos educativos, administración de recursos para docentes y juegos interactivos con 3 niveles. |
| 🧑‍🏫 Público        | Estudiantes, docentes y administradores de contenido educativo.                                      |
| 🖥️ Estructura      | Frontend (React + Vite) + Backend (Node.js + Express) + Base de datos MariaDB                       |
| 🛡️ Seguridad       | Autenticación mediante JWT, cifrado de contraseñas con Bcrypt y control de roles de usuario.        |
| 🖧 Entorno de despliegue | El sistema funciona en una red interna sobre un servidor con sistema operativo Linux.                  |
| 🏗️ Arquitectura    | Arquitectura cliente-servidor distribuida: el cliente (React) se comunica vía HTTP con el servidor Node.js y este accede a MariaDB mediante Sequelize ORM. |



---

##  Tecnologías Principales

| Capa       | Tecnologías                                                                          |
|------------|---------------------------------------------------------------------------------------|
| Backend    | Node.js, Express, Sequelize, JWT, Bcrypt, Multer, Dotenv                             |
| Frontend   | React v18+, Vite, Bootstrap v5.0, Axios, React Router, SweetAlert2                      |
| Base Datos | MariaDB (relacional), Sequelize ORM                                                  |
| Herramientas | Visual Studio Code, Git, Postman, MySQL Workbench (para MariaDB)                 |

---

## 🧠 Funcionalidades

###  Backend (Node.js + Express)
- ✅ API RESTful con autenticación por JWT.
- ✅ Registro, login y roles de usuario(Docente, Estudiantes).
- ✅ Visualizacion de tabla periodica con los detalles de cada elemento.
- ✅ Gestión de para docentes, agregar estudiates al curso del doecetes.
- ✅ Nivele de juegos(nivel1, nvel2,nive3).
- ✅Nivel1:Juego del Ahorcado
- ✅Nivel2: Completar Tabla Periodica
- ✅Nivel3: Juego del Cohete Químico   
- ✅ Conexión segura a base de datos MariaDB.

### 🎨 Frontend (React + Vite)
- ✅ Interfaz intuitiva, responsiva y moderna
- ✅ Páginas de login, dashboard, gestion de estudiantes, tabla periodicas.
- ✅ Panel para administrativo de docente.
- ✅ Navegación protegida según el rol del usuario
- ✅ Alertas interactivas y retroalimentación visual

---

## 📁 Estructura del Proyecto

```
quimicaAPP/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── uploads/
│   ├── .env
│   └── app.js
│   └── quimica.sql
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   ├── public/
│   ├── vite.config.js
│   └── index.html
└── README.md
```

---

## ⚙️ Instalación y Ejecución

### 🔧 Requisitos previos
- Node.js >= 18.x
- MariaDB (instalado y corriendo)
- Git
- npm o yarn

---
#### ⚙️ Inicializar la base de datos

⚙️ 1. Instalar MariaDB Server
```bash
sudo apt update
sudo apt install mariadb-server -y
```
🔄 2. Iniciar y habilitar el servicio de MariaDB
```bash
sudo systemctl start mariadb
sudo systemctl enable mariadb
```

🔐 3. Ingresar al cliente de MariaDB como root
```bash
sudo mysql -u root -p
```
🛠️ 4. Crear la base de datos y usuario
Una vez dentro del cliente de MariaDB:

```bash
CREATE DATABASE quimica CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'quimica_user'@'localhost' IDENTIFIED BY 'TuContraseñaSegura';
GRANT ALL PRIVILEGES ON quimica.* TO 'quimica_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

⚠️ Reemplaza 'TuContraseñaSegura' por una contraseña real y segura.

📥 5. Importar el archivo de estructura y datos
```bash
mysql -u quimica_user -p quimica < backend/quimica.sql
```
💡 Este archivo (quimica.sql) contiene todas las tablas, relaciones y datos necesarios del sistema.
---
### 1. Clonar el repositorio

```bash
git clone https://github.com/kevin332-creator/quimicaAPP.git
cd quimicaAPP
```

---

### 2. Backend – Node.js

```bash
cd backend
npm install
```

#### 📂 Configurar `.env`

```env
PORT=4000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=123456
DB_NAME=quimica_db
JWT_SECRET=miclavejwt
```




#### ▶️ Iniciar servidor backend

```bash
node app.js
```

---

### 3. Frontend – React + Vite

```bash
cd ../frontend
npm install
npm run dev
```

---

## 🗃️ Base de Datos – MariaDB

- Motor: MariaDB
- Gestión mediante Sequelize ORM
- Esquema principal:

|   Tabla                   | 📌 Descripción                                                                 |
|---------------------------|---------------------------------------------------------------------------------|
| `usuarios`                | Almacena datos de usuarios del sistema: estudiantes, docentes y administradores. |
| `preguntas`               | Preguntas para juegos/actividades, asociadas a nivel, grado y elementos.       |
| `juegos`                  | Tipos de juegos o modos interactivos disponibles en la app.                    |
| `partidas`                | Registra partidas realizadas por estudiantes (puntaje, tiempo, estado).        |
| `respuestas`              | Detalle de cada respuesta dada en una partida de juego.                        |
| `evaluaciones`            | Evaluaciones formales por grado, con fecha y duración.                         |
| `evaluacion_preguntas`    | Preguntas de una evaluación específica, con tipo y puntuación.                 |
| `respuestas_evaluacion`   | Respuestas de estudiantes a evaluaciones aplicadas.                            |
| `progreso_niveles`        | Registro del avance de un estudiante por nivel de juego.                       |
| `login_logs`              | Historial de accesos de usuarios al sistema con fecha y nombre.                |


---

## 📹 Tutoriales y Recursos Recomendados

- 🎥 [Introducción a Express.js](https://www.youtube.com/watch?v=L72fhGm1tfE)
- 🎥 [React con Vite y Tailwind](https://www.youtube.com/watch?v=ZVnjOPwW4ZA)
- 🎥 [MariaDB con Sequelize ORM](https://www.youtube.com/watch?v=2mjDgPEY-gU)

---


## 📬 Contacto

¿Tienes dudas o sugerencias?  
Contáctame en: **quedin.ovalle@unamba.edu.pe**

---

> 🚀 Proyecto desarrollado como parte del curso de Ingeniería Software II – UNAMBA 2025.



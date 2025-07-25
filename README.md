#quimicaAPP

**quimicaAPP** es una aplicación web educativa diseñada para facilitar el aprendizaje y la gestión de contenidos de química. Combina un backend robusto con Node.js y una interfaz moderna hecha con React + Vite. Está conectada a una base de datos relacional en **MariaDB**.

---

## 📌 Resumen del Proyecto

| 🧩 Sección        | 📌 Descripción                                                                                  |
|------------------|--------------------------------------------------------------------------------------------------|
| 🎯 Objetivo       | Facilitar el aprendizaje de los elementos químicos de la tabla periódica mediante contenidos educativos, administración de recursos para docentes y juegos interactivos con 3 niveles. |
| 🧑‍🏫 Público       | Estudiantes, docentes y administradores de contenido educativo.                                  |
| 🖥️ Estructura     | Frontend (React + Vite) + Backend (Node.js + Express) + Base de datos MariaDB                   |
| 🛡️ Seguridad      | Autenticación mediante JWT, cifrado de contraseñas con Bcrypt y control de roles de usuario.    |


---

## 🛠️ Tecnologías Principales

| Capa       | Tecnologías                                                                          |
|------------|---------------------------------------------------------------------------------------|
| Backend    | Node.js, Express, Sequelize, JWT, Bcrypt, Multer, Dotenv                             |
| Frontend   | React v18+, Vite, TailwindCSS, Axios, React Router, SweetAlert2                      |
| Base Datos | MariaDB (relacional), Sequelize ORM                                                  |
| Herramientas | Visual Studio Code, Git, Postman, MySQL Workbench (para MariaDB)                 |

---

## 🧠 Funcionalidades

### 🔙 Backend (Node.js + Express)
- ✅ API RESTful con autenticación por JWT
- ✅ Registro, login y roles de usuario
- ✅ Subida de archivos (PDF, imágenes)
- ✅ Gestión de contenidos, categorías y notificaciones
- ✅ Conexión segura a base de datos MariaDB

### 🎨 Frontend (React + Vite)
- ✅ Interfaz intuitiva, responsiva y moderna
- ✅ Páginas de login, dashboard, recursos por tema
- ✅ Panel para administradores
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

### 1. Clonar el repositorio

```bash
git clone https://github.com/usuario/quimicaAPP.git
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

#### ⚙️ Inicializar la base de datos

```bash
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
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

| Tabla         | Descripción                        |
|---------------|------------------------------------|
| `usuarios`    | Almacena datos de usuarios         |
| `recursos`    | Materiales de química (PDF, img)   |
| `notificaciones` | Mensajes visibles en el sistema |
| `categorias`  | Clasificación de los recursos      |

---

## 📹 Tutoriales y Recursos Recomendados

- 🎥 [Introducción a Express.js](https://www.youtube.com/watch?v=L72fhGm1tfE)
- 🎥 [React con Vite y Tailwind](https://www.youtube.com/watch?v=ZVnjOPwW4ZA)
- 🎥 [MariaDB con Sequelize ORM](https://www.youtube.com/watch?v=2mjDgPEY-gU)

---

## 👥 Integrantes

- 👨‍💻 **Quedin Ovalle Alarcón** – Desarrollador Fullstack

---

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Libre para uso académico.

---

## 📬 Contacto

¿Tienes dudas o sugerencias?  
Contáctame en: **quedin.ovalle@unamba.edu.pe**

---

> 🚀 Proyecto desarrollado como parte del curso de Ingeniería II – UNAMBA 2025.

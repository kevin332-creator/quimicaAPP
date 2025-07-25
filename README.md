# quimicaAPP

**Perfecto. A continuación, te presento un **README.md resumido en una sola hoja**, adaptado a tu proyecto `quimicaAPP`, con backend en **Node.js**, frontend en **React + Vite**, y **MariaDB** como base de datos.

---

### 📄 `README.md` (versión en una sola hoja)

```markdown
# 🧪 quimicaAPP

**quimicaAPP** es una plataforma web educativa para la gestión de contenidos de química. Está dividida en backend (Node.js) y frontend (React + Vite), con base de datos en MariaDB.

---

## 🔧 Tecnologías Usadas

- **Backend**: Node.js v22.17.0, Express, JWT, Bcrypt, Sequelize ORM
- **Frontend**: React v18+, Vite, TailwindCSS, Axios, React Router DOM
- **Base de Datos**: MariaDB
- **Otros**: Dotenv, Multer, SweetAlert2

---

## 📁 Estructura del Proyecto

```

quimicaAPP/
├── backend/      # Node.js API con Express y Sequelize
├── frontend/     # React + Vite app con TailwindCSS
└── README.md

````

---

## 🧠 Funcionalidades

### Backend
- API RESTful con autenticación JWT
- Registro e inicio de sesión seguro
- Subida de archivos (PDF, imágenes)
- Gestión de usuarios, contenidos y notificaciones
- Conexión a MariaDB vía Sequelize

### Frontend
- Interfaz moderna e intuitiva
- Visualización de recursos por tema
- Panel administrativo
- Alertas y notificaciones interactivas

---

## ⚙️ Instalación Rápida

### Backend
```bash
cd backend
npm install
# Configurar archivo .env con:
# DB_HOST=localhost
# DB_USER=root
# DB_PASSWORD=*****
# DB_NAME=quimica_db
# JWT_SECRET=clave_secreta
node app.js
````

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🗄️ Base de Datos – MariaDB

* Motor: MariaDB
* ORM: Sequelize
* Tablas principales: `usuarios`, `recursos`, `categorias`, `notificaciones`
* Script inicial disponible en `/backend/database/init.sql` (si aplica)

---

## 👥 Integrantes

* 👨‍💻 Quedin Ovalle Alarcón – Desarrollador Fullstack
  *(Agrega más si corresponde)*

---

## 📃 Licencia

MIT – Libre para uso académico y educativo.

---

> Proyecto desarrollado como parte del curso de Ingeniería II – UNAMBA.

```

---

¿Deseas que este archivo lo genere automáticamente como archivo `.md` para que lo pegues directo en tu proyecto? ¿O quieres que incluya comandos como `npx sequelize init` y migraciones también?
```
**

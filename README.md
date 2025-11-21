# React Chat App

Una aplicación de mensajería instantánea tipo SPA (Single Page Application) desarrollada con React. Simula un entorno de chat funcional con persistencia de estado local, enrutamiento dinámico y respuestas automatizadas.

## 📋 Características Principales

La aplicación cuenta con las siguientes funcionalidades implementadas:

### 1. Gestión de Contactos
* **Listado de Usuarios:** Visualización de contactos con su estado de conexión y última hora de actividad.
* **Agregar Contacto:** Formulario para añadir nuevos usuarios a la lista.
    * *Validación:* Impide crear contactos con nombres vacíos o duplicados.
    * *Feedback:* Alertas nativas en caso de error.

### 2. Sistema de Mensajería
* **Chat en Tiempo Real (Simulado):** Envío de mensajes instantáneos que actualizan el estado local.
* **Respuesta Automática:** Implementación de un `bot` que responde automáticamente a los 2 segundos de recibir un mensaje, simulando interacción asíncrona (`setTimeout`).
* **Historial de Chat:** Visualización de mensajes con metadatos (autor, hora, estado de lectura).

### 3. Navegación y UI
* **Enrutamiento Dinámico:** Uso de `react-router` para la navegación entre conversaciones (`/chat/:chat_id`).
* **Diseño Responsivo:** Layout adaptable mediante CSS Grid y Media Queries:
    * *Mobile:* Vista apilada.
    * *Desktop:* Vista dividida (Panel de contactos a la izquierda, Chat activo a la derecha).
* **Carga Asíncrona Simulada:** Loader visual al iniciar la aplicación para emular la petición de datos a una API (`getContacts`).

---

## 🛠️ Tecnologías Utilizadas

* **Core:** React 18+ (Hooks: `useState`, `useEffect`).
* **Enrutamiento:** React Router v6+.
* **Estilos:** CSS3 (Grid, Flexbox, diseño responsivo).
* **Datos:** Mock data local (`contacts_data.js`) y servicio de simulación (`contactService.js`).

---

## 🚀 Instalación y Ejecución

Sigue estos pasos para levantar el proyecto en tu entorno local:

**1. Clonar el repositorio**
```bash
git clone <URL_DE_TU_REPOSITORIO>
cd nombre-del-proyecto
```

**2. Instalar dependencias**
Asegúrate de tener Node.js instalado.
```bash
npm install
```

**3. Iniciar el servidor de desarrollo**
```bash
npm run dev
```
*La aplicación estará disponible generalmente en `http://localhost:5173` (si usas Vite) o `http://localhost:3000`.*

---

## 📖 Guía de Uso

1.  **Inicio:** Al abrir la app, verás una pantalla de carga ("Cargando contactos...") por 2 segundos.
2.  **Seleccionar Chat:** Haz clic en cualquier usuario del panel izquierdo para abrir su historial de conversación. La URL cambiará dinámicamente.
3.  **Enviar Mensaje:**
    * Escribe en el campo de texto del panel derecho.
    * Presiona "Enviar mensaje".
    * Verás tu mensaje inmediatamente.
    * **Espera 2 segundos** y recibirás una respuesta automática del contacto ("Tu mensaje fue recibido").
4.  **Nuevo Contacto:**
    * En el panel izquierdo, usa el campo superior para escribir un nombre.
    * Presiona "Añadir".
    * El nuevo contacto aparecerá al final de la lista y podrás chatear con él (incluye un mensaje de bienvenida por defecto).

---

## 📂 Estructura del Proyecto

```text
src/
├── Components/
│   ├── AddNewContact/   # Formulario de nuevos contactos
│   ├── ChatDetail/      # Contenedor del chat activo
│   ├── ChatList/        # Lista lateral de usuarios
│   ├── CreateNewMessage/# Input para enviar mensajes
│   └── MessagesList/    # Renderizado de burbujas de chat
├── CSS/
│   └── Chat.css         # Estilos globales y layout
├── Screens/
│   └── ChatScreen/      # Lógica principal y gestión de estado
├── services/
│   └── contactService.js # Simulación de fetching de datos
├── data/
│   └── contacts_data.js  # Mock data (JSON)
├── App.jsx              # Configuración de Rutas
└── main.jsx             # Punto de entrada
```

# Control De Presupuesto 💵

## Descripcion 📄

**Control De Presupuesto** es una aplicación web diseñada para ayudar a personas en la organización de sus finanzas personales. Permite definir un presupuesto inicial y gestionar gastos de manera intuitiva, ofreciendo visualización gráfica del porcentaje de gasto por categoría.

**🌐 Sitio en Vivo:** https://control-presupuesto-by-yasdiel.netlify.app

## ✨ Características Principales (Features)

- **Gestión de presupuesto inicial:** Definir el monto total disponible.

- **CRUD completo de gastos:** Crear, leer, editar y eliminar gastos.

- **Categorización de gastos:** Clasificación por áreas comunes (ahorro, comida, casa, ocio, salud, suscripciones).

- **Sistema de filtrado:** Filtrar gastos por categoría.

- **Visualización gráfica:** Gráfico circular que muestra distribución porcentual de gastos.
  
- **Persistencia de datos:** Almacenamiento local en el navegador.

## 🧩 Stack Tecnológico

El proyecto está construido con tecnologías modernas que garantizan un desarrollo ágil y una experiencia de usuario fluida:

- **Vite**: Herramienta de construcción y desarrollo.
- **React:** Biblioteca para construcción de interfaz de usuario.
- **CSS:** Estilos personalizados sin frameworks adicionales.
- **LocalStorage del Navegador:** Almacenamiento persistente en el navegador.

## 📁 Estructura del Proyecto
```bash
control-de-presupuesto/
├── public/                 # Archivos públicos estáticos
├── src/
│   ├── components/         # Componentes React
│   │   ├── ControlPresupuesto.jsx # Maneja toda la lógica del gasto y muestra además el gráfico
│   │   ├── Filtros.jsx            # Componente que permite filtrar los gastos por categorias
│   │   ├── Gasto.jsx              # Gasto Individual
│   │   ├── Header.jsx             # Cabecera de la pagina
│   │   ├── ListadoGastos.jsx      # Muestra todos los gastos
│   │   ├── Mensaje.jsx            # Mensaje de error cuando se valida el formulario
│   │   ├── Modal.jsx              # Ventana Modal para agregar/editar gastos
│   │   └── NuevoPresupuesto.jsx   # Componente para establecer el presupuesto
│   ├── helpers/            # Funciones auxiliares
│   │   └── index.js
│   ├── img/               # Assets visuales (SVG)
│   │   ├── cerrar.svg
│   │   ├── icono_ahorro.svg
│   │   ├── icono_casa.svg
│   │   ├── icono_comida.svg
│   │   ├── icono_gastos.svg
│   │   ├── icono_ocio.svg
│   │   ├── icono_salud.svg
│   │   └── icono_suscripciones.svg
│   ├── App.jsx            # Componente raíz
│   ├── index.css          # Estilos globales
│   └── main.jsx           # Punto de entrada
├── index.html             # HTML principal
├── package.json          # Dependencias y scripts
├── vite.config.js        # Configuración de Vite
└── README.md             # Documentación
```

## 🚀 Instalación 
1. Clonar El Repositorio

```bash
# Clonar usando HTTPS
git clone https://github.com/yasdiel/control-de-presupuesto.git  

# Navegar al directorio del proyecto
cd control-de-presupuesto
```

2. Instalar Dependencias
```bash
# Instalar todas las dependencias del package.json
npm install
```

3. Verificar la Instalación
```bash
# Verificar que las dependencias se instalaron correctamente
npm list --depth=0

# Deberías ver algo como:
# seguimiento-pacientes-veterinaria@1.0.0
# ├── react@19.2.0
# ├── react-dom@19.2.0
# ├── vite@7.2.5
```

4. Desarrollo
```bash
# Iniciar servidor de desarrollo en modo hot-reload
npm run dev

# La aplicación estará disponible en:
# - Local:   http://localhost:5173
```

5. Producción
```bash
# Construir la aplicación para producción
npm run build

# Los archivos optimizados se generarán en la carpeta /dist
# Puedes servir esta carpeta con cualquier servidor estático

# Previsualizar la build de producción localmente
npm run preview

# Esto sirve la carpeta /dist en http://localhost:4173
```

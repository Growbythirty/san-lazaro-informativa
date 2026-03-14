# Orden de San Lazaro Venezuela - Sitio Informativo

Sitio web institucional del Capitulo Venezuela de la Orden Militar y Hospitalaria de San Lazaro de Jerusalen.

## Tech Stack

- **React** 19 + **TypeScript** 5.9
- **Vite** 8 (build tool)
- HTML/CSS puro (sin framework de estilos)

## Estructura

```
src/
├── main.tsx              # Entry point
├── App.tsx               # Layout + navegacion por tabs
├── App.css               # Estilos globales
└── pages/
    ├── Home.tsx           # Pagina de inicio
    ├── Historia.tsx       # Historia de la Orden
    └── Consejo.tsx        # Consejo de Gobierno
public/
├── Fonts/                # Cinzel, Spectral, Inter, Great Vibes
└── PNG/                  # Escudos, sellos, iconografia
```

## Comandos

```bash
# Desarrollo
npm run dev

# Build de produccion
npm run build

# Preview del build
npm run preview

# Lint
npm run lint
```

## Paginas

| Pagina | Descripcion |
|--------|-------------|
| Inicio | Presentacion, pilares, estadisticas |
| Historia | Origenes, expansion, timeline |
| Consejo de Gobierno | Organigrama institucional |

## Deployment

- **Hosting:** Vercel
- **Repositorio:** GitHub (Growbythirty/san-lazaro-informativa)
- **Rama de produccion:** `main`
- **Rama de desarrollo:** `developer`

## Git Workflow

```
main (produccion)
 └── developer (staging)
      └── [feature]-dev (features individuales)
```

Flujo: `[feature]-dev` → PR → `developer` → PR → `main`

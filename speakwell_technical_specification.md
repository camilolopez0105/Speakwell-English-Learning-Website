# Especificación Técnica — Plataforma SpeakWell (v1.0)

> **Instrucción para la IA de coding:** Implementa TODO siguiendo esta especificación técnica adjunta. Prioriza experiencia premium, claridad visual, rendimiento y consistencia del design system. La plataforma debe sentirse moderna, humana y elegante, no corporativa ni “académica tradicional”. Si alguna implementación compromete performance, accesibilidad o mobile UX, prioriza simplicidad y fluidez.

---

# 1. Visión General del Producto

## Concepto

**SpeakWell** es una plataforma moderna de clases de inglés online 1:1 enfocada en:
- conversación real
- fluidez
- business English
- entrevistas
- confianza al hablar

La plataforma no debe sentirse como:
- una academia tradicional
- una plataforma LMS
- una app educativa infantil

Debe sentirse como:
- un producto premium
- una marca personal moderna
- un servicio personalizado de alto valor

---

## Posicionamiento

> “Aprende a hablar inglés con confianza.”

SpeakWell vende:
- transformación
- fluidez
- confianza
- progreso real

NO vende:
- gramática tradicional
- ejercicios aburridos
- clases masivas

---

## Público Objetivo

### Primario
- jóvenes profesionales
- remote workers
- universitarios
- personas que necesitan inglés para trabajo

### Secundario
- preparación de entrevistas
- exámenes oficiales
- conversación
- relocation

---

## Atmósfera (Vibe)

La experiencia visual debe transmitir:
- calma
- claridad
- premium minimalism
- modern startup aesthetics
- inteligencia visual
- confianza

Inspiraciones:
- Linear
- Raycast
- Stripe
- Notion
- Superhuman
- Read.cv

---

## Formato

Landing page moderna de una sola página:
- Next.js 15 App Router
- totalmente responsive
- static-first
- sin backend
- optimizada para conversión

---

# 2. Stack Tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 15 (App Router) |
| Core UI | React 19 |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| UI Components | shadcn/ui |
| Animaciones | Framer Motion v11+ |
| Iconos | Lucide React |
| Hosting | Vercel |
| Fuente principal | Geist |
| Fuente secundaria | Inter |

---

## Comandos Iniciales

```bash
npx create-next-app@latest speakwell --typescript --tailwind --app
cd speakwell

npm install framer-motion lucide-react clsx tailwind-merge
```

---

# 3. Filosofía Técnica

## Principios

La plataforma debe priorizar:

- simplicidad
- velocidad
- mobile-first
- conversion-first
- SEO-ready
- mantenimiento cero

---

## Restricciones Técnicas

NO usar:
- backend
- bases de datos
- autenticación
- dashboards
- CMS complejos
- lógica innecesaria

La web debe poder funcionar:
- completamente estática
- desplegada gratuitamente en Vercel
- con mantenimiento prácticamente nulo

---

# 4. Sistema de Diseño

## 4.1 Tokens de Color

| Token | Valor | Uso |
|---|---|---|
| `bg-base` | `#F7FAFA` | Fondo principal |
| `bg-card` | `#FFFFFF` | Cards |
| `bg-dark` | `#111A1A` | Hero dark sections |
| `accent-primary` | `#0891B2` | CTA y highlights |
| `accent-secondary` | `#06B6D4` | Hover y glow |
| `border-soft` | `#D0E8E8` | Bordes suaves |
| `text-primary` | `#111A1A` | Titulares |
| `text-secondary` | `#4A6363` | Párrafos |
| `text-muted` | `#7AAFB5` | Labels |
| `success-soft` | `#67E8F9` | Stats y detalles |

---

# 5. Arquitectura de la Aplicación

## Estructura de Carpetas

```text
src/
├── app/
├── components/
├── sections/
├── lib/
└── types/
```

---

# 6. Estructura de la Página

- Hero
- Problem
- Method
- Testimonials
- Pricing
- CTA
- Footer

---

# 7. Integraciones Externas

- Calendly
- WhatsApp
- Plausible / Google Analytics

---

# 8. Responsive Strategy

## Mobile First

La experiencia mobile es prioritaria.

---

# 9. Performance

## Objetivos Lighthouse

| Métrica | Target |
|---|---|
| Performance | 95+ |
| Accessibility | 90+ |
| SEO | 95+ |
| Best Practices | 95+ |

---

# 10. Deployment

## Hosting

Vercel.

---

# 11. Filosofía Final

SpeakWell debe sentirse como:

> un entrenador personal de fluidez en inglés

La prioridad máxima es:

> conversión + branding + claridad

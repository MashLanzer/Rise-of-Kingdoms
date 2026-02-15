# 🚀 MEJORAS PENDIENTES - RISE OF KINGDOMS GUIDE

## Estado del Proyecto
- **Versión:** 1.3.0 (Design & Scaling Overhaul)
- **Estado:** ✅ Rediseño Global Completado
- **Última Actualización:** Diseño simétrico, compacto ("chiquito") y escalable con sistema de dropdowns.

---

## 📋 ROADMAP DE MEJORAS

### 1. Funcionalidades Interactivas ⭐⭐⭐⭐⭐

#### ✅ Calculadora de recursos (COMPLETADA) 🎉
**Descripción:** Herramienta para calcular cuánto tiempo se necesita para acumular X millones de recursos  
**Impacto:** Alto - Muy útil para planificación  
**Esfuerzo:** 20 minutos  
**Prioridad:** 🔥 ALTA  
**Estado:** ✅ COMPLETADA - 2026-02-13

**Características implementadas:**
- ✅ Input de recurso objetivo (comida, madera, piedra, oro)
- ✅ Cálculo basado en producción por hora
- ✅ Considera bonos de civilización, VIP, alianza
- ✅ Muestra tiempo estimado y speedups necesarios
- ✅ Exportar resultados al portapapeles
- ✅ Diseño responsive y animado
- ✅ Selector visual de recursos
- ✅ Validación de inputs

**Ubicación:** `calculadora.html`  
**Acceso:** Menú principal → 🧮 Calculadora

#### ✅ Comparador de civilizaciones (COMPLETADA) 🎉
**Descripción:** Comparación lado a lado de 2-3 civilizaciones  
**Impacto:** Alto - Ayuda en decisión inicial  
**Esfuerzo:** 15 minutos  
**Prioridad:** 🔥 ALTA  
**Estado:** ✅ COMPLETADA - 2026-02-13

**Características implementadas:**
- ✅ Seleccionar 2-3 civilizaciones (máximo 3)
- ✅ Tabla comparativa de bonos completa
- ✅ Comparación de comandantes iniciales (nombre, tipo, rareza, rating)
- ✅ Ratings visuales por categoría con barras de progreso animadas
- ✅ 7 categorías de rating (Principiantes, F2P, PvP, PvE, Gathering, KvK, Late Game)
- ✅ Sistema automático de badges "MEJOR" por categoría
- ✅ Recomendaciones inteligentes basadas en estilo de juego:
  - Ganador general (puntuación total)
  - Mejor para principiantes
  - Mejor para F2P
  - Mejor para gathering
  - Mejor para KvK
  - Mejor para PvP
- ✅ Datos completos de 8 civilizaciones
- ✅ Diseño responsive y animado
- ✅ Selección visual con estados activos

**Ubicación:** `comparador.html`  
**Acceso:** Menú principal → ⚖️ Comparador

#### ✅ Buscador global en el sitio (COMPLETADA) 🎉
**Descripción:** Sistema de búsqueda que indexa todo el contenido  
**Impacto:** Muy Alto - Mejora UX dramáticamente  
**Esfuerzo:** 25 minutos  
**Prioridad:** 🔥 ALTA  
**Estado:** ✅ COMPLETADA - 2026-02-13

**Características implementadas:**
- ✅ Búsqueda en tiempo real con debounce (300ms)
- ✅ Índice completo de contenido:
  - 8 civilizaciones con keywords
  - 7+ comandantes principales
  - 4+ edificios clave
  - Recursos y guías
  - Herramientas interactivas (calculadora, comparador)
- ✅ Algoritmo de scoring inteligente:
  - Coincidencia exacta en nombre (100 puntos)
  - Coincidencia parcial en nombre (50 puntos)
  - Coincidencia exacta en keywords (30 puntos)
  - Coincidencia parcial en keywords (10 puntos)
  - Coincidencia en descripción (5 puntos)
- ✅ Resultados categorizados (Civilizaciones, Comandantes, Edificios, Recursos, Guías, Herramientas)
- ✅ Highlights de coincidencias con `<mark>` dorado
- ✅ Historial de búsquedas (LocalStorage):
  - Últimas 10 búsquedas guardadas
  - Click para repetir búsqueda
  - Persistente entre sesiones
- ✅ Modal responsive con animaciones suaves
- ✅ Navegación rápida a resultados (links directos)
- ✅ Atajo ESC para cerrar
- ✅ Click fuera del modal para cerrar
- ✅ Botón de búsqueda en header (🔍 Buscar)
- ✅ Resultados limitados a top 10 por relevancia

**Ubicación:** `search.js` + Modal en todas las páginas  
**Acceso:** Botón "🔍 Buscar" en header

#### ✅ Sistema de favoritos
**Descripción:** Guardar comandantes, builds y estrategias favoritas  
**Impacto:** Medio - Mejora experiencia de usuario recurrente  
**Esfuerzo:** 30 minutos  
**Prioridad:** 🟡 MEDIA  

**Características:**
- LocalStorage para persistencia
- Marcar/desmarcar favoritos
- Página de "Mis Favoritos"
- Exportar/importar favoritos
- Notas personales

#### ✅ Modo oscuro/claro toggle
**Descripción:** Alternar entre tema oscuro y claro  
**Impacto:** Alto - Preferencia de usuario  
**Esfuerzo:** 10 minutos  
**Prioridad:** 🔥 ALTA  

**Características:**
- Toggle en header
- Transición suave entre modos
- Persistencia de preferencia
- Modo automático según hora del día
- Respeta preferencia del sistema

---

### 2. Contenido Expandido ⭐⭐⭐⭐⭐

#### ✅ Completar las 5 civilizaciones restantes
**Descripción:** Alemania, Japón, Arabia, España, Bizancio con mismo nivel de detalle que Roma  
**Impacto:** Muy Alto - Completa sección crítica  
**Esfuerzo:** 30 minutos  
**Prioridad:** 🔥🔥 MUY ALTA  

**Contenido por civilización:**
- Placeholder de imagen
- Tabla de bonificaciones completa
- Comandante inicial con todas las habilidades
- Tropa especial con stats
- Estrategias por fase (Early/Mid/Late)
- Comandantes recomendados por tier
- Ratings por 10 categorías
- Pros/Contras exhaustivos
- Comparaciones directas
- Consejo final

#### ✅ Añadir 30+ comandantes más (COMPLETADA) 🎉
**Descripción:** Expandir de 10 a 40+ comandantes con detalles completos  
**Impacto:** Muy Alto - Contenido core del juego  
**Esfuerzo:** 2 horas  
**Prioridad:** 🔥 ALTA  
**Estado:** ✅ COMPLETADA - 2026-02-14

**Comandantes a añadir:**
- **Legendarios:** Attila, Takeda Shingen, Mehmed II, Ramesses II, etc.
- **Épicos:** Pelagius, Belisarius, Hermann, Baibars, etc.
- **Élite:** Lohar, Boudica, Constance, etc.

**Por cada comandante:**
- Imagen placeholder
- Rareza y tipo
- Todas las habilidades (5 niveles)
- Build de talentos óptimo
- Mejores pairings
- Equipment recomendado
- Cuándo usar/no usar
- Rating por categoría

#### ✅ Guía de equipment completa
**Descripción:** Sistema de equipamiento con sets, stats y crafting  
**Impacto:** Alto - Sistema importante del juego  
**Esfuerzo:** 45 minutos  
**Prioridad:** 🟡 MEDIA  

**Contenido:**
- Tipos de equipment (arma, casco, armadura, etc.)
- Sets legendarios y épicos
- Stats y bonificaciones
- Crafting y materiales
- Equipment por comandante
- Prioridades de mejora

#### ✅ Tier lists actualizadas (Meta 2026)
**Descripción:** Rankings actuales de comandantes, civilizaciones, etc.  
**Impacto:** Muy Alto - Información crítica para decisiones  
**Esfuerzo:** 20 minutos  
**Prioridad:** 🔥 ALTA  

**Tier Lists:**
- Comandantes PvP (Infantry, Cavalry, Archer)
- Comandantes PvE
- Comandantes Garrison
- Civilizaciones por categoría
- Equipment sets
- Pairings meta

#### ✅ Guía de VIP system (COMPLETADA) 🎉
**Descripción:** Sistema VIP completo con beneficios por nivel  
**Impacto:** Medio - Importante para progresión  
**Esfuerzo:** 20 minutos  
**Prioridad:** 🟡 MEDIA  
**Estado:** ✅ COMPLETADA - 2026-02-14

**Contenido:**
- Niveles VIP 0-15
- Beneficios por nivel
- Cómo subir VIP (gratis vs pago)
- Prioridades de inversión
- Calculadora de VIP points

---

### 3. Optimización Visual ⭐⭐⭐⭐

#### ✅ Animaciones más suaves y profesionales
**Descripción:** Mejorar animaciones existentes y añadir nuevas  
**Impacto:** Medio - Mejora percepción de calidad  
**Esfuerzo:** 30 minutos  
**Prioridad:** 🟡 MEDIA  

**Mejoras:**
- Transiciones CSS más suaves
- Animaciones de entrada para cards
- Hover effects más elaborados
- Parallax scrolling sutil
- Micro-interactions

#### ✅ Loading states para contenido dinámico
**Descripción:** Skeletons y spinners para carga de contenido  
**Impacto:** Medio - Mejora UX percibida  
**Esfuerzo:** 15 minutos  
**Prioridad:** 🟢 BAJA  

**Implementación:**
- Skeleton screens para cards
- Loading spinners para búsquedas
- Progress bars para calculadoras
- Lazy loading de imágenes

#### ✅ Tooltips informativos
**Descripción:** Tooltips con información adicional al hover  
**Impacto:** Alto - Añade contexto sin saturar UI  
**Esfuerzo:** 20 minutos  
**Prioridad:** 🟡 MEDIA  

**Uso:**
- Términos técnicos
- Stats de comandantes
- Bonificaciones de civilizaciones
- Iconos de habilidades

#### ✅ Progress bars visuales
**Descripción:** Barras de progreso para stats y comparaciones  
**Impacto:** Medio - Visualización de datos  
**Esfuerzo:** 15 minutos  
**Prioridad:** 🟡 MEDIA  

**Aplicaciones:**
- Ratings de civilizaciones
- Stats de comandantes
- Comparaciones de tropas
- Progreso de lectura

#### ✅ Iconos SVG personalizados
**Descripción:** Reemplazar emojis con iconos SVG profesionales  
**Impacto:** Medio - Mejora estética  
**Esfuerzo:** 45 minutos  
**Prioridad:** 🟢 BAJA  

**Iconos necesarios:**
- Tipos de tropas (infantry, cavalry, archer)
- Recursos (comida, madera, piedra, oro)
- Rareza (legendario, épico, etc.)
- Acciones (búsqueda, favoritos, compartir)

---

### 4. SEO y Performance ⭐⭐⭐⭐

#### ✅ Meta tags completos
**Descripción:** Open Graph, Twitter Cards, Schema.org  
**Impacto:** Alto - Mejora compartibilidad y SEO  
**Esfuerzo:** 20 minutos  
**Prioridad:** 🔥 ALTA  

**Tags a añadir:**
```html
<!-- Open Graph -->
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<meta property="og:url" content="...">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="...">

<!-- Schema.org -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Rise of Kingdoms Guide",
  ...
}
</script>
```

#### ✅ Sitemap.xml
**Descripción:** Mapa del sitio para motores de búsqueda  
**Impacto:** Alto - Mejora indexación  
**Esfuerzo:** 10 minutos  
**Prioridad:** 🔥 ALTA  

#### ✅ Robots.txt
**Descripción:** Instrucciones para crawlers  
**Impacto:** Medio - Control de indexación  
**Esfuerzo:** 5 minutos  
**Prioridad:** 🟡 MEDIA  

#### ✅ Lazy loading de imágenes
**Descripción:** Cargar imágenes solo cuando son visibles  
**Impacto:** Alto - Mejora performance  
**Esfuerzo:** 10 minutos  
**Prioridad:** 🔥 ALTA  

**Implementación:**
```html
<img src="..." loading="lazy" alt="...">
```

#### ✅ Service Worker para PWA
**Descripción:** Convertir sitio en Progressive Web App  
**Impacto:** Alto - Funcionalidad offline  
**Esfuerzo:** 1 hora  
**Prioridad:** 🟡 MEDIA  

**Características:**
- Cache de assets estáticos
- Funcionalidad offline
- Instalable en dispositivos
- Notificaciones push (opcional)

---

### 5. Experiencia de Usuario ⭐⭐⭐⭐⭐

#### ✅ Breadcrumbs de navegación
**Descripción:** Ruta de navegación en cada página  
**Impacto:** Medio - Mejora orientación  
**Esfuerzo:** 15 minutos  
**Prioridad:** 🟡 MEDIA  

**Ejemplo:**
```
Inicio > Civilizaciones > Roma
```

#### ✅ "Volver arriba" button
**Descripción:** Botón flotante para scroll to top  
**Impacto:** Alto - Mejora navegación en páginas largas  
**Esfuerzo:** 10 minutos  
**Prioridad:** 🔥 ALTA  

**Características:**
- Aparece después de scroll
- Animación suave
- Posición fija bottom-right

#### ✅ Tabla de contenidos flotante
**Descripción:** TOC sticky para navegación rápida  
**Impacto:** Alto - Mejora navegación en guías largas  
**Esfuerzo:** 25 minutos  
**Prioridad:** 🔥 ALTA  

**Características:**
- Generación automática desde headers
- Highlight de sección actual
- Sticky en desktop
- Colapsable en mobile

#### ✅ Indicador de progreso de lectura
**Descripción:** Barra de progreso en top de página  
**Impacto:** Medio - Feedback visual  
**Esfuerzo:** 10 minutos  
**Prioridad:** 🟡 MEDIA  

#### ✅ Compartir en redes sociales
**Descripción:** Botones para compartir contenido  
**Impacto:** Alto - Aumenta alcance  
**Esfuerzo:** 15 minutos  
**Prioridad:** 🔥 ALTA  

**Redes:**
- Facebook
- Twitter
- Reddit
- WhatsApp
- Copiar link

---

### 6. Herramientas Útiles ⭐⭐⭐⭐⭐

#### ✅ Planificador de talentos interactivo
**Descripción:** Herramienta visual para planear builds de talentos  
**Impacto:** Muy Alto - Diferenciador clave  
**Esfuerzo:** 2 horas  
**Prioridad:** 🔥🔥 MUY ALTA  

**Características:**
- Árbol de talentos visual
- Click para asignar puntos
- Contador de puntos disponibles
- Guardar/cargar builds
- Compartir builds (URL)
- Builds pre-hechos por comandante

#### ✅ Simulador de combate básico
**Descripción:** Simular batallas entre composiciones  
**Impacto:** Alto - Muy útil para estrategia  
**Esfuerzo:** 3 horas  
**Prioridad:** 🟡 MEDIA  

**Características:**
- Seleccionar comandantes y tropas
- Cálculo de daño aproximado
- Considerar buffs y debuffs
- Resultado estimado
- Disclaimer de precisión

#### ✅ Calculadora de speedups
**Descripción:** Calcular speedups necesarios para objetivos  
**Impacto:** Alto - Planificación de recursos  
**Esfuerzo:** 20 minutos  
**Prioridad:** 🔥 ALTA  

**Funciones:**
- Construcción (tiempo → speedups)
- Investigación (tiempo → speedups)
- Entrenamiento (tropas → speedups)
- Curación (tropas → speedups)
- Conversión entre tipos de speedups

#### ✅ Tracker de eventos
**Descripción:** Calendario y recordatorios de eventos  
**Impacto:** Alto - No perderse eventos importantes  
**Esfuerzo:** 1 hora  
**Prioridad:** 🟡 MEDIA  

**Características:**
- Calendario mensual de eventos
- Notificaciones (opcional)
- Descripción de recompensas
- Tips para cada evento
- Historial de eventos pasados

#### ✅ Guía de bundles (valor real)
**Descripción:** Análisis de valor de bundles de la tienda  
**Impacto:** Alto - Ayuda a decisiones de compra  
**Esfuerzo:** 30 minutos  
**Prioridad:** 🟡 MEDIA  

**Contenido:**
- Bundles actuales
- Cálculo de valor en gemas
- Comparación de ofertas
- Recomendaciones por presupuesto
- Mejores ofertas históricas

---

### 7. Contenido Avanzado ⭐⭐⭐⭐

#### ✅ Guías de KvK por temporada
**Descripción:** Estrategias específicas para cada temporada de KvK  
**Impacto:** Alto - Contenido competitivo  
**Esfuerzo:** 1 hora  
**Prioridad:** 🟡 MEDIA  

**Contenido:**
- KvK Season 1, 2, 3, 4, 5+
- Mecánicas específicas de cada temporada
- Meta de comandantes por temporada
- Estrategias de alianza
- Roles individuales

#### ✅ Estrategias de migración
**Descripción:** Guía completa sobre migración de reinos  
**Impacto:** Medio - Tema específico pero importante  
**Esfuerzo:** 30 minutos  
**Prioridad:** 🟢 BAJA  

**Contenido:**
- Cuándo migrar
- Preparación para migración
- Costos y requisitos
- Selección de reino destino
- Post-migración tips

#### ✅ Guía de farm accounts
**Descripción:** Crear y gestionar cuentas farm  
**Impacto:** Alto - Estrategia común  
**Esfuerzo:** 30 minutos  
**Prioridad:** 🟡 MEDIA  

**Contenido:**
- Por qué tener farm accounts
- Setup óptimo de farms
- Civilización ideal (Arabia)
- Comandantes gatherers
- Transferencia de recursos
- Multi-accounting rules

#### ✅ Análisis de meta por servidor
**Descripción:** Diferencias de meta según edad del servidor  
**Impacto:** Medio - Información contextual  
**Esfuerzo:** 20 minutos  
**Prioridad:** 🟢 BAJA  

**Contenido:**
- Early servers (1-100 días)
- Mid servers (100-300 días)
- Late servers (300+ días)
- Meta de comandantes por fase
- Estrategias de progresión

#### ✅ Guía de rallies y garrison
**Descripción:** Mecánicas y estrategias de rallies/garrison  
**Impacto:** Alto - Contenido PvP importante  
**Esfuerzo:** 45 minutos  
**Prioridad:** 🟡 MEDIA  

**Contenido:**
- Mecánicas de rallies
- Roles (leader, filler)
- Composiciones óptimas
- Garrison defense
- Timing y coordinación
- Comandantes especializados

---

### 8. Accesibilidad ⭐⭐⭐

#### ✅ ARIA labels completos
**Descripción:** Etiquetas ARIA para screen readers  
**Impacto:** Alto - Inclusividad  
**Esfuerzo:** 30 minutos  
**Prioridad:** 🟡 MEDIA  

#### ✅ Navegación por teclado
**Descripción:** Soporte completo para navegación sin mouse  
**Impacto:** Alto - Accesibilidad  
**Esfuerzo:** 20 minutos  
**Prioridad:** 🟡 MEDIA  

#### ✅ Contraste mejorado
**Descripción:** Asegurar ratios de contraste WCAG AA  
**Impacto:** Medio - Legibilidad  
**Esfuerzo:** 15 minutos  
**Prioridad:** 🟢 BAJA  

#### ✅ Screen reader friendly
**Descripción:** Optimización para lectores de pantalla  
**Impacto:** Alto - Inclusividad  
**Esfuerzo:** 30 minutos  
**Prioridad:** 🟡 MEDIA  

---

## 🎯 TOP 5 RECOMENDACIONES

### Basándome en **Impacto vs Esfuerzo**, estas son las mejoras prioritarias:

### **1. Completar las 5 civilizaciones restantes** 🔥🔥
**Tiempo estimado:** 30 minutos  
**Impacto:** ⭐⭐⭐⭐⭐  
**Esfuerzo:** ⭐⭐  

**Por qué:**
- Máximo impacto con mínimo esfuerzo
- Completa sección crítica del sitio
- Contenido ya está en CONTENIDO_COMPLETO.md
- Solo necesita formateo HTML

**Civilizaciones pendientes:**
- 🏰 Alemania
- ⛩️ Japón
- 🕌 Arabia
- 🏛️ España
- 🏛️ Bizancio

---

### **2. Calculadora de recursos interactiva** 🔥
**Tiempo estimado:** 20 minutos  
**Impacto:** ⭐⭐⭐⭐⭐  
**Esfuerzo:** ⭐⭐  

**Por qué:**
- Muy útil para jugadores de todos los niveles
- Diferenciador vs otras guías
- Fácil de implementar con JavaScript
- Aumenta tiempo en sitio

**Funcionalidades:**
- Input de objetivo (ej: 10M comida)
- Cálculo de tiempo necesario
- Considera bonos de civilización
- Muestra speedups necesarios

---

### **3. Comparador de civilizaciones** 🔥
**Tiempo estimado:** 15 minutos  
**Impacto:** ⭐⭐⭐⭐⭐  
**Esfuerzo:** ⭐  

**Por qué:**
- Ayuda en decisión más importante del juego
- Visual e interactivo
- Usa datos ya existentes
- Mejora engagement

**Características:**
- Seleccionar 2-3 civilizaciones
- Comparación lado a lado
- Ratings visuales
- Recomendación automática

---

### **4. Sistema de búsqueda** 🔥
**Tiempo estimado:** 25 minutos  
**Impacto:** ⭐⭐⭐⭐⭐  
**Esfuerzo:** ⭐⭐  

**Por qué:**
- Mejora UX dramáticamente
- Facilita encontrar información
- Aumenta utilidad del sitio
- Implementación vanilla JS

**Funcionalidades:**
- Búsqueda en tiempo real
- Resultados categorizados
- Navegación rápida
- Highlights de coincidencias

---

### **5. Modo oscuro/claro** 🔥
**Tiempo estimado:** 10 minutos  
**Impacto:** ⭐⭐⭐⭐  
**Esfuerzo:** ⭐  

**Por qué:**
- Preferencia común de usuarios
- Muy fácil con CSS variables
- Mejora accesibilidad
- Persistencia con localStorage

**Características:**
- Toggle en header
- Transición suave
- Guarda preferencia
- Modo automático (opcional)

---

## 📊 MATRIZ DE PRIORIZACIÓN

| Mejora | Impacto | Esfuerzo | Prioridad | Tiempo |
|--------|---------|----------|-----------|--------|
| Completar civilizaciones | ⭐⭐⭐⭐⭐ | ⭐⭐ | 🔥🔥 | 30min |
| Calculadora recursos | ⭐⭐⭐⭐⭐ | ⭐⭐ | 🔥 | 20min |
| Comparador civs | ⭐⭐⭐⭐⭐ | ⭐ | 🔥 | 15min |
| Sistema búsqueda | ⭐⭐⭐⭐⭐ | ⭐⭐ | 🔥 | 25min |
| Modo oscuro | ⭐⭐⭐⭐ | ⭐ | 🔥 | 10min |
| Volver arriba button | ⭐⭐⭐⭐ | ⭐ | 🔥 | 10min |
| Meta tags SEO | ⭐⭐⭐⭐ | ⭐⭐ | 🔥 | 20min |
| Lazy loading | ⭐⭐⭐⭐ | ⭐ | 🔥 | 10min |
| Tabla contenidos | ⭐⭐⭐⭐ | ⭐⭐ | 🔥 | 25min |
| Compartir social | ⭐⭐⭐⭐ | ⭐ | 🔥 | 15min |

---

## 🗓️ PLAN DE IMPLEMENTACIÓN SUGERIDO

### **Fase 1: Contenido Core** (1-2 horas)
1. Completar 5 civilizaciones restantes
2. Añadir 10 comandantes más importantes
3. Tier lists actualizadas

### **Fase 2: Funcionalidades Clave** (1-2 horas)
4. Sistema de búsqueda
5. Calculadora de recursos
6. Comparador de civilizaciones
7. Modo oscuro/claro

### **Fase 3: UX Improvements** (1 hora)
8. Volver arriba button
9. Tabla de contenidos flotante
10. Breadcrumbs
11. Compartir en redes sociales

### **Fase 4: SEO y Performance** (1 hora)
12. Meta tags completos
13. Sitemap.xml
14. Lazy loading
15. Optimización de imágenes

### **Fase 5: Herramientas Avanzadas** (3-4 horas)
16. Planificador de talentos
17. Calculadora de speedups
18. Sistema de favoritos
19. Tracker de eventos

### **Fase 6: Contenido Avanzado** (2-3 horas)
20. Guías de KvK
21. Guía de equipment
22. Guía de farm accounts
23. Más comandantes (30+)

---

## 💡 NOTAS IMPORTANTES

### Priorización
- **Impacto Alto + Esfuerzo Bajo = HACER PRIMERO** 🔥🔥
- **Impacto Alto + Esfuerzo Alto = PLANEAR BIEN** 🔥
- **Impacto Bajo + Esfuerzo Bajo = QUICK WINS** 🟡
- **Impacto Bajo + Esfuerzo Alto = EVITAR** 🟢

### Dependencias
- Modo oscuro requiere: CSS variables bien estructuradas ✅
- Búsqueda requiere: Contenido completo (en progreso)
- Calculadoras requieren: Datos precisos del juego
- PWA requiere: HTTPS en producción

### Testing
Cada mejora debe ser testeada en:
- ✅ Chrome/Edge (Desktop)
- ✅ Firefox (Desktop)
- ✅ Safari (Mac/iOS)
- ✅ Chrome Mobile (Android)
- ✅ Diferentes resoluciones

---

## 🎯 PRÓXIMOS PASOS INMEDIATOS

1. **Revisar este documento** y decidir prioridades
2. **Seleccionar mejoras** a implementar primero
3. **Crear issues/tasks** para tracking
4. **Implementar** según plan de fases
5. **Testear** cada mejora antes de siguiente
6. **Iterar** basado en feedback

---

**Última actualización:** 2026-02-13  
**Mantenido por:** Equipo de desarrollo  
**Versión:** 1.0.0

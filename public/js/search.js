// Datos indexados para búsqueda
const searchIndex = {
    civilizaciones: [
        { id: 'roma', name: 'Roma', keywords: ['roma', 'imperio', 'comida', 'infantería', 'scipio', 'legionario'], url: 'pages/civilizaciones.html#roma', category: 'Civilizaciones', description: 'Imperio Romano - +10% Producción de Comida' },
        { id: 'china', name: 'China', keywords: ['china', 'construcción', 'investigación', 'sun tzu', 'chu-ko-nu'], url: 'pages/civilizaciones.html#china', category: 'Civilizaciones', description: 'Reino Celestial - +5% Velocidad de Construcción e Investigación' },
        { id: 'francia', name: 'Francia', keywords: ['francia', 'curación', 'hospital', 'joan', 'juana de arco', 'gathering'], url: 'pages/civilizaciones.html#francia', category: 'Civilizaciones', description: 'Francia - +20% Velocidad de Curación' },
        { id: 'alemania', name: 'Alemania', keywords: ['alemania', 'entrenamiento', 'caballería', 'hermann', 'teutonic'], url: 'pages/civilizaciones.html#alemania', category: 'Civilizaciones', description: 'Alemania - +5% Velocidad de Entrenamiento' },
        { id: 'japon', name: 'Japón', keywords: ['japón', 'japan', 'recolección', 'samurai', 'kusunoki'], url: 'pages/civilizaciones.html#japon', category: 'Civilizaciones', description: 'Japón - +5% Velocidad de Recolección' },
        { id: 'arabia', name: 'Arabia', keywords: ['arabia', 'gathering', 'caballería', 'baibars', 'mamluk'], url: 'pages/civilizaciones.html#arabia', category: 'Civilizaciones', description: 'Arabia - +10% Velocidad de Gathering' },
        { id: 'espana', name: 'España', keywords: ['españa', 'spain', 'piedra', 'el cid', 'conquistador'], url: 'pages/civilizaciones.html#espana', category: 'Civilizaciones', description: 'España - +10% Producción de Piedra' },
        { id: 'bizancio', name: 'Bizancio', keywords: ['bizancio', 'byzantium', 'construcción', 'belisarius', 'cataphract'], url: 'pages/civilizaciones.html#bizancio', category: 'Civilizaciones', description: 'Bizancio - +5% Velocidad de Construcción' },
        { id: 'gran-bretana', name: 'Gran Bretaña', keywords: ['britania', 'britain', 'boudica', 'arqueros'], url: 'pages/civilizaciones.html#detalles', category: 'Civilizaciones', description: 'Gran Bretaña - +5% Ataque de Arqueros' },
        { id: 'corea', name: 'Corea', keywords: ['corea', 'korea', 'investigación', 'eulji'], url: 'pages/civilizaciones.html#detalles', category: 'Civilizaciones', description: 'Corea - +3% Velocidad de Investigación' },
        { id: 'otomano', name: 'Imperio Otomano', keywords: ['otomano', 'osman', 'nuke', 'habilidad'], url: 'pages/civilizaciones.html#detalles', category: 'Civilizaciones', description: 'Imperio Otomano - +5% Daño de Habilidad' },
        { id: 'vikingos', name: 'Vikingos', keywords: ['vikingos', 'bjorn', 'infantería', 'contraataque'], url: 'pages/civilizaciones.html#detalles', category: 'Civilizaciones', description: 'Vikingos - +10% Daño de Contraataque' },
        { id: 'egipto', name: 'Egipto', keywords: ['egipto', 'imhotep', 'arqueros', 'rally'], url: 'pages/civilizaciones.html#detalles', category: 'Civilizaciones', description: 'Egipto - +5% Daño de Rally' },
        { id: 'grecia', name: 'Grecia', keywords: ['grecia', 'pericles', 'ayuda', 'alianza'], url: 'pages/civilizaciones.html#detalles', category: 'Civilizaciones', description: 'Grecia - +30% Velocidad de Ayuda Alianza' }
    ],
    comandantes: [
        { id: 'sun-tzu', name: 'Sun Tzu', keywords: ['sun tzu', 'infantería', 'épico', 'aoe', 'china', 'arte de la guerra'], url: 'pages/comandantes.html#sun-tzu', category: 'Comandantes', description: 'Comandante épico de infantería - El Arte de la Guerra', pairings: ['Richard I', 'YSG', 'Eulji Mundeok'] },
        { id: 'richard', name: 'Richard I', keywords: ['richard', 'ricardo', 'legendario', 'tanque', 'infantería', 'corazón de león'], url: 'pages/comandantes.html#richard', category: 'Comandantes', description: 'Comandante legendario tanque - Corazón de León', pairings: ['Sun Tzu', 'Charles Martel', 'Alexander'] },
        { id: 'cao-cao', name: 'Cao Cao', keywords: ['cao cao', 'caballería', 'legendario', 'velocidad', 'china'], url: 'pages/comandantes.html#cao-cao', category: 'Comandantes', description: 'Comandante legendario de caballería - Rey de Wei', pairings: ['Minamoto', 'Pelagius', 'Baibars'] },
        { id: 'ysg', name: 'Yi Seong-Gye', keywords: ['ysg', 'yi seong-gye', 'arqueros', 'legendario', 'aoe', 'korea'], url: 'pages/comandantes.html#ysg', category: 'Comandantes', description: 'Comandante legendario de arqueros - YSG', pairings: ['Ramesses II', 'Zhuge Liang', 'Charles Martel'] },
        { id: 'guan-yu', name: 'Guan Yu', keywords: ['guan yu', 'infantería', 'legendario', 's tier', 'china'], url: 'pages/comandantes.html#guan-yu', category: 'Comandantes', description: 'Comandante legendario S+ tier - Dios de la Guerra', pairings: ['Alexander', 'Scipio Prime', 'Leonidas I'] },
        { id: 'zhuge', name: 'Zhuge Liang', keywords: ['zhuge liang', 'arqueros', 'legendario', 's tier', 'aoe', 'china'], url: 'pages/comandantes.html#zhuge', category: 'Comandantes', description: 'S+ Tier Archer 2026 - El Dragón Dormido', pairings: ['YSG', 'Boudica Prime', 'Hermann Prime'] },
        { id: 'scipio-prime', name: 'Scipio Prime', keywords: ['scipio prime', 'infantería', 'legendario', 'meta', 'aoe'], url: 'pages/comandantes.html#prime', category: 'Comandantes', description: 'Meta Infantería 2026 - Variante Prime', pairings: ['Guan Yu', 'Liu Bei', 'Sargon'] },
        { id: 'boudica-prime', name: 'Boudica Prime', keywords: ['boudica prime', 'arqueros', 'legendario', 'meta', 'counter'], url: 'pages/comandantes.html#prime', category: 'Comandantes', description: 'Meta Arqueros 2026 - Variante Prime', pairings: ['Zhuge Liang', 'Henry V', 'YSG'] },
        { id: 'nevsky', name: 'Nevsky', keywords: ['nevsky', 'caballería', 'legendario', 'meta', 'nuke'], url: 'pages/comandantes.html#prime', category: 'Comandantes', description: 'Meta Caballería 2026 - Alexander Nevsky', pairings: ['Joan Prime', 'Xiang Yu', 'William I'] },
        { id: 'joan-prime', name: 'Joan of Arc Prime', keywords: ['joan prime', 'caballería', 'legendario', 'soporte', 'meta'], url: 'pages/comandantes.html#prime', category: 'Comandantes', description: 'Meta Soporte Caballería 2026 - Juana Prime', pairings: ['Nevsky', 'Xiang Yu', 'Huo Qubing'] },
        { id: 'attila', name: 'Attila', keywords: ['attila', 'caballería', 'legendario', 'asedio', 'ataque'], url: 'pages/comandantes.html#attila', category: 'Comandantes', description: 'Legendario de caballería - Azote de Dios', pairings: ['Takeda Shingen', 'Nevsky'] },
        { id: 'xiang-yu', name: 'Xiang Yu', keywords: ['xiang yu', 'caballería', 'legendario', 'nuke'], url: 'pages/comandantes.html#xiang-yu', category: 'Comandantes', description: 'Legendario de caballería - El Señor Supremo', pairings: ['Nevsky', 'Joan Prime', 'Chandragupta'] },
        { id: 'zenobia', name: 'Zenobia', keywords: ['zenobia', 'infantería', 'guarnición', 'defensa', 'legendario'], url: 'pages/comandantes.html#zenobia', category: 'Comandantes', description: 'Garrison Queen - Reina de Palmira', pairings: ['Flavius Aetius', 'YSS', 'Theodora'] },
        { id: 'leonidas', name: 'Leonidas I', keywords: ['leonidas', 'león', 'infantería', 'escudo', 'legendario'], url: 'pages/comandantes.html#leonidas', category: 'Comandantes', description: 'Legendario de infantería - El León de Esparta', pairings: ['Guan Yu', 'Harold'] },
        { id: 'martel', name: 'Charles Martel', keywords: ['martel', 'carlos', 'infantería', 'escudo', 'legendario', 'guarnición'], url: 'pages/comandantes.html#martel', category: 'Comandantes', description: 'Legendario de infantería - El Martillo', pairings: ['Richard I', 'YSG', 'Constantine'] },
        { id: 'joan', name: 'Joan of Arc', keywords: ['joan', 'juana de arco', 'gathering', 'soporte', 'épico', 'francia'], url: 'pages/comandantes.html#joan', category: 'Comandantes', description: 'Comandante épico de gathering y soporte', pairings: ['Seondeok', 'Cleopatra', 'Pelagius'] },
        { id: 'lohar', name: 'Lohar', keywords: ['lohar', 'bárbaros', 'gratis', 'pve'], url: 'pages/comandantes.html#lohar', category: 'Comandantes', description: 'Comandante gratuito especialista en bárbaros', pairings: ['Boudica', 'Aethelflaed'] },
        { id: 'pelagius', name: 'Pelagius', keywords: ['pelagius', 'pelayo', 'caballería', 'épico', 'sustain'], url: 'pages/comandantes.html#pelagius', category: 'Comandantes', description: 'Comandante épico de caballería', pairings: ['Cao Cao', 'Baibars', 'Belisarius'] },
        { id: 'kusunoki', name: 'Kusunoki', keywords: ['kusunoki', 'arqueros', 'épico', 'aoe', 'japón'], url: 'pages/comandantes.html#kusunoki', category: 'Comandantes', description: 'Comandante épico de arqueros', pairings: ['YSG', 'Sun Tzu', 'Keira'] }
    ],
    edificios: [
        { id: 'city-hall', name: 'City Hall', keywords: ['city hall', 'ayuntamiento', 'nivel', 'upgrade'], url: 'pages/edificios.html#city-hall', category: 'Edificios', description: 'Edificio principal - Desbloquea mejoras' },
        { id: 'academy', name: 'Academy', keywords: ['academy', 'academia', 'investigación', 'tecnología'], url: 'pages/edificios.html#academy', category: 'Edificios', description: 'Academia - Investigación de tecnologías' },
        { id: 'hospital', name: 'Hospital', keywords: ['hospital', 'curación', 'tropas heridas'], url: 'pages/edificios.html#hospital', category: 'Edificios', description: 'Hospital - Cura tropas heridas' },
        { id: 'barracks', name: 'Barracks', keywords: ['barracks', 'cuartel', 'infantería', 'entrenamiento'], url: 'pages/edificios.html#barracks', category: 'Edificios', description: 'Cuartel - Entrena infantería' }
    ],
    recursos: [
        { id: 'gathering', name: 'Gathering', keywords: ['gathering', 'recolección', 'farmear', 'recursos', 'minería'], url: 'pages/recursos.html#gathering', category: 'Recursos', description: 'Guía de recolección de recursos' },
        { id: 'production', name: 'Producción', keywords: ['producción', 'comida', 'madera', 'piedra', 'oro'], url: 'pages/recursos.html#production', category: 'Recursos', description: 'Optimización de producción de recursos' }
    ],
    guias: [
        { id: 'principiantes', name: 'Guía para Principiantes', keywords: ['principiantes', 'nuevo', 'empezar', 'inicio', 'tutorial'], url: 'index.html#inicio-rapido', category: 'Guías', description: 'Guía completa para jugadores nuevos' },
        { id: 'kvk', name: 'Kingdom vs Kingdom', keywords: ['kvk', 'kingdom', 'guerra', 'reinos'], url: 'pages/alianzas.html#kvk', category: 'Guías', description: 'Guía de Kingdom vs Kingdom' },
        { id: 'vip', name: 'Sistema VIP', keywords: ['vip', 'nivel', 'beneficios', 'puntos', 'gemas'], url: 'pages/vip.html', category: 'Guías', description: 'Sistema VIP y beneficios por nivel' },
        { id: 'equipment', name: 'Guía de Equipment', keywords: ['equipment', 'equipo', 'sets', 'forja', 'materiales'], url: 'pages/equipment.html', category: 'Guías', description: 'Guía completa de sets y crafting' },
        { id: 'tier-lists', name: 'Tier Lists 2026', keywords: ['tier list', 'ranking', 'mejor', 'meta'], url: 'pages/tier-lists.html', category: 'Guías', description: 'Los mejores comandantes y civilizaciones' },
        { id: 'builds', name: 'Árboles de Talentos (Builds)', keywords: ['build', 'talentos', 'árbol', 'configuración', 'puntos'], url: 'pages/builds.html', category: 'Guías', description: 'Las mejores configuraciones de talentos para cada comandante' },
        { id: 'kvk-guide', name: 'Especial KvK (SoC & KvK 1)', keywords: ['kvk', 'guerra', 'mapas', 'soc', 'hero anthem', 'strife of eight'], url: 'pages/kvk.html', category: 'Guías', description: 'Manual de supervivencia y análisis de mapas de guerra' },
        { id: 'jumper-guide', name: 'Guía de Salto (Jumper)', keywords: ['jumper', 'salto', 'nascent', 'principiante', 'ayuntamiento 7', 'teletransporte'], url: 'pages/jumper-guide.html', category: 'Guías', description: 'Estrategia de inicio avanzado para dominar nuevos reinos' },
        { id: 'armamentos', name: 'Armamentos y Formaciones (SoC)', keywords: ['armamento', 'formación', 'wedge', 'arch', 'cuña', 'inscripción', 'soc'], url: 'pages/armamentos.html', category: 'Sistemas', description: 'Optimización de tropas con el meta de la Temporada de Conquista' },
        { id: 'osiris', name: 'Arca de Osiris', keywords: ['osiris', 'arca', 'obelisco', 'alianza', 'competitivo', 'santuario'], url: 'pages/osiris.html', category: 'Sistemas', description: 'Estrategia y roles tácticos para el evento de alianza' }
    ],
    herramientas: [
        { id: 'calculadora-speedups', name: 'Calculadora de Aceleradores', keywords: ['calculadora', 'aceleradores', 'speedups', 'tiempo', 'investigación', 'construcción'], url: 'pages/calculadora-aceleradores.html', category: 'Herramientas', description: 'Calcula tu inventario total de aceleradores y planifica objetivos' },
        { id: 'calculadora-tropas', name: 'Calculadora de Entrenamiento (MGE)', keywords: ['calculadora', 'tropas', 'entrenamiento', 'poder', 'mge', 't4', 't5'], url: 'pages/calculadora-tropas.html', category: 'Herramientas', description: 'Calcula cuánto poder y puntos de MGE ganarás' },
        { id: 'calculadora', name: 'Calculadora de Recursos', keywords: ['calculadora', 'recursos', 'farmear', 'tiempo'], url: 'pages/calculadora.html', category: 'Herramientas', description: 'Calcula tiempo y speedups necesarios para recursos' },
        { id: 'comparador', name: 'Comparador de Civilizaciones', keywords: ['comparador', 'comparar', 'civilizaciones', 'vs'], url: 'pages/comparador.html', category: 'Herramientas', description: 'Compara civilizaciones lado a lado' }
    ]
};

// Historial de búsquedas (LocalStorage)
let searchHistory = JSON.parse(localStorage.getItem('rokSearchHistory') || '[]');

// Función de búsqueda
function performSearch(query) {
    if (!query || query.length < 2) return [];

    query = query.toLowerCase().trim();
    const results = [];

    // Buscar en todas las categorías
    Object.values(searchIndex).forEach(category => {
        category.forEach(item => {
            let score = 0;

            // Coincidencia exacta en nombre (mayor peso)
            if (item.name.toLowerCase() === query) {
                score += 100;
            } else if (item.name.toLowerCase().includes(query)) {
                score += 50;
            }

            // Coincidencia en keywords
            item.keywords.forEach(keyword => {
                if (keyword === query) {
                    score += 30;
                } else if (keyword.includes(query)) {
                    score += 10;
                }
            });

            // Coincidencia en descripción
            if (item.description.toLowerCase().includes(query)) {
                score += 5;
            }

            if (score > 0) {
                results.push({ ...item, score });
            }
        });
    });

    // Ordenar por score
    results.sort((a, b) => b.score - a.score);

    // Limitar a 10 resultados
    return results.slice(0, 10);
}

// Highlight de coincidencias
function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Guardar en historial
function saveToHistory(query) {
    if (!query || query.length < 2) return;

    // Evitar duplicados
    searchHistory = searchHistory.filter(item => item !== query);

    // Añadir al inicio
    searchHistory.unshift(query);

    // Limitar a 10
    searchHistory = searchHistory.slice(0, 10);

    // Guardar en localStorage
    localStorage.setItem('rokSearchHistory', JSON.stringify(searchHistory));
}

// Exportar funciones
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { performSearch, highlightMatch, saveToHistory, searchHistory };
}

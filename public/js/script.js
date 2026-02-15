// ===================================
// RISE OF KINGDOMS - GUÍA COMPLETA
// JavaScript Principal
// ===================================

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
  initializeApp();
});

// ===================================
// INICIALIZACIÓN
// ===================================

function initializeApp() {
  // Ocultar pantalla de carga
  setTimeout(() => {
    const loading = document.querySelector('.loading');
    if (loading) {
      loading.classList.add('hidden');
    }
  }, 800);

  // Inicializar componentes
  initNavigation();
  initDropdowns();
  initAccordions();
  initAnimations();
  initParticles();
  initScrollEffects();
  initGlobalSearch();
  initTooltips();
  initRevealAnimations();
  initFavorites();
  initTheme();
  initSound();
  initExpertise();
  initGestures();
  initPWA();
  initCommandPalette();
  initParallax();

  console.log('🏰 Rise of Kingdoms Guide - Initialized');
}

// ===================================
// NAVEGACIÓN
// ===================================

function initNavigation() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('.nav-menu a');

  // Toggle menú móvil
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('active');
    });
  }

  // Cerrar menú al hacer click en un link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menuToggle) {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
      }
    });
  });

  // Ocultar/mostrar header al hacer scroll
  let lastScroll = 0;
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      header.classList.remove('hidden');
      return;
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
      // Scroll down
      header.classList.add('hidden');
    } else {
      // Scroll up
      header.classList.remove('hidden');
    }

    lastScroll = currentScroll;
  });
}

// Marcar link activo según la página actual
function initActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-menu a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Manejo de Dropdowns para táctil/clic
function initDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');

    if (toggle) {
      toggle.addEventListener('click', (e) => {
        // En tablets/móviles o si el usuario hace clic preventivamente
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          e.stopPropagation(); // Evitar que el clic en el documento lo cierre inmediatamente

          const isActive = dropdown.classList.contains('active');

          // Cerrar otros dropdowns
          dropdowns.forEach(d => {
            if (d !== dropdown) d.classList.remove('active');
          });

          dropdown.classList.toggle('active');
          console.log('Dropdown toggled:', dropdown);
        }
      });
    }
  });

  // Cerrar al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      dropdowns.forEach(d => d.classList.remove('active'));
    }
  });
}

// ===================================
// ACORDEONES
// ===================================

function initAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', (e) => {
      const accordionItem = header.closest('.accordion-item');
      if (!accordionItem) return;

      const isActive = accordionItem.classList.contains('active');

      console.log('Accordion header clicked:', header.textContent.trim());

      // Opcional: Cerrar otros si quieres comportamiento de "un solo acordeón"
      // const allItems = accordionItem.parentElement.querySelectorAll('.accordion-item');
      // allItems.forEach(item => {
      //   if (item !== accordionItem) item.classList.remove('active');
      // });

      accordionItem.classList.toggle('active');
    });
  });
}

// ===================================
// ANIMACIONES DE SCROLL
// ===================================

function initScrollEffects() {
  // Intersection Observer para animaciones al hacer scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observar todas las cards y secciones
  const animatedElements = document.querySelectorAll('.card, section');
  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

// ===================================
// PARTÍCULAS ANIMADAS
// ===================================

function initParticles() {
  const canvas = document.createElement('canvas');
  canvas.className = 'particles';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '0';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouse = { x: -100, y: -100 };

  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.init();
    }
    init() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
      this.opacity = Math.random() * 0.5;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

      // Física con mouse
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100) {
        this.x -= dx / 20;
        this.y -= dy / 20;
      }
    }
    draw() {
      ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < 50; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// ===================================
// ANIMACIONES GENERALES
// ===================================

function initAnimations() {
  // Animación de contadores (para estadísticas)
  animateCounters();

  // Animación de barras de progreso
  animateProgressBars();
}

function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000; // 2 segundos
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    // Iniciar animación cuando el elemento sea visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(counter);
  });
}

function animateProgressBars() {
  const progressBars = document.querySelectorAll('[data-progress]');

  progressBars.forEach(bar => {
    const progress = bar.getAttribute('data-progress');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          bar.style.width = progress + '%';
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(bar);
  });
}

// ===================================
// TABS (PESTAÑAS)
// ===================================

function initTabs() {
  const tabButtons = document.querySelectorAll('[data-tab]');
  const tabContents = document.querySelectorAll('[data-tab-content]');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');

      // Remover active de todos los botones y contenidos
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Activar el tab seleccionado
      button.classList.add('active');
      const targetContent = document.querySelector(`[data-tab-content="${targetTab}"]`);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

// ===================================
// MODAL
// ===================================

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Cerrar modal al hacer click fuera
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    closeModal(e.target.id);
  }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const activeModal = document.querySelector('.modal.active');
    if (activeModal) {
      closeModal(activeModal.id);
    }
  }
});

// ===================================
// BÚSQUEDA
// ===================================

function initSearch() {
  const searchInput = document.querySelector('[data-search]');
  const searchItems = document.querySelectorAll('[data-searchable]');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    searchItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
}

// ===================================
// FILTROS
// ===================================

function initFilters() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const filterItems = document.querySelectorAll('[data-category]');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');

      // Actualizar botones activos
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filtrar items
      filterItems.forEach(item => {
        const category = item.getAttribute('data-category');

        if (filterValue === 'all' || category === filterValue) {
          item.style.display = '';
          item.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// ===================================
// TOOLTIP
// ===================================

function initTooltips() {
  const tooltipTriggers = document.querySelectorAll('[data-tooltip]');

  tooltipTriggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', (e) => {
      const tooltipText = trigger.getAttribute('data-tooltip');
      const tooltip = document.createElement('div');
      tooltip.classList.add('tooltip');
      tooltip.textContent = tooltipText;
      tooltip.id = 'active-tooltip';

      document.body.appendChild(tooltip);

      const rect = trigger.getBoundingClientRect();
      tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
      tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';

      setTimeout(() => tooltip.classList.add('visible'), 10);
    });

    trigger.addEventListener('mouseleave', () => {
      const tooltip = document.getElementById('active-tooltip');
      if (tooltip) {
        tooltip.classList.remove('visible');
        setTimeout(() => tooltip.remove(), 300);
      }
    });
  });
}

// ===================================
// SMOOTH SCROLL
// ===================================

function initSmoothScroll() {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ===================================
// CANVAS BACKGROUND (OPCIONAL)
// ===================================

function initCanvasBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Array de partículas
  const particles = [];
  const particleCount = 50;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
      this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }

    draw() {
      ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Crear partículas
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Animar
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();

  // Redimensionar canvas
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ===================================
// UTILIDADES
// ===================================

// Copiar al portapapeles
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showNotification('¡Copiado al portapapeles!');
  });
}

// Mostrar notificación
function showNotification(message, duration = 3000) {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => notification.classList.add('visible'), 10);

  setTimeout(() => {
    notification.classList.remove('visible');
    setTimeout(() => notification.remove(), 300);
  }, duration);
}

// Formatear números
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// ===================================
// BÚSQUEDA GLOBAL
// ===================================

function initGlobalSearch() {
  const searchBtn = document.getElementById('globalSearchBtn');
  const searchModal = document.getElementById('searchModal');
  const searchInput = document.getElementById('globalSearchInput');
  const searchResults = document.getElementById('searchResults');
  const searchHistory = document.getElementById('searchHistory');
  const closeSearchBtn = document.getElementById('closeSearch');

  if (!searchBtn || !searchModal) return;

  // Abrir modal de búsqueda
  searchBtn.addEventListener('click', () => {
    searchModal.classList.add('active');
    searchInput.focus();
    loadSearchHistory();
  });

  // Cerrar modal
  if (closeSearchBtn) {
    closeSearchBtn.addEventListener('click', () => {
      searchModal.classList.remove('active');
      searchInput.value = '';
      searchResults.innerHTML = '';
    });
  }

  // Cerrar con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal.classList.contains('active')) {
      searchModal.classList.remove('active');
      searchInput.value = '';
    }
  });

  // Cerrar al hacer click fuera
  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
      searchModal.classList.remove('active');
      searchInput.value = '';
    }
  });

  // Búsqueda en tiempo real
  let searchTimeout;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    const query = e.target.value.trim();

    if (query.length < 2) {
      searchResults.innerHTML = '';
      loadSearchHistory();
      return;
    }

    searchTimeout = setTimeout(() => {
      performGlobalSearch(query);
    }, 300);
  });

  // Enter para buscar
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const query = searchInput.value.trim();
      if (query.length >= 2) {
        saveToSearchHistory(query);
        performGlobalSearch(query);
      }
    }
  });
}

function performGlobalSearch(query) {
  // Importar datos del search.js
  if (typeof performSearch === 'undefined') {
    console.error('search.js no está cargado');
    return;
  }

  const results = performSearch(query);
  displaySearchResults(results, query);
}

function displaySearchResults(results, query) {
  const searchResults = document.getElementById('searchResults');
  const searchHistory = document.getElementById('searchHistory');

  if (searchHistory) searchHistory.style.display = 'none';

  if (results.length === 0) {
    searchResults.innerHTML = `
      <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">😕 No se encontraron resultados</p>
        <p>Intenta con otros términos de búsqueda</p>
      </div>
    `;
    return;
  }

  // Agrupar por categoría
  const grouped = {};
  results.forEach(result => {
    if (!grouped[result.category]) {
      grouped[result.category] = [];
    }
    grouped[result.category].push(result);
  });

  let html = '';
  Object.keys(grouped).forEach(category => {
    html += `<div class="search-category">
      <h3 class="search-category-title">${category}</h3>
      <div class="search-category-results">`;

    grouped[category].forEach(result => {
      const highlightedName = highlightMatch(result.name, query);
      const highlightedDesc = highlightMatch(result.description, query);

      let pairingsHTML = '';
      if (result.category === 'Comandantes' && result.pairings) {
        pairingsHTML = `
          <div class="search-result-pairings">
            <span class="pairing-label">💡 Sugerencia AI:</span>
            ${result.pairings.map(p => `<span class="pairing-tag">${p}</span>`).join('')}
          </div>
        `;
      }

      html += `
        <a href="${fixUrl(result.url)}" class="search-result-item">
          <div class="search-result-header">
            <div class="search-result-title">${highlightedName}</div>
            <div class="search-result-category">${result.category}</div>
          </div>
          <div class="search-result-description">${highlightedDesc}</div>
          ${pairingsHTML}
        </a>
      `;
    });

    html += `</div></div>`;
  });

  searchResults.innerHTML = html;
}

function loadSearchHistory() {
  const searchHistory = document.getElementById('searchHistory');
  if (!searchHistory) return;

  const history = JSON.parse(localStorage.getItem('rokSearchHistory') || '[]');

  if (history.length === 0) {
    searchHistory.style.display = 'none';
    return;
  }

  searchHistory.style.display = 'block';
  let html = '<h3 style="color: var(--primary-gold); margin-bottom: 1rem;">Búsquedas Recientes</h3><div class="search-history-items">';

  history.slice(0, 5).forEach(term => {
    html += `
      <button class="search-history-item" onclick="document.getElementById('globalSearchInput').value='${term}'; document.getElementById('globalSearchInput').dispatchEvent(new Event('input'));">
        🕐 ${term}
      </button>
    `;
  });

  html += '</div>';
  searchHistory.innerHTML = html;
}

function saveToSearchHistory(query) {
  if (!query || query.length < 2) return;

  let history = JSON.parse(localStorage.getItem('rokSearchHistory') || '[]');
  history = history.filter(item => item !== query);
  history.unshift(query);
  history = history.slice(0, 10);

  localStorage.setItem('rokSearchHistory', JSON.stringify(history));
}

// ===================================
// SISTEMA DE FAVORITOS
// ===================================

let favorites = JSON.parse(localStorage.getItem('rokFavorites') || '[]');

function initFavorites() {
  console.log('⭐ Iniciando sistema de favoritos...');
  renderFavoritesDashboard();

  // Escuchar clicks en botones de favoritos (delegación de eventos)
  document.addEventListener('click', (e) => {
    const favBtn = e.target.closest('.fav-btn');
    if (favBtn) {
      const id = favBtn.getAttribute('data-fav-id');
      const category = favBtn.getAttribute('data-fav-category');
      const name = favBtn.getAttribute('data-fav-name');
      const url = favBtn.getAttribute('data-fav-url');

      toggleFavorite({ id, category, name, url });

      // Actualizar UI del botón
      updateFavButtonUI(favBtn, id);
    }
  });
}

function toggleFavorite(item) {
  const index = favorites.findIndex(f => f.id === item.id);

  if (index === -1) {
    favorites.push(item);
    showNotification(`⭐ ${item.name} añadido a favoritos`);
  } else {
    favorites.splice(index, 1);
    showNotification(`❌ ${item.name} eliminado de favoritos`);
  }

  localStorage.setItem('rokFavorites', JSON.stringify(favorites));
  renderFavoritesDashboard();
}

function updateFavButtonUI(btn, id) {
  const isFav = favorites.some(f => f.id === id);
  if (isFav) {
    btn.classList.add('active');
    btn.innerHTML = '★'; // Estrella llena
  } else {
    btn.classList.remove('active');
    btn.innerHTML = '☆'; // Estrella vacía
  }
}

function renderFavoritesDashboard() {
  const container = document.getElementById('favoritesContainer');
  if (!container) return;

  if (favorites.length === 0) {
    container.innerHTML = `
      <div class="empty-favorites">
        <p>No tienes favoritos guardados aún.</p>
        <p style="font-size: 0.8rem; opacity: 0.7;">¡Haz clic en la estrella de un comandante o guía para guardarlo aquí!</p>
      </div>
    `;
    return;
  }

  let html = '<div class="favorites-grid">';
  favorites.forEach(fav => {
    html += `
      <div class="fav-card">
        <div class="fav-card-info">
          <span class="fav-category">${fav.category}</span>
          <a href="${fav.url}" class="fav-name">${fav.name}</a>
        </div>
        <button class="fav-btn active" data-fav-id="${fav.id}" data-fav-name="${fav.name}" data-fav-url="${fav.url}" data-fav-category="${fav.category}">★</button>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

// ===================================
// EXPORTAR FUNCIONES GLOBALES
// ===================================

window.RoKGuide = {
  openModal,
  closeModal,
  copyToClipboard,
  showNotification,
  formatNumber
};

// ===================================
// TOOLTIPS DINÁMICOS
// ===================================

function initTooltips() {
  const tooltipItems = document.querySelectorAll('[data-tooltip]');
  let tooltipElement = document.createElement('div');
  tooltipElement.className = 'tooltip';
  document.body.appendChild(tooltipElement);

  tooltipItems.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
      const text = item.getAttribute('data-tooltip');
      tooltipElement.innerHTML = text;
      tooltipElement.classList.add('active');

      const rect = item.getBoundingClientRect();
      const tooltipRect = tooltipElement.getBoundingClientRect();

      let top = rect.top - tooltipRect.height - 10;
      let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);

      // Ajustes si se sale de la pantalla
      if (top < 10) top = rect.bottom + 10;
      if (left < 10) left = 10;
      if (left + tooltipRect.width > window.innerWidth) left = window.innerWidth - tooltipRect.width - 10;

      tooltipElement.style.top = `${top}px`;
      tooltipElement.style.left = `${left}px`;
    });

    item.addEventListener('mouseleave', () => {
      tooltipElement.classList.remove('active');
    });
  });
}

// ===================================
// ANIMACIONES DE REVELADO
// ===================================

function initRevealAnimations() {
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Opcional: dejar de observar una vez revelado
        // revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

// ===================================
// SISTEMA DE TEMAS (WAR NIGHT)
// ===================================

function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  const savedTheme = localStorage.getItem('rokTheme') || 'standard';
  if (savedTheme === 'war') {
    document.documentElement.setAttribute('data-theme', 'war');
    if (themeToggle) themeToggle.innerHTML = '🔥';
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme === 'war') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('rokTheme', 'standard');
        themeToggle.innerHTML = '🌙';
        showNotification('📜 Modo Estándar Activado');
      } else {
        document.documentElement.setAttribute('data-theme', 'war');
        localStorage.setItem('rokTheme', 'war');
        themeToggle.innerHTML = '🔥';
        showNotification('🔥 MODO GUERRA ACTIVADO');
      }
    });
  }
}

// ===================================
// SISTEMA DE AUDIO TÁCTICO (SFX)
// ===================================

let soundEnabled = localStorage.getItem('rokSound') !== 'false';

function initSound() {
  const soundToggle = document.getElementById('soundToggle');

  if (soundToggle) {
    updateSoundUI(soundToggle);
    soundToggle.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      localStorage.setItem('rokSound', soundEnabled);
      updateSoundUI(soundToggle);
      if (soundEnabled) {
        playTacticalSound('click');
        showNotification('🔊 Sonidos Activados');
      } else {
        showNotification('🔇 Sonidos Desactivados');
      }
    });
  }

  const interactiveElements = document.querySelectorAll('button, .nav-menu a, .accordion-header, .nav-card, .fav-btn');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (soundEnabled) playTacticalSound('hover');
    });
    el.addEventListener('click', () => {
      if (soundEnabled) playTacticalSound('click');
    });
  });
}

function updateSoundUI(btn) {
  if (soundEnabled) {
    btn.innerHTML = '🔊';
    btn.classList.remove('muted');
  } else {
    btn.innerHTML = '🔇';
    btn.classList.add('muted');
  }
}

function playTacticalSound(type) {
  if (!soundEnabled) return;

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const ctx = new AudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  const now = ctx.currentTime;

  if (type === 'click') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.1);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    osc.start(now);
    osc.stop(now + 0.1);
  } else if (type === 'hover') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    gain.gain.setValueAtTime(0.02, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    osc.start(now);
    osc.stop(now + 0.05);
  }

  setTimeout(() => ctx.close(), 200);
}

// ===================================
// RASTREADOR DE EXPERTISE (PROGRESS)
// ===================================

let expertiseList = JSON.parse(localStorage.getItem('rokExpertise')) || [];

function initExpertise() {
  const expertiseBtns = document.querySelectorAll('.expertise-btn');

  expertiseBtns.forEach(btn => {
    const id = btn.getAttribute('data-exp-id');
    if (expertiseList.some(item => item.id === id)) {
      btn.classList.add('active');
    }

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const name = btn.getAttribute('data-exp-name');
      toggleExpertise(id, name);
      btn.classList.toggle('active');
    });
  });

  renderExpertiseDashboard();
  initExpertiseFilter();
}

function toggleExpertise(id, name) {
  const index = expertiseList.findIndex(item => item.id === id);
  if (index === -1) {
    expertiseList.push({ id, name });
    showNotification(`🏅 ${name} marcado como Expertise!`);
  } else {
    expertiseList.splice(index, 1);
    showNotification(`⚪ ${name} removido de Expertise`);
  }
  localStorage.setItem('rokExpertise', JSON.stringify(expertiseList));
  renderExpertiseDashboard();
}

function renderExpertiseDashboard() {
  const container = document.getElementById('expertiseDashboard');
  if (!container) return;

  if (expertiseList.length === 0) {
    container.innerHTML = `
      <div class="empty-favorites">
        <p>Aún no has marcado ningún comandante con Expertise.</p>
        <p style="font-size: 0.8rem;">Haz clic en la medalla 🏅 de tus comandantes para rastrear tu progreso.</p>
      </div>
    `;
    return;
  }

  const gridHtml = expertiseList.map(item => `
    <div class="expertise-item">
      <div style="font-size: 2rem;">🏅</div>
      <div class="expertise-name">${item.name}</div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="expertise-stats">
      <span>Comandantes Maxeados: <strong>${expertiseList.length}</strong></span>
    </div>
    <div class="expertise-grid">
      ${gridHtml}
    </div>
    <div style="margin-top: 1.5rem; text-align: center;">
      <button class="btn btn-primary" onclick="generateProfileCard()">📸 Generar Tarjeta de Perfil</button>
    </div>
  `;

  renderIAPairings();
}

function initExpertiseFilter() {
  const filterCheckbox = document.getElementById('showExpertiseOnly');
  if (!filterCheckbox) return;

  filterCheckbox.addEventListener('change', () => {
    const isChecked = filterCheckbox.checked;
    const cards = document.querySelectorAll('.commander-card[data-exp-id]');

    cards.forEach(card => {
      const id = card.getAttribute('data-exp-id');
      const isExpertised = expertiseList.some(item => item.id === id);

      if (isChecked && !isExpertised) {
        card.classList.add('expertise-hidden');
      } else {
        card.classList.remove('expertise-hidden');
      }
    });

    if (isChecked) {
      showNotification('🔍 Filtrando por Expertise');
    }
  });
}

// ===================================
// NAVEGACIÓN POR GESTOS (MOBILE)
// ===================================

function initGestures() {
  let touchstartX = 0;
  let touchendX = 0;

  const swipeableArea = document.querySelector("main");
  if (!swipeableArea) return;

  swipeableArea.addEventListener("touchstart", e => {
    touchstartX = e.changedTouches[0].screenX;
  });

  swipeableArea.addEventListener("touchend", e => {
    touchendX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchendX < touchstartX - 100) {
      // Swipe Left
    }
    if (touchendX > touchstartX + 100) {
      // Swipe Right
    }
  }
}

// ===================================
// SOPORTE PWA & OFFLINE
// ===================================

function initPWA() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('🚀 Service Worker registrado'))
        .catch(err => console.log('❌ Error al registrar SW:', err));
    });
  }
}

// ===================================
// COMMAND PALETTE (CTRL+K)
// ===================================

const QUICK_COMMANDS = [
  { id: 'home', title: 'Inicio', category: 'Navegación', url: 'index.html', icon: '🏠' },
  { id: 'civs', title: 'Civilizaciones', category: 'Guías', url: 'pages/civilizaciones.html', icon: '🏛️' },
  { id: 'coms', title: 'Comandantes', category: 'Guías', url: 'pages/comandantes.html', icon: '⚔️' },
  { id: 'kvk', title: 'Manual KvK', category: 'Guías', url: 'pages/kvk.html', icon: '🎖️' },
  { id: 'sim', title: 'Simulador de Talentos', category: 'Herramientas', url: 'pages/talent-builder.html', icon: '🏗️' },
  { id: 'war', title: 'War Tools (MGE & Clock)', category: 'Herramientas', url: 'pages/war-tools.html', icon: '🎖️' },
  { id: 'map', title: 'Mapa de Guerra', category: 'Herramientas', url: 'pages/war-map.html', icon: '🗺️' }
];

function fixUrl(url) {
  const isRoot = !window.location.pathname.includes('/pages/');
  if (isRoot) return url;

  // Si estamos en /pages/
  if (url.startsWith('pages/')) {
    return url.replace('pages/', '');
  }
  if (url === 'index.html') {
    return '../index.html';
  }
  if (url.startsWith('index.html#')) {
    return '../' + url;
  }
  return url;
}

function initCommandPalette() {
  const overlay = document.getElementById('commandPalette');
  const input = document.getElementById('commandInput');
  const resultsContainer = document.getElementById('commandResults');
  let selectedIndex = 0;
  let filteredCommands = [];

  if (!overlay || !input) return;

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      overlay.classList.add('active');
      input.focus();
    }
    if (e.key === 'Escape') closePalette();
  });

  function closePalette() {
    overlay.classList.remove('active');
    input.value = '';
    renderResults([]);
  }

  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    filteredCommands = query === '' ? QUICK_COMMANDS : QUICK_COMMANDS.filter(cmd =>
      cmd.title.toLowerCase().includes(query) || cmd.category.toLowerCase().includes(query)
    );
    selectedIndex = 0;
    renderResults(filteredCommands);
  });

  input.addEventListener('keydown', (e) => {
    const items = resultsContainer.querySelectorAll('.command-result-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % items.length;
      updateSelection(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + items.length) % items.length;
      updateSelection(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (items[selectedIndex]) items[selectedIndex].click();
    }
  });

  function renderResults(commands) {
    resultsContainer.innerHTML = commands.map((cmd, idx) => `
      <div class="command-result-item ${idx === 0 ? 'selected' : ''}" data-url="${fixUrl(cmd.url)}">
        <div class="command-result-icon">${cmd.icon}</div>
        <div class="command-result-details">
          <span class="command-result-title">${cmd.title}</span>
          <span class="command-result-category">${cmd.category}</span>
        </div>
      </div>
    `).join('');

    resultsContainer.querySelectorAll('.command-result-item').forEach(item => {
      item.addEventListener('click', () => {
        window.location.href = item.getAttribute('data-url');
      });
    });
  }

  function updateSelection(items) {
    items.forEach((item, idx) => {
      item.classList.toggle('selected', idx === selectedIndex);
      if (idx === selectedIndex) item.scrollIntoView({ block: 'nearest' });
    });
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closePalette();
  });
}

// ===================================
// EFECTO PARALAJE PREMIUM
// ===================================

function initParallax() {
  const cards = document.querySelectorAll(".parallax-card");
  cards.forEach(card => {
    if (!card.querySelector(".parallax-shine")) {
      const shine = document.createElement("div");
      shine.className = "parallax-shine";
      card.appendChild(shine);
    }

    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (centerY - y) / 10;
      const rotateY = (x - centerX) / 10;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      const shine = card.querySelector(".parallax-shine");
      if (shine) {
        const moveX = (x / rect.width) * 100;
        const moveY = (y / rect.height) * 100;
        shine.style.background = `radial-gradient(circle at ${moveX}% ${moveY}%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%)`;
      }
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0)";
      const shine = card.querySelector(".parallax-shine");
      if (shine) shine.style.opacity = "0";
    });

    card.addEventListener("mouseenter", () => {
      const shine = card.querySelector(".parallax-shine");
      if (shine) shine.style.opacity = "1";
    });
  });
}

// ===================================
// INTELIGENCIA DE PAIRINGS (IA)
// ===================================

const META_PAIRINGS = [
  { pId: 'guan-yu', pName: 'Guan Yu', sId: 'scipio-p', sName: 'Scipio Prime', type: 'Infantry', desc: 'El terror de campo abierto. Daño masivo en área y silencio.' },
  { pId: 'alexander', pName: 'Alex', sId: 'liu-bei', sName: 'Liu Bei', type: 'Infantry', desc: 'Combinación clásica de escudo y daño sostenido.' },
  { pId: 'nevsky', pName: 'Nevsky', sId: 'joan-p', sName: 'Juana Prime', type: 'Cavalry', desc: 'Máxima explosividad y daño en área para caballería.' },
  { pId: 'boudica-p', pName: 'Boudica P', sId: 'zhuge', sName: 'Zhuge Liang', type: 'Archers', desc: 'El techo de daño actual del juego. DPS insuperable.' },
  { pId: 'sun-tzu', pName: 'Sun Tzu', sId: 'aethel', sName: 'Aethelflaed', type: 'Mixed', desc: 'F2P Meta. Generación de furia y AOE masivo.' }
];

function renderIAPairings() {
  const container = document.getElementById('iaSuggestionsContainer');
  if (!container) return;

  if (expertiseList.length < 2) {
    container.innerHTML = `
      <div class="ia-pairings-container">
        <p style="text-align: center; color: var(--text-dim);">
          Marca al menos <strong>2 comandantes</strong> como Expertise para desbloquear sugerencias tácticas.
        </p>
      </div>
    `;
    return;
  }

  const matches = META_PAIRINGS.filter(pair =>
    expertiseList.some(exp => exp.id === pair.pId) &&
    expertiseList.some(exp => exp.id === pair.sId)
  );

  const partials = META_PAIRINGS.filter(pair =>
    (expertiseList.some(exp => exp.id === pair.pId) || expertiseList.some(exp => exp.id === pair.sId)) &&
    !matches.includes(pair)
  );

  const finalPairings = [...matches, ...partials.slice(0, 2)];

  const gridHtml = finalPairings.map(pair => {
    const isFull = matches.includes(pair);
    return `
      <div class="suggested-pair parallax-card">
        <div class="parallax-content">
          <div class="pair-header">
            <div class="pair-commander">
              <div class="pair-avatar-placeholder">🛡️</div>
              <span style="font-size: 0.8rem;">${pair.pName}</span>
            </div>
            <div class="pair-plus">+</div>
            <div class="pair-commander">
              <div class="pair-avatar-placeholder">⚔️</div>
              <span style="font-size: 0.8rem;">${pair.sName}</span>
            </div>
          </div>
          <div class="pair-info">
            <span class="pair-badge ${isFull ? 'badge-meta' : 'badge-war'}">
              ${isFull ? 'Legión Lista' : 'Sinergia Parcial'}
            </span>
            <h4>${pair.pName} + ${pair.sName}</h4>
            <p>${pair.desc}</p>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="ia-pairings-container">
      <h3>🤖 Sugerencia de Legiones IA</h3>
      <p style="font-size: 0.8rem; color: var(--text-dim);">Basado en tus comandantes actuales con Expertise:</p>
      <div class="pairings-grid">
        ${gridHtml}
      </div>
    </div>
  `;
}

// ===================================
// GENERADOR DE PERFIL MILITAR
// ===================================

function generateProfileCard() {
  const modal = document.getElementById('profileCardModal');
  const overlay = document.getElementById('shareOverlay');
  const countEl = document.getElementById('cardExpCount');
  const listEl = document.getElementById('cardExpList');

  if (!modal || !overlay) return;

  countEl.innerText = expertiseList.length;
  listEl.innerHTML = expertiseList.slice(0, 5).map(item => `
    <div class="card-exp-icon" title="${item.name}">🏅</div>
  `).join("");

  if (expertiseList.length > 5) {
    listEl.innerHTML += `<div class="card-exp-icon">+${expertiseList.length - 5}</div>`;
  }

  modal.classList.add("active");
  overlay.classList.add("active");
  if (soundEnabled) playTacticalSound("click");
}

document.getElementById("closeProfileCard")?.addEventListener("click", () => {
  document.getElementById("profileCardModal").classList.remove("active");
  document.getElementById("shareOverlay").classList.remove("active");
});

document.getElementById("shareOverlay")?.addEventListener("click", () => {
  document.getElementById("profileCardModal").classList.remove("active");
  document.getElementById("shareOverlay").classList.remove("active");
});

document.getElementById("copyShareLink")?.addEventListener("click", () => {
  const shareData = {
    exp: expertiseList.map(i => i.id),
    fav: favorites.map(f => f.id)
  };
  const b64 = btoa(JSON.stringify(shareData));
  const url = window.location.origin + window.location.pathname + "?profile=" + b64;

  navigator.clipboard.writeText(url).then(() => {
    showNotification("🔗 ¡Enlace de perfil copiado al portapapeles!");
  });
});

window.addEventListener("load", () => {
  const params = new URLSearchParams(window.location.search);
  const profileData = params.get("profile");

  if (profileData) {
    try {
      const data = JSON.parse(atob(profileData));
      showNotification("📂 Cargando perfil compartido...");
      console.log("Perfil compartido detectado:", data);
    } catch (e) {
      console.error("Error al cargar perfil:", e);
    }
  }
});

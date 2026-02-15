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
  const particlesContainer = document.querySelector('.particles');

  if (!particlesContainer) return;

  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    createParticle(particlesContainer);
  }
}

function createParticle(container) {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  // Posición aleatoria
  particle.style.left = Math.random() * 100 + '%';

  // Retraso aleatorio
  particle.style.animationDelay = Math.random() * 20 + 's';

  // Duración aleatoria
  particle.style.animationDuration = (15 + Math.random() * 10) + 's';

  container.appendChild(particle);
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
        <a href="${result.url}" class="search-result-item">
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

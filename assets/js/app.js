class App {
  constructor() {
    this.loader = new ComponentLoader();
    this.initialized = false;
  }

  async init() {
    if (this.initialized) return;

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      await new Promise(resolve => {
        document.addEventListener('DOMContentLoaded', resolve);
      });
    }

    // Determine which route to initialize based on current path
    const path = window.location.pathname;
    const route = this.getRouteFromPath(path);
    
    if (ROUTES[route]) {
      await this.initializeRoute(ROUTES[route]);
    }
    
    this.initialized = true;
  }

  async initializeRoute(route) {
    console.log('Initializing route:', route);
    
    // Load components
    if (route.components) {
      await this.loader.loadMultipleComponents(route.components);
    }

    // Load scripts
    if (route.scripts) {
      await this.loadScripts(route.scripts);
    }

    // Initialize effects
    if (route.effects) {
      setTimeout(() => {
        this.initializeEffects(route.effects);
      }, 200);
    }
  }

  async loadScripts(scripts) {
    const promises = scripts.map(src => {
      return new Promise((resolve, reject) => {
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    });
    
    return Promise.all(promises);
  }

  initializeEffects(effects) {
    effects.forEach(effect => {
      console.log(`Attempting to initialize effect: ${effect}`);
      if (typeof window[effect] === 'function') {
        try {
          window[effect]();
          console.log(`Successfully initialized effect: ${effect}`);
        } catch (error) {
          console.error(`Error initializing effect ${effect}:`, error);
        }
      } else {
        console.warn(`Effect function "${effect}" not found`);
      }
    });
  }

  getRouteFromPath(path) {
    if (path === '/' || path.includes('index.html')) return 'home';
    if (path.includes('about')) return 'about';
    if (path.includes('resume')) return 'resume';
    if (path.includes('crash')) return 'crash';
    return 'home';
  }
}

// Initialize app when scripts load
const app = new App();
app.init();

// Export for global access
window.App = app;

class Router {
  constructor() {
    this.routes = new Map();
    this.loader = new ComponentLoader();
    this.currentRoute = null;
  }

  addRoute(path, config) {
    this.routes.set(path, config);
  }

  async navigate(path) {
    const route = this.routes.get(path);
    if (!route) {
      console.warn(`Route "${path}" not found`);
      return;
    }

    this.currentRoute = path;
    
    // Update page title
    if (route.title) {
      document.title = route.title;
    }

    // Load components first
    if (route.components) {
      await this.loader.loadMultipleComponents(route.components);
    }

    // Load page-specific scripts
    if (route.scripts) {
      await this.loadScripts(route.scripts);
    }

    // Initialize page-specific effects after a short delay to ensure scripts are loaded
    if (route.effects) {
      setTimeout(() => {
        this.initializeEffects(route.effects);
      }, 100);
    }
  }

  loadScripts(scripts) {
    const promises = scripts.map(src => {
      return new Promise((resolve, reject) => {
        // Remove existing script if present
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) {
          existingScript.remove();
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

  init() {
    // Handle initial load
    const path = window.location.pathname;
    const route = this.getRouteFromPath(path);
    this.navigate(route);

    // Handle navigation
    window.addEventListener('popstate', () => {
      const currentPath = window.location.pathname;
      const currentRoute = this.getRouteFromPath(currentPath);
      this.navigate(currentRoute);
    });
  }

  getRouteFromPath(path) {
    if (path === '/' || path === '/index.html') return 'home';
    if (path.includes('about')) return 'about';
    if (path.includes('resume')) return 'resume';
    if (path.includes('crash')) return 'crash';
    return 'home';
  }
}

// Export for use in other modules
window.Router = Router;

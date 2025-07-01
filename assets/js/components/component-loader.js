class ComponentLoader {
  constructor() {
    this.cache = new Map();
  }

  async loadComponent(url, containerId) {
    try {
      let html;
      
      if (this.cache.has(url)) {
        html = this.cache.get(url);
      } else {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to load component: ${response.status}`);
        }
        html = await response.text();
        this.cache.set(url, html);
      }
      
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = html;
      } else {
        console.warn(`Container with id "${containerId}" not found`);
      }
    } catch (error) {
      console.error('Error loading component:', error);
    }
  }

  async loadMultipleComponents(components) {
    const promises = components.map(({ url, containerId }) => 
      this.loadComponent(url, containerId)
    );
    await Promise.all(promises);
  }

  clearCache() {
    this.cache.clear();
  }
}

// Export for use in other modules
window.ComponentLoader = ComponentLoader;

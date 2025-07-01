const ROUTES = {
  home: {
    title: 'CM - Main',
    components: [
      { url: './components/navbar.html', containerId: 'navbar-container' },
      { url: './components/home.html', containerId: 'home-container' },
      { url: './components/footer.html', containerId: 'footer-container' }
    ],
    scripts: [
      './assets/js/effects/typing.js',
      './assets/js/effects/easter-egg.js',
      './assets/js/effects/mouse-trail.js'
    ],
    effects: ['initTyping', 'initEasterEgg', 'initMouseTrail']
  },
  
  about: {
    title: 'CM - About',
    components: [
      { url: '../components/navbar-pages.html', containerId: 'navbar-container' },
      { url: '../components/about-bubbles.html', containerId: 'about-container' },
      { url: '../components/footer.html', containerId: 'footer-container' }
    ],
    scripts: [
      '../assets/js/effects/mouse-trail.js',
      '../assets/js/effects/bubbles.js'
    ],
    effects: ['initMouseTrail', 'initBubbles']
  },
  
  resume: {
    title: 'CM - Resume',
    components: [
      { url: '../components/navbar-pages.html', containerId: 'navbar-container' },
      { url: '../components/resume.html', containerId: 'resume-container' },
      { url: '../components/footer.html', containerId: 'footer-container' }
    ],
    scripts: [
      '../assets/js/effects/mouse-trail.js'
    ],
    effects: ['initMouseTrail']
  },
  
  crash: {
    title: 'CM - System Crash',
    components: [
      { url: '../components/navbar-pages.html', containerId: 'navbar-container' },
      { url: '../components/footer.html', containerId: 'footer-container' }
    ],
    scripts: [
      '../assets/js/effects/crash.js'
    ],
    effects: ['initCrash']
  }
};

// Export for use in other modules
window.ROUTES = ROUTES;

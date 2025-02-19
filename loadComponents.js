function loadComponent(url, elementId) {
  fetch(url)
      .then(response => response.text())
      .then(data => {
          document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error('Error loading component:', error));
}

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('./components/navbar.html', 'navbar-container');
  loadComponent('./components/home.html', 'home-container');
  loadComponent('./components/footer.html', 'footer-container');
  loadComponent('./components/resume.html', 'resume-container');
  loadComponent('./about.html', 'aboutBubbles-container');
});
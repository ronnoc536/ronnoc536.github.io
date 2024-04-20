// Add event listeners to bubbles for hover and click events
document.querySelectorAll('.bubble').forEach(bubble => {
  bubble.addEventListener('mouseenter', function() {
      this.classList.add('flip');
  });

  bubble.addEventListener('mouseleave', function() {
      this.classList.remove('flip');
  });

  // If you want to toggle flip on click instead of hover
  /*
  bubble.addEventListener('click', function() {
      this.classList.toggle('flip');
  });
  */
});

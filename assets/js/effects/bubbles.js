function initBubbles() {
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
    console.log('Bubble event listeners added');
  });
}

// Export for modular use
window.initBubbles = initBubbles;

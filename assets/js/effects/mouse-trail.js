function initMouseTrail() {
    var trail = document.querySelector(".trail");
    if (!trail) return;
    
    var dots = [];

    // Create dots
    for (var i = 0; i < 50; i++) { // Number of dots
        var dot = document.createElement("div");
        dot.className = "dot";
        trail.appendChild(dot);
        dots.push(dot);
    }

    // Move dots with mouse movement
    document.addEventListener("mousemove", function(event) {
        var mouseX = event.clientX;
        var mouseY = event.clientY;

        dots.forEach(function(dot, index) {
            var delay = index * 15; // Delay for each dot
            setTimeout(function() {
                dot.style.left = mouseX + "px";
                dot.style.top = mouseY + "px";
            }, delay);
        });
    });
}

// Export for modular use
window.initMouseTrail = initMouseTrail;


function typeWriter(elementId, text, speed) {
    let i = 0;
    const elem = document.getElementById(elementId);
    if (!elem) return;
    
    elem.innerHTML = "";  // Clear the content
    function typing() {
        if (i < text.length) {
            elem.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Initialize the typing effect
function initTyping() {
    const bioElement = document.getElementById('bio');
    if (bioElement && bioElement.innerText) {
        const text = bioElement.innerText;
        typeWriter('bio', text, 10); // Adjust speed as needed
    }
}

// Export for modular use
window.initTyping = initTyping;


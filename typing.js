
function typeWriter(elementId, text, speed) {
    let i = 0;
    const elem = document.getElementById(elementId);
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

// Initialize the typing effect on window load
window.onload = function() {
    const text = document.getElementById('bio').innerText;
    typeWriter('bio', text, 10); // Adjust speed as needed
};


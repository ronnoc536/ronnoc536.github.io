// Define the secret key combination: Control (Ctrl), Left Shift, and P
const secretKeys = ['ControlLeft', 'ShiftLeft', 'KeyP'];

// Index to keep track of the current position in the secretKeys array
let keyIndex = 0;

// Function to handle keydown event
function handleKeyDown(event) {
    // Check if the pressed key matches the current key in the secretKeys array
    if (event.code === secretKeys[keyIndex]) {
        // Move to the next key in the secretKeys array
        keyIndex++;
        
        // If all keys have been pressed in the correct order
        if (keyIndex === secretKeys.length) {
            // Reset the keyIndex
            keyIndex = 0;
            
            // Redirect to the secret link
            window.location.href = 'https://youtu.be/dQw4w9WgXcQ?si=QpFW7F05W1rJGVI4';
        }
    } else {
        // Reset the keyIndex if the wrong key is pressed
        keyIndex = 0;
    }
}

// Add event listener for keydown event
document.addEventListener('keydown', handleKeyDown);

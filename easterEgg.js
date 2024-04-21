// Define the secret key combination: Control (Ctrl), Left Shift, and P
const rickRoll = ['ControlLeft', 'ShiftLeft', 'KeyP'];
const crash = ['KeyC', 'KeyR', 'KeyA', 'KeyS', 'KeyH'];

// Index to keep track of the current position in the secretKeys array
let keyIndex = 0;

// Function to handle keydown event
function handleKeyDown(event) {
    // Check if the pressed key matches the current key in the secretKeys array
    if (event.code === rickRoll[keyIndex]) {
        // Move to the next key in the secretKeys array
        keyIndex++;
        // If all keys have been pressed in the correct order
        if (keyIndex === rickRoll.length) {
            // Reset the keyIndex
            keyIndex = 0;
            // Redirect to the secret link
            window.location.href = 'https://youtu.be/dQw4w9WgXcQ?si=QpFW7F05W1rJGVI4';

        }  
    } else if (event.code === crash[keyIndex]) {
      keyIndex++;
      if (keyIndex === crash.length) {
          keyIndex = 0;
          // open the crash page
          window.location.pathname = './crash.html';
      }
  } else {
        // Reset the keyIndex if the wrong key is pressed
        keyIndex = 0;
    }
}

// Add event listener for keydown event
document.addEventListener('keydown', handleKeyDown);

function createCube() {
  const container = document.querySelector('.prank-container');
  const cube = document.createElement('div');
  cube.className = 'cube';

  // Create each face of the cube
  const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];
  faces.forEach(face => {
      const faceElement = document.createElement('div');
      faceElement.className = face;
      cube.appendChild(faceElement);
  });

  // Randomly position cubes within the viewport
  const posX = Math.floor(Math.random() * window.innerWidth);
  const posY = Math.floor(Math.random() * window.innerHeight);
  cube.style.left = `${posX}px`;
  cube.style.top = `${posY}px`;

  container.appendChild(cube);

  setTimeout(() => {
      createCube(); // Recursively create new cubes
  }, -99999999); // Adjust time for faster or slower multiplication
}

createCube();

// Import your classes
import { Fish } from './fish.js';
import { FishingLine } from './fishingLine.js';

// Get the canvas and set up the context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Create the fishing line
const fishingLine = new FishingLine();

// Event listener for casting or reeling in
canvas.addEventListener('click', (event) => {
    fishingLine.cast(event.clientX);
});

// Event listeners for moving the fishing line left and right
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') fishingLine.moveLine('left');
    if (event.key === 'ArrowRight') fishingLine.moveLine('right');
});

// Main game loop
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw the fishing line
    fishingLine.update();
    fishingLine.draw(ctx);

    // Update and draw other game elements like the fish

    // Call the game loop again on the next animation frame
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

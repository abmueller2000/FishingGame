// Define your canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Create fishes and fishing line
const fishes = Array(3).fill().map(() => new Fish());
const fishingLine = new FishingLine();

// Event listeners
let isCasting = false;

canvas.addEventListener('click', () => {
  if (!isCasting) {
    fishingLine.cast();
    isCasting = true;
  } else {
    fishingLine.reelIn();
    isCasting = false;
  }
});

document.addEventListener('keydown', (e) => {
  if (isCasting) {
    if (e.key === 'ArrowLeft') {
      fishingLine.x -= 5; // You can change this value to move it more or less
    } else if (e.key === 'ArrowRight') {
      fishingLine.x += 5; // You can change this value to move it more or less
    }
  }
});

// Game loop
function gameLoop() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw fishes
  fishes.forEach(fish => {
    fish.update();
    fish.draw(ctx);
  });

  // Update and draw the fishing line
  fishingLine.update();
  fishingLine.draw(ctx);

  // Check for catches
  checkCatches();

  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

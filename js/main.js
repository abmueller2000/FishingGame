const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let fishingLine = new FishingLine();
let isMouseDown = false;

// Listening for the first click to cast
canvas.addEventListener('mousedown', (e) => {
  if (!isMouseDown) {
    fishingLine.cast(e.clientX);
    isMouseDown = true;
  } else {
    fishingLine.reelIn();
    isMouseDown = false;
  }
});

// Listening for arrow keys to move the line left or right
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    fishingLine.x -= 5;
  } else if (e.key === 'ArrowRight') {
    fishingLine.x += 5;
  }
});

// Main game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fishingLine.update();
  fishingLine.draw(ctx);

  // Add other game elements here like drawing the fish

  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

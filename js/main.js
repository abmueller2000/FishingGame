// Global variables
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const fishes = [];
const fishingLine = new FishingLine();
let score = 0;

// Create fishes
for (let i = 0; i < 3; i++) {
    fishes.push(new Fish());
}

// Event listeners
canvas.addEventListener('click', (e) => {
    if (!fishingLine.isCasting) {
        fishingLine.cast(e.clientX, e.clientY);
        fishingLine.isCasting = true;
    } else {
        fishingLine.reelIn();
        fishingLine.isCasting = false;
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        fishingLine.x -= 5;
    } else if (e.key === 'ArrowRight') {
        fishingLine.x += 5;
    }
});

// Main game loop
function gameLoop() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw and update fishes
    fishes.forEach(fish => {
        fish.draw(ctx);
        fish.update();
    });

    // Draw and update fishing line
    fishingLine.draw(ctx);
    fishingLine.update();

    // Check for catches
    checkCatches();

    // Draw score
    ctx.fillStyle = '#000';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, 10, 30);

    // Repeat
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

// Function to check for catches
function checkCatches() {
    fishes.forEach((fish, index) => {
        if (fishingLine.isCasting && collisionWithLine(fish)) {
            updateScore(10);
            fishes.splice(index, 1);
            fishes.push(new Fish());
        }
    });
}

// Function to update the score
function updateScore(points) {
    score += points;
}

// Function to check for collisions with fishing line
function collisionWithLine(fish) {
    let lineX = fishingLine.x;
    let lineY = fishingLine.y;
    let lineLength = fishingLine.length;

    if (fish.x < lineX + 5 && fish.x + 50 > lineX &&
        fish.y < lineY + lineLength && fish.y + 20 > lineY) {
        return true;
    }
    return false;
}

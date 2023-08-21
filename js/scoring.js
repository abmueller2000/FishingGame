// Number of fish in the game
const numberOfFish = 5;

// Initialize the fishes array
const fishes = [];
for (let i = 0; i < numberOfFish; i++) {
    fishes.push(new Fish());
}

// Keep track of the player's score
let score = 0;

// Update the player's score
function updateScore(points) {
    score += points;
}

// Check for collisions between the fishing line and the fish
function checkCatches() {
    for (let index = fishes.length - 1; index >= 0; index--) {
        let fish = fishes[index];
        if (FishingLine.isCasting && collisionWithLine(fish)) {
            updateScore(10); // Add points for a catch
            fishes.splice(index, 1); // Remove the caught fish
            fishes.push(new Fish()); // Add a new fish
        }
    }
}

// Logic for checking if a fish has collided with the fishing line
function collisionWithLine(fish) {
    // Adjust these values to fit the actual sizes and positions of your fishing line and fish
    var lineX = FishingLine.x;
    var lineY = FishingLine.y;
    var lineLength = FishingLine.length;

    if (fish.x < lineX + 5 && fish.x + 50 > lineX && 
        fish.y < lineY + lineLength && fish.y + 20 > lineY) {
        return true; // There's a collision!
    }
    return false;
}

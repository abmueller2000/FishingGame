// Update the player's score
function updateScore(points) {
    score += points;
}

// Check for collisions between the fishing line and the fish
function checkCatches() {
    fishes.forEach((fish, index) => {
        if (fishingLine.isCasting && collisionWithLine(fish)) {
            updateScore(10); // Add points for a catch
            fishes.splice(index, 1); // Remove the caught fish
            fishes.push(new Fish()); // Add a new fish
        }
    });
}

// Logic for checking if a fish has collided with the fishing line
function collisionWithLine(fish) {
    // Adjust these values to fit the actual sizes and positions of your fishing line and fish
    var lineX = fishingLine.x;
    var lineY = fishingLine.y;
    var lineLength = fishingLine.length;

    if (fish.x < lineX + 5 && fish.x + 50 > lineX && 
        fish.y < lineY + lineLength && fish.y + 20 > lineY) {
        return true; // There's a collision!
    }
    return false;
}

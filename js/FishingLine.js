class FishingLine {
    constructor() {
        this.x = 400; // Starting X
        this.y = 0; // Starting Y
        this.length = 200; // Length of the line
        this.isCasting = false;
        this.velocityY = 2; // Downward velocity
    }

    cast(clientX) {
        if (!this.isCasting) {
            this.isCasting = true;
            this.x = clientX; // Update the X coordinate based on where the player clicked
        } else {
            this.reelIn(); // Reel in on the second click
        }
    }

    reelIn() {
        this.isCasting = false;
        this.y = 0; // Reset the Y coordinate
    }

    moveLine(direction) {
        // Move the line left or right
        const speed = 5;
        if (direction === "left") this.x -= speed;
        if (direction === "right") this.x += speed;
    }

    draw(ctx) {
        ctx.strokeStyle = "#000";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.stroke();
    }

    update() {
        if (this.isCasting) {
            this.y += this.velocityY; // Move down at a constant velocity
        }
    }
}

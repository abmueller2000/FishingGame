class Fish {
    constructor() {
        this.x = Math.random() * 800; // Random starting X
        this.y = Math.random() * 600 + 200; // Random starting Y (below the water surface)
        this.speed = Math.random() * 5 + 1; // Random speed
    }

    draw(ctx) {
        // Draw the fish - you might want to use an image here
        ctx.fillStyle = "orange";
        ctx.fillRect(this.x, this.y, 50, 20);
    }

    update() {
        // Update the fish position
        this.x += this.speed;
        if (this.x > 800) this.x = -50; // Wrap around the screen
    }
}

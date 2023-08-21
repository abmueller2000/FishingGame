class Fish {
    constructor() {
        this.x = Math.random() * 800; // Random starting X
        this.y = Math.random() * 600 + 200; // Random starting Y (below the water surface)
        this.speed = Math.random() * 5 + 1; // Random speed
        this.image = new Image();
        this.image.src = 'https://img.freepik.com/premium-vector/tuna-fish-icon-pixel-art-illustration-8-bit_749131-8.jpg?w=360'; // URL of the fish image
    }

    draw(ctx) {
        // Draw the fish using the image
        ctx.drawImage(this.image, this.x, this.y, 50, 20);
    }

    update() {
        // Update the fish position
        this.x += this.speed;
        if (this.x > 800) this.x = -50; // Wrap around the screen
    }
}

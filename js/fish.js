class Fish {
    constructor() {
        this.x = Math.random() * 800; // Random starting X
        this.y = Math.random() * 600 + 200; // Random starting Y (below the water surface)
        this.speed = Math.random() * 5 + 1; // Random speed
        this.image = new Image();
        
        // Array of fish images
        const fishImages = ['images/fish1.png', 'images/fish2.png', 'images/fish3.png'];

        // Randomly pick one of the images
        this.image.src = fishImages[Math.floor(Math.random() * fishImages.length)];
    }

    draw(ctx) {
        // Draw the fish using the randomly picked image
        ctx.drawImage(this.image, this.x, this.y, 50, 20);
    }

    update() {
        // Update the fish position
        this.x += this.speed;
        if (this.x > 800) this.x = -50; // Wrap around the screen
    }
}

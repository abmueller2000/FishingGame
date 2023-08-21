class FishingLine {
    constructor() {
        this.x = 400; // Starting X
        this.y = 0; // Starting Y
        this.length = 200; // Length of the line
        this.isCasting = false;
        this.velocity = 2; // Downward velocity of the line
    }

    cast() {
        // Logic for casting
        this.isCasting = true;
    }

    reelIn() {
        // Logic for reeling in
        this.isCasting = false;
    }

    draw(ctx) {
        // Draw the fishing line
        ctx.strokeStyle = "#000";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.stroke();
    }

    update() {
        // Move the fishing line down when casting
        if (this.isCasting) {
            this.y += this.velocity;
            if (this.y + this.length > 600) {
                this.isCasting = false; // Stop when it reaches the bottom
            }
        } else {
            this.y = 0; // Reset the position when not casting
        }
    }
}

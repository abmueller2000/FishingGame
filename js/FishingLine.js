class FishingLine {
    constructor() {
        this.x = 400; // Starting X
        this.y = 0; // Starting Y
        this.length = 200; // Length of the line
        this.isCasting = false; // Is line casting or not
        this.speed = 5; // Downward velocity of the line
    }

    cast(clientX) {
        // Logic for casting
        this.isCasting = true;
        this.x = clientX; // Set x to the mouse click location
    }

    reelIn() {
        // Logic for reeling in
        this.isCasting = false;
        this.y = 0; // Reset the y position
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
        // If casting, move the line down
        if (this.isCasting) {
            this.y += this.speed;

            // You can add conditions here if you want the line to stop at a certain point or have different behavior
        }
    }
}

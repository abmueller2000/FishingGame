class FishingLine {
    constructor() {
        this.x = 400; // Starting X
        this.y = 0; // Starting Y
        this.length = 200; // Length of the line
        this.isCasting = false;
    }

    cast(clientX, clientY) {
        // Logic for casting
        this.isCasting = true;
        // You might want more complex logic here, such as adjusting the line's length based on the mouse position
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
        // Update the fishing line position or anything else that changes over time
    }
}

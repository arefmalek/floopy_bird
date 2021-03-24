var bird;

function gamestart() {
    bird = component(10,10, "red", 10, 120);
    myGameArea.start();
}

// this is the canvas on screen
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        // this part will initialize the chart
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}


// this is the core thing for all objects generated in the game
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
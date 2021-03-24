var bird;

function gamestart() {
    bird = new component(10,10, "red", 10, 120);
    myGameArea.start();
    myGameArea.canvas.onclick = function() {bird.yvel = -2;};
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
        console.log("check");
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        // make the thing blue
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = "blue";
        this.context.fillRect(0,0, this.canvas.width, this.canvas.height);
    }
}

// this is the core thing for all objects generated in the game
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.gravity = 0.05;
    this.yvel = 0
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        this.yvel += this.gravity;

        this.y += this.yvel;
    }
}


function updateGameArea() {
    myGameArea.clear();
    bird.update();
}
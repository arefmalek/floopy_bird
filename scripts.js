var bird;
var pipe1;
var pipe2;

// TODO. make the pipes have randomized gaps
// 3. add collision mechanics 
function gamestart() {
    bird = new flappy(10,10, "red");
    pipe1 = new pipe(20, 100, "green", 200);
    pipe2 = new pipe(20, 100, "green", 400);
    myGameArea.start();
    myGameArea.canvas.onclick = function() {bird.yvel = -2;};
}

// this is the canvas on screen
let myGameArea = {
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

class flappy {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = 10;
        this.y = 120;
        this.gravity = 0.05;
        this.yvel = 0
    }

    update() {
        let ctx = myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        this.yvel += this.gravity;

        this.y += this.yvel;        
    }
}

class pipe {
    constructor(width, height, color, x) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        
        this.xvel = -3;

        this.y = 0;
        this.gap = 25;

        this.shift = Math.floor((Math.random() * 100) + 1);
    }

    update() {
        let pipeshifter = 50;
        
        let ctx = myGameArea.context;
        ctx.fillStyle = this.color;

        // botom half of the pipe
        ctx.fillRect(this.x, (ctx.canvas.height / 2 - this.shift) + pipeshifter + this.gap, this.width, ctx.canvas.height); 

        ctx.fillStyle = this.color;
        // top half of the pipe
        ctx.fillRect(this.x, 0, this.width, (ctx.canvas.height / 2 - this.shift) + pipeshifter - this.gap); 

        this.x += this.xvel;    
        
        if (this.x + this.width < 0) {
            this.x = 500; // hardcoded but it should teleport back over to other side
            this.shift = Math.floor((Math.random() * 100) + 1);
        }
    }
}


function updateGameArea() {
    myGameArea.clear();
    bird.update();
    pipe1.update();
    pipe2.update();
}
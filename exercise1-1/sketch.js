class Star{
    x;
    y;
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    drawStar(){
        fill(255, 234, 0);
        noStroke();
        triangle(this.x, this.y - 50, this.x - 20, this.y, this.x + 20, this.y);
        triangle(this.x - 50, this.y - 20, this.x, this.y - 20, this.x, this.y + 10);
        triangle(this.x + 50, this.y - 20, this.x, this.y - 20, this.x, this.y + 10);
        triangle(this.x - 20, this.y - 5, this.x, this.y + 10, this.x - 35, this.y + 30);
        triangle(this.x, this.y + 10, this.x + 20, this.y - 5, this.x + 35, this.y + 30);
}    

    moveStar(speedX){
    this.x += speedX;
}
    fallStar(speedY){
     this.y += speedY;
}
}

 let FallStars = [new Star(50,50,1,1)];
 let DriftStars = [new Star(20,200,1,1)];
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    for (let i=0; i<FallStars.length; i++){
        FallStars[i].drawStar();
        FallStars[i].fallStar(1);
    }
    for (let i=0; i<DriftStars.length; i++){
        DriftStars[i].drawStar();
        DriftStars[i].moveStar(1);
    }
}

/**
 * Draws a star at the given coordinates.
 * @param {number} x 
 * @param {number} y 
 */


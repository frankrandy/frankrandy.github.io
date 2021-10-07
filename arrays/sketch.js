// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let ballArray = [i, j,];


function setup() {
  createCanvas(windowWidth, windowHeight);
  let myBall = new Ball(width/2, height/2);
  ballArray.push(myBall);
}

function draw() {
  background(220);

  for (let i=0; i<ballArray.length; i++){
    for (let j=0; j<ballArray.length; j++) {
      ballArray[i].checkCollisionWith(ballArray[j]);

    }

    ballArray[i].move();
    ballArray[i].display();
  
  }
}

function mousePressed() {
  let myBall = new Ball(mouseX, mouseY);
  ballArray.push(myBall);

}


class Ball {
  move() {
    this.x += this.dx;
    this.y += this.dy;


  }


checkCollisionWith(otherBall){
    let distanceBetween = (dist(this.x, this.y, otherBall.x, otherBall.y));
    let radiiSum = this.radius + otherBall.radius;
    if (distanceBetween < radiiSum) {
    //we hit. 
    this.theColor = "red";
    otherBall.theColor = "red";
    }
  }
}




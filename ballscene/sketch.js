// Ballscene
// Roland RFD
// 9/20/2021

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(let index = 0; index < 3; index++) {
    spawnBall();
  }

  window.setInterval(spawnBall, 500);
}


function draw() {
  background(220);
  moveBall();
  displayBall();
}

function mousePressed() {
  spawnBall();
  ballArray[ballArray.length-1].x = mouseX;
  ballArray[ballArray.length-1].y = mouseY;
}

function spawnBall() {
  for (let index = 0; index < 10; index++) {
    let newBall = {
      x: random(width),
      y: random(height),
      radius: random(10,40),
      ballColor: color(random(255), random(255), random(255), random(255)),
      dx: random(5, 5),
      dy: random(5, 5),
    };
    ballArray.push(newBall);
  }
}

function moveBall(){
  for (let theBall of ballArray) {
    theBall.x += theBall.dx;
    theBall.y += theBall.dy;
    theBall.dx = random(-5, 5);
    theBall.dy = random(-5, 5);
    
  }
}

function displayBall() {
  for (let ball of ballArray) {
    noStroke();
    fill(ball.ballColor);
    circle(ball.x, ball.y, ball.radius *2);
  }
}
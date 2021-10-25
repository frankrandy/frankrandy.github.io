// fake clone of breakout/pong
// Roland RFD
// 9/20/2021
//
// Project Goal
// Make a game where you control a pong racket to bounce a ball back and forth towards breaking blocks,
// all while an AI enemy tries to break your blocks
// 
// Links ("its a good thing you got me to help you frank" -Frank's inner
//conscious, 2021)
//-keycode.info for key code values for javascript
//-http://www.jeffreythompson.org/collision-detection/ hit detection

let speed = 1;
let x = 20;
let y = 20;
let hit = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawPlayerRacket();

  hit = collideRectRect();

  print("colliding?", hit);
}

function drawPlayerRacket() {
  //draws the Racket, aka the rect that bounces the tennisBall to the right
  let width = 20;
  let height = 20;
  rect(x, y, height, width);
  
  
}

function keyJockey() {
  //I originally kept stealing this directly from the WASD demo until I
  //remembered it to the point where I could type it from memory.

  //key controls for exclusively drawPlayerRacket
  if (keyIsDown(87)){
    y -= speed;
  }
  if (keyIsDown(83)){
    y += speed;
  }
  if (keyIsDown(68)){
    x += speed;
  }

}



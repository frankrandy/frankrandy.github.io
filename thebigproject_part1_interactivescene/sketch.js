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
  tennisBall();

  hit = collideRectRect(x, y, width, height, tennisBall.x, tennisBall.y, tennisBall.width, tennisBall.height);

  print("colliding?", hit);
}

function drawPlayerRacket() {
  //draws the Racket, aka the rect that bounces the tennisBall to the right
  let width = 20;
  let height = 20;
  rect(x, y, height, width);
  keyJockey();
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

function tennisBall(){
  //its a tennis ball
  tennisBall.height = 20;
  tennisBall.width = 20;
  tennisBall.x = 20;
  tennisBall.y = 20;
  tennisBall.dx = 20;
  tennisBall.dy = 20;
  rect(tennisBall.x *2, tennisBall.y *2, tennisBall.height, tennisBall.width );

}

function tennisBallbounce(){
  while (hit === false){
    tennisBall.dy +1;
    while (hit === true) {
      tennisBall.dy- 1;
    }
  

  }
  //this function will make the tennisBall bounce randomly left
  //to right depending on if it has been hit
}
// fake clone of breakout/pong
// Roland RFD
// 9/20/2021
//
// Project Goal
// Make a game where you control a pong racket to bounce a ball back and forth towards breaking blocks,
// all while an AI enemy tries to break your blocks

let x, y, speed;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawPlayerRacket();
}

function drawPlayerRacket() {
  let width = 20;
  let height = 20;
  rect(random(), random(), height, width);
}

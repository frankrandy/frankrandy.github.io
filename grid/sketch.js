// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  let emptyArray = [];
  for (let i=0; i<10; i++) {
    emptyArray.push([]);
    for (let j=0; j<10; j++) {
      emptyArray[i].push(0);
    }
  }
}

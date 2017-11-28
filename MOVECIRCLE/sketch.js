//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//07_Simple Interaction

//Define variables for the RGB
let r = 255;
let g = 255;
let b = 255;

let speed=3;
let diameter=50;
let x1;
let y1;
let x2;
let y2;
function setup() {
  createCanvas(500, 500);
  x1= width/2;
  y1= height/2;
  x2= width/2;
  y2= height/2;
  background(200);
}

function draw() {
  x1 += random(-speed,speed);
  y1 += random(-speed,speed);
  x1 = constrain(x1,0,width/2);
  y1 = constrain(y1,0,height/2);
  x2 = -x1 + width;
  y2 = -y1 + height;

  //background(0);
  //When mouse is pressed, change randomly the RGB variables
  if (mouseIsPressed) {
    r = random(255);
    g = random(255);
    b = random(255);

  }
  //Display the ellipse
  fill(r, g, b,);
  ellipse(x1, y1, 50, 50);
  ellipse(x1, y2, 50, 50);
  ellipse(x2, y2, 50, 50);
  ellipse(x2, y1, 50, 50);
}

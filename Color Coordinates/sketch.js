
function setup() {
  createCanvas(200, 200);
  noStroke();
}

function draw() {
  background(0)
var mouse1=map(mouseX,0,width,0,255);
var mouse2=map(mouseY,0,width,0,255);
var mouse3=map(mouseX,0,width,255,0);
var mouse4=map(mouseY,0,width,255,0);


fill(255,0,0,mouse1);
rect(0,0,100,100);
fill(0,255,0,mouse2);
rect(100,0,100,100);
fill(255,255,0,mouse3);
rect(0,100,100,100);
fill(0,255,255,mouse4);
rect(100,100,100,100);
}

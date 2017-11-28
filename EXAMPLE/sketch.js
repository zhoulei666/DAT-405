//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//07_Simple Interaction

//Define variables for the RGB

let x;
let x2;

function setup() {
  createCanvas(400, 400);
  textSize(18);
}

function draw(){
    background(255);

    x=mouseX;
    x2=map(mouseX,0,400,0,200);

    fill(255,0,0);
    rect(x,0,10,200);
    rect(x2,200,10,200);

    text(x,x+200,100);
    text(x2,x2+20,300);
}

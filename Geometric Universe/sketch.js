//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//03_NestedForLoop - Visual
function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(0);

  noFill();

  for (let i = 0; i < 100; i++) {
    push();
    translate(random(width),random(height));

    stroke(random(255), random(255), random(255));
    strokeWeight(10);
    //fill(0,random(255));
    //ellipse(0,0,50,50);

    //fill(0);
    ellipse(0,0,40,40);
    pop();
  }
}

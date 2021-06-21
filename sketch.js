var box1;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  box1 = new Box(100,100,50,50);

  
}

function draw() {
  background(220);
  box1.show();
  
}

var Hour
var Minute
var Seconds

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

hr = hour();
mn = minute();
sc = seconds(); 
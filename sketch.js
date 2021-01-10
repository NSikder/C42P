var hr, mn, sc;
var hrAngle,mnAngle,scAngle;

function preload(){
  
}

function setup() {
  createCanvas(800,400);

}

function draw() {
  background(200,200,200);  
  translate(200,200);
  getTime();
  text(hr%12+":"+mn+":"+sc,100,100)
  rotate(-90);

  angleMode(DEGREES);
  push()
  rotate(hrAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  push()
  rotate(mnAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  push()
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  drawSprites();
}

function getTime(){
  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map(hr%12,0,24,0,360)
  mnAngle = map(mn,0,60,0,360)
  scAngle = map(sc,0,60,0,360)
}
var bg;
var doctor
var doctorImage

function preload(){
bg=loadImage("Hospital cw.jpg");
doctorImage=loadImage("Doctor cw.png");
}



function setup() {

  createCanvas(800,400);
  doctor=createSprite(450,200,50,50);
  doctor.addImage("doctor",doctorImage);
  doctor.scale=0.4;
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg);  
  drawSprites();
}
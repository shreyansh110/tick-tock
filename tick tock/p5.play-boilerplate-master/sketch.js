

//calculating time using predefined functions from p5.js
 //var hr,mn,sc
 
 var hr,mn,sc;

   
 


function preload(){

}

function setup() {
  createCanvas(800,400);



  angleMode(DEGREES);
 //createSprite(400, 200, 50, 50);

}

function draw() {
  background(0,0,0); 


  translate(400,200);

rotate(-90);
  hr=hour();
  mn=minute();
  sc=second();

console.log(sc);


  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);


push();

rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,120,0);
  pop();
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  push();
  rotate(hrAngle)
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,70,0);
pop();

noFill();
strokeWeight(10);
stroke(255,0,0);
arc(0,0,300,300,0,scAngle)

noFill();
strokeWeight(10);
stroke(0,255,0);
arc(0,0,280,280,0,mnAngle);

noFill();
strokeWeight(10);
stroke(0,0,255);
arc(0,0,260,260,0,hrAngle);
  drawSprites();
}
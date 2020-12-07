const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var stand;
var A,B,C,D,E;
var F,G,H;
var I;
var poly, polyImage;
var slingshot;
var score = 0;

function preload() {
  polyImage = loadImage("polygon.png");
}

function setup() {
  engine = Engine.create();
    world = engine.world;
  Engine.run(engine);

  createCanvas(800,800);
  stand = new Ground(390,300,150,20);
//bottom bunk
  A = new Box(330,235,30,40);
  B = new Box(360,235,30,40);
  C = new Box(390,235,30,40);
  D = new Box(420,235,30,40);
  E = new Box(450,235,30,40);
//middle bunk
  F = new Box(360,195,30,40);
  G = new Box(390,195,30,40);
  H = new Box(420,195,30,40);
//top bunk
  I = new Box(390,155,30,40);

  poly = Bodies.circle(50,195,20);
  World.add(world,poly);
  
  slingshot = new Slingshot(this.poly,{x:100,y:195});
  
}

function draw() {
  background(155,155,255);  
  drawSprites();
  stand.display();
  
  fill('red');
  A.display();
  A.score();
  B.display();
  B.score();
  C.display();
  C.score();
  D.display();
  D.score();
  E.display();
  E.score();
  fill("blue");
  F.display();
  F.score();
  G.display();
  G.score();
  H.display();
  H.score();
  fill("green");
  I.display();
  I.score();
  fill("gold");
  imageMode(CENTER);
  image(polyImage,poly.position.x,poly.position.y,40,40);
  slingshot.display();
  
  text("SCORE: " + score,700,40);
}


function mouseDragged(){
  Matter.Body.setPosition(poly,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(poly);
  }
}


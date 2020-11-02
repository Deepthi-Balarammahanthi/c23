const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, box1,box2,ground;

function setup() {
 var canvas =  createCanvas(400,400);
 engine = Engine.create();
 world = engine.world;
 box1 = new Box(100,10,50,50)
 box2 = new Box(120,20,40,80)
 ground = new Ground(200,390,400,10)
}

function draw() {
  background(25,255,255);  
Engine.update(engine);
console.log(ground.body.position.x);
console.log(ground.body.position.y);
ground.display();
box1.display();
box2.display();


  drawSprites();
}
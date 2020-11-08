//NAMESPACING
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ground;
var ball,Ball_options;

function setup() {
  createCanvas(400,400);
 
  engine = Engine.create();
  world = engine.world;
  
  Ball_options={restitution:0.4};

  ball=Bodies.circle(200,100,20,Ball_options);
  World.add(world,ball);

  var ground_options = {
    isStatic: true
  };
  //passing options
  ground = Bodies.rectangle(200, 390, 400, 10, ground_options);
  World.add(world, ground);

  console.log(ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  
  rectMode(CENTER); //Instructs to take the x & y at the centre of the shape
  rect(ground.position.x, ground.position.y, 400, 10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
  
}

/* 
ellipse --> oval shape
ellipse(x, y, r1, r2);
r1=r2 ==> circle


Physics Engine

1. Engine ==> Universe -- Follows all the laws of physics
    Matter.Engine
2. World ==> Physical world where objects are added
    Matter.World
3. Bodies ==> objects
    Matter.Bodies

Namespacing --> Nicknames to long names of variables/functions
*/
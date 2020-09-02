//NAMESPACING
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ground_options,ball, ball_options;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  ball_options={restitution:1}

  ball=Bodies.circle(200,100,12,ball_options );
  World.add(world,ball);

 
  ground_options = {isStatic: true};
 //passing options to the body
  ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
  World.add(world, ground);
 
  console.log(ground);
}


function draw() {
  background(0);  
  Engine.update(engine);
  //taking x & y at the centre of the shape
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,12,12);

}

/*
ellipse(x, y, r1, r2);

Library whose objects will be following the laws of physics
PHYSICS ENGINE
=box2d, p2, matter

MATTER Library

1. Engine - Universe: all the bodies follow all the laws of physics
    Matter.Engine
2. World - Surroundings: Physical world & add objects to it
    Matter.World
3. Bodies - objects
    Matter.Bodies

NameSpacing - Nicknames that we will be using in the code
*/

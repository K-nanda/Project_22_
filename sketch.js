/* 3 Objects from Matter.js library we are going to use
1: World -  Matter.World
2: Engine - Matter.Engine
3: Bodies - Matter.Bodies
*/

const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }
var ballOptions = {

  restitution : 1
}
  ground = Bodies.rectangle(300, 580, 600,30, options);
  World.add(world,ground );

  ball = Bodies.circle(300,200,50,ballOptions);
  World.add(world,ball);

  console.log(ball);
 /* console.log(ground.type);
  console.log(ground.position);
  console.log(ground.position.x);*/
  
}

function draw() {
  background(0);
  Engine.update(engine);
  
  rectMode(CENTER);
  fill("white");
  rect(ground.position.x,ground.position.y,600,30);

  ellipseMode(RADIUS);
  fill("orange");
  ellipse(ball.position.x,ball.position.y,50,50);
}
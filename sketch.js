const World=Matter.World
const Engine=Matter.Engine
const Bodies=Matter.Bodies
var engine, world
function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world;
  var options = {
    isStatic: true
  }
  object= Bodies.rectangle (200,390,200,20,options)
  World.add(world,object)
  var ball_options = {
    restitution:6.0
  }
  ball = Bodies.circle (200,200,20,ball_options)
  World.add(world,ball)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(object.position.x,object.position.y,400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}
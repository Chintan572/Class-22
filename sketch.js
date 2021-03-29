const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;
var ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   object= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,object);

  var bounce={
      restitution:0.8
  }

    ball = Bodies.circle(150,30,50,bounce);
    World.add(world,ball);

   var bounce2 = {
       restitution:0.8
   }
   
    ball2 = Bodies.circle(250,30,50,bounce2);
    World.add(world,ball2);


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,30);
    fill("Red")
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,50,50);

    ellipseMode(RADIUS);
    ellipse(ball2.position.x,ball2.position.y,50,50);
}

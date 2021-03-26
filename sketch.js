const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;
var ball; 

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true,
    }

    var ball_options = {
        restitution: 0.8
    }
   //object= Bodies.rectangle(200,390,200,20,object_options);
   // World.add(world,object);
    
    ground = Bodies.rectangle(200,390,400,20,ground_options)
    World.add(world,ground);
    
    ball = Bodies.circle(200,100,30,ball_options)
    World.add(world,ball);

    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    //rectMode(CENTER);
   // rect(object.position.x,object.position.y,50,50);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,30,30)
}

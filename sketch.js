const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,530,50,50);
    box2 = new Box(1000,530,50,50);
    ground = new Ground(600,580,1200,20);
    pig1 = new Pig(900,530);
    log1 = new Log(900,500,250,PI/2);
    bird = new Bird(90,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    bird.display();
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var log1, log2, log3, log4;
var box1,box2, box3, box4, box5;
var pig1, pig2;
var bird1, base, bg;
var constraint_log;
var sling;

function preload(){

 bg = loadImage("images/bg.png");

}

function setup(){
    var Canvas = createCanvas(1920, 1080);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1400,1020);
    box2 = new Box(1600,1020);
    box3 = new Box(1400,900);
    box4 = new Box(1600,900);
    box5 = new Box(1500,770);

    log1 = new Log(1440, 720, 200, PI/6);
    log2 = new Log(1560, 720, 200, PI/-6);
    log3 = new Log(1500, 960, 400, PI/2);
    log4 = new Log(1500, 830, 400, PI/2);

    pig1 = new Pig(1500, 1020);
    pig2 = new Pig(1500, 900);

    bird1 = new Bird(100, 200);
    
    ground = new Ground(width/2,height,width,20);
    base = new Ground(300, height, 600, 1000);

    constraint_log = new Log(150, 10, 200, PI/2);

    
    
    sling = new Chain(bird1, constraint_log);
}

function draw(){
    background(bg);
    Engine.update(engine);

    
    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    bird1.display();
    
    
    ground.display();
    base.display();
    constraint_log.display();

    sling.display();
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var mango1,mango2;
var tree1;
var ground;
var boy, boy2;
var rock;
var thrower;



function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
  world = engine.world;

 


 
 
  tree2 = new tree(600,490,2,2)
  
  ground = new Ground(400,690,800,20);
  
  
 


  mango1 = new Mango(600,350,30,30);

  mango2 = new Mango(540,370,40,40);

 
 mango3 = new Mango(550,450,30,30);

 mango4 = new Mango(500,450,30,30);
  mango5 = new Mango(710,460,30,30);
  mango6 = new Mango(580,380,30,30);
  mango7 = new Mango(610,400,30,30);
  mango8 = new Mango(650,460,20,20);
  mango9 = new Mango(600,440,20,20);
  mango10= new Mango(720,400,30,30);
  mango11= new Mango(740,440,30,30);

  rock = new Stone(175,650,30,30);
  tree1 = new Ground(170,570,0.0005,0.0005);
  boy = new Boy(200,630,5,5);

  thrower  = new Chain(rock.body, tree1.body)
 

 
 
 
     
  Engine.run(engine);
 
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,150);
  Engine.update(engine);

  
 
  ground.display();
  boy.display();
 
  tree1.display();
  tree2.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  rock.display();
 
 
  
 
  drawSprites();
 
}


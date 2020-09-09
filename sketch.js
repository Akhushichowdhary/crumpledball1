
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var ground;
var wall1,wall2,wall3;



function setup() {
	createCanvas(800, 700);

   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
 ball1 = new PaperBall(50,630,20);
 
 wall1 = new DustBin(650,630,30,200);
 wall2 = new DustBin(550,680,200,30);
 wall3 = new DustBin(450,630,30,200);

 
 ground = new Ground(400,690,800,20);

 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);

 
 ground.display();
 wall1.display();
 wall2.display();
 wall3.display();
 ball1.display();
 
 
 

drawSprites();


 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:15,y:-15});
	}
}




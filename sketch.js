
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var dustbin1;
var ground1;
var dust1,dust2,dust3;;
function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper1=new paper(200,100,40);
	ground1=new ground(800,680,1600,20);
	dust1=new dustbin(width/2+400,height-30,200,20);
	dust2=new dustbin(width/2+300,height-80,20,100);
	dust3=new dustbin(width/2+500,height-80,20,100);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  //Engine.update(engine);
 paper1.display();
 ground1.display(); 
 dust1.display();
 dust2.display();
 dust3.display();

 
}
function keyPressed() {
	if (keyCode=== UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}



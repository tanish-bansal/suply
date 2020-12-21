var helicopterIMG, helicopterSprite, packageSprite,packageIMG,redbox1,redbox2,redbox3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//redbox1=createSprite(400,650,200,20);
	//redbox2=createSprite(300,613,20,100);
	//redbox3=createSprite(500,613,20,100);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 redbody1=Bodies.rectangle(400,650,200,20,{isStatic:true});
	 redbody2=Bodies.rectangle(300,613,20,100,{isStatic:true});
	 redbody3=Bodies.rectangle(500,613,20,100,{isStatic:true});
	 World.add(world,redbody1);
	 World.add(world,redbody2);
	 World.add(world,redbody3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 text(mouseX+":"+mouseY,mouseX,mouseY);
 fill("red")
 rect(redbody1.position.x,redbody1.position.y,200,20);
 rect(redbody2.position.x,redbody2.position.y,20,100);
 rect(redbody3.position.x,redbody3.position.y,20,100);
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

   Matter.Body.setStatic(packageBody,false);
  }
}




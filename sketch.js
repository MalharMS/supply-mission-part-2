var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var place1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("heli.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(500, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2


	helicopterSprite=createSprite(380, 95, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.4

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
    place1 = new Posit(410,580,10,30);
	 
	Engine.run(engine);
  
}


function draw() {
  background(266)
  Engine.update(engine)
  ellipseMode(CENTER);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  place1.display();
  drawSprites();
  isPressed();
}

function isPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false)
	packageBody.restitution=0.4
  }
}




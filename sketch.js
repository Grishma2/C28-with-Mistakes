
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hand = new Boy(150,550);
	var boy = createSprite(200,600,40,100);
	boy.addImage(boyImg);
	boy.scale = 0.1;

	ground = new Ground(400,670);
	tree = new Tree(600,430);
	mango = new Mango(600,350);
	mango2 = new Mango(500,300);
	mango3 = new Mango(680,300);
	stone = new Stone(150,550);

	rope = new Rope(hand.body,stone.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  tree.display();
  mango.display();
  mango2.display();
  mango3.display();
  hand.display();
  stone.display();
  rope.display();

  mouseDragged();
  mouseReleased();

  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
	rope.fly();
}




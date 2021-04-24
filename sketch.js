var starImg,bgImg;
var star, starBody;
var fairy,fairyImg,fairyVoice;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairyImg = loadImage("fairyImage1.png")
	fairyVoice = loadSound("JoyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play()

	fairy = createSprite(400,500,40,40);
	fairy.addImage(fairyImg);
	fairy.scale = 0.1;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	options = {
		restitution:0, isStatic:true
	}
	starBody = Bodies.circle(650 , 30 , 5 , options);
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(Math.round(star.y));

  if(star.y > 470 && starBody.position.y > 470 && fairy.x > 575) {
	Matter.Body.setStatic(starBody,true);

	fairyVoice.stop();
}

  drawSprites();
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if(keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x + 10;
	}
	if(keyCode === LEFT_ARROW) {
		fairy.x = fairy.x - 10;
	}
	
}

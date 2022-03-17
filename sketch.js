var starImg,bgImg;
var star,starBody;
var fada,imgFada;
var vozFada;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    vozFada = loadSound("sound/joyMusic.mp3");
    imgFada = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
}

function setup() {
    createCanvas(800, 750);
    

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
 
function draw() {

   if(star.y > 470 && starBody.position.y > 470 ){
      Matter.Body.setStatic(starBody,true);


   }










   drawSprites();
}
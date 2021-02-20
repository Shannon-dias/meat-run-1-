var ground
var groundI
var dog 
var dogA
var cat 
var catA

function preload(){
groundI = loadImage('images/background.png')
dogA = loadAnimation('images/dog 1.png','images/dog 2.png','images/dog 3.png','images/dog 4.png')
catA = loadAnimation('images/cat 1.png','images/cat 2.png','images/cat 3.png','images/cat 4 (2).png')
}

function setup() {
  createCanvas(800,400);
  
  ground = createSprite (200,20,10,10)
  ground.addImage(groundI)
  ground.velocityX = 5
  dog = createSprite(610,330)
  dog.addAnimation('runing dog',dogA)
  dog.scale=0.3
  cat =createSprite(143,318)
  cat.addAnimation('running cat',catA)
  cat.scale = 0.7

}



function draw() {
  background(255,255,255);
  if(ground.x >800) {
    ground.x = 200 
  }
  
 
  drawSprites();
  text(mouseX + ', '+mouseY, 50,50)
}
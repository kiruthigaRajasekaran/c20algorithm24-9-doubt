var fixedRect;
var movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug="true";
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug="true";
  
}

function draw() {
  background(255,255,255);  
  console.log(fixedRect.x-movingRect.x);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  drawSprites();
}
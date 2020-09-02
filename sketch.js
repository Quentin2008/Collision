var mrect, frect

function setup() {
  createCanvas(1200,800);
  frect=createSprite(400, 200, 50, 80);
  mrect=createSprite(200, 200, 80, 50);
  frect.shapeColor="green";
  mrect.shapeColor="green";
}

function draw() {
  background(0);
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;
  if(mrect.x-frect.x<frect.width/2+mrect.width/2
    && frect.x-mrect.x<frect.width/2+mrect.width/2
  && mrect.y-frect.y<frect.height/2+mrect.height/2
  && frect.y-mrect.y<frect.height/2+mrect.height/2){
    frect.shapeColor="blue";
    mrect.shapeColor="blue";
  }
  else{
    frect.shapeColor="green";
    mrect.shapeColor="green";
  }
  drawSprites();
}
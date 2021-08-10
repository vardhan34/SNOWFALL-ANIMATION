var bg,bgimage
var boy,boyimage


function preload(){
bgimage=loadImage("snow2.jpg")
boyimage=loadImage("VARDHAN.jpg")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  bg=createSprite(displayWidth/2, displayHeight/2);
  bg.addImage("snow1",bgimage)
  bg.scale=1.5
  
  boy=createSprite(displayWidth/2+200,displayHeight-100)
  boy.addImage(boyimage)
  boy.scale=0.4
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
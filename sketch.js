var HotAirBalloon, HotAirBalloonImg
var bird, birdImage
var Birds
var bg, bgImage
var building1, building1Image
var buidling2, building2Image
function preload() {
  HotAirBalloonImg = loadImage("Hot Air Balloon-1.png");
  bgImage = loadImage("background-1.png");
  birdImage = loadAnimation("bird-1.png", "bird-2.png", "bird-3.png", "bird-4.png", "bird-5.png", "bird-6.png", "bird-7.png", "bird-8.png");
  building1Image = loadImage("Building-1.png");
  building2Image = loadImage("Building-2.png");

}

function setup() {
  createCanvas(800,700);
  bg = createSprite(400, 350, 800, 700);
  bg.scale = 1.5
  bg.addImage(bgImage);
  bg.velocityX = -1;
   HotAirBalloon = createSprite(150, 200, 50, 50);
   HotAirBalloon.addImage(HotAirBalloonImg);
   HotAirBalloon.scale = 0.25
}



function draw() {
  background("yellow");  

  if(keyDown(UP_ARROW)){
    HotAirBalloon.y = HotAirBalloon.y - 5
  }

  if(keyDown(DOWN_ARROW)){
    HotAirBalloon.y = HotAirBalloon.y + 5
  }
  if(bg.x < 0){
    bg.x = bg.width/2;
  }
  spawnBirds();
  spawnBuilding();
  drawSprites();
}
function spawnBirds(){
  if(frameCount % 150 === 0){
    var bird = createSprite(820, 200, 50, 50);
    bird.addAnimation("running", birdImage);
    bird.velocityX = -5;
    bird.y = Math.round(random(80,400));

  }
}

function spawnBuilding(){
  if(frameCount % 500 === 0){
    var building = createSprite(850, 500, 50, 50);
    var rand = Math.round(random(1, 2));
    switch(rand){
      case 1: building.addImage("standing", building1Image);
      building.scale = 0.75;
      break;
      case 2: building.addImage("standing2", building2Image);
      break;
      default: break;
      
    }
    
    building.velocityX = -1;

  }
}
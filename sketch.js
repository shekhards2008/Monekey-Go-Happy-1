var player, playerrunning;
var ground, groundimg, invisibleground;
var banana , bananaimg, bananagroup;
var stonegorup , stoneimg;


var score;

function preload() {
  groundimg = loadImage("jungle.jpg");
 playerrunning = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png"); 
  
  stoneimg = loadImage("stone.png");
  bananaimg = loadImage("banana.png");
}

function setup() {
  createCanvas(600, 400);
 
  ground = createSprite(0, 0, 400, 400);
  ground.addImage("ackground", groundimg);
  ground.x = ground.width/2;
   ground.velocityX = -3
  ground.x = 0;
  ground.scale = 2;
  
  bananagroup = createGroup();
  stonegroup = createGroup();
  
  invisibleground = createSprite(300, 380, 600, 20);
  invisibleground.visible = false;
  
  player = createSprite(100, 340, 20, 50);
  player.addAnimation ("running", playerrunning);
  player.scale = 0.08;
 
  
 score = 0;
   
}

function draw() {
  background(220);
  
  
 
if(ground.x<0) {
   ground.x = ground.width/2;
 
  }
  if(bananagroup.isTouching(player)) {
   score = score+2; 
  }
  
  if(keyDown("space") && player.y >=  250) {
   player.velocityY = player.velocityY -2; 
  }
  player.velocityY = player.velocityY+0.7;
  player.collide(invisibleground);
  
  switch(score) {
    case 10: player.scale = 0.12;
        break;
    case 20: player.scale = 0.14;
        break;
    case 30: player.scale = 0.16;
        break;
    case 40: player.scale = 0.18;
        break;
    default: break;
  }
        
  if(player.isTouching(stonegroup)) {
   player.scale = 0.08 ; 
  }
  //console.log(player.y);
  food();
  obstacles();
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("score :" + score, 500, 50);
}

function food() {
  if(frameCount % 40 === 0) {
   banana= createSprite(600, random(120, 200), 10, 10);
  banana.addImage("ackground", bananaimg); 
  banana.velocityX = -9;
  banana.scale = 0.05;
  banana.lifetime = 200;
  bananagroup.add(banana);
    banana.debug = false;
  }
}
  
  function obstacles() {
   if(frameCount % 100 === 0) {
     stone = createSprite(600,350, 10, 10);
     stone.velocityX = -8;
     stone.addImage("spawning", stoneimg);
     stone.scale = 0.1;
   stonegroup.add(stone);
     stone.debug = false;
      player.depth = stone.depth+1; 
  }
}
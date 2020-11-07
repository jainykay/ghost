var climber, climberImage;
var door, doorImage;
var ghost, ghost_jumping, ghost_standing;
var tower, towerImage;
var spookySound;

function preload() {
  
  climberImage = loadImage("climber.png");
  doorImage = loadImage("door.png");
  ghost_jumping = loadImage("ghost-jumping.png");
  ghost_standing = loadImage("ghost-standing.png");
  towerImage = loadImage("tower.png");
  
  spookySound = loadSound("spooky.wav");
}

function setup() {
  
  createCanvas(600, 600);
  
  tower = createSprite(300, 200, 20, 20);
  tower.addImage("background", towerImage);
  //tower.scale = 0.6;
  tower.velocityY = 1;
  
  ghost = createSprite(200, 200, 20, 20);
  ghost.addImage("main", ghost_standing);
  ghost.scale = 0.5;
  
}

function draw() {
  
  background("black");
  
  if(tower.y > 400) {
    tower.y = 250;
  }
  
  if(keyDown("space")) {
    ghost.velocityY = -7;
  }
  
  ghost.velocityY = ghost.velocityY + 0.8;
  
  if(keyDown("right")) {
    ghost.x = ghost.x + 2;
    //ghost.veloctyY = 0;
  }
  
  if(keyDown("left")) {
    ghost.x = ghost.x -2;
    //ghost.velocityY = 0;
  }
  
  spawnClimbers();
  drawSprites();
}

function spawnClimbers() {
  
  if(frameCount % 200 === 0) {
    door = createSprite(200, 0, 20, 20);
    door.addImage("wingman", doorImage);
    
    door.velocityY = 1;
    door.x = Math.round(random(120, 250));
    
    climber = createSprite(200, 55, 20, 20);
    climber.addImage("stationary", climberImage);
    climber.scale = 0.9;
    climber.velocityY = 1;
    climber.x = door.x;
    
    climber.depth = ghost.depth;
    ghost.depth = ghost.depth + 1;
    door.depth = climber.depth;
    
    
  }
}
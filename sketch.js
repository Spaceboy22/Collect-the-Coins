var background,boy,obstacle;

var backgroundImg,boyImg,obstacleImg;

var invisibleGround;

var coin,coinImg;
function preload(){
backgroundImg = loadImage("A-green-nature-landscape-background.jpg");
boyImg = loadImage("giphy.gif");
obstacleImg = loadImage("6712737_preview.png");
coinImg = loadImage("372102230_BITCOIN_400px.gif");
}

function setup() {
createCanvas(windowWidth,windowHeight);


background=createSprite(width/2,height-500);
background.addImage(backgroundImg);

background.scale=4;
background.velocityX=-14 ;

console.log(windowWidth);
boy=createSprite(400,840);
boy.addImage(boyImg);
boy.scale=0.5;

invisibleGround = createSprite(width/2,height-25,width,2);
invisibleGround.visible = false;

coin_Group=new Group();
}


function draw() {
  if (background.x < 0){
    background.x=background.width/2;
  }
      if(keyDown("space")&&boy.y>=600){
        boy.velocityY=-10;
      }
      boy.velocityY = boy.velocityY + 0.8

      if(frameCount%200==0){
        obstacle=createSprite(800,890);
        obstacle.addImage(obstacleImg);
        obstacle.scale=0.07;
        obstacle.velocityX=-14;
        }
        createCoin();
          if (coin_Group.isTouching(boy)) {
            coin_Group.destroyEach();
          }

    boy.collide(invisibleGround);

    drawSprites();
}
function createCoin() {
  if(frameCount%150==0){
    coin=createSprite(Math.round(random(500,800)),Math.round(random(500,800)));
    coin.addImage(coinImg);
    coin.scale=0.5;
    coin.velocityX=-14;
    coin_Group.add(coin);
    }
  }
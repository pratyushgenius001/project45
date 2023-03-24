var bg,bgImg;
var explosive;
var basket;
var explosive_img;
var apple;
var basket_img;
var apple_img;


var appleGroup;



function preload(){
  
  explosive_img = loadImage("assets/e.png")
  basket_img = loadImage("assets/b.png")
  apple_img = loadImage("assets/a.png")
  bgImg = loadImage("assets/bg.jpg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
basket = createSprite(250,200);
 baket.addImage(basket_img)
   basket.scale = 0.3
   basket.setCollider("rectangle",0,0,300,300)


   
    //creating group for zombies    
    appleGroup = new Group();
}

function draw() {
  background(0); 

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("RIGHT_ARROW")){
 basket.x = basket.x-30
}
if(keyDown("left_ARROW")){
 basket.x = basket.x+30
}







//destroy zombie when player touches it
//if(appleGroup.isTouching(basket)){
 

 //for(var i=0;i<zombieGroup.length;i++){     
      
  if(appleGroup.isTouching(basket)){
       appleGroup.destroy()
       } 
 }
 if(basket.isTouching(explosive)){
  basket.destroy()
  } 


//calling the function to spawn zombies
appleGroup();

drawSprites();




//creating function to spawn zombies
function appleGroup(){
  if(frameCount%50===0){

    //giving random x and y positions for zombie to appear
    apple = createSprite(random(500,1100),random(100,500),40,40)

    zombie.addImage(zombieImg)
    zombie.scale = 0.15
    zombie.velocityX = -3
    zombie.debug= true
    zombie.setCollider("rectangle",0,0,400,400)
   
    zombie.lifetime = 400
   zombieGroup.add(zombie)
  }

}

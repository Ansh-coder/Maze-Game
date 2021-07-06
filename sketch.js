var player_img,Finishline,player;
var createEdgeSprites;
function preload(){
    player_img = loadImage("Images/player.png")
   // Finishline = loadImage("Images/finishline.jpg")
}
function setup(){
    createCanvas(400,400);
    //wall1
    var wall1 = createSprite(10,70,100,20);
    wall1.shapeColor = "orange";
    //wall2
    var wall2 = createSprite(100,50,20,100);
    wall2.shapeColor = "orange";
    //wall3
    var wall3 = createSprite(80,130,100,20);
    wall3.shapeColor = "orange";
    //wall4
    var wall4 = createSprite(50,250,20,100);
    wall4.shapeColor = "orange";
    //wall5
    var wall5 = createSprite(130,210,100,20);
    wall5.shapeColor = "orange";
    //wall6
    var wall6 = createSprite(10,250,100,20);
    wall6.shapeColor = "orange";
    //wall7
    var wall7 = createSprite(160,120,20,100);
    wall7.shapeColor = "orange";
    //wall8
    var wall8 = createSprite(150,20,100,20);
    wall8.shapeColor = "orange";
    //wall9
    var wall9 = createSprite(250,70,20,100);
    wall9.shapeColor = "orange";
    //wall10
    var wall10 = createSprite(270,150,100,20);
    wall10.shapeColor = "orange";
    //wall11
    var wall11 = createSprite(330,50,100,20);
    wall11.shapeColor = "orange";
    //wall12
    var wall12 = createSprite(340,125,20,100);
    wall12.shapeColor = "orange";
    //wall13
    var wall13 = createSprite(220,250,20,100);
    wall13.shapeColor = "orange";
    //wall14
    var wall14 = createSprite(330,210,150,20);
    wall14.shapeColor = "orange";
    //wall15
    var wall15 = createSprite(100,300,20,100);
    wall15.shapeColor = "orange";
    //wall16
    var wall16 = createSprite(180,310,100,20);
    wall16.shapeColor = "orange";
    //wall17
    var wall17 = createSprite(30,352,20,100);
    wall17.shapeColor = "orange";
    //wall18
    var wall18 = createSprite(175,352,20,100);
    wall18.shapeColor = "orange";
    //wall19
    var wall19 = createSprite(280,290,20,100);
    wall19.shapeColor = "orange";
    //wall20
    var wall20 = createSprite(350,270,120,20);
    wall20.shapeColor = "orange";

    player = createSprite(20,25,18,18);
    player.addImage(player_img);
    player.scale = 0.02;
}
function draw(){
    background(0);
if(keyDown("UP_ARROW")){
    player.velocityX = 0;
    player.velocityY = -4;
}
if(keyDown("DOWN_ARROW")){
    player.velocityX = 0;
    player.velocityY = 4;
}
if(keyDown("LEFT_ARROW")){
    player.velocityX = -4;
    player.velocityY = 0;
}
if(keyDown("RIGHT_ARROW")){
    player.velocityX = 4;
    player.velocityY = 0;
}
player.bounce(wall1);
createEdgeSprites();
//player.bounceOff(edges);
    drawSprites();
}
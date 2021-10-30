var doctor, crowd, bg, virus, syringe,inviLog,inviLog2;
var doctorImg, crowdImg, virusImg, syringeImg;
var canvas;

function preload(){
doctorImg = loadImage("doctor1.png");
crowdImg = loadImage("crowd.png");
virusImg = loadImage("virus.png");
syringeImg = loadImage("syringe.png");
bg = loadImage("road.jpg");
}
function setup(){
canvas = createCanvas(windowWidth, windowHeight);

doctor = createSprite(windowWidth/3,windowHeight/2,10,10);
doctor.addImage(doctorImg);
doctor.scale = 0.25;

crowd = createSprite(150,windowHeight-100,10,10);
crowd.addImage(crowdImg);
crowd.scale = 0.3;

inviLog = createSprite(doctor.x,100,200,10);
inviLog.visible = false;

inviLog2 = createSprite(doctor.x,windowHeight-150,200,10);
inviLog2.visible = false;
}
function draw(){
background(bg);

drawSprites();
}
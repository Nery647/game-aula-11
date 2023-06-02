var sea;
var navio, navio_img

function preload() {
  sea = loadImage('sea.png');

navio_img = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")





}

function setup() {
  createCanvas(800, 600);
  
  navio = createSprite(200,300,20,20)
  navio.addAnimation("run",navio_img)
  
  

}

function draw(){
  background(0);
  

image(sea, 0, 0, width, height);


animation(navio_img, width/2, height/2);


}
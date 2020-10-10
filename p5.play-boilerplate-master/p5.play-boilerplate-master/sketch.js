var aa

var bb


function setup() {

  createCanvas(800,400);
   aa=createSprite(400,200,30,30)
  aa.shapeColor="teal";

   bb=createSprite(200,300,30,30)
  bb.shapeColor="crimson";

 
}

function draw() {
  background(255,255,255);  
  

bb.x=mouseX;
bb.y=mouseY;

if( aa.x-bb.x<bb.width/2+aa.width/2
  &&  bb.x-aa.x<aa.width/2+bb.width/2 &&
  aa.y-bb.y<bb.width/2+aa.width/2
  &&  bb.y-aa.y<aa.width/2+bb.width/2)
  {
bb.shapeColor="red";
aa.shapeColor="red";
}

else {
  bb.shapeColor="teal";
aa.shapeColor="crimson";}
drawSprites();
}
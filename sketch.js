var thickness,wall;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  
  speed = random(10,20);
  weight = random(400,1500);

  car = createSprite(50,100,50,50);

  car.velocityX = speed;
  car.shapeColor = (255);



  wall = createSprite(1300,140,20,height/2);
  wall.shapeColor = (255);

  

}

function draw() {
  background(0);
  if(wall.x - car.x<(car.width+wall.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car.shapeColor = ("red");
    }
    if (deformation<180 && deformation>100) {
       car.shapeColor = color("yellow");
    }
    if(deformation<100)
    {
      car.shapeColor = ("pink");
    }
  }  
  drawSprites();
}
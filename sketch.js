
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var position;
var divisons = [];
var divisonsHeight = 300;
var particles ;
var particle;
var display;
var plinkos = []; 
var line;

var  gameState="PLAY";
var  gameState="END";

var count = 0;
var score = 0;


//Sethu Sabarish S
//project 36
//plinko 
//code

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	ground = new Ground(400,690,800,20);

  
  for (var i = 0; i<=width; i= i+80) {
      divisons.push(new Division(i,height-divisonsHeight/2, 10, divisonsHeight));
  }

  for (var j=75; j<=width; j = j+50) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j=50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }
  for (var j=75; j<=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }
  for (var j=50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }
  }
  

 

  



function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  textSize(35)
  text("score:"+score,20,40)
  fill(250)
  textSize(35)
  text("100",10,550)
  text("500",90,550)
  text("200",170,550)
  text("300",250,550)
  text("100",330,550)
  text("200",410,550)
  text("300",490,550)
  text("200",570,550)
  text("100",650,550)
  text("700",730,550)



ground.display();


for (var n = 0; n<divisons.length; n++) {
  divisons[n].display();
}

if (frameCount % 60 === 0) {
  particles.push(new Particle(random(width/2-30, width/2+30),10,10));
}

for (var h = 0; h<particles.length; h++) {
  particles[h].display();
}

for (var j = 0; j<plinkos.length; j++) {
  plinkos[j].display();
}


ground.display();


  drawSprites();

}
  
if( gameState==="END"){
  background("black")
  fill("red")
  textSize(100)
  text("Game Over",200,400)

for (var k = 0; k<plinkos.length; k++) {
  plinkos[k].display();
}}

 
if(particles!=null)
{
  particle.display();


  if(particles.body.position.y>700)
  {
    if(particles.body.position.x<300)
    {
      score=score+500;
      particle=null
      if(count>=5)gmaeState="END"
    }
    else if(particle.body.position.x<600 &&particle.body.position.x>301 ){
      score=score+100;
      particle=null;
      if(count>=5)gameState="END"

      else if(particle.body.position.x<900 &&particle.body.position.x>601 ){
        score=score+300;
        particle=null;
        if(count>=5)gameState="END"
    }
  }
}
}





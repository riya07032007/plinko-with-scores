const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var newParticle

var particles = [];
var plinkos = [];
var divisions = []

var divisionHeight = 300;
var score = 0;
var count = 0;

var gameState = "play"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(width / 2, height, width, 20);


  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }


  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 375));
  }




}



function draw() {
  background("black");

  fill("white")
  textSize(20)
  text("Score : " + score, 20, 30);


  // Engine.update(engine);

  text(mouseX + "," + mouseY, 10, 20)

  text("500", 25, 525)
  text("50", 110, 525)
  text("100", 185, 525)
  text("300", 265, 525)
  text("700", 345, 525)
  text("10", 425, 525)
  text("200", 500, 525)
  text("600", 585, 525)
  text("450", 665, 525)
  text("150", 745, 525)
  ground.display()

  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();

  }
  

  for (var j = 0; j < particles.length; j++) {

    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }

  if (newParticle != null) {
    newParticle.display();


    if (newParticle.body.position.y > 550) {
      if (newParticle.body.position.x < 90) {
        score = score + 500;
        newParticle = null;
        if (count >= 5) { gameState = "end"; }
      }


      else if (newParticle.body.position.x > 87 && newParticle.body.position.x < 162) {
        score = score + 50;
        newParticle = null;
        if (count >= 5) { gameState = "end"; }
      }
      else if (newParticle.body.position.x > 163 && newParticle.body.position.x < 244) {
        score = score + 100;
        newParticle = null;
        if (count >= 5) { gameState = "end"; }

      }
      else if (newParticle.body.position.x > 245 && newParticle.body.position.x < 322) {
        score = score + 300;
        newParticle = null;
        if (count >= 5) { gameState = "end"; }
      }

      else if (newParticle.body.position.x > 323 && newParticle.body.position.x < 401) {
        score = score + 700;
        pnewParticle = null;
        if (count >= 5) { gameState = "end"; }
      }
      else if (newParticle.body.position.x > 402 && newParticle.body.position.x < 482) {
        score = score + 10;
        newParticle = null;
        if (count >= 5) { gameState = "end"; }

      }
      else if (newParticle.body.position.x > 483 && newParticle.body.position.x < 561) {
        score = score + 200;
        newParticle = null;
        if (count >= 5) { gameState = "end"; }

      }
      else if (newParticle.body.position.x > 562 && newParticle.body.position.x < 641) {
        score = score + 600;
        newParticle = null;
        if (count >= 5) { gameState = "end"; }

      }
      else if (newParticle.body.position.x > 642 && newParticle.body.position.x < 723) {
        score = score + 450;
        newParticle = null;
        if (count >= 5) { gameState = "end"; }

      }
      else if (newParticle.body.position.x > 724 && newParticle.body.position.x < 804) {
        score = score + 150;
        newParticle = null;
        if (count >= 5) { gameState = "end"; }

      }
    }
  }



  if (gameState === "end") {
    textSize(30);
    text("GameOver", 145, 310);
  }




}

function keyPressed(){
  if(keyCode===32){
    if(gameState!=="end"){
      count++
      newParticle = new Particle(random(50,350),10,10,10)
    }
  }
}

var w;


function setup() 
{
  bgColor = color(51,51,51);
  createCanvas(2000,2000);
  w = new Walker();
  background(bgColor);
}

function draw() 
{
  w.display();
  w.update();
}

function Walker()
{
  this.pos = createVector(width/2,height/2);
  this.acc = createVector(0,0);
  this.vel = createVector(0,0);
  this.size = 5;
  this.color =  color(        random(0,255)
                            , random(0,255)
                            , random(0,255));
  this.update = function()
  {
    var mouse = createVector(mouseX,mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.normalize();
    this.acc.add(p5.Vector.fromAngle(random(TWO_PI)));
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.color =  color(      random(0,255)
                            , random(0,255)
                            , random(0,255));
  }
  
  this.display = function()
  {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x,this.pos.y, this.size, this.size);
  }
}
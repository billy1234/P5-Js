
var w;

function normalize(value,max,min)
{
  return (value - min) / (max - min);
}

function setup() 
{
  bgColor = color(51,51,51);
  createCanvas(500,500);
  w = new Walker();
  background(bgColor);
}

function draw() 
{
  w.display();
  w.walk();
}

function Walker()
{
  
  this.pos = createVector(width/2,height/2);
  this.stepDistance = 5;
  this.size = 20;
  this.color =  color(        random(0,255)
                            , random(0,255)
                            , random(0,255));
  this.walk = function()
  {
    var velocity = createVector(random(-1,1),random(-1,1));
    velocity = velocity.mult(this.stepDistance);
    this.pos =  this.pos.add(velocity);
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
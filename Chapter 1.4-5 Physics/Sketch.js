
var w;

function normalize(value,max,min)
{
  return (value - min) / (max - min);
}

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
  this.vel = createVector(random(-1,1),random(-1,1));
  this.size = 5;
  this.color =  color(        random(0,255)
                            , random(0,255)
                            , random(0,255));
  this.update = function()
  {
    this.acc = createVector(cos(millis() * 0.001), sin(millis() * 0.001));
    this.acc.mult(0.01);
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

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
  
  this.x = width/2;
  this.y = height/2;
  this.minStepDistance = 1;
  this.maxStepDistance = 15;
  this.stepDistance = 5;
  this.size = 20;
  this.color =  color(        random(0,255)
                            , random(0,255)
                            , random(0,255));
  this.minColorSpeed = 0.05;
  this.maxColorSpeed = 0.5;
  this.colorSpeed = 0.1;
  this.timeScale = 0.000001;
  this.walk = function()
  {
    this.x =  this.x + random(-1,1) * this.stepDistance;
    this.y =  this.y + random(-1,1) * this.stepDistance;
    
    this.stepDistance = lerp(this.minStepDistance,this.maxStepDistance,(sin(millis() * this.timeScale) + 1)/2); //random();
    var t = normalize(this.stepDistance,this.minStepDistance,this.maxStepDistance); //step distance will decide how fast the colors will change
    
    this.colorSpeed = lerp(this.minColorSpeed,this.maxColorSpeed,t);
    
    
    var stepColor =  color(   random(0,255)
                            , random(0,255)
                            , random(0,255));
    this.color = lerpColor(this.color ,stepColor,this.colorSpeed);
  }
  
  this.display = function()
  {
    noStroke();
    fill(this.color);
    ellipse(this.x,this.y, this.size, this.size);
  }
}
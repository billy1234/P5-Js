
var w;

function drawPerlin()
{
  var pScale = 0.01;
  var noiseSample;
  for(var x =0; x < width; x++)
  {
    for(var y =0; y < height; y++)
    {
      noiseSample = noise(x * pScale,y * pScale);
      stroke(noiseSample * 255);
      point(x,y);
    }
    
  }
}

function setup() 
{
  var bgColor = color(51,51,51);
  createCanvas(750,750);
  w = new Walker();
  background(bgColor);
  drawPerlin();
}



function draw() 
{
  
  //w.display();
  //w.update();
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
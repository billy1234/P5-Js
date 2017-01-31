
var walkers;
var teamColors;
function setup()
{
  setUpTeamCols();
  createCanvas(1000,1000);
  background(51);
  spawnWalkers(20);
}

function draw()
{
  background(51)
  updateWalkers();
}

function setUpTeamCols()
{
  teamColors = [color(1,1,1),color(1,1,1)];
  teamColors.length = 10;
  for(var i =0; i < 10; i ++)
  {
    teamColors[i] = color(    random(0,255)
                            , random(0,255)
                            , random(0,255));
  }
  
}

function spawnWalkers(amount)
{
  walkers = [new Walker()];
  walkers.length = amount;
  for(var i =0; i < amount; i++)
  {
    walkers[i] = new Walker();
  }
  
}

function duplicateWalker(original)
{
  if(walkers.length > 50)
  {
    return;
  }
  
  for(var i = 0; i < walkers.length; i++)
  {
    if(walkers[i] === original)
    {
      walkers.push(original.clone());
      return;
    }
    
  }
  
}

function updateWalkers()
{
  for(var i =0; i < walkers.length; i++)
  {
    walkers[i].sendCollision(walkers);
    walkers[i].update();
    walkers[i].draw();
  }
  
}





function Walker()
{
  this.pos = createVector(random(width),random(height));
  this.size = 20;
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.maxSpeed = 20;
  this.team = floor(random(9));
  
  this.getColor = function()
  {
    return teamColors[this.team];
  }
  
  
  this.clone = function()
  {
    var copy = new Walker();
    copy.pos = this.pos;
    copy.size = this.size;
    copy.team = this.team;
    return copy;
  }
  
  this.sendCollision = function(others)
  {
    for(var i=0; i < others.length; i++)
    {
      if(others[i].team != this.team)
      {
        var gapVec = p5.Vector.sub(this.pos , others[i].pos)
        if(gapVec.mag() < this.size)
        {
          
          
          this.size = this.size/2;
          if(this.size > 5)
          {
            duplicateWalker(this);
          }
         
          this.pos.add(p5.Vector.random2D().setMag(this.size * 3));
          this.vel.rotate(random(TWO_PI));
          this.color = color( random(0,255)
                            , random(0,255)
                            , random(0,255));
        }
        
      }
    }
  }
  this.update = function()
  {
    this.acc = p5.Vector.fromAngle(random(TWO_PI));
    this.vel.add(this.acc);
    
    if(this.vel.mag() > this.maxSpeed)
    {
      this.vel.mult(0.8);
    }
    this.checkBounds();
    this.pos.add(this.vel);
  }
  
  this.checkBounds = function()
  {
     if(this.pos.x < 0)
    {
      this.vel.x = 10;
    }
    else if(this.pos.x > width)
    {
      this.vel.x = -10;
    }
    
     if(this.pos.y < 0)
    {
      this.vel.y = 10;
    }
    else if(this.pos.y > height)
    {
      this.vel.y = -10;
    }
    
  }
  
  this.draw = function()
  {
    noStroke();
    fill(this.getColor());
    ellipse(this.pos.x,this.pos.y, this.size, this.size);
  }
  
}
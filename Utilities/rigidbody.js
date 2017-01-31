function RigidBody(transform,physics)
{
  
  this.transform = transform;
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.mass = 0.1;
  this.drag = 0.005; //should be between 1 - 0
  
  physics.addBody(this);
  
  this.stepPhysics = function()
  {
    this.checkCollisions();
    this.vel.add(this.acc);
    this.transform.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.mult(1 - this.drag);
  }
  
  this.addForce = function(force)
  {
    this.addForce(force,false);
  }
  this.addForce = function(force,ignoreMass)
  {
    var finalForce = force;
    if(!ignoreMass)
    {
      finalForce.div(this.mass);
    }
    this.acc.add(finalForce);
  }
  
  this.checkCollisions = function(bodys)
  {
    
    //edge of canvas collisions
    if(this.transform.pos.x < 0)
    {
      this.vel.x = -this.vel.x;
      if(this.vel.x < 0.1)
      {
        this.addForce(createVector(1,0),true);
      }
      
    }
    else if(this.transform.pos.x > width)
    {
      this.vel.x = -this.vel.x;
      if(this.vel.x < -0.1)
      {
        this.addForce(createVector(-1,0),true);
      }
      
    }
    
    if(this.transform.pos.y < 0)
    {
      this.vel.y = -this.vel.y;
      if(this.vel.y < 0.1)
      {
        this.addForce(createVector(0,1),true);
      }
    }
    else if(this.transform.pos.y > height)
    {
       this.vel.y = -this.vel.y;
      if(this.vel.y < -0.1)
      {
        this.addForce(createVector(0,-1),true);
      }
    }
    
  }
  
}
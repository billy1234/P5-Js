function Particle(x,y,physics)
{
  this.transform = new Transform(x,y);
  this.rigidBody = new RigidBody(this.transform,physics);
  this.size = 15;
  this.color = color(random(255),random(255),random(255));
  
  this.update = function()
  {
    this.rigidBody.addForce(p5.Vector.fromAngle(random(TWO_PI)).setMag(0.1));
    fill(this.color);
    noStroke();
    ellipse(this.transform.pos.x, this.transform.pos.y, this.size);
  }
}
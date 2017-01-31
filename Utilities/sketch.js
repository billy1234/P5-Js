
var physics;
var particles = [];

function setup()
{
  physics = new Physics();
  createCanvas(500,500);
  background(51);
  addParticles(50);
  frameRate(60);
}

function draw()
{
  background(51);
  updateParticles();
  physics.update();
}
function addParticles(count)
{
  for(var i =0; i < count; i++)
  {
    particles.push( new Particle(random(width),random(height),physics));
  }
}
function updateParticles()
{
  for(var i =0; i < particles.length; i++)
  {
    particles[i].update();
  }
}
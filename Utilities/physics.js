function Physics()
{
  
  var gravity = createVector(0,0.5);
  var bodys = [];
  
  this.ApplyGravity = function()
  {
    for(var i =0; i < bodys.length; i++)
    {
      bodys[i].addForce(gravity,true);
    }
  }
  
  this.addBody = function(body) 
  {
    bodys.push(body);
  }
  
  this.removeBody = function() 
  {
    
  }
  
  this.update = function()
  {
    this.ApplyGravity();
    for(var i =0; i < bodys.length; i++)
    {
      bodys[i].stepPhysics();
    }
    
  }
  
  
}
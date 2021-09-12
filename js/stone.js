class Stone 
{
  constructor(x, y,r) 
  {
    let options = {
     // isStatic:true
    };
    this.r = 40;
    this.body = Bodies.circle(x, y,this.r,  options);
   // this.w = w;
   // this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;

    push();
    rectMode(CENTER);
    stroke(255);
    fill("white");
    rect(pos.x, pos.y,this.r);
    pop();
  }
}
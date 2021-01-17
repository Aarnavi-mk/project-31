class Plinko{
    constructor(x, y,r) {
        var options = {
          'isStatic': true,
          'restitution': 1,
          'friction': 0,
          'density': 0.8
        }
        
    
        this.body = Bodies.circle(this.x, this.y, this.r / 2, options);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world, this.body);
      }
      display() {
        var plinkopos = this.body.position;
        
        push();
        translate(plinkopos.x, plinkopos.y);
        rectMode(CENTER);
        strokeWeight(4)
        fill("white")
        ellipse(0, 0, this.r, this.r);
        pop();
      }
    };













class Ground{
    constructor(x,y,width,height){
     
        var a = {
            isStatic:true
          }
          this.body = Bodies.rectangle(x,y,width,height,a)

          this.width = width;
          this.height = height;

          World.add(world,this.body)
        

    }


   display(){
  

    rectMode(CENTER)
  fill("white")
  rect(this.body.position.x,this.body.position.y,this.width,this.height)
   }




}

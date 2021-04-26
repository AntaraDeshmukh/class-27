class Slingshot{
    constructor(A,B){
        var options={
            bodyA:A,
            bodyB:B,
            length:10,
            stiffness:0.04
        }
        this.sling=Constraint.create(options); 
    World.add(world,this.sling);
    }
display(){
    var pointA=this.sling.bodyA.position;
    var pointB=this.sling.bodyB.position;
    push()
    strokeWeight(4)
line(pointA.x,pointA.y,pointB.x,pointB.y)
pop()
}
    
}
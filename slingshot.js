class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        //VERY IMPORTANT The points have to be declared explicitly 
        this.pointB = pointB;
        World.add(world, this.sling);
    }
    //Whenever fly function is called, there is nothing in bodyA, which means it flew away
    fly(){
     this.sling.bodyA=null;
    }
    attach(body){
        this.sling.bodyA = body;
    
    }

    display(){
        //After it flew, there is only null in that position because it is unknown.
        // We are making the computer work only if there is BIRD in bodyA in conditions
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}
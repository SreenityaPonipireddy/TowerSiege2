class Block{
    //Declaring all of the properties of box
       constructor(x,y, width, height){
              
           var options={
               restitution:0.8,
               density:1.0,
               friction:1.0
           }
           this.Visibility=255;
           //"this" represents something to replace and is replaced with the name
           this.body=Bodies.rectangle(x,y,width,height,options);
           this.height=height;
           this.width=width;
           World.add(world,this.body);

       }

      
       display(){
        
           var pos=this.body.position;
           var angle=this.body.angle;
        
           if(this.body.speed<10){
            push();
            translate(pos.x,pos.y)
                rotate(angle)
                rectMode(CENTER);
                strokeWeight(4);
                stroke("LightBlue");
                fill("LightSeaGreen");
                rect(0,0,this.width,this.height);
            pop();
          }
          else{
            World.remove(world,this.body);
            push();
            this.Visibility = this.Visibility-5;
            pop();
          }
            
          }
    }


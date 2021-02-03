const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
hexagon=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    //level1
    block1=new Block(300,275, 30, 40)
    block2=new Block(330, 275, 30, 40);
    block3=new Block(360, 275, 30, 40);
    block4=new Block(390, 275, 30, 40);
    block5=new Block(420, 275, 30, 40);
    block6=new Block(450, 275, 30, 40);
    block7=new Block(480, 275, 30, 40);
    //level 2
    block8= new Block(330, 235, 30, 40);
    block9 = new Block(360, 235, 30, 40);
    block10=new Block(390, 235, 30, 40);
    block11=new Block(420, 235, 30, 40);
    block12=new Block(450, 235, 30, 40);
    //level 3
    block13=new Block(360, 195, 30, 40);
    block14=new Block(390, 195, 30, 40);
    block15=new Block(420, 195, 30, 40);
    //level 4
    block16=new Block(390, 155, 30, 40);

    //level 1
    block17= new Block(830,135,30,40);
    block18=new Block(860, 135, 30, 40);
    block19=new Block(890, 135, 30, 40);
    block20=new Block(920, 135, 30, 40);
    block21 = new Block(950, 135, 30, 40);
    
    //level 2
    block22 = new Block(860, 75, 30, 40);
    block23 = new Block(890, 75, 30, 40);
    block24 = new Block(920, 75, 30, 40);
   
    //level 3 
     block25 = new Block(890, 15, 30, 40);
    ground1 = new Ground(400, 400, 300, 25);
    ground2 = new Ground(900,300, 200, 25 );


    polygon= Bodies.circle(50, 200, 20);
    World.add(world, polygon);

    slingshot= new SlingShot(polygon,{x:100, y:200});


}
function draw(){
    background("white");
    Engine.update(engine);
    ground1.display();
    ground2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    imageMode(CENTER);
    image(hexagon, polygon.position.x, polygon.position.y,40, 40);   
      slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode===32){
       slingshot.attach(polygon); 
    } 
}   

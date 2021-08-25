const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber;
var rubber1=[]


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer (10,100);
   
    rubber2 = new Rubber(350,10,7);
    rubber3 = new Rubber(350,10,7);
    rubber4 = new Rubber(350,10,7);
    rubber5 = new Rubber(350,10,7);
    rubber6 = new Rubber(350,10,7);
    rubber7 = new Rubber(350,10,7);

   stone = new Stone(700,320,100,100);
   iron = new Iron(750,450);
   iron2 = new Iron(400,350);
   iron3 = new Iron(200,350);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    iron2.display();
    iron3.display();
    rubber2.display("Blue");
    rubber3.display("Blue");
    rubber4.display("Blue");
    rubber5.display("Blue");
    rubber6.display("Blue");
    rubber7.display("Blue");

   




    
 
}
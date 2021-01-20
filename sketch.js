
const Engine = Matter.Engine;
const World = Matter.World;
const Mouse = Matter.Mouse;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render;
const MouseConstraints = Matter.MouseConstraints;


var rope;
var bobObj1, bobObj2,  bobObj3,  bobObj4,  bobObj5;
var bob;
var pendulum1;
var sling1, sling2, sling3, sling4, sling5;



function setup() {
canvas = createCanvas(windowWidth/2 , windowHeight/1.5)
    

	engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options ={
    mouse: canvasmouse
  };
  mConstraint =MouseConstraints.create(engine, options);
  World.add(world, mConstraint);
  
  

  
  pendulum1= new Pendulum(350, 100, 300, 30);
  World.add(world, pendulum1);

	bobObj1= new Bob(250,300);
	bobObj2= new Bob(300,300);
	bobObj3= new Bob(350,300);
	bobObj5= new Bob(450,300); 

   

   sling1=new Sling(bobObj1.body, pendulum1.body, -100, 200);
   World.add(world, sling1);

   sling2=new Sling(bobObj2.body, pendulum1.body, -50, 200);
   World.add(world, sling2);

   sling3=new Sling(bobObj3.body, pendulum1.body, 0, 200);
   World.add(world, sling3);

   sling4=new Sling(bobObj4.body, pendulum1.body, +50,200);
   World.add(world, sling4);

   sling5=new Sling(bobObj5.body, pendulum1.body,+100,200);
   World.add(world, sling5);
   
  
  
  
  Engine.run(engine);
  
  
}


function draw() {
   background("white");
   Engine.update(engine);

   pendulum1.display();

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
 
 
}

function KeyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyforce(bobObj1.body, bobObj1.body.position,{x:-730,y:0})
  }
}

function mouseDragged(){
  Matter.Body.setPosition(pendulum1.body, { x:mouseX, y: mouseY});
}
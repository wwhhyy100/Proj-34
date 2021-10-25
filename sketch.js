const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var left;
var handle_left
var handle_left2
var handle_right
var handle_right2
var right;
var left2
var right2
var topSide;
var ball_options;
var right_wall
var left_wall
var right3
var left3
var groundObj
var right3_handle
var left3_handle

function setup() {
	createCanvas(1280,600);


	engine = Engine.create();
	world = engine.world;

	ball_options={

		isStatic:false,
		restitution:0.5,
		friction:0,
		density:1.2,
		}

	//Create the Bodies Here.
	ball = Bodies.circle(780,400,12,ball_options);

	World.add(world,ball)

  groundObj = new ground(600,600,1360,120);
	left = new ground(600,380,100,20);
  handle_left = new ground(560,330,20,80);
 // handle_left2 = new ground(640,360,20,20);
  handle_right = new ground(740,470,20,20);
  handle_right2 = new ground(820,435,20,90)
	right = new ground(780,490,100,20);
	left2 = new ground(1270,560,50,1000);
	right2 = new ground(1270,560,50,1000);
  top = new ground(650,10,1200,50);
  right_wall = new ground(10,10,50,1060);
  left_wall = new ground(1260,10,50,1060);
  right3 = new ground(740,290,100,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  ellipse(ball.position.x,ball.position.y,12)

  left.show();
  right.show();
  handle_left.show(); 
 // handle_left2.show();
  handle_right.show();
  handle_right2.show();
  right_wall.show();
  left_wall.show();
  right3.show();
 // left3.show();
 groundObj.show();

}


function keyPressed(){

	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-5})
	}	
	else if(keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:3,y:0})
	}
	else if(keyCode===LEFT_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:-3,y:0})
	}
	
}	
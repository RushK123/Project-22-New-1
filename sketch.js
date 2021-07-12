const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, bob1, bob2, bob3, bob4, bob5, bobOptions;
var rope1, rope2, rope3, rope4, rope5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options = {
		isStatic: true
	};

	var bobOptions = {
		restitution : 1,
		density : 0.8,
		isStatic : false
		

	};

	bob1 = Bodies.circle(320, 200, 10, bobOptions);
	World.add(world, bob1);
	bob2 = Bodies.circle(360, 200, 10, bobOptions);
	World.add(world, bob2);
	bob3 = Bodies.circle(400, 200, 10, bobOptions);
	World.add(world, bob3);
	bob4 = Bodies.circle(440, 200, 10,bobOptions);
	World.add(world, bob4);
	bob5 = Bodies.circle(480, 200, 10, bobOptions);
	World.add(world, bob5);

	roof = Bodies.rectangle(400, 100, 600, 20, roof_options);

	Engine.run(engine);


}

function draw() {
	rectMode(CENTER);
	ellipseMode(RADIUS);
	background("#99004d");

	rect(roof.position.x, roof.position.y, 230, 20);

	//call display() to show ropes here


	//create ellipse shape for multiple bobs here
    ellipse(bob1.position.x, bob1.position.y,20);
	rope1 = new Rope(roof, bob1, -80,0);
	rope1.display();
	ellipse(bob2.position.x, bob2.position.y, 20);
	rope2 = new Rope(roof,bob2 , -40, 0 );
	rope2.display();
	ellipse(bob3.position.x, bob3.position.y,20);
	rope3 = new Rope(roof, bob3, 0,0);
	rope3.display();
	ellipse(bob4.position.x, bob4.position.y, 20);
	rope4 = new Rope(roof,bob4 , 40, 0 );
	rope4.display();
	ellipse(bob5.position.x, bob5.position.y,20);
	rope5 = new Rope(roof,bob5, 80, 0);
	rope5.display();

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(bob1, {x:0, y:0}, {x:-5, y:-5})
	}
}
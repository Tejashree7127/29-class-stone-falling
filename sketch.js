const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground
var rightground,rope,jointPoint,jointLink,bridge
var stones=[];

function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  ground= new Base(70,430,400,100)
  rightground= new Base(670,430,400,100)
 // rope = new YellowRope(7,{x:600,y:600})
 bridge= new Bridge(15,{x:displayWidth/2-600,y:displayHeight/2-100})
 jointPoint=new Base(670,430,100,40,20)
 Matter.Composite.add(bridge.body,jointPoint);
 jointLink= new Link(bridge,jointPoint);
/// stone creation
for (var i = 0; i <= 8; i++) {
  var x = random(width / 2 - 200, width / 2 + 300);
  var y = random(-10, 140);
  var stone = new Stone(x, y,40);
  stones.push(stone);
}

}

function draw() {
  background(51);
  Engine.update(engine);
  ground.show();
  rightground.show();
  //rope.show();
  bridge.show();
  //jointPoint.show();

  for (var stone of stones) {
    stone.show();
  }

}







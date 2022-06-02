var fishImg;
var jellyfish;
function preload(){
fishImg = loadImage("fish_640.png");
jellyfishImg = loadImage("jellyfish.png");
}
function setup() {
	 createCanvas(windowWidth, windowHeight);
	 background(100);
}
function draw() {
	
	background("#caf0f8")
	ellipse(windowWidth/2, windowHeight/2,sin(frameCount/4)*300);
	imageMode(CENTER)
	image(jellyfishImg,mouseX,mouseY);
	for(var x=0;x<width;x=x+300){
	for(var y=0;y<height;y=y+300) 
	{
		
		push()
		translate(x,y);
		rotate(sin(frameCount/80+x+y));
		image(fishImg,0,0,200,100);
		pop()
	}
}
}

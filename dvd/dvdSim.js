(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 720,
	height: 540,
	fps: 30,
	color: "#000000",
	manifest: []
};



// symbols:



(lib.dvdLogo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#e5e500").s().p("AHIDyIAAgWIgBAAIgIAWIgDAAIgJgWIAAAWIgEAAIAAgbIAHAAIAIAVIAHgVIAHAAIAAAbgAGdDyIAAgXIgIAAIAAgEIAUAAIAAAEIgIAAIAAAXgAmDDTQiVgVAAgfQAAgeCVgWQCTgVDQAAIhgkNIgFAAIAFAVQADAKABAWIgBAMQgDAQgHAQQgXAyg5AbQg1AXhJAIIinADIAsi7IBoAAIgdCDIAYAAQAdgCAYgHQBOgVADg/QACgog+gNQgTgFgYgBIh8AAIAOg6IGKAAIA3CwICHiwIDlAAIAqAFQAwAJAhAUQAeASALAfQAFAQgBAMIgBAMQgEAQgHAQQgXAyg5AbQg1AXhJAIIimADIAri7IBpAAIgeCDIAYAAQAdgCAYgHQBPgVADg/QACgog/gNQgTgFgYgBIh8AAIjqENIADAAQDRAACUAVQCVAWAAAeQAAAfiVAVQiUAVjRAAQjSAAiUgVgACzCDQgSAMAAAQQAAATARAMQAQAMAaAAQAZAAARgMQARgMAAgTQAAgQgSgMQgRgLgYABQgYgBgRALgAAxDHIA8AAIAAgQIghAAIAAgOIAfAAIAAgRIgfAAIAAgMIAhAAIAAgRIg8AAgAhgDHIAnAAQAXAAAQgLQAPgLAAgQQAAgPgPgMQgQgLgXAAIgnAAgAi2DHIAcAAIAAhMIgcAAgAkoDHIAVAAIAuhMIgeAAIgaAuIgZguIgfAAgADHCwQgJgHAAgKQAAgHAJgGQAJgGAMAAQAMAAAJAGQAJAGAAAHQAAAKgJAHQgJAGgMABQgNgBgIgGgAhEC3IAAgrIAGAAQAOAAAIAGQAJAFAAAKQAAALgKAFQgIAGgNAAg");
	this.shape.setTransform(53.8,24.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107.5,48.5);


// stage content:
(lib.dvdSim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Animate Horizontally
				Moves the symbol instance left or right across the stage by decreasing or increasing its x property within an Tick event.
				
				Instructions:
				1. The default direction of the animation is to the right.
				2. To change the direction of the animation to the left, change the number 10 below to a negative value.
				3. To change the speed at which the symbol instance moves, change the number 10 below to the number of pixels you want the symbol instance to move in each frame.
				4. Because the animation uses an Tick event, it progresses only when the playhead moves to a new frame. The speed of the animation is also affected by the document frame rate.
				*/
				var hitCounter = 0;
				var cornerHit = 0;
				var halfWidth = 107/2;
				var halfHeight = 48/2;
				var randomX = Math.floor((Math.random() * 720 - halfWidth) + 1 + halfWidth);
				var randomY = Math.floor((Math.random() * 540 - halfHeight) + 1 + halfHeight);
				var loopLength = "Not yet calculated";
				var initalCornerStrike = 0;
				var showStats = true;
				this.movieClip_1.x = randomX;
				this.movieClip_1.y = randomY;
				
				this.compText.text = "";
				
				var xval = "Right";
				var yval = "Down";
				this.addEventListener("tick", fl_AnimateHorizontally.bind(this));
				
				function fl_AnimateHorizontally()
				{
					currentX = xval;
					currentY = yval;
					
					if(this.movieClip_1.y + halfHeight >= 540){
						yval = "Up";
					}
					if(this.movieClip_1.y - halfHeight <= 0){
						yval = "Down";
					}
					if(this.movieClip_1.x + halfWidth >= 720){
						xval = "Left";
					}
					if(this.movieClip_1.x - halfWidth <= 0){
						xval = "Right";
					}
					
					
					if(currentX != xval || currentY != yval){++hitCounter}

					if(xval == "Right"){
					this.movieClip_1.x+=2;
					}else{
						this.movieClip_1.x-=2;
					}
					if(yval == "Down"){
					this.movieClip_1.y+=2;
					}else{
						this.movieClip_1.y-=2;
					}
					
					if(showStats == true){
						this.statBox.text = "Wall Hits: "+hitCounter+"\nCorner Hits: "+cornerHit;
						this.statBox.visible = true;
					}else{
						this.statBox.visible = false;
					}
				}
		
		
		this.movieClip_1.addEventListener("click", fl_showStats);
		
		function fl_showStats() {
			if(showStats == true){
				showStats = false;
				}
			else if(showStats == false){
				showStats = true;
				}
		
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.statBox = new cjs.Text("test", "bold 18px 'Ubuntu Mono'", "#FFFFFF");
	this.statBox.name = "statBox";
	this.statBox.lineHeight = 20;
	this.statBox.lineWidth = 336;
	this.statBox.setTransform(10,494);

	this.compText = new cjs.Text("Hello", "bold 20px 'Oriya Sangam MN'", "#FFFFFF");
	this.compText.name = "compText";
	this.compText.textAlign = "center";
	this.compText.lineHeight = 22;
	this.compText.lineWidth = 715;
	this.compText.setTransform(357.5,145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.compText},{t:this.statBox}]}).wait(1));

	// Layer 1
	this.movieClip_1 = new lib.dvdLogo();
	this.movieClip_1.setTransform(61,37.4,1,1,0,0,0,53.8,24.2);
	this.movieClip_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(360,280.2,719,526.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
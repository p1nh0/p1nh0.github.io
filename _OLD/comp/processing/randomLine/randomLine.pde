float w, h; // width and height
float randomX; // random X position
int time, ptime = 0, count = 0; // timer variables
int maxTime = 30; // 30 seconds 
float ftime; // the time of each frame
boolean clicked = false;
void setup(){
	//size(screen.width, screen.height);
	size(window.innerWidth, window.innerHeight);
	frameRate(30);

	strokeWeight(2);
	stroke(255);
	w = width;
	h = height;
	//ftime = (int)frameRate * 5; 
}

void draw(){
	background(0);
	drawLine();

	if(clicked == true && count < maxTime){
		timer();
	}
}

void mousePressed(){
	clicked = true;
	ftime = frameRate - 5; // got 5 heuristically to compensate any timing deviations
}

void timer(){
	time = second();
	if (time != ptime){ 
		count++; 
		ptime = time;
		//println("timer: "+count+" s"); 
	}
	// decrement w and h
	if(w>0 && h>height/2) {
		w -= width/(ftime * maxTime);
		h -= height/(ftime * maxTime* 2.0);
	}
    else{ link("../home.html"); }
}

void drawLine(){
	randomX = random(0, w)-(w/2.0) ;
	line(width/2+randomX, h, width/2+randomX, height-h);
}
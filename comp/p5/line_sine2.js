var w, h; // width and height
var randomX; // random X position
var time, ptime = 0, count = 0; // timer variables
var maxTime = 15; // 30 seconds 
var ftime; // the time of each frame
var clicked = false;

var osc; // carrier 
var lfo1; // modulator
var lfo2; // modulates lfo1.freq
var sub; // sub frequency
var lp; // low pass filter
var ffreq = 16000; // filter frequency
var fr = 25; // frame rate
var oscAmp = 0.00001;
var subAmp = 0.3;
var lfoAmp = 0.1; 

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(fr);

  	strokeWeight(2);
	stroke(255);
	w = windowWidth;
	h = windowHeight;

	osc = new p5.Oscillator();
	osc.setType('sine');
	osc.freq(4444);
	osc.amp(oscAmp);
	// osc.start();

	sub = new p5.Oscillator();
	sub.setType('sine');
	// sub.freq(112);
	sub.freq(60);
	sub.amp(subAmp);
	// sub.start();

	lp = new p5.LowPass();
	lp.freq(ffreq); // 10Hz is the minimum frequency 
	lp.res(1.6);
	osc.disconnect();
	sub.disconnect();
	osc.connect(lp);
	sub.connect(lp);
	osc.start();
	sub.start();

	lfo1 = new p5.Oscillator();
	lfo1.setType('triangle');
	lfo1.freq(6);
	lfo1.amp(lfoAmp);
	lfo1.start();

	// lfo2 = new p5.Noise();
	// lfo2.setType('pink');
	// lfo2.disconnect();
	// lfo2.connect(lp);
	// lfo2.start();	

}

function draw() {
	// background(255);
	// rect(50,50,windowWidth-100,windowHeight-100);
	// lfo1.freq(lfo2);
	lp.freq(ffreq);
	lfo1.freq(randomX/windowWidth*16);
	osc.amp(lfo1);



	background(0);
	drawLine();

	if(clicked == true && count < maxTime){
		timer();
		// ffreq-= (44100.0 / maxTime*fr);
		ffreq -= (16000 / (maxTime*fr)) * 2;
		oscAmp -= (0.00005 / (maxTime*fr));
		lfoAmp -= (0.1 / (maxTime*fr));
		subAmp -= (4 / (maxTime*fr));
		osc.amp(oscAmp);
		sub.amp(subAmp);
		lp.freq(ffreq);
	}
}

function mousePressed(){
	clicked = true;
	ftime = 25; // got 5 heuristically to compensate any timing deviations
}

function timer(){
	time = second();
	if (time != ptime){ 
		count++; 
		ptime = time;
		//println("timer: "+count+" s"); 
	}
	// decrement w and h
	if(w>0 && h>height/2) {
		w -= width/(ftime * maxTime);
		// h -= height/(ftime * maxTime* 2.0);
		h -= height/(ftime * maxTime);
	}
    else{ 
      	setTimeout(function() {
      		sub.stop();
   			lp.stop();
   			lfo1.stop();
   			osc.stop();
		}, 100);	
      	
      	setTimeout(function() {
      		window.location.href= "../home.html";
		}, 100); // p5.sound seems to need some time to shutdown in order not to produce clicks when jumping to another page	 
    }
}

function drawLine(){
	randomX = random(w)-(w/2.0) ;
	line(windowWidth/2+randomX, h, windowWidth/2+randomX, windowHeight-h);
}
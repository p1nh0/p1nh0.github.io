int c;
int screenSize;

float w, h, vmax; // width, height and view port max
int time, ptime = 0, count = 0; // timer variables
int maxTime = 60; // 30 seconds 
float ftime; // the time of each frame
boolean clicked = false;

float screenProportion;

void setup(){
  size(window.innerWidth, window.innerHeight);
  //size(860, 640);
  screenSize = width*height;
  w = width;
  h = height;
  if ( w > h) { 
    screenProportion = w / h;
    vmax = w/4; 
  }
  else { 
    screenProportion = h / w;
    vmax = h/4;
  }

  frameRate(20);
}

void draw(){
  background(0);

  if(clicked == true){
    timer();
  }

  loadPixels();
  for(int i=0; i< screenSize; i++){
    if (i%width < w && 
        i%width> width-w && 
        i/width > height-h &&
        i/width < h)
    {
    //if (i%width < w && height/(i+1) < h){
      c = (int)random(255);
      pixels[i] = color(c, c, c);
    }
    //pixels[i] = c;
  }
  updatePixels();
  
}

void mousePressed(){
  clicked = true;
}

void timer(){
  ftime = frameRate - 7.5; // got 7.5 heuristically to compensate any timing deviations

  time = second();
  if (time != ptime){ 
    count++; 
    ptime = time;
    //println("timer: "+count+" s"); 
  }
  
  // decrement w and h
  if(w>0 && h>height/2) {
    w -= vmax/ (ftime * maxTime) * screenProportion;
    h -= vmax/ (ftime * maxTime);
  }
    else{ link("../home.html"); }
  }

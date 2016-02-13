/* this was supposed to test processingjs w/ P3D*/
float w = 0;
int h;
float rot = 0, z = 1;
float screenSize; 
int currentMouse;

int time, ptime = 0, count = 0; // timer variables
int maxTime = 25; // 30 seconds 
float ftime; // the time of each frame
boolean clicked = false;

void setup(){ 

  size(window.innerWidth, window.innerHeight, P3D);
  //size(640, 480, OPENGL);
  //w = window.innerWidth;
  //h = window.innerHeight;
  w = width;
  h = height; 
  screenSize = (w * h) / 64; // got 64 heuristically to determine where the object disappears in the z-axis 

  noFill();
  stroke(255);
  frameRate(42); // "bpm"=60*0.7
}

void draw(){
    background(0);
    if(clicked == true && count < maxTime){
      timer();
    }

    rot += sin(mouseX/w);
    pushMatrix();
     if(clicked == false) {
      translate(w/2, h/2, (h/2 - mouseY<<1));
     }
     else{
      translate(w/2, h/2, currentMouse - z);
     }
     //rotateY(sin(mouseX));
     rotateY(rot);
     box(w, h, - h*2);
    popMatrix();   
}

void mousePressed(){
  clicked = true;
  ftime = frameRate - 5; // got 5 heuristically to compensate any timing deviations
  currentMouse = h/2 - mouseY<<1;
}

void timer(){
  time = second();
  if (time != ptime){ 
    count++; 
    ptime = time;
    //println("timer: "+count+" s");    
  }
  // decrement w and h
  //if(w>0 && h>height) {
    //z *= 1.05;
    if (z< screenSize){
      z += screenSize/(maxTime*ftime);
    }
    else{ link("../home.html"); }
    
    //println("z = "+z);
    //w -= width/(ftime * maxTime);
    //h -= height/(ftime * maxTime* 2.0);
  //}
  
}
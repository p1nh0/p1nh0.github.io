import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class screenNoise extends PApplet {

int c;
int screenSize;

float w, h, vmax; // width, height and view port max
int time, ptime = 0, count = 0; // timer variables
int maxTime = 25; // 30 seconds 
float ftime; // the time of each frame
boolean clicked = false;

float screenProportion;

public void setup(){
  //size(window.innerWidth, window.innerHeight);
  size(860, 640);
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

public void draw(){
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

public void mousePressed(){
  clicked = true;
}

public void timer(){
  ftime = frameRate - 7.5f; // got 7.5 heuristically to compensate any timing deviations

  time = second();
  if (time != ptime){ 
    count++; 
    ptime = time;
    println("timer: "+count+" s"); 
  }
  
  // decrement w and h
  if(w>0 && h>height/2) {
    w -= vmax/ (ftime * maxTime) * screenProportion;
    h -= vmax/ (ftime * maxTime);
  }
  //else{ link("http://www.tiagoangelo.byethost15.com/home.html"); }
}
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "screenNoise" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}

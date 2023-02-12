int particles = 50;
Particle[] p;

void setup(){
  size(640, 480);
  p = new Particle[particles];
  for (int i = 0; i < particles; i++){
    p[i] = new Particle(255, 4, 20+(int)random(80), random(5)+1.f);
  }
}

void draw(){
  background(0);
  for (int i = 0; i < particles; i++){
    p[i].orbit(mouseX, mouseY);
    p[i].draw();
  }
}

class Particle{
  PVector pos;
  int counter;
  int dist; // distance
  float spd; // speed
    
  Particle(int c, int w, int d, float s){ // constructor
    stroke(c);
    strokeWeight(w);
    dist = d;
    spd = s;
    pos = new PVector(random(width), random(height));
  } 

  void orbit(int x, int y){
    pos.x = x + cos(radians(counter)) * dist; 
    pos.y = y + sin(radians(counter)) * dist;
    counter+= spd;
    if(counter == 360){ counter = 0; }
  }
  
  void draw(){
    point(pos.x, pos.y);
  }
}

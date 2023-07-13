let compSize = 5;
let translateX;
let translateY;

function setup() {
  createCanvas(windowWidth-compSize, windowHeight-compSize,WEBGL);
  colorMode(HSL, 100);
  
  // Vert or Hor
  if(windowWidth >= windowHeight) {
  translateX = width / 5;
  translateY = 0;
  }
  else{
  translateY = height /5;
  translateX = 0;
  }
}

function draw() {
  
  //UPDATE
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;

  
  
  
  background(0);


  
  
  pointLight ( map(mouseX,0, width, 0, 100) ,100,50, locX, locY, 130);
 

  push(); 
  translate(translateX, translateY, 0);
  ambientMaterial(100,0,100);
  sphere(120,40);
  pop();
  
  push(); 
  translate(-translateX, -translateY, 0);
  ambientMaterial(100,0,100);
  sphere(120,40);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth-compSize, windowHeight-compSize);
    // Vert or Hor
  if(windowWidth >= windowHeight) {
  translateX = width / 5;
  translateY = 0;
  }
  else{
  translateY = height /5;
  translateX = 0;
  }
}

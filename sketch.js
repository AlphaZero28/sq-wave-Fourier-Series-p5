// initializing the time and wave variable
let time= 0;
let wave =[];
//let wave2=[];

function setup() {
	createCanvas(600,400); // creating canvas 
}

function draw() {
	background(1);
	translate(200,200);

  let x = 0;
  let y = 0;
  
  // generating i no of epicyles and sum them up
  for (let i=0;i<50;i++){
    let prevx = x;
    let prevy = y;

    let n = i*2+1;
    let radius = 70 * (4/(n*PI));

    // x and y coordinate of the epicycles
    x += radius * cos(n* time);
    y += radius * sin(n* time);
    

    stroke(255,100);
    noFill();
    ellipse(prevx,prevy,radius*2);

    stroke(255);
    line(prevx,prevy,x,y);
    //ellipse(x,y,8);
  
    
  }
  
  wave.unshift(y);
  

  translate(100,0);
  line(x-100,y,0,wave[0])
  beginShape();
  noFill();

  // drawing the waveform
  for (let i=0;i<wave.length; i++){
      vertex(i,wave[i]);
  
  }
  endShape();
	time +=0.05; // time increment


  if (wave.length > 300) {
    wave.pop();
  }
}
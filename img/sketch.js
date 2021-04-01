let cloudPic;
let drCanvas;

function preload(){
  cloudPic = loadImage('img/cu_cloud.png');
}

function setup(){
  drCanvas = createCanvas(800, 800);
  drCanvas.parent('draggable');
  imageMode(CENTER);
  // background(137, 201, 230);
}

function draw(){
  if(mouseX > 100 && mouseX < width - 100 && mouseY > 70 && mouseY < height - 70){
    image(cloudPic, mouseX, mouseY);
  }

  let fc = frameCount;
  fill(235, 255, 0);
  noStroke();
  rectMode(CENTER);
  textAlign(CENTER);
  textSize(20);
  if(fc < 11){
    let xPos = random(150, width - 150);
    let yPos = random(130, height - 130);
    text(fc, xPos, yPos);
    square(xPos, yPos + 15, 10, 55);
  }



}


let counter = 0;
let ellipse = document.getElementById('canvasCircle');
let pointer = document.getElementById('canvasPointer');
pointer.addEventListener('click', () => {

  if(counter % 2 == 0){
    drCanvas.parent('canvas-parent');
    drCanvas.style('top', '50%');
    drCanvas.style('left', '50%');
    drCanvas.style('transform', 'translate(-50%, -50%)');

    document.getElementById('canvas-parent').appendChild(ellipse);
    ellipse.style.top = '50%';
    ellipse.style.left = '50%';
    ellipse.style.transform = 'translate(-50%, -50%)';

    document.getElementById('canvas-parent').appendChild(pointer);
    pointer.style.top = '48%';
    pointer.style.left = '82%';
    pointer.style.transform = 'rotate(0deg)';

    counter++;
  } else {
    drCanvas.parent('draggable');
    drCanvas.style('top', '500px');
    drCanvas.style('left', '-1000px');
    drCanvas.style('transform', 'unset');

    document.getElementById('draggable').appendChild(ellipse);
    ellipse.style.top = '500px';
    ellipse.style.left = '-1000px';
    ellipse.style.transform = 'unset';


    document.getElementById('draggable').appendChild(pointer);
    pointer.style.top = '500px';
    pointer.style.left = '-300px';
    pointer.style.transform = 'rotate(135deg)';

    counter++;
  }



})

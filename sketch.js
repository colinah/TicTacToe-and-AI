function setup() {
    createCanvas(width,width);
  }
  
  function draw() {
      stroke(4)
      line(width/3,0,width/3,width);
      line(0,width/3,width,width/3);
      line((width/3)*2,0,(width/3*2),width);
      line(0,(width/3)*2,width,(width/3*2));
      if(mouseIsPressed){
          fill(0)

      }else(
          fill(255)
      )
      ellipse(mouseX,mouseY,10)

  }


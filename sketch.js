function setup() {
    createCanvas(width,width);
  }
  
  function draw() {
      line()
      if(mouseIsPressed){
          fill(0)

      }else(
          fill(255)
      )
      ellipse(mouseX,mouseY,10)

  }


function setup() {
    createCanvas(500, 400);
  }
  function iniciarCor() {
    background(220);
    fill ("black");
    textSize(89);
     textAlign(CENTER, CENTER);
  }
  
  function draw() {
    iniciarCor();
    
   let maximo = width;
   let minimo = 0;
    
     let palavra = "manda a prova";
   let quantidade = map (mouseX, 0, width, 1 , palavra.length);
  // console.log(quantidade);
    
    let parcial = palavra.substring(0, quantidade)
    text (parcial, 200, 200)
    //if (mouseX < 50) {
    //let palavra = "p"
    //text(palavra, 200 , 200);
    
    //} else {
      //let palavra = "ponto";
    //text(palavra, 200 , 200);
  }
  
      
var x=0,y=50;
estado="bajando";
function comenzar(){
    var elemento = document.getElementById("canvascuadros");
    canvas=elemento.getContext("2d");
    setInterval (animacion,500);

}
function animacion(){
    x+=20;
    if(x>=900)
    {
        x=0;
    }
    if(y<295 &&estado=="bajando" )//bajando 
    {
    canvas.clearRect(0,0,1200,900);

    canvas.beginPath();//comenzar un trazado 
    canvas.arc(x,y+2,7,0,Math.PI*2,false);//dibuja una esfera
    
    canvas.arc(900-x,y,10,0,Math.PI*2,false);//dibuja una esfera
    
    canvas.fillStyle = "green";
    canvas.fill();
    y+=40;
       
    }
    if(y>=295){
        estado="subiendo"; 

    }
    if(estado =="subiendo")
    {
    canvas.clearRect(0,0,1200,900);

    canvas.beginPath();//comenzar un trazado 
    canvas.arc(x,y+2,7,0,Math.PI*2,false);//dibuja una esfera
    
    canvas.arc(900-x,y,10,0,Math.PI*2,false);//dibuja una esfera

    
    canvas.fillStyle = "blue";
    canvas.fill();
    y-=40;
    }
    if(y<=50){
        estado="bajando";
    }

    

    canvas.rect(x+y-100, 20, 50, 20);
    canvas.fill();

    

    canvas.rect(300, 100, 100-x/5, 100-x/5);
    canvas.fill();
    
    canvas.rect(100, 100, 100-x/7, 100-x/7);
    canvas.fill();
    canvas.rect(500, 100, 100-x/6, 100-x/6);
    canvas.fill();
    canvas.rect(700, 100, 100-x/5, 100-x/6);
    canvas.fill();
    
}
window.addEventListener("load",comenzar,false);

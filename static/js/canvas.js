var cvn,ctx,p_x=0,img;
function anim(){
  ctx.clearRect(0, 0, canvas1.width, 200);
  ctx.drawImage(img, p_x, 0,'25',190);

if( canvas1.width<=p_x)
{
  p_x=0;
}
else{
  p_x+=1;
}
  
  setTimeout(anim,100);
}

window.onload=function(){

  img = new Image();
  var a = '../img/logo.png'
			img.src = a;
      cnv = document.getElementById('canvas1');
			ctx = cnv.getContext('2d');
			// iniciar la animación
			anim();
}



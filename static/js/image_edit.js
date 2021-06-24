var cnv1;
var ctx1;
function beginning()
{
	can1 = document.getElementById("canvasjuan");
	ctx1 = can1.getContext("2d");
  var pic = new Image();
  pic.src = 'img/galaxy_pic2.jpg';

	pic.addEventListener('load', function()
	{
    ctx1.drawImage(pic, 0, 10);
    var aux = ctx1.getImageData(left, top, width, height);
	for (var i = 0; i < aux.data.length; i ++)
	{
	       aux.data[i]     = 255 - aux.data[i];     // red
	       aux.data[i + 1] = 2 + aux.data[i + 1]; // green
	       aux.data[i + 2] = 255 + aux.data[i + 2]; // blue
		   aux.data[i + 3] = 255;
	    }
		/*Esta fue lo  que probablemente tardó más tiempo
		No por lo complicado de escribir, sino por la búsqueda
		del código necesario. Busqué en las siguientes páginas:
		https://www.w3schools.com/jsref/canvas_getimagedata.asp
		https://www.w3schools.com/jsref/tryit.asp?filename=tryhtml5_canvas_getimagedata
		https://www.w3schools.com/css/css_image_transparency.asp
		https://betterprogramming.pub/how-to-change-the-color-of-an-image-with-css-83664f6527ac
		file:///D:/10)%20Desarrollo%20Web/Codigo%20Del%20Profe/Imagen/Imagen/index.html
		https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
		Chequé el código que usted hizo en clase y no funcionó
		Chequé el código de la página original donde se describe este proceso, sin suerte alguna
		Descargué este último código, descargué la imagen adjuntada, y al final descubrí que el proceso que aparece en la página
		únicamente cambia el color del fondo del canvas, no de la propia imagen:

		<!DOCTYPE html>
		<html>
		<body>

		<img id="scream" src="img/img_the_scream.jpg" alt="The Scream" width="220" height="277">
		<canvas id="myCanvas" width="220" height="277" style="border:1px solid #d3d3d3;">
		Your browser does not support the HTML5 canvas tag.</canvas>

		<script>
		document.getElementById("scream").onload = function()
		{
		  var c = document.getElementById("myCanvas");
		  var ctx = c.getContext("2d");
		  var img = document.getElementById("scream");
		  //ctx.drawImage(img, 50, 50);
		  var imgData = ctx.getImageData(0, 0, c.width, c.height);

		  // invert colors
		  var i;
		  for (i = 0; i < imgData.data.length; i += 4)
		  {
		    imgData.data[i] = 250 - imgData.data[i];
		    imgData.data[i+1] = 2 - imgData.data[i+1];
		    imgData.data[i+2] = 250 - imgData.data[i+2];
		    imgData.data[i+3] = 255;
			}
		  ctx.putImageData(imgData, 0, 0);
		};
		</script>

		</body>
		</html>

*/
	}, false);
	 ctx1.drawImage(pic, 0, 10);
}

addEventListener("DOMContentLoaded", beginning, false);

//Another one for pixels

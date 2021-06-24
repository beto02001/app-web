var cnv2;
var ctx2;
function inicio()
{
	cnv2 = document.getElementById("canvastu");
	ctx2 = cnv2.getContext("2d");
	dibuja1();
	
}
function dibuja1()
{
	var x;
	var y;
	var z;
	var a;
	var b;
	var c;
for(a=0; a<=300; a+=10)
{
	ctx2.moveTo(a,300);
	ctx2.lineTo(0, a);
}

for(x=0; x<=300; x+=10)
{
	ctx2.moveTo(300, x);
	ctx2.lineTo(x, 0);
}

for(y = 300; y>=0; y-=10)
{

	for(z=0; z<=300; z+=10)
	{
		if(z+y==300)
		{
			ctx2.moveTo(y, 0);
			ctx2.lineTo(0, z);
		}
	}
}

for(b=0; b<=300; b+=10)
{
	for(c=300; c>=0; c-=10)
	{
		if(b+c==300)
		{
			ctx2.moveTo(300, c);
			ctx2.lineTo(b, 300);
		}
	}
}
	ctx2.stroke();
}


addEventListener("load", inicio, false);

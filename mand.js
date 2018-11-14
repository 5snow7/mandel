let cd,cg,c1,c2,c3,c4,c5,c6,c7,c8,c9;
function start(){
  c5=new comp(-.5,.57);cd=new comp(.486,-.54);
  c3= new comp(-.12,.75);cg=new comp(.3,-.4);
  c7=new comp(-.62,.42);c2=new comp(-.1,.8);
  c6=new comp(.4,.22);c8=new comp(.455,.855);
  c1=new comp(0,.24);c4=new comp(.27,.53);
  c9=new comp(-.68,.34);	
	
}

function m1(w){
let dx=w/width;let h=w*height/width;
let dy=h/height;
loadPixels();
for(let j=0;j<width;j++){
	for(let k=0;k<height;k++){
let z=new comp(0,0);
z.real=-w/2+j*dx;z.imag=-h/2+k*dy;
let ch=z.check(z,z);
let loc=(j+k*width)*4;
if(ch>=100)
{pixels[loc]=255;pixels[loc+1]=0;pixels[loc+2]=0;
pixels[loc+3]=250;}
else{pixels[loc]=ch*50%255;pixels[loc+1]=0;
pixels[loc+2]=255-ch*50%255;pixels[loc+3]=250;}
	}}
		updatePixels();
	}
	
function j1(w,c){
let dx=w/width;let h=w*height/width;
let dy=h/height;
loadPixels();
for(let j=0;j<width;j++){
	for(let k=0;k<height;k++){
let z=new comp(0,0);
z.real=-w/2+j*dx;z.imag=-h/2+k*dy;
let ch=z.check(z,c);
let loc=(j+k*width)*4;
if(ch>=100)
{pixels[loc]=255;pixels[loc+1]=0;pixels[loc+2]=0;
pixels[loc+3]=250;}
else{pixels[loc]=ch*50%255;pixels[loc+1]=0;
pixels[loc+2]=255-ch*50%255;pixels[loc+3]=250;}
		}}
		updatePixels();
	}

function jS(w,c){
let dx=w/width;let h=w*height/width;
let dy=h/height;
loadPixels();
for(let j=0;j<width;j++){
	for(let k=0;k<height;k++){
let z=new comp(0,0);
z.real=-w/2+j*dx;z.imag=-h/2+k*dy;
let ch=z.checkSinz(z,c);
let loc=(j+k*width)*4;
if(ch>=100)
{pixels[loc]=255;pixels[loc+1]=0;pixels[loc+2]=0;
pixels[loc+3]=250;}
else{pixels[loc]=ch*50%255;pixels[loc+1]=0;
pixels[loc+2]=255-ch*50%255;pixels[loc+3]=250;}
		}}
		updatePixels();
	}
	
	
function gTest(){
loadPixels();let ch=10;
for(let j=0;j<width;j++){
	for(let k=0;k<height;k++){
let loc=(j+k*width)*4;
pixels[loc]=255;pixels[loc+1]=0;pixels[loc+2]=0;
pixels[loc+3]=250;
pixels[loc]=ch*50%255;pixels[loc+1]=0;
pixels[loc+2]=255-ch*50%255;pixels[loc+3]=250;
		}}
		updatePixels();
}
	
	

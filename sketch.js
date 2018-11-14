let z1,z2;
let can;
function setup(){start();textSize(24);
can=createCanvas(800,500);can.class('bdd');
can.position(20,20);pixelDensity(1);
z1=new comp(1.3,.4);
z2=new comp(-.2,.1);
z1=z1.add(z2);
text(z1.real+"  "+z1.imag,50,50);	
text(z1.check(z1,z2),50,70);
text(z1.real+"  "+z1.imag,50,50);	
jS(4,c7);
//m1(4);
//gTest();
}

function draw(){
	//text(key,40,40);
text(key,30,30);
	}


function keyPressed(){
	
if(key=='m'){m1(4);}//save("mandel1.jpg");}
if(key==5){j1(4,c5);}
if(key==3){j1(4,c3);}
if(key==1){j1(4,c1);}
if(key==7){j1(4,c7);}
if(key==6){j1(4,c6);}
if(key==2){j1(4,c2);}
if(key==4){j1(4,c4);}
if(key=='P'){j1(4,cg);}
if(key=='Q'){j1(4,cd);}
if(key==8){j1(4,c8);}
if(key==9){j1(4,c9);}
if(key==0){m1(4);}

if(key=='A'){jS(4,c1);}
if(key=='B'){jS(4,c2);}
if(key=='C'){jS(4,c3);}
if(key=='D'){jS(4,c4);}
if(key=='E'){jS(4,c5);}
if(key=='F'){jS(4,c6);}
if(key=='G'){jS(4,c7);}
if(key=='H'){jS(4,c8);}
if(key=='I'){jS(4,c9);}
}

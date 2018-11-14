class comp{
	
constructor(r,i){
this.real=r;this.imag=i;
}	

add(c){
let temp=new comp(0,0);
temp.real=this.real+c.real;
temp.imag=this.imag+c.imag;
return temp;
}	

sub(c){
let temp=new comp(0,0);
temp.real=this.real-c.real;
temp.imag=this.imag-c.imag;
return temp;
}

mult(c){
let temp=new comp(0,0);
temp.real=this.real*c.real-this.imag*c.imag;
temp.imag=this.real*c.imag+this.imag*c.real;
return temp;
}	

mag(){
return this.real*this.real+this.imag*this.imag;	
}

check(c,z){
let j=1;
while(j<100){
c=(c.mult(c,z)).add(z);
if(c.mag()>16){return j;}
j++;
}
return j;
}	


sinh(x){
  return (Math.exp(x)-Math.exp(-x))/2;
}
  
cosh(x){
    return (Math.exp(x)+Math.exp(-x))/2;
}
    
sinz(z){
  let temp=new comp(0,0);
 temp.real= Math.sin(z.real)*z.cosh(z.imag);
 temp.imag=Math.cos(z.real)*z.sinh(z.imag);
      return temp;
}
	
checkSinz(c,z){
 let j=1;
 
 while(j<100){
   
   c=(c.mult(c.sinz(c))).add(z);
  
   
  if(c.mag()>16){return j;}
  
  j++;  
  }
  return j;
}

}
let n=parseInt(prompt("enter the length of a number"));
let a=parseInt(prompt("enter a number"));
let b,c,d;
b=a;
d=0;
for(i=1;b!=0;i++){
    c=b%10;
    b=(b-c)/10;
    c=c**n;
    d=c+d;
}
if(d==a){
    console.log("given number is armstrong");
}
else{
    console.log("given number is not a armstrong")
}
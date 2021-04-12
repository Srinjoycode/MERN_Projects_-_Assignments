var init=2;
var jumps=5;
var n=0;
console.log(init);
var num=2;
var jump_length=1 ;
while(n<jumps){
    console.log(num+2*(jump_length+1));
    n++;
    num=num+2*(jump_length+1);
    jump_length+=2;
    
}
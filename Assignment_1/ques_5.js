var num=98756;

var n= num;
var rev = 0, rem;
while (n>0)
{
rem = n % 10;
rev = rev * 10 + rem ;
n = Math.floor(n/10);
}
console.log(rev);
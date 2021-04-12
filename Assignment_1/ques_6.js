var num=98756;

var n= num;
var digits = 0, rem;
while (n>0)
{

digits++;
n = Math.floor(n/10);
}
console.log(digits);
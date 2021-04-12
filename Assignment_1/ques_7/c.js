var n=5;
var i=0;
while(i<n){
    
    let l=i;
    while(l<n){
        process.stdout.write(" ");
        l++;
    }
    let j=1;
    while(j<=i+1){
        process.stdout.write(j.toString());
        j++;
    }
    let k=i;
    while(k>=1){
        process.stdout.write(k.toString());
        k--;
    }
    process.stdout.write("\n");
    i++;
}
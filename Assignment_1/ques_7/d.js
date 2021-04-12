var n=5;
var i=0;
while(i<=n){
    
    let l=i;
    while(l<n){
        process.stdout.write(" ");
        l++;
    }
    let j=i;
    while(j<2*i-1){
        process.stdout.write(j.toString());
        j++;
    }
    let k=2*i-1;
    while(k>=i){
        process.stdout.write(k.toString());
        k--;
    }
    process.stdout.write("\n");
    i++;
}
let n=5;
let i=0;
while(i<n){
    var j=1;
    while(j<=i+1){
        process.stdout.write(j.toString());
        process.stdout.write("\t");
        j++;
    }
    process.stdout.write("\n");
    i++;
}
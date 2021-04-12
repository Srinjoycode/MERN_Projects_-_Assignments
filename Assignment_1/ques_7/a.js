let n=5;
let i=0;
while(i<n){
    let j=0;
    while(j<=i){
        process.stdout.write("*");
        process.stdout.write("\t");
        j++;
    }
    process.stdout.write("\n");
    i++;
}
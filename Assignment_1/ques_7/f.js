let n=5;
let i=0;
while(i<=n){
    let k=i;
    while(k<=n){
        process.stdout.write(" ");
        k++;
    }
    let j=0
    while(j<i){
        process.stdout.write("*");
        j++;
    }
    let l=1;
    while(l<i){
        process.stdout.write("*")
        l++;
    }
    process.stdout.write("\n");
    i++;
}
let x=0
while(x<=n){
    let k=0;
    while(k<=x){
        process.stdout.write(" ");
        k++;
    }
    let j=n-1;
    while(j>x){
        process.stdout.write("*");
        j--;
    }
    let l=n-1;
    while(l>=x){
        process.stdout.write("*")
        l--;
    }
    process.stdout.write("\n");
    x++;
}

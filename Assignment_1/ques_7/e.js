let n=5;
let i=0;
while(i<=n){
    
    
    for(j=0; j<=i; j++){
    if(j==0 || i==0)
     count=1;
    else
      count=count*(i-j+1)/j;
      process.stdout.write(count.toString());
      process.stdout.write(" ")
    }
    process.stdout.write("\n");
    i++;    
}
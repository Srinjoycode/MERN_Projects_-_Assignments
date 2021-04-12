let n=5;
for(let i=0;i<n;i++){
    for(let j=i;j<n;j++){
        process.stdout.write('*');

    }
    for(let j=i;j>0;j--){
        process.stdout.write(' ');

    }
    for(let j=i;j>0;j--){
        process.stdout.write(' ');

    }
    for(let j=i;j<n;j++){
        process.stdout.write('*');

    }
    
    process.stdout.write('\n');
    
} 

for(let i=2;i<n;i++){
    for(let j=i;j>0;j--){
        process.stdout.write('*');

    }
    for(let j=i;j<n;j++){
        process.stdout.write(' ');

    }
    for(let j=i;j<n;j++){
        process.stdout.write(' ');

    }
    for(let j=i;j>0;j--){
        process.stdout.write('*');

    }
   process.stdout.write("\n"); 
    
}
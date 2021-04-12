
let n=5;
let len = 2*n-1;
let min1,min2,min;
  // Complete the code to print the pattern.
  // for rows
  for (let i=1; i <=len; i++) {
      // for col
      for (let j=1; j<=len; j++) {
        // min diff btn vertical sides
        min1 = i<=len-i ? i -1 : len-i;
        // min diff btn horizontal sides
        min2 = j<=len-j ? j -1: len-j;
        // min diff btn vertical & horizontal sides
        min = min1<=min2 ? min1 : min2;
        // print  
        process.stdout.write((n-min).toString());
      }
      process.stdout.write('\n');
  }

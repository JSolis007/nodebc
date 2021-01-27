let n = 50;
let f = 0;
let f1 = -1;
let f2 = 1; 


//0, 1, 1, 2, 3, 5, 8, 13, ....
do {
  f = f1 + f2;
  f1 = f2;
  f2 = f;
  console.log(f);
} while (f < n);
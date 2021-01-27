let f1 = -1;
let f2 = 1; 

//0, 1, 1, 2, 3, 5, 8, 13, ....

for (let n = 50, f = 0; f < n; f = f1 + f2) {
  f1 = f2;
  f2 = f;
  console.log(f);
}

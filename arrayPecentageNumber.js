let a = [4, 3, 17, 10, 11];

let arr = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 == 0) {
    arr = arr + a[i];
  }
}
console.log(arr);

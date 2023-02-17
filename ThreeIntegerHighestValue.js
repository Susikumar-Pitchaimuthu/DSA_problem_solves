let a = [4, 5, 10, 11, 1];
let k = 3;
// The maximum is 26.

let arr = [];
for (let i = 0; i < a.length - (k - 1); i++) {
  let sir = 0;

  for (let j = i; j < k + i; j++) {
    sir += a[j];
  }
  arr.push(sir);
}

let match = 0;

let find = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > match) {
    match = arr[i];
  }
}

console.log(match);

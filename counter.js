let n = 3;

let count = 1;

for (let i = 1; i <= n; i++) {
  let run = "";
  for (let j = n - i; j >= 1; j--) {
    run += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    run += count++;
  }
  console.log(run);
}

let n = 5;

for (let x = 1; x <= n; x++) {
  let run = "";

  for (let y = x; y <= n; y++) {
    run += "  ";
  }

  for (let j = 1; j <= x; j++) {
    run += j + " ";
  }

  console.log(run);
}

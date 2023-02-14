// let n = 5;

// for (let x = 1; x <= n; x++) {
//   let run = "";

//   for (let y = 1; y <= n - x; y++) {
//     run += "   ";
//   }
//   for (let i = 1; i <= x; i++) {
//     run += i + "  ";
//   }

//   console.log(run);
// }

// for (var i = 1; i <= n; i++) {
//   var col = i;
//   let run = "";
//   for (var j = 1; j <= n - col; j++) {
//     run += j + "";
//   }
//   for (var j = 1; j <= col; j++) {
//     run += j + "";
//   }
//   run += "\n";
// }
// console.log(run);

let n = 4;

for (let x = 1; x <= n; x++) {
  let run = "";

  for (let y = n; y > x; y--) {
    run += "  ";
  }
  for (let i = 1; i <= x; i++) {
    run += i + " ";
  }

  console.log(run);
}

// let n = 5;

// for (let x = 1; x <= n; x++) {
//   let run = "";

//   for (let i = 1; i <= x; i++) {
//     run += i + "  ";
//   }

//   console.log(run);
// }

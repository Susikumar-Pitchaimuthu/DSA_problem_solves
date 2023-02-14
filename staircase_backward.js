let i = 5;
let stair = "";
for (let j = 1; j <= i; j++) {
  stair += i + "";

  for (let k = 1; k < j; k++) {
    stair += k + "";

    console.log(stair);
  }
}

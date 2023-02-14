let a = [2, 5, 7, 8348, 424, 534, 23];

let x = 7;

let match = false;

for (let i = 0; i < a.length; i++) {
  if (a[i] == x) {
    match = true;
    break;
  }
}

let output_str = "";
if (match) {
  output_str += x + " is in the array";
} else {
  output_str += x + " is not in the array";
}
console.log(output_str);

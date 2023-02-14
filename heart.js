let n = 11;

for (let i = 3; i <= n - 6; i = i + 2) {
  console.log(
    noramlSpaceFirst(n - i) +
      noramlFirst(i) +
      noramlSpaceFirst(n - i) +
      noramlFirst(i)
  );
}
for (let i = n; i >= 1; i = i - 2) {
  console.log(elevenStarSpace(n - i) + elevenStar(i));
}

function noramlFirst(n) {
  let str = "";

  for (let i = 1; i <= n; i++) {
    str += "* ";
  }
  return str;
}

function noramlSpaceFirst(n) {
  let str = "";

  for (let i = 6; i <= n; i++) {
    str += " ";
  }
  return str;
}

function elevenStar(n) {
  let run = "";
  for (let i = n; i >= 1; i--) {
    run += "* ";
  }
  return run;
}

function elevenStarSpace(n) {
  let run = "";
  for (let i = n; i >= 1; i--) {
    run += " ";
  }
  return run;
}

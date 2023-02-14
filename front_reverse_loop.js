let n = 4;


// first half diamond function
for (let i = 1; i <= n; i++) {
  
   console.log(first((n - i)) + firstsequence(i) + firstSecondsequence(i-1));
  
}

// second half diamond function

for (let i=1; i<n; i++) {
 
  console.log(first((i)) + firstsequence(n-i) + firstSecondsequence(n-i-1))
}


// spaces function

function first(n) {
  let getSpacesFirst = "";
  for (let i = 1; i <= n; i++) {
    getSpacesFirst += "  ";
  }
  return getSpacesFirst;
}


// First half normal number sequences
function firstsequence (n) {
  let getfirstHalfsequence = "";

  for(let i=1; i<=n; i++) {
    getfirstHalfsequence += i +" ";
  }
  return getfirstHalfsequence
}


// second half revese number sequence
function firstSecondsequence (n) {
  let getfirstHalfsequence = "";

  for(let i=1; i<=n; i++) {
    getfirstHalfsequence = i +" " +getfirstHalfsequence;
  }
  return getfirstHalfsequence
}





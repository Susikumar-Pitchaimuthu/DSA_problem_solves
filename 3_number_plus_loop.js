let n=3;



// console function 


// number 1 loop

for (let i=1; i<n-1; i++){
    console.log(spaces (n) + first(n))
}

for (let i=1; i<n-1; i++){
    console.log( spaces(n) + first(n))
}


// number 3 and 1 loop

for (let i=1; i<n-1; i++){
    console.log( spaces(n) + first(n))
}



// number 1 loop


for (let i=1; i<n-1; i++){
    console.log(number(n) + first(n) + number(n))
}


for (let i=1; i<n-1; i++){
    console.log(spaces (n) + first(n))
}

for (let i=1; i<n-1; i++){
    console.log( spaces(n) + first(n))
}


for (let i=1; i<n-1; i++){
    console.log( spaces(n) + first(n))
}





// loop functions


// number 1 loop function

function first(n) {
    for(let i=1; i<n; i++) {
        let run = i + " "; 
        return run 
     }    
     
}



// number 2 loop function


function number (n) {
    let str = "";
    for (let i=1; i<=n; i++) {
       str +=  "3 "
    }
    return str
}



// spaces sequence function

function spaces (n) {
    let str = "";

    for (let i=1; i<=n; i++) {
        str += "  "
    }
    return str
}

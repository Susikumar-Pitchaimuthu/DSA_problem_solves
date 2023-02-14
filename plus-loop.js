let n=2;



// console function


// number 2 (1) loop
for (let i=1; i<n; i++){
    console.log(spaces (n) + first(n))
}

for (let i=1; i<n; i++){
    console.log( spaces(n) + first(n))
}


// number 2 and 1 loop function

for (let i=1; i<n; i++){
    console.log(number(n) + first(n) + number(n))
}


// number 2(1) loop


for (let i=1; i<n; i++){
    console.log(spaces (n) + first(n))
}

for (let i=1; i<n; i++){
    console.log( spaces(n) + first(n))
}


// functions


// number 1 loop


function first(n) {
    for(let i=1; i<n; i++) {
        let run = i + " "; 
        return run 
     }    
     
}



// number 2 loop 

function number (n) {
    let str = "";
    for (let i=1; i<=n; i++) {
       str +=  "2 "
    }
    return str
}


// number 3 loop

function spaces (n) {
    let str = "";

    for (let i=1; i<=n; i++) {
        str += "  "
    }
    return str
}




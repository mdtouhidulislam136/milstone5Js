// let factorial = 1;

// for(let i = 4; i>=1; i--) {
//     factorial = factorial * i;

//     /* 
//     5 + 4 + 3+ 2+ 1
//     */
    

// }

// console.log(factorial);

function factorial (i) {
    if(i == 1) {
        return 1;
    }

    return i * factorial(i-1);
}

const result = factorial(5);
console.log(result);
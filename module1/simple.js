
// let sum = 0;

// for(var i = 1; i<=10; i++) {
//     sum=sum+1;
// }

// console.log(sum);


// let sum = 1;
 
// for (let i=1; i<=10; i--) {

//     sum = sum +i;

// }

// console.log(sum);

function sum(i) {
if(i== 1) {
return 1;
}
    return i + sum(i-1);

}

const result = sum(5);
console.log(result);
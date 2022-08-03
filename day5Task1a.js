// Shaik Reshma (B38)
// Day5 Task1-a
console.log(".........................Using anonymous")

let x = [1,2,3,4,5,6,7,8,9,10];

let oddNums = function(a){
console.log("The odd numbers in the given array are")
for (let i of a){
if(i%2!=0){
console.log(i);
}
}
}

oddNums(x)


console.log(".........................Using IIFE")

let b = [1,2,3,4,5,6,7,8,9,10];
(function(b){
console.log("The odd numbers in the given array are")
for (let j of b){
if(j%2!=0){
console.log(j);
}
}
})(b);
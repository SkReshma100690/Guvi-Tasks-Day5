// Shaik Reshma (B38)
// Day5 Task1-c

console.log(".........................Using anonymous function")

let x = [1,2,3,4,5,6,7,8,9,10];

let SumOfNums = function(a){
  let SumOfNumsInArray = 0;
for (let i of a){
SumOfNumsInArray = SumOfNumsInArray+i;
}
  return SumOfNumsInArray
}

let sum_Anonymus = SumOfNums(x);
console.log("The sum of numbers in the given array is")
console.log(sum_Anonymus)


console.log(".........................Using IIFE")

let b = [1,2,3,4,5,6,7,8,9,10];
(function(b){

let Sum_IIFE = 0;
for (let j of b){
Sum_IIFE = Sum_IIFE+j;
}
  console.log("The sum of numbers in the given array is")
console.log(Sum_IIFE)

})(b);
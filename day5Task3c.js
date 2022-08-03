// Shaik Reshma (B38)
// Day5 Task3-c

console.log(".........................Using arrow function")

let x = [1,2,3,4,5,6,7,8,9,10];

const SumOfNums = (a)=>{
  let SumOfNumsInArray = 0;
for (let i of a){
SumOfNumsInArray = SumOfNumsInArray+i;
}
  return SumOfNumsInArray
}

let sumIs = SumOfNums(x);
console.log("The sum of numbers in the given array is")
console.log(sumIs)

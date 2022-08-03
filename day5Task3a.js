// Shaik Reshma (B38)
// Day5 Task3-a

console.log(".........................Using arrow function")

let x = [1,2,3,4,5,6,7,8,9,10];

const oddNums = (a)=>{
console.log("The odd numbers in the given array are")
for (let i of a){
if(i%2!=0){
console.log(i);
}
}
}

oddNums(x)
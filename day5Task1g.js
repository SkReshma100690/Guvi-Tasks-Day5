// Shaik Reshma (B38)
// Day5 Task1-g

console.log(".........................Using anonymous function")


let x = [1,3,4,7,3,7,8,9];

let DupAnony = function(a){
  let c = [];
  for(let i of a){
    if(!c.includes(i)){
      c.push(i)
    }
  }
  return c;
}
 
let ArrAnony = DupAnony(x);
console.log("The array after removing duplicates is")
console.log(ArrAnony)


console.log(".........................Using IIFE")

let b1 = [1,3,4,7,3,7,8,9];

let DupIIFE = (function(b1){
  let e = [];
  for(let j of b1){
    if(!e.includes(j)){
      e.push(j)
    }
  }
  return e;

})(b1);

console.log("The array after removing duplicates is")
console.log(DupIIFE)
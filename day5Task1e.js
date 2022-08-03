// Shaik Reshma (B38)
// Day5 Task1-e

console.log(".........................Using anonymous function")

let x = ['12321','slvls','123123','india'];

let PalindrInArr = function(a){
  let PalindrAre = [];
  for (let i of a){
    StrAnony = i;
    RevStrAnony = StrAnony.split('').reverse().join('');
    if (StrAnony==RevStrAnony){
      PalindrAre.push(i);
    }
      }
      
  return PalindrAre;
}
 
let Palindr_Anonymus = PalindrInArr(x);
console.log("The palindromes in the given array are")
console.log(Palindr_Anonymus)


console.log(".........................Using IIFE")

let b = ['12321','slvls','123123','india'];
let PalindrIIFE = (function(b){
let PalindArrIIFE = [];
  for (let j of b){
    StrIIFE = j;
    RevStrIIFE = StrIIFE.split('').reverse().join('');
    if (StrIIFE==RevStrIIFE){
      PalindArrIIFE.push(j);
    }
      }
      
  return PalindArrIIFE;

})(b);

console.log("The palindromes in the given array are")
console.log(PalindrIIFE)
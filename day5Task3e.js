// Shaik Reshma (B38)
// Day5 Task3-e

console.log(".........................Using arrow function")

let x = ['12321','slvls','123123','india'];

let PalindrInArr = (a)=>{
  let PalindrAre = [];
  for (let i of a){
    StrArrow = i;
    RevStrArrow = StrArrow.split('').reverse().join('');
    if (StrArrow==RevStrArrow){
      PalindrAre.push(i);
    }
      }
      
  return PalindrAre;
}
 
let Palindr_Arrow = PalindrInArr(x);
console.log("The palindromes in the given array are")
console.log(Palindr_Arrow)

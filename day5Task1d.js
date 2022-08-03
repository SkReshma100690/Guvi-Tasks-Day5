// Shaik Reshma (B38)
// Day5 Task1-d

console.log(".........................Using anonymous function")

let x = [1,2,3,4,5,6,7,8,9,10];

let PrimeNumsInArr = function(a){
  let PrimeNumsAre = [];
  for (let i of a){
    if (i==2){
      PrimeNumsAre.push(i);
    }else if (i>2){
    let SquarRtPlus1 = parseInt(Math.sqrt(i))+1;
      let checkFactors = 0;
    for (let k=2;k<=SquarRtPlus1;k++){
      if (i%k==0){
        checkFactors = 1;
        break
      }
    }
      if(checkFactors==0){
        PrimeNumsAre.push(i);
      }
    }
  }
  return PrimeNumsAre;
}

  
let PrimeNums_Anonymus = PrimeNumsInArr(x);
console.log("The prime numbers in the given array are")
console.log(PrimeNums_Anonymus)


console.log(".........................Using IIFE")

let b = [1,2,3,4,5,6,7,8,9,10];
let PrimeArrIIFE = (function(b){
let PrimeNumsIIFE = [];
  for (let j of b){
    if (j==2){
      PrimeNumsIIFE.push(j);
    }else if (j>2){
    let SquarRtIIFE = parseInt(Math.sqrt(j))+1;
      let checkFactorsIIFE = 0;
    for (let h=2;h<=SquarRtIIFE;h++){
      if (j%h==0){
        checkFactorsIIFE = 1;
        break
      }
    }
      if(checkFactorsIIFE==0){
        PrimeNumsIIFE.push(j);
      }
    }
  }
  return PrimeNumsIIFE;

})(b);

console.log("The prime numbers in the given array are")
console.log(PrimeArrIIFE)
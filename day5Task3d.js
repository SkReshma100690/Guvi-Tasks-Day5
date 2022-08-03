// Shaik Reshma (B38)
// Day5 Task3-d

console.log(".........................Using arrow function")

let x = [1,2,3,4,5,6,7,8,9,10];

const PrimeNumsInArr = (a)=>{
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

  
let PrimeNums_Arrow = PrimeNumsInArr(x);
console.log("The prime numbers in the given array are")
console.log(PrimeNums_Arrow)

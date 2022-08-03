// Shaik Reshma (B38)
// Day5 Task1-h

console.log(".........................Using anonymous function")


let x = [1,3,4,7,8,9];
let k = 5;
let RotateAnony = function(a,k){
  for(let i=1;i<=k;i++){
    let b=a.slice(0,a.length-1);
    a[0] = a[a.length-1];
    for (let j=0;j<b.length;j++){
      a[j+1] = b[j];
    }
  }
  return a;
}
 
let RotArr = RotateAnony(x,k);
console.log("The array after rotating ",k," times is")
console.log(RotArr)

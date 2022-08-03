// Shaik Reshma (B38)
// Day5 Task1-f

console.log(".........................Using anonymous function")

let x = [1,3,4,7];
let y = [2,5,9,10];

let MedianAnony = function(a,d){
  let SortMergArr = (a.concat(d)).sort(function(x1,x2){x1-x2});
  let L_MergArr = SortMergArr.length;
  if(L_MergArr%2==0){
    MedianVal = (SortMergArr[L_MergArr/2-1] + SortMergArr[L_MergArr/2])/2;
  }else {
   MedianVal = SortMergArr[parseInt(L_MergArr/2)];
  }
     
  return MedianVal;
}
 
let MedianVal_Anonymus = MedianAnony(x,y);
console.log("The median of the two sorted arrays is")
console.log(MedianVal_Anonymus)


console.log(".........................Using IIFE")

let b1 = [1,3,4,7];
let b2 = [2,5,9,10];

let MedianIIFE = (function(b1,b2){
let SortMergArrIIFE = (b1.concat(b2)).sort(function(h1,h2){h1-h2});
  let L_MergArrIIFE = SortMergArrIIFE.length;
  if(L_MergArrIIFE%2==0){
    MedianVal_IIFE = (SortMergArrIIFE[L_MergArrIIFE/2-1] + SortMergArrIIFE[L_MergArrIIFE/2])/2;
  }else {
   MedianVal_IIFE = SortMergArrIIFE[parseInt(L_MergArrIIFE/2)];
  }   
  return MedianVal_IIFE;

})(b1,b2);

console.log("The median of the two sorted arrays is")
console.log(MedianIIFE)
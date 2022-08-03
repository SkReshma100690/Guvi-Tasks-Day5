// Shaik Reshma (B38)
// Day5 Task1-b

console.log(".........................Using anonymous function")

let x = ['abc', 'de fghi', 'klm nop qrst'];

let TitleFun = function(a){
for(let i=0;i<a.length;i++){
  ArrOfSplitStr = a[i].split(' ');
  for(j=0;j<ArrOfSplitStr.length;j++){
    let b = ArrOfSplitStr[j];
    ArrOfSplitStr[j] = b[0].toUpperCase() + b.slice(1);
  }
  a[i] = ArrOfSplitStr.join(' ');
}
return a;
}

yy = TitleFun(x);
console.log("With title caps")
console.log(yy)

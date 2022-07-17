function smallestIntegers(args) {
  return Math.min(...args)
}
console.log(smallestIntegers([34, 15, 88, 2]))//2
console.log(smallestIntegers([34, -345, -1, 100]))//-345


function maxNumber(num1, num2) {
  let max;
  
  if (num1 > num2) {
    max = num1;
  } else {
    max = num2
  }
  return(max);
}

console.log(maxNumber(400, 200)) //-> 400

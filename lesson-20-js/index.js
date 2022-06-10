function test() {
  console.log(arguments.length);
}

test(1, 3, "fgh");
let numerical = function (a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  } else return 0;
};
console.log(numerical(2, 5));

function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

console.log(factorial(3));

const numToStr = (numFirst, numSecond, numThird) => {
  //   const trans = String(numFirst, numSecond, numThird);

  return "" + numFirst + numSecond + numThird;
};
console.log(numToStr(1, 5, 9));

const area = (lenght, width) => {
  const areaFigures = lenght * width || Math.pow(lenght, 2);
  return areaFigures;
};
console.log(area(4));

function getPerfect(num) {
  let result = 0;

  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) result = result + i;
  }

  if (result === num && result !== 0) {
    return num;
  } else {
    console.log("Не досконале");
  }
 
}
getPerfect(1000);

function findPerfectNumber(num1, num2) {
  for (; num1 <= num2; num1++) {
    if (getPerfect(num1) === num1) console.log(num1);
  }
}
findPerfectNumber(1, 2000);

// let age = +prompt("Вкажіть ваш вік");
// if (age <= 11) {
//   console.log("Дитина");
// } else if (age < 18) {
//   console.log("Підліток");
// } else if (age <= 59) {
//   console.log("Дорослий");
// } else if (age > 59) {
//   console.log("Пенсіонер");
// } else {
//   console.log("Який незвичайний вік!");
// }

// let numerical = +prompt("Вкажи число від 0 до 9");
// if (numerical === 1) {
//   console.log("!");
// } else if (numerical === 2) {
//   console.log("@");
// } else if (numerical === 3) {
//   console.log("#");
// } else if (numerical === 4) {
//   console.log("$");
// } else if (numerical === 5) {
//   console.log("%");
// } else if (numerical === 6) {
//   console.log("^");
// } else if (numerical === 7) {
//   console.log("&");
// } else if (numerical === 8) {
//   console.log("*");
// } else if (numerical === 9) {
//   console.log("(");
// } else {
//   console.log("ВІД 0 ДО 9!");
// }

// let a = +prompt("Введіть початок діапазону");
// let b = +prompt("Введіть кінець діапазону");
// let sum = 0;

// while (a <= b) {
//   sum += a;
//   a++;
// }
// console.log(sum);

// let numFirst = +prompt("Введи перше число");
// let numSecond = +prompt("Введи друге число");
// let division;

// if (numFirst > numSecond) {
//   division = numSecond;
// } else {
//   division = numFirst;
// }

// while (division != 0) {
//   if (numFirst % division == 0 && numSecond % division == 0) {
//   } else {
//     division--
//   }
// }
// console.log(division);

let numericalDivision = +prompt("Введи число");
for (let i = 1; i <= numericalDivision; i++) {
  if (numericalDivision % i == 0) {
    console.log(`Це всі дільники: ${i}`);
  }
}

let value = prompt('Введи число');
let middle = Math.floor(value.length / 2);

for (let i = 0; i < middle; i++) {
  if (value[i] === value[value.length - 1 - i]) {
    console.log('Це палідром');
  } else console.log('Не палідром');
}

let price = +prompt("Введіть ціну товару");
let sale3 = price - price * 0.03;
let sale5 = price - price * 0.05;
let sale7 = price - price * 0.07;

if (price >= 200 && price <= 300) {
  console.log(`Ваша ціна зі знижкою складатиме: ${sale3} грн`);
} else if (price > 300 && price <= 500) {
  console.log(`Ваша ціна зі знижкою складатиме: ${sale5} грн`);
} else if (price > 500) {
  console.log(`Ваша ціна зі знижкою складатиме: ${sale7} грн`);
} else console.log(`Візьміть ще щось і отримаєте знижку`);


let positive = 0;
let negative = 0;
let zero = 0;
let even = 0;
let odd = 0;

for (let i = 0; i < 10; i++) {
  let value = +prompt('Введи число');
  if (value > 0) positive++;
  if (value < 0) negative++;
  if (value === 0) zero++;
  if (value % 2 === 0) even++;
  if (value % 2 !== 0) odd++;
}

console.log('додатнє:', positive);
console.log('відємне:', negative);
console.log('нулі:', zero);
console.log('парне:', even);
console.log('непарне:', odd);

const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятница', 'Субота', 'Неділя'];
let nextDay = 0;
while (confirm(`${days[nextDay]}. Наступний день?`)) {
  nextDay = (nextDay + 1) % days.length;
}

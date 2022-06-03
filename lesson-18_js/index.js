let a = 0.1;
let b = 0.2;
let summ = a + b;
console.log(summ.toFixed(1));

let a1 = "1";
let b1 = 2;
a1 = Number(a1);
console.log((summ = a1 + b1));

let flash = prompt("Який обсяг флешки?");
const memorySizeDocument = 820;
const gigabyte = 1024;
let memorySize = (flash * gigabyte) / memorySizeDocument;
console.log(
  `Стільки документів ${Math.floor(memorySize)} поміститься в одну флешку`
);

let howMuchMoney = prompt("Скільки в тебе є грошей?");
let chocolate = prompt("Скільки коштує шоколадка?");
const amountChocolate = howMuchMoney / chocolate;
const change = howMuchMoney % chocolate;
console.log(
  `Ви зможете придбати - ${Math.floor(amountChocolate)} шоколадок, та у вас залишиться ${change} гривень`
);

let odd = prompt("Вкажи тризначне число");
console.log(
  (odd % 10).toString() +
    (Math.floor(odd / 10) % 10).toString() +
    Math.floor(odd / 100).toString()
);

let summDeposite = prompt("Яка сумма була покладена на депозит?");
const plusForDeposite = (summDeposite / 100) * 5;
const yearPersent =plusForDeposite / 12
const prosperity = yearPersent * 2;
console.log(
  `Стільки % ви отпримаєте за 2 місяці депозиту ${prosperity.toFixed(
    2
  )} гривень`
);

let name = prompt('Як тебе звати?');
// let 1name
console.log('Привіт, ' + name)

let age = prompt('Якого ти року народження?');
/* let age-years
 const.years*/
const year = 2022;
console.log(year-age);

let square = prompt('Назви будь-яку сторону квадрата')
console.log('Площа квадрату ' + square*4 + ' метрів квадратних');

let areaCircle = prompt('Вкажи радіус кола');
// let area circle
const math_pi = 3.14;
console.log('Площа кола ' + math_pi*areaCircle*areaCircle);

let distanceFromPoint = prompt('Вкажи відстань між містами');
let hours = prompt ('За скільки годин ти хочеш доїхати до міста?');
console.log('Це швидкість з якою треба рухатися ' + distanceFromPoint/hours);

let howMuchUah = prompt('Скільки ти хочеш поміняти гривень?')
const Usd = 30;
console.log('Це стільки долларів ' + howMuchUah/Usd);
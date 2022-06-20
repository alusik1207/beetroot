const shoppingList = [
  {
    product: "apple",
    amount: 3,
    buyStatus: true,
    price: 15,
    summ() {
      return this.amount * this.price;
    },
  },
  {
    product: "cucumber",
    amount: 1,
    buyStatus: false,
    price: 5,
    summ() {
      return this.amount * this.price;
    },
  },
  {
    product: "meat",
    amount: 8,
    buyStatus: true,
    price: 75,
    summ() {
      return this.amount * this.price;
    },
  },
  {
    product: "oil",
    amount: 2,
    buyStatus: false,
    price: 10,
    summ() {
      return this.amount * this.price;
    },
  },
  {
    product: "milk",
    amount: 5,
    buyStatus: true,
    price: 20,
    summ() {
      return this.amount * this.price;
    },
  },
];

const notBuyProduct = shoppingList.filter((item) => item.buyStatus === false);
const buyProduct = shoppingList.filter((item) => item.buyStatus === true);
const filterList = [...notBuyProduct, ...buyProduct];
console.log(filterList);

function checkBuyProduct(name) {
  return shoppingList.map((item) => {
    if (name === item.name) {
      //    return  {
      //         ...item, buyStatus:true
      //     }
      item.buyStatus = true;
    }
    return item;
  });
}

console.log(checkBuyProduct("oil"));

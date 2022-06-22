const obj1 = {
  brand: "BMW",
  model: "e46",
  releaseYear: "2001",
  mediumSpeed: 100,
  fuelTankCapacity: 60,
  averageFuelConsumption: 10,
  currentFuel: 5,
  drivers: [
    { firstName: "Nikolay", age: 27 },
    { firstName: "Alina", age: 23 },
    { firstName: "Ivan", age: 12 },
  ],

  getInfo() {
    console.log(
      `brand: ${this.brand}\n`,
      `model: ${this.model}\n`,
      `release year: ${this.releaseYear}\n`,
      `medium speed: ${this.mediumSpeed}km/h \n`,
      `fuel Tank Capacity: ${this.fuelTankCapacity} liters \n`,
      `average Fuel Consumption: ${this.averageFuelConsumption} liters \n`,
      `drivers: ${this.drivers.map((driver) => driver.firstName)} \n`
    );
  },
  addDriver(newDriver) {
    this.drivers.push(newDriver);
    return this.newDriver;
  },

  beenDrived(distance) {
    let usedFuel =
      distance >= 100
        ? (distance / 100) * this.averageFuelConsumption
        : (this.averageFuelConsumption * distance) / 100;
    return usedFuel;
  },

  leftToRefuel(distance) {
    let beforeRefuel = this.fuelTankCapacity - this.beenDrived(distance);
    return beforeRefuel;
  },
  timeLeft(distance, driverName) {
    let time = distance / this.mediumSpeed;
    for (let i = 1; i <= Math.floor(time); i++) {
      if (i % 4 === 0) time = time + 1;
    }
    console.log(`Your trip will be ${time} hours`);
    const driver = this.drivers.find((item) => {
      return item.firstName === driverName;
    });
    if (driver.age < 18) {
      console.log("You can`t drive");
    } else console.log("Welcome and drive");
  },
};

obj1.getInfo();
obj1.addDriver({ firstName: "Nadiya", age: 17 });
obj1.beenDrived();
obj1.leftToRefuel();
obj1.timeLeft(9000, "Alina");

// ...дата

const date = new Date();
const timeMachine = {
  changeHours(hours) {
    date.getHours(date.setHours(hours));
  },
  changeMinutes(minutes) {
    date.getMinutes(date.setMinutes(minutes));
  },
  changeSeconds(seconds) {
    date.getSeconds(date.getSeconds(seconds));
  },
  getFullTime() {
    return console.log(
      `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
      }:${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}`
    );
  },
};
timeMachine.changeHours(2);
timeMachine.changeMinutes(61);
timeMachine.changeSeconds(115);
console.log(date);

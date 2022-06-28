class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get circleRad() {
    return `радиус круга: ${this.radius}`;
  }

  set circleRad(value) {
    this.radius = value;
  }

  get diametr() {
    return this.radius * 2;
  }

  circleArea() {
    return (Math.pow(this.diametr, 2) * 3.14) / 4;
   
  }
  
  circumference() {
    return this.diametr * 3.14;
  }
};

const circleClassNew = new Circle(10)
console.log(circleClassNew);
console.log(circleClassNew.radius);
console.log(circleClassNew.diametr);
circleClassNew.circleRad=22;
console.log(circleClassNew.circleRad)
console.log(`площадь круга ${circleClassNew.circleArea()}`);
console.log(`длина окружности ${circleClassNew.circumference()}`);

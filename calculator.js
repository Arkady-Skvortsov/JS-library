class Calculator {
  constructor() {}

  sum(x, y) {
    return (x += y);
  }

  minus(x, y) {
    return (x -= y);
  }

  share(x, y) {
    return x / y;
  }

  multiply(x, y) {
    return x * y;
  }

  sqrt(x) {
    return Math.sqrt(x);
  }

  square(x) {
    return x ** 2;
  }

  squarePower(x, y) {
    return x ** y;
  }

  drobi(x) {
    return 1 / x;
  }

  sin(x) {
    return Math.sin(x);
  }

  cos(x) {
    return Math.cos(x);
  }

  pi() {
    return Math.PI;
  }

  e() {
    return Math.E;
  }

  round(x) {
    return Math.round(x);
  }

  tan(x) {
    return Math.tan(x);
  }

  ctg(x) {
    return 1 / Math.tan(x);
  }

  percent(x) {
    return x / 10;
  }

  arcCos(x) {
    return Math.acos(x);
  }

  arcSin(x) {
    return Math.asin(x);
  }

  arcTan(x) {
    return Math.atan(x);
  }

  arcCtg(x) {
    return Math.PI / 2 - Math.atan(x);
  }

  cosMinusOncePower(x) {
    return Math.cos(x) ** -1;
  }

  sinMinusOncePower(x) {
    return Math.sin(x) ** -1;
  }

  ctgMinusOncePower(x) {
    return (1 / Math.tan(x)) ** -1;
  }

  ceil(x) {
    return Math.ceil(x);
  }

  floor(x) {
    return Math.floor(x);
  }

  tanMinusOncePower(x) {
    return Math.tan(x) ** -1;
  }
}

let calculator = new Calculator();

console.log(calculator.percent(45));

module.exports = calculator;

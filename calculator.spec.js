let calculator = require("./calculator");

describe("Test a calculator class", () => {
  let testFunc;

  //class methods
  let sum;
  let minus;
  let share;
  let multiply;
  let factorial;
  let sqrt;
  let square;
  let squarePower;
  let drobi;
  let sin;
  let cos;
  let pi;
  let e;
  let ln;
  let trunc;
  let round;
  let tan;
  let ctg;
  let percent;
  let arcCos;
  let arcSin;
  let arcTan;
  let arcCtg;
  let ctgMinusOncePower;
  let cosMinusOncePower;
  let sinMinusOncePower;
  let tanMinusOncePower;
  let cosPower;
  let sinPower;
  let tanPower;
  let ctgPower;
  let floor;
  let ceil;

  beforeEach(() => {
    // class methods;
    sum = jest.fn((x, y) => calculator.sum(x, y));
    minus = jest.fn((x, y) => calculator.minus(x, y));
    share = jest.fn((x, y) => calculator.share(x, y));
    multiply = jest.fn((x, y) => calculator.multiply(x, y));
    factorial = jest.fn((x) => calculator.factorial(x));
    sqrt = jest.fn((x) => calculator.sqrt(x));
    square = jest.fn((x) => calculator.square(x));
    squarePower = jest.fn((x, y) => calculator.squarePower(x, y));
    drobi = jest.fn((x) => calculator.drobi(x));
    sin = jest.fn((x) => calculator.sin(x));
    cos = jest.fn((x) => calculator.cos(x));
    pi = jest.fn(() => calculator.pi());
    e = jest.fn(() => calculator.e());
    ln = jest.fn((x) => calculator.ln(x));
    trunc = jest.fn((x) => calculator.trunc(x));
    round = jest.fn((x) => calculator.round(x));
    tan = jest.fn((x) => calculator.tan(x));
    ctg = jest.fn((x) => calculator.ctg(x));
    percent = jest.fn((x) => calculator.percent(x));
    arcCos = jest.fn((x) => calculator.arcCos(x));
    arcSin = jest.fn((x) => calculator.arcSin(x));
    arcTan = jest.fn((x) => calculator.arcTan(x));
    arcCtg = jest.fn((x) => calculator.arcCtg(x));
    cosMinusOncePower = jest.fn((x) => calculator.cosMinusOncePower(x));
    sinMinusOncePower = jest.fn((x) => calculator.sinMinusOncePower(x));
    tanMinusOncePower = jest.fn((x) => calculator.tanMinusOncePower(x));
    ctgMinusOncePower = jest.fn((x) => calculator.ctgMinusOncePower(x));
    cosPower = jest.fn((x, y) => calculator.cosPower(x, y));
    sinPower = jest.fn((x, y) => calculator.sinPower(x, y));
    tanPower = jest.fn((x, y) => calculator.tanPower(x, y));
    ctgPower = jest.fn((x, y) => calculator.ctgPower(x, y));
    floor = jest.fn((x) => calculator.floor(x));
    ceil = jest.fn((x) => calculator.ceil(x));

    //Easy test function

    testFunc = jest.fn((func, x, y, result) => {
      func(x, y);

      expect(func).toBeCalled();

      expect(func.mock.calls.length).not.toBeGreaterThan(1);

      expect(+func.mock.results[0].value.toFixed(2)).toEqual(result);
    });
  });

  test("test a sum() method", () => {
    testFunc(sum, 1, 15, 16);
  });

  test("test a minus() method", () => {
    testFunc(minus, 10, 9, 1);
  });

  test("test a share() method", () => {
    testFunc(share, 18, 2, 9);
  });

  test("test a multiply() method", () => {
    testFunc(multiply, 5, 5, 25);
  });

  test("test a factorial() method", () => {
    factorial(5);

    expect(factorial).toBeCalled();

    expect(factorial.mock.calls.length).not.toBeGreaterThan(1);

    expect(factorial.mock.results[0].value).toEqual(120);
  });

  test("test a sqrt() method", () => {
    sqrt(49);

    expect(sqrt).toBeCalled();

    expect(sqrt.mock.calls.length).not.toBeGreaterThan(1);

    expect(sqrt.mock.results[0].value).toEqual(7);
  });

  test("test a square() method", () => {
    square(6);
    expect(square).toBeCalled();

    expect(square.mock.calls.length).not.toBeGreaterThan(1);

    expect(square.mock.results[0].value).toEqual(36);
  });

  test("test a squarePower() method", () => {
    testFunc(squarePower, 3, 3, 27);
  });

  test("test a drobi() method", () => {
    drobi(2);
    expect(drobi).toBeCalled();

    expect(drobi.mock.calls.length).not.toBeGreaterThan(1);

    expect(drobi.mock.results[0].value).toEqual(0.5);
  });

  test("test a sin() method", () => {
    sin(30);

    expect(sin).toBeCalled();

    expect(sin.mock.calls.length).not.toBeGreaterThan(1);

    expect(+sin.mock.results[0].value.toFixed(2)).toEqual(-0.99);
  });

  test("test a cos() method", () => {
    cos(30);

    expect(cos).toBeCalled();

    expect(cos.mock.calls.length).not.toBeGreaterThan(1);

    expect(+cos.mock.results[0].value.toFixed(2)).toEqual(0.15);
  });

  test("test a ctg() method", () => {
    ctg(45);

    expect(ctg).toBeCalled();

    expect(ctg.mock.calls.length).not.toBeGreaterThan(1);

    expect(+ctg.mock.results[0].value.toFixed(2)).toEqual(0.62);
  });

  test("test a pi() method", () => {
    pi();

    expect(pi).toBeCalled();

    expect(pi.mock.calls.length).not.toBeGreaterThan(1);

    expect(+pi.mock.results[0].value.toFixed(2)).toEqual(3.14);
  });

  test("test a e() method", () => {
    e();

    expect(e).toBeCalled();

    expect(e.mock.calls.length).not.toBeGreaterThan(1);

    expect(+e.mock.results[0].value.toFixed(1)).toEqual(2.7);
  });

  test("test a ln() method", () => {
    ln(100);

    expect(ln).toBeCalled();

    expect(ln.mock.calls.length).toBe(1);

    expect(ln.mock.results[0].value).toEqual(2);
  });

  test("test a trunc() method", () => {
    trunc(255.091264758303);

    expect(trunc).toBeCalled();

    expect(trunc.mock.calls.length).not.toBeGreaterThan(1);

    expect(trunc.mock.results[0].value).toEqual(255);
  });

  test("test a round() method", () => {
    round(25.6);

    expect(round).toBeCalled();

    expect(round.mock.calls.length).not.toBeGreaterThan(1);

    expect(round.mock.results[0].value).toEqual(26);
  });

  test("test a tan() method", () => {
    tan(45);

    expect(tan).toBeCalled();

    expect(tan.mock.calls.length).not.toBeGreaterThan(1);

    expect(+tan.mock.results[0].value.toFixed(2)).toEqual(1.62);
  });

  test("test a percent() method", () => {
    percent(100);

    expect(percent).toBeCalled();

    expect(percent.mock.calls.length).not.toBeGreaterThan(1);

    expect(percent.mock.results[0].value).toEqual(10);
  });

  test("test a arcCos() method", () => {
    arcCos(0);

    expect(arcCos).toBeCalled();

    expect(arcCos.mock.calls.length).not.toBeGreaterThan(1);

    expect(+arcCos.mock.results[0].value.toFixed(2)).toEqual(1.57);
  });

  test("test a arcSin() method", () => {
    arcSin(0);

    expect(arcSin).toBeCalled();

    expect(arcSin.mock.calls.length).not.toBeGreaterThan(1);

    expect(arcSin.mock.results[0].value).toEqual(0);
  });

  test("test a arcTan() method", () => {
    arcTan(0);

    expect(arcTan).toBeCalled();

    expect(arcTan.mock.calls.length).not.toBeGreaterThan(1);

    expect(arcTan.mock.results[0].value).toEqual(0);
  });

  test("test a arcCtg() method", () => {
    arcCtg(135);

    expect(arcCtg).toBeCalled();

    expect(arcCtg.mock.calls.length).not.toBeGreaterThan(1);

    expect(+arcCtg.mock.results[0].value.toFixed(2)).toEqual(0.01);
  });

  test("test a cosMinusOncePower() method", () => {
    cosMinusOncePower(90);

    expect(cosMinusOncePower).toBeCalled();

    expect(cosMinusOncePower.mock.calls.length).not.toBeGreaterThan(1);

    expect(+cosMinusOncePower.mock.results[0].value.toFixed(2)).toEqual(-2.23);
  });

  test("test a sinMinusOncePower() method", () => {
    sinMinusOncePower(33);

    expect(sinMinusOncePower).toBeCalled();

    expect(sinMinusOncePower.mock.calls.length).not.toBeGreaterThan(1);

    expect(+sinMinusOncePower.mock.results[0].value.toFixed(0)).toEqual(1);
  });

  test("test a tanMinusOncePower() method", () => {
    tanMinusOncePower(45);

    expect(tanMinusOncePower).toBeCalled();

    expect(tanMinusOncePower.mock.calls.length).not.toBeGreaterThan(1);

    expect(+tanMinusOncePower.mock.results[0].value.toFixed(2)).toEqual(0.62);
  });

  test("test a ctgMinusOncePower() method", () => {
    ctgMinusOncePower(90);

    expect(ctgMinusOncePower).toBeCalled();

    expect(ctgMinusOncePower.mock.calls.length).not.toBeGreaterThan(1);

    expect(+ctgMinusOncePower.mock.results[0].value.toFixed(0)).toEqual(-2);
  });

  test("test a cosPower() method", () => {
    testFunc(cosPower, 90, 2, 0.2);
  });

  test("test a tanPower() method", () => {
    testFunc(tanPower, 90, 2, 3.98);
  });

  test("test a ctgPower() method", () => {
    testFunc(ctgPower, 45, 2, 0.38);
  });

  test("test a sinPower() method", () => {
    testFunc(sinPower, 90, 2, 0.8);
  });

  test("test a ceil() method", () => {
    ceil(26.3);

    expect(ceil).toBeCalled();

    expect(ceil.mock.calls.length).not.toBeGreaterThan(1);

    expect(ceil.mock.results[0].value).toEqual(27);
  });

  test("test a floor() method", () => {
    floor(25.6);

    expect(floor).toBeCalled();

    expect(floor.mock.calls.length).not.toBeGreaterThan(1);

    expect(floor.mock.results[0].value).toEqual(25);
  });
});

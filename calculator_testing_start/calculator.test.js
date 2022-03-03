const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 2000000
    actual = sum(1000000,1000000)
    expect(actual).toBe(expected)
  });

  test('can add two negative numbers', () => {
    expected = -4
    actual = sum(-2,-2)
    expect(actual).toBe(expected)
  });

  test('can add zero', () => {
    expected = 2
    actual = sum(0, 2)
    expect(actual).toBe(expected)
  });
});

describe('subtract', () => {

  test('can subtract numbers', () => {
    expected = 2
    actual = subtract(4, 2)
    expect(actual).toBe(expected)
  });

  test('can subtract decimals', () => {
    expected = 2.5
    actual = subtract(5, 2.5)
    expect(actual).toBe(expected)
  });
});

describe('multiply', () => {
  test('can multiply numbers', () => {
    expected = 4
    actual = multiply(2,2)
    expect(actual).toBe(expected)
  });

  test('can multiply by 0', () => {
    expected = 0
    actual = multiply(54,0)
    expect(actual).toBe(expected)
  });

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});

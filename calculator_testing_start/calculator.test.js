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

  test('can divide numbers', () => {
    expected = 2
    actual = divide(14,7)
    expect(actual).toBe(expected)
  });
  test('can divide by decimal numbers', () => {
    expected = 4
    actual = divide(14,3.5)
    expect(actual).toBe(expected)
  });
});

describe('modulus', () => {

  test('can find the modulus of two numbers', () => {
    expected = 4
    actual = modulus(14,5)
    expect(actual).toBe(expected)
  });
  test('can find the modulus of two numbers', () => {
    expected = 0
    actual = modulus(15,5)
    expect(actual).toBe(expected)
  });

});

describe('even', () => {
  test('can check if an even number is even', () => {
    expected = true
    actual = even(14)
    expect(actual).toBe(expected)
  });
  test('can check if an odd number is even', () => {
    expected = false
    actual = even(9)
    expect(actual).toBe(expected)
  });
});

describe('odd', () => {
  test('can check if an even number is odd', () => {
    expected = false
    actual = odd(14)
    expect(actual).toBe(expected)
  });
  test('can check if an odd number is odd', () => {
    expected = true
    actual = odd(9)
    expect(actual).toBe(expected)
  });
});

const { add, subtract, multiply, divide } = require('./math')

test('add 5 + 5 to equal 10', () => { expect(add(5, 5)).toBe(10);});

test('multiply 5 * 5 to equal 25', () => { expect(multiply(5, 5)).toBe(25);});

test('subtract 5 - 5 to equal 0', () => { expect(subtract(5, 5)).toBe(0);});

test('divide 5/5 to equal 1', () => { expect(divide(5, 5)).toBe(1);});

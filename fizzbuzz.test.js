const fizzbuzz = require('./fizzbuzz')

test('', () => { 
    expect(fizzbuzz(30)).toBe('FizzBuzz');
});

test('', () => { 
    expect(fizzbuzz(21)).toBe('Fizz');
});

test('', () => { 
    expect(fizzbuzz(20)).toBe('Buzz');
});
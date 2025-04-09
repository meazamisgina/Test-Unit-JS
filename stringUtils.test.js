const reverseString = require('./stringUtils');
const{reverse} =require("dns");

test("", () => { 
    expect(reverseString('Akira')).toBe('arikA');
});
const addTest = require('./stringCalculator');

test('should return 0 for an empty string', () => {
    expect(addTest("")).toBe(0);
});

test('should return the number itself when one number is passed', () => {
    expect(addTest("5")).toBe(5);
});

test('should return the sum of two numbers', () => {
    expect(addTest("1,2")).toBe(3);
});

test('should handle newlines as a delimiter', () => {
    expect(add("1\n2,3")).toBe(6);
});
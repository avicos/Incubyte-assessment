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
    expect(addTest("1\n2,3")).toBe(6);
});

test('should handle semicolons as a delimiter', () => {
    expect(addTest("1,2;3")).toBe(6);
});

test('should throw an exception when negative numbers are provided', () => {
    expect(() => {
        addTest("1,-2,3");
    }).toThrow('Negative numbers not allowed: -2');
});

test('should throw an exception listing all negative numbers', () => {
    expect(() => {
        add("1,-2,-3,4");
    }).toThrow('Negative numbers not allowed: -2, -3');
});
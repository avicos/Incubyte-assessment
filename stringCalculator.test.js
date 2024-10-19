const addTest = require('./stringCalculator');

test('should return 0 for an empty string', () => {
    expect(addTest("")).toBe(0);
});

test('should return the number itself when one number is passed', () => {
    expect(addTest("5")).toBe(5);
});
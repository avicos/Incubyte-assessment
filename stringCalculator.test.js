const addTest = require('./stringCalculator');

test('should return 0 for an empty string', () => {
    expect(addTest("")).toBe(0);
});
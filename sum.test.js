const sum = require("./sum");

test('adds 1 + 2', () => {
    const output = sum(1, 2)
    const result = 3;
    expect(output).toBe(result);
})
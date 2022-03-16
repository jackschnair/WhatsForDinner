const sum = require('./tests')

describe('my tests', () => {
    it("my test", () => {
        expect(sum(1,2)).toBe(3);
    });
})

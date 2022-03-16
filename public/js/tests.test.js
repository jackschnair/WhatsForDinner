const { TestWatcher } = require('jest')
const sum = require('./test')

    test("my test", () => {
        var result = test.sum(1,2)
        expect(result).toBe(3);
    })

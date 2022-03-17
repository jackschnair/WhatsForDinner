const isValidLogin = require('../public/js/login')

describe('Login Tests', () => {
    it("Should fail with wrong info", () => {
        expect(isValidLogin("Jack","password")).toBe(false);
    });
    it("Correct login info", () => {
        expect(isValidLogin("admin","admin123")).toBe(true);
    });
})
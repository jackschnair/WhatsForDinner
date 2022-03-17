const getRecipe = require('../public/js/recipe')

describe('Grocery List Tests', () => {
    it("Get recipe1", () => {
        expect(getRecipe("recipe1")).toBe("wrong ingredients");
    });
    it("Get recipe2", () => {
        expect(getRecipe("recipe2")).toBe("other ingredients");
    });
})
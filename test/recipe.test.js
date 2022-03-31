const {getRecipe, getRecipeTitles} = require('../public/js/recipe')

describe('Recipe Tests', () => {
    it("Get Recipe Names", () => {
        expect(getRecipeTitles()).not.toBe([]); // should get something more than an empty array
    });
})

describe('Ingredient Tests', () => {
    it("Non-existant recipe returns empty array", () => {
        expect(getRecipe("Garbage Value")).toStrictEqual([]); // should return emptry array
    });
    it("Recipe returns filled array", () => {
        expect(getRecipe("Barbeque")).not.toBe([]); // Actual recipe should not return empty array
    });
    it("Parameters gotten from getRecipeTitles work", () => {
        expect(getRecipe(getRecipeTitles()[0])).not.toBe(null); // get a result from passing a title from getLists
    });
})
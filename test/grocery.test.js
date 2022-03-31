const {createList, getLists, getListItems} = require('../public/js/grocery');

describe('Grocery List Tests', () => {
    it("Get Grocery Lists", () => {
        expect(getLists()).not.toBe([]); // should get something more than an empty array
    });
})

describe('Grocery List Item Tests', () => {
    it("Non-existant grocery list returns empty array", () => {
        expect(getListItems("Garbage Value")).toStrictEqual([]); // should return emptry array
    });
    it("List returns filled array", () => {
        expect(getListItems("Waffles")).not.toBe([]); // Actual recipe should not return empty array
    });
    it("Parameters gotten from getListItems work", () => {
        expect(getListItems(getLists()[0])).not.toBe(null); // get a result from passing a title from getLists
    });
})
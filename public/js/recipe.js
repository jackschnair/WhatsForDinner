



function getRecipe (name) {

    var recipe_dict = {
        "recipe1": "ingredients 1, 2 and 3",
        "recipe2": "other ingredients"
    };

    var val = recipe_dict[name];
    console.log(val);

    return recipe_dict[name];
}

module.exports = getRecipe
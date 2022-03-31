//const { Client } = require("pg")

/*const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Daly123",
    database: "wfd"
})*/

let mock_recipes = [
    "Chicken", 
    "Pizza",
    "Salad",
];
//for (var i in mock_recipes)
  //  console.log(mock_recipes[i]);

let recipe_list = document.querySelector("#recipe_list");

//var all_recipes = getAllRecipes();

mock_recipes.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    recipe_list.appendChild(li);
  });

function getAllRecipes() {
    client.connect();

    client.query('SELECT title FROM public."Recipe"', (err, res)=>{
        if(!err){
            json_data = res.rows;
            console.log(json_data);

            const arr = [];
            for (var i in json_data){
                console.log(json_data[i]["title"]);
                arr.push(json_data[i]["title"]);
            }
            
            return arr;
        } 
        else {
            console.log(err.message);
        }
        client.end;
    })
}

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
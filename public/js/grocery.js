

var json_data = require('../data/grocery_list.json');

/*let lists = getLists();
for (i in lists) { 
    console.log(lists[i])
    let items = getListItems(lists[i]);
    for (j in items)
        console.log("    " + items[j]);
}*/
    

function createList(listName) {
    const express = require('express');
    const app = express();
    const mssql = require("mysql");
    
    // Get request
    app.get('/', function (req, res) {
    
        // Config your database credential
        const config = {
            user: 'root',
            password: 'pass123',
            server: 'localhost',
            database: 'wfd'
        };
    
        // Connect to your database
        mssql.connect(config, function (err) {
    
            // Create Request object to perform
            // query operation
            var request = new mssql.Request();
    
            // Query to the database and get the records
            request.query('INSERT INTO Grocery_List VALUES(2000,2000, "weekly shopping")',
                function (err, records) {
                    console.log(records)
                    if (err) console.log(err)
                        
                    // Send records as a response
                    // to browser
                    res.send(records);
                    return false
                });
        });
    });

    return true;
}

function getLists(){
    let arr = [];
    for (var i in json_data.lists){
        //console.log(json_data.lists[i]["list"]);
        arr.push(json_data.lists[i]["list"])
    }
    return arr;
}

function getListItems (name){
    let arr = [];
    for (var i in json_data.lists){
        if (json_data.lists[i]["list"] == name){
            for (var j in json_data.lists[i]["items"]){
                //console.log(json_data.lists[i]["ingredients"][j]);
                arr.push(json_data.lists[i]["items"][j]["item"]);
            }
        }
    }
    return arr;
}

module.exports = {createList: createList, getLists: getLists, getListItems: getListItems}


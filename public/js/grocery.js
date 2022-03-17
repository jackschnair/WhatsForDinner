
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

module.exports = createList


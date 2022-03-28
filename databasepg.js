const { Client } = require("pg")

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Daly123",
    database: "wfd"
})

client.connect();

client.query('SELECT name FROM public."Users"', (err, res)=>{
    if(!err){
        console.log(res.rows);
    } 
    else {
        console.log(err.message);
    }
    client.end;
})
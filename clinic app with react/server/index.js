const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyparser = require('body-parser'); // for post method
var urlencodedParser = bodyparser.urlencoded({ extended: false });

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "clinic"
  });

app.post('/handle_login',urlencodedParser,(req,res)=>{
    var user = req.body.username;
    var pass = req.body.password;
   
   
    con.connect(function(err) {
        if (err) throw err;
        con.query(`SELECT * FROM login where username=${db.escape(user)}`, function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
      });

    
})

app.listen(4000,()=>{
    console.log("listning");
})
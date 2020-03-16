//require("dotenv").config();
const express = require("express");
// const bodyParser = require("body-parser");
//const path = require("path");
const PORT = process.env.PORT || 5000;
let app = express();
​
//const connectionString = process.env.DATABASE_URL;
// const connectionString = process.env.LOCALDB_URL;
​
​/*
app.get("/person", getPersons);
app.get("/getParents", getParents);
app.get("/getChildren", getChildren);
​*/
​
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
​
// app.use(express.static(path.join(__dirname, "public")));
// app.set("views", path.join(__dirname, "views"));
//app.set("view engine", "ejs");
app.get('/', (req, res) => res.send('Hello World!'))
//app.listen(PORT, () => console.log(`Listening on ${PORT}`));

​/*
function getPersons(req, response) {
  personID = req.query.id;
  response.setHeader("Content-Type", "application/json");
  
  const sql =
    "SELECT first_name, last_name, date_of_birth FROM persons p WHERE id = $1";
  const values = [personID];
  pool.query(sql, values, function(err, res) {
    if (err) {
      console.log(`Error in query: ${err}`);
    }
    let person = res.rows[0];
    // let fname = person.first_name;
    // let lname = person.last_name;
    // let date = person.date_of_birth;
​
    // console.log(`${fname} ${lname} was born on ${date}`);
    let text = JSON.stringify(person);
   
    response.end(text);
  });
}
​
function getChildren(req, response) {
  personID = req.query.id;
  response.setHeader("Content-Type", "application/json");
  
  const sql =
    "SELECT child_id FROM children WHERE parent_id = $1";
  const values = [personID];
  pool.query(sql, values, function(err, res) {
    if (err) {
      console.log(`Error in query: ${err}`);
    }
    let person = res.rows[0];
​
    let text = JSON.stringify(person);
   
    response.end(text);
  });}
​
function getParents(req, response) {
  personID = req.query.id;
  response.setHeader("Content-Type", "application/json");
  
  const sql =
    "SELECT parent_id FROM children WHERE child_id = $1";
  const values = [personID];
  pool.query(sql, values, function(err, res) {
    if (err) {
      console.log(`Error in query: ${err}`);
    }
    let person = res.rows[0];
​
    let text = JSON.stringify(person);
   
    response.end(text);
  });
} */
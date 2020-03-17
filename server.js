const express = require('express')
const app = express()
const cool = require('cool-ascii-faces')
const PORT = process.env.PORT || 5000
const path = require('path')
const bodyParser = require("body-parser")

const connectionString = process.env.DATABASE_URL;
const { Pool } = require('pg')
const pool = new Pool({ connectionString: connectionString })

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/cool', (req, res) => res.send(cool()))
app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/public/form.html')))
app.get('/find', findDeals)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))


function findDeals(req, res) {
	const zip = Number(req.query.zip);
	

	searchArea(res, zip);
}

function searchArea(res, zip) {
	const sql = "SELECT res_id, res_name FROM restaurants r INNER JOIN locations l ON l.location_id = r.location_id WHERE l.zipcode = $1 ORDER BY res_id DESC"; 
	//const sql = "SELECT location_id FROM locations l WHERE l.zipcode = $1";
	//const sql = "SELECT * FROM locations";
	//zip = sql; 
  //const sql = "SELECT table_name FROM information_schema.tables;"
  
  const values = [zip];
  //let id = 12;
  var result;
  pool.query(sql, values, function(err, resp) {
    if (err) {
      console.log(`Error in query: ${err}`);
    }
	//id = Object.keys(resp).length;
	let id = resp.rows[0].res_id;
	result = resp;
	//let res_list = 
	//id = buffer.location_id;
    // response = resp.rows[0];
	//id = JSON.stringify(buffer);
	console.log(`${id}`);
	const params = {zip: zip, sql: sql, id: id, result: result};
	res.render('pages/result', params);
  });
  
  //const params = {zip: zip, sql: sql, id: id};
  //res.render('pages/result', params);
/*
	if (type == "letterS") {
		type = "Letters (Stamped)";
		//price = 10;
		price = calculateStamped(weight);*/
	/*
	} else if (op == "subtract") {
		result = left - right;		
	} else if (op == "multiply") {
		result = left * right;
	} else if (op == "divide") {
		result = left / right; *//*
	} else {
		price - "20";
	}

	// Set up a JSON object of the values we want to pass along to the EJS result page
	const params = {type: type, weight: weight, price: price};

	// Render the response, using the EJS page "result.ejs" in the pages directory
	// Makes sure to pass it the parameters we need.
	response.render('pages/result', params);*/

}
/*
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
} */
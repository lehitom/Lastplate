const connectionString = process.env.DATABASE_URL;
const { Pool } = require('pg')
const pool = new Pool({ connectionString: connectionString })

app.get('/cool', (req, res) => res.send(cool()))

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
	let id = resp.rows[0].res_name;
	result = JSON.stringify(resp);
	//let res_list = 
	//id = buffer.location_id;
    // response = resp.rows[0];
	//id = JSON.stringify(buffer);
	console.log(`${id}`);
	const params = {zip: zip, sql: sql, id: id, result: result};
	res.render('pages/result', params);
  });
}
  
  function findDeals2(req, res) {
	const zip = Number(req.query.zip);
	searchArea2(res, zip);
}

function searchArea2(res, zip) {
	const sql = "SELECT res_id, res_name FROM restaurants r INNER JOIN locations l ON l.location_id = r.location_id WHERE l.zipcode = $1 ORDER BY res_id DESC"; 
  const values = [zip];
  console.log(sql);
  //var result;
  pool.query(sql, values, function(err, resp) {
    if (err) {
      console.log(`Error in query: ${err}`);
    }
	//id = Object.keys(resp).length;
	let test = resp.rows;
	let id = resp.rows[0].res_name;
	let result = JSON.stringify(resp);
	let testing = JSON.stringify(test);
	let num = resp.rowCount;
	let blah = resp.rows[0];
	
	console.log(test);
	console.log(testing);
	console.log(result);
	console.log(blah);
	let str = '{"rows":' + testing + '}';
	console.log(str);
 // console.log(str.rows[0]);
  
  
  var resturants = [0, 'No results']
  console.log(resturants);
  let rest = JSON.stringify(resturants);
  console.log(rest);
  console.log(JSON.parse(rest[0][1]));
  //console.log(result.rows[0][0]);
	//let res_list = 
	//id = buffer.location_id;
    // response = resp.rows[0];
	//id = JSON.stringify(buffer);
	console.log(resp.rowCount);
	const params = {zip: zip, sql: sql, id: id, result: result, testing: testing, num: num};
	res.render('pages/result', params);
  });
}/*
  pool.query(sql, values, function(err, resp) {
    if (err) {
      console.log(`Error in query: ${err}`);
    }
	console.log("Error in request");
	//id = Object.keys(resp).length;
	//let id = resp.rows[0];
	//let result = JSON.stringify(id);
	//response.end("hello world");
	//const person = resp[0];
	//response.status(200).json(person);
  });
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
const connectionString = process.env.DATABASE_URL;
const { Pool } = require('pg');
const pool = new Pool({ connectionString: connectionString });



exports.checkCred = (body, callback) => {
  let query = {
	  text:
		"SELECT username, password FROM credentials WHERE username=$1 AND password=$2",
	  values: [body.username, body.password]
  };
	pool.query(query, (err, res) => {
    if (err || res.rows.length != 1) {
      console.log("Username not found " + res.rows.length);
	  callback(err, {success: false});
    } else {
	  console.log("Username found " + res.rows.length);
      callback(null, {success: true});
    }
  });
};

exports.getZips = callback => {
  let query = 
		"SELECT zipcode, city_name FROM locations GROUP BY 1, 2 ORDER BY 1"; 
	pool.query(query, function(err, res) {
    if (err) {
      console.log("Failed zip request");
	  callback(err, null);
    } else {
      callback(null, res.rows);
    }
  });
};

exports.getArea = (body, callback) => {
  let query = {
	  text:
		"SELECT r.res_id, r.res_name, l.city_name FROM restaurants r INNER JOIN locations l ON r.location_id = l.location_id WHERE l.zipcode=$1",
	  values: [body.zipcode]
  };
	pool.query(query, (err, res) => {
    if (err || res.rows.length == 0) {
      console.log("Search unsucessful: " + err);
	  callback(err, null);
    } else {
	  console.log("Zipcode found " + res.rows.length + " restaurants");
      callback(null, res.rows);
    }
  });
};

exports.getRestaurant = (body, callback) => {
  let query = {
	  text:
		"SELECT d.deal_id, d.item_name, d.item_discount, r.address, r.res_name, d.quantity, d.item_price FROM deals d INNER JOIN restaurants r ON d.restaurant_id = r.res_id WHERE d.restaurant_id=$1",
	  values: [body.restaurant]
  };
	pool.query(query, (err, res) => {
    if (err || res.rows.length == 0) {
      console.log("Search unsucessful: " + err);
	  callback(err, null);
    } else {
	  console.log("Deals found: " + res.rows.length);
      callback(null, res.rows);
    }
  });
};
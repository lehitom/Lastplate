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
		"SELECT zipcode FROM locations GROUP BY 1 ORDER BY 1";
	pool.query(query, function(err, res) {
    if (err) {
      console.log("Failed zip request");
	  callback(err, null);
    } else {
		console.log("doing zip request");
      callback(null, res.rows);
    }
  });
};
  
 /* 
  const username = req.body.username;
  const password = req.body.password;
  var SQL = {
    text:
      "SELECT username, password FROM credentials WHERE username=$1 AND password=$2",
    values: [username, password]
  };

  pool.query(SQL, (error, results) => {
    if (error || results.rows.length == 0) {
      res.success = false;
    } else {
      res.success = true;
    }
    next();
  });
  
  
  
  console.log("here I am");
  pool.query(query, (err, res) => {
	 console.log("here I am");
    if (err || res.rows.length == 0) {
      res.success = false;
    } else {
      res.success = true;
    }
    next();
} */
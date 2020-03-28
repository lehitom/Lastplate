const connectionString = process.env.DATABASE_URL;
const { Pool } = require('pg')
const pool = new Pool({ connectionString: connectionString })



exports.checkCred = (params, callback) => {
	console.log("here I am");
  let query = {
	  text:
		"SELECT username, password FROM credentials WHERE username=$1 AND password=$2",
	  values: [params.user, params.password]
  };
  console.log("here I am");
  pool.query(query, (error, results) => {
	 console.log("here I am");
    if (error || results.rows.length == 0) {
      res.success = false;
    } else {
      res.success = true;
    }
    next();
  });
}
  
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
} */
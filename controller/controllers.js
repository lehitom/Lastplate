const model = require("../model/models");


exports.login = (req, res) => {
  console.log("USER: " + req.body.username + " PASSWORD: " + req.body.password);
  
  model.checkCred(req.body, (error, results) => {
	  if (error) {
		  console.log("Error in login: " + error);
	  } else {
		  if (results.success) {
			req.session.user = req.body.username;
			console.log("logged in as " + req.session.user);
			res.json({ success: true });
		} else {
			res.json({ success: false });
		}
	  }
  });
};

exports.isLoggedIn = (req, res) => {
  const user = req.session.user;
  if (user != "" && typeof user !== "undefined") {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
};

exports.validZips = (req, res) => {
  console.log("Getting all zipcodes");
  
  model.getZips((error, results) => {
	  if (error) {
		  console.log("Error in zips: " + error);
	  } else {
		  res.json(results);
	  }
  });
};
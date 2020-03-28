const model = require("../model/models");


exports.login = (req, res) => {
  console.log("USER: " + req.body.username + " PASSWORD: " + req.body.password);
  
  model.checkCred(req.body, (error, results) => {
	  if (error) {
		  console.log("Error in login: " + error);
	  } else {
		  if (results.success) {
			req.session.user = req.body.username;
			req.session.clearance = results.clearnace;
			console.log(req.session.clearance);
			res.json({ success: true });
		} else {
			res.json({ success: false });
		}
	  }
  });
};

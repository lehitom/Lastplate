const model = require("../model/models");


exports.login = (req, res) => {
  var user = req.body.username;
  var password = req.body.password;
  console.log("USER: " + req.body.username + " PASSWORD: " + req.body.password);
  
  var params = {
		user: user,
		password: password
	};
  
  model.checkCred = (params, (error, results) => {
	  if (error) {
		  console.log("Error in login: " + error);
	  } else {
		  if (res.success) {
			req.session.user = user;
			res.json({ success: true });
		} else {
			res.json({ success: false });
  }
	  }
  });
};
/*
  if (res.success) {
    req.session.user = user;
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
  //res.sendFile(path.join(__dirname+'/public/test.html'));
});
*/
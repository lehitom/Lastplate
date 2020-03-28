const model = require("../model/models");


exports.login = (req, res) => {
  console.log("USER: " + req.body.username + " PASSWORD: " + req.body.password);
  
  model.checkCred(req.body, (error, results) => {
	  if (error) {
		  console.log("Error in login: " + error);
	  } else {
		  if (res.success) {
			console.log("here I am in success for controllers");
			req.session.user = req.body.username;
			res.json({ success: true });
		} else {
			console.log("here I am in failure for controllers");
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
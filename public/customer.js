function validZip() {
	isVerified();
	$.post("/login", params, function(result) {
		if (result && result.success) {
			$(".side").text("Successfully logged in.");
			//$.get('/form2');
			window.location.pathname = '/form';		
		} else {
			$(".side").text("Error logging in.");
		}
	});
}



function isVerified() {
	$.post("/isLoggedIn", function(res) {
				if (!(res && res.success)) {
					window.location.pathname = '/';
				}
	});
}
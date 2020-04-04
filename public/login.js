function login() {
	var username = $("#username").val();
	var password = $("#password").val();

	var params = {
		username: username,
		password: password
	};

	$.post("/login", params, function(result) {
		if (result && result.success) {
			$("#status").text("Successfully logged in.");
			window.location.pathname = '/form';		
		} else {
			$("#status").text("Error logging in.");
		}
	});
}
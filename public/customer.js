async function validZips() {
	isVerified();
	
	try {
		let response = await fetch("/validZips", {method:"POST"});
		const json = await response.json();
		$(".side").text(json);
	}
	catch (err){
		console.log("error loading in zips")
	}
}

function isVerified() {
	$.post("/isLoggedIn", function(res) {
				if (!(res && res.success)) {
					window.location.pathname = '/';
				}
	});
}
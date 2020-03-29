async function validZips() {
	isVerified();
	
	try {
		let response = await fetch("/validZips", {method:"POST"});
		const json = await response.json();
		console.log(json);
		$(".side").replaceWith("cake");
	}
	catch (err){
		console.log("error loading in zips");
	}
	
}

function pushZips(json) {
	
	var list = document.createElement('ul');
	
	json.forEach(row => {
		var item = document.createElement('li');
		item.appendChild(document.createTextNode(row[i].zipcode));
		list.appendChild(item);
	});
	return list;
	
	//json.forEach(row => {
}

function isVerified() {
	$.post("/isLoggedIn", function(res) {
				if (!(res && res.success)) {
					window.location.pathname = '/';
				}
	});
}
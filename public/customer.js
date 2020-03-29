function validZips() {
	isVerified();
	
	try {
		let response = fetch("/validZips", {method:"POST"});
		const json = response.json();
		document.getElementById('side').innerHTML= "Hello World";
		//pushZips(json);
	}
	catch (err){
		console.log("error loading in zips")
	}
}

function pushZips(json) {
	
	var list = document.createElement('ul);
	
	for (var i = 0; i < json.rowCount; i++) {
		var item = document.createElement('li');
		item.appendChild(document.createTextNode(json.row[i].zipcode));
		list.appendChild(item);
	}
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
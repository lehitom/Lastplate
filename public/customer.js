async function validZips() {
	isVerified();
	
	try {
		let response = await fetch("/validZips", {method:"POST"});
		let json = await response.json();
		
		$("#side").replaceWith(pushZips(json));
	}
	catch (err){
		console.log("error loading in zips");
	}
	
}

function pushZips(json) {
	
	var list = document.createElement('ul');
	
	json.forEach(row => {
		var item = document.createElement('li');
		item.appendChild(document.createTextNode(row.zipcode));
		list.appendChild(item);
	});
	console.log(list);
	return list;

}

function isVerified() {
	$.post("/isLoggedIn", function(res) {
				if (!(res && res.success)) {
					window.location.pathname = '/';
				}
	});
}
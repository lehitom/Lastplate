function isVerified() {
	$.post("/isLoggedIn", function(res) {
				if (!(res && res.success)) {
					window.location.pathname = '/';
				}
	});
}

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


function searchAreas() {
	var zipcode = $("#input").val();

	var params = {
		zipcode: zipcode
	};

	$.post("/searchAreas", params, function(result) {
		if (result) {
			$("#txtHint").empty();
			var list = pushArea(result)
			$("#txtHint").append(list);
		} else {
			$("#txtHint").text("Error getting reply");
		}
	});
}

function pushArea(json) {
	
	
	var list = document.createElement('ul');
	
	json.forEach(row => {
		var item = document.createElement('li');
		item.appendChild(document.createTextNode("ID: " + row.res_id + " is '" + row.res_name + "'"));
		list.appendChild(item);
	});
	console.log(list);
	return (list);

}



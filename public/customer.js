function isVerified() {
	$.post("/isLoggedIn", function(res) {
				if (!(res && res.success)) {
					window.location.pathname = '/';
				}
	});
}

function logout() {
	$.post("/logout", function(result) {
		if (result && result.success) {
			$("#txtHint").text("Successfully logged out.");
			window.location.pathname = '/';
		} else {
			$("#txtHint").text("Error logging out.");
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
			var header = document.createElement('h3');
			header.appendChild(document.createTextNode("Resturants in " + zipcode + ":"));
			$("#txtHint").append(header);
			$("#txtHint").append(pushArea(result));
		} else {
			$("#txtHint").text("Invalid zipcode, no deals found");
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

function searchRestaurants() {
	var restaurant = $("#input").val();

	var params = {
		restaurant: restaurant
	};

	$.post("/searchRestaurants", params, function(result) {
		if (result) {
			$("#txtHint").empty();
			var header = document.createElement('h3');
			header.appendChild(document.createTextNode("Deals at " + result[0].res_name + " located at '" + result[0].address + "':"));
			$("#txtHint").append(header);
			$("#txtHint").append(pushRestaurant(result));
		} else {
			$("#txtHint").text("No deals found at this location");
		}
	});
}

function pushRestaurant(json) {
	var list = document.createElement('ul');
	
	json.forEach(row => {
		var item = document.createElement('li');
		item.appendChild(document.createTextNode("'" + row.item_name + "' has a " + row.item_discount + "% discount from $" + row.item_price + " with " + row.quantity + " remaining"));
		list.appendChild(item);
	});
	console.log(list);
	return (list);

}



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
	var zipcode = $("#zipcode").val();

	var params = {
		zipcode: zipcode
	};

	$.post("/searchAreas", params, function(result) {
		if (result && result.row[0].res_id) {
			$("#txtHint").text("Got back reply");
		} else {
			$("#txtHint").text("Error getting reply");
		}
	});
}


/*
async function loadZip() {
	var zip = $("#zipcode").val();
	
	try {
		let response = await fetch("/getZip", zip, {method:"POST"});
		let json = await response.json();
		
		$("#txtHint").replaceWith(loadList(json));
	}
	catch (err){
		console.log("error loading in zip");
	}
	
}

function loadList(json) {
	
	var list = "<table>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Address</th>
					</tr>
				<% json.forEach(row => { %>
					<tr>
						<td><%=row.res_id%></td>
						<td><%=row.res_name%></td>
						<td><%=row.address%></td>
					</tr>
				<% }); %>
				</table>";
	
	return list;

}
*/
function isVerified() {
	$.post("/isLoggedIn", function(res) {
				if (!(res && res.success)) {
					window.location.pathname = '/';
				}
	});
}
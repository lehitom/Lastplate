function search() {
	//get value
	console.log('Testing hardcoded DB');
	
	
	$.get('https://infinite-brook-67283.herokuapp.com/find2?zip=83221', function(data, status) {
		console.log('pinged URL');
		console.log(status);
		console.log(data);
	});
	
}
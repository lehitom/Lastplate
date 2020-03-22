function search() {
	//get value
	console.log('Testing hardcoded DB');
	
	
	$.get('http://www.omdbapi.com/?i=tt3896198&apikey=4d452043', function(data, status) {
		console.log('pinged URL');
		console.log(status);
		console.log(data);
	});
	
}
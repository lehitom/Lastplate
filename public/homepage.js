/*function search() {
	//get value
	console.log('Testing hardcoded DB');
	
	
	$.get('https://www.omdbapi.com/?i=tt3896198&apikey=4d452043', function(data, status) {
		console.log('pinged URL');
		console.log(status);
		console.log(data);
	});
} */
function loadZip(str) {
  var xhttp;
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById("txtHint").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "getRestaurants.php?q="+str, true);
  xhttp.send();
}
var Uscore = 0;

var highscore = 10;

var press = function() {
	Uscore++;
	document.getElementById('highscore').innerHTML = "New Highscore:" + Uscore;
	return;

	if (Uscore> highscore) {
		document.getElementById('highscore').innnerHTML = "New Highscore: " + Uscore
	}
};


//Code for Starting a server
//Navigate to your file

//then add the following command

//python -m SimpleHTTPServer 8001 
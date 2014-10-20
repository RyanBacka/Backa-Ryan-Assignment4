//alert("JavaScript works!");

//Ryan Backa
//SDI 1410
//Project 4

var isItAPhoneNum = function(string,phoneNumBoo){
	if (string.index(3)=== "-" && string.index(7) === "-" && string.length === 12){
		phoneNumBoo = true;
	} else {
		phoneNumBoo = false
	};
	
	
};

var isItAnEmailAddress = function(string,emailBoo){
	if (){
		
	}
};

var isItAURL = function(string, URLBoo){
	if(string.index(0,4) === "http:" || string.index(0,5) === "https:" || string.index(0,4) === "HTTP:" || string.index(0,5) === "HTTPS:"){
		URLBoo = true;
	} else {
		URLBoo = false;
	}
};

var 
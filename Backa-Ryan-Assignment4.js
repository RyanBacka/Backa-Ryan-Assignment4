//alert("JavaScript works!");

//Ryan Backa
//SDI 1410
//Project 4
//Problem Solving Functions

//global variables
var myNum="412-735-2367",
	webSite = "http://www.fullsail.edu",
	isItTrue = false,
	email = "RKBacka@fullsail.edu";

//functions
//function to figure out if a string is in valid phone number form
var isItAPhoneNum = function(enterString,phoneNumBoo){
	var phoneNumBoo=false;
	if (enterString.charAt(3)=== "-" && enterString.charAt(7) === "-" && enterString.length === 12){
		phoneNumBoo = true;
	} else {
		phoneNumBoo = false
	};
	return phoneNumBoo;
};

//function to determine if a string is in valid email form
var isItAnEmailAddress = function(enterString,emailBoo){
	var lookForPeriod = 0;
	emailBoo = false;
	if (enterString.contains("@") === true){
		emailBoo= enterString.endsWith(".edu")||enterString.endsWith(".com")||enterString.endsWith(".org");
	};
	return emailBoo;		
};

//funtion to determine if a string is in URL form
var isItAURL = function(enterString, URLBoo){
	URLBoo=false;
	URLBoo=enterString.contains("http:")||enterString.contains("https:");
	
	return URLBoo;
};

var 

//main code
//calling my phone number fuction and logging the results
isItTrue=isItAPhoneNum(myNum, isItTrue);
console.log(isItTrue);

//calling my URL function and logging the result
isItTrue=isItAURL(webSite, isItTrue);
console.log(isItTrue);

//calling my email function and logging the results
isItTrue=isItAnEmailAddress(email, isItTrue);
console.log(isItTrue);
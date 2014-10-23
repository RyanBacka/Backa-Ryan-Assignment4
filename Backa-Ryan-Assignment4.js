//alert("JavaScript works!");

//Ryan Backa
//SDI 1410
//Project 4
//Problem Solving Functions

//global variables
var myNum="412-735-2367",
	webSite = "htt://www.fullsail.edu",
	isItTrue = false,
	email = "RKBacka@fullsail.ie",
	stringNum = "72",
	oddNum = 5,
	evenArray=[2,4,6,8,10,12,14,16,18],
	assortedArray=[2,"hi",8,"hello",15, true, "15"],
	totalOfArray = 0;

//functions
//function to figure out if a string is in valid phone number form
var isItAPhoneNum = function(enterString,phoneNumBoo){
	if (enterString.charAt(3)=== "-" && enterString.charAt(7) === "-" && enterString.length === 12){
		phoneNumBoo = true;
	} else {
		phoneNumBoo = false
	};
	return phoneNumBoo;
};

//function to determine if a string is in valid email form
var isItAnEmailAddress = function(enterString,emailBoo){
	if (enterString.contains("@") === true){
		if(enterString.endsWith(".edu") === true ||enterString.endsWith(".com") === true ||enterString.endsWith(".org") === true){
			emailBoo = true;
		} else {
			emailBoo = false;
		};
	} else {
		emailBoo = false;	
	}
	return emailBoo;		
};

//funtion to determine if a string is in URL form
var isItAURL = function(enterString, URLBoo){
	URLBoo=false;
	URLBoo=enterString.contains("http:")||enterString.contains("https:");
	return URLBoo;
};

//function determining if a string is a number or a letter and changing it to a number if it is one
var stringValueToNumber = function(enterString){
	var isItALetter = false;
	isItALetter = isNaN(enterString);
	if (isItALetter === false) {
       	enterString=parseInt(enterString);
	}else{
    	console.log("That is not a number!");
    };
	return enterString;
};

//function finding the number in an array higher than a given number
var nextHighestNum = function(numArray, newNum){
	for (var loopCounter = 0; loopCounter < newNum; loopCounter++){
		if (numArray[loopCounter] > newNum){
			newNum=numArray[loopCounter];
			break;
		};
	};
	return newNum;
};

//function finding the sum of all numbers in an array as long as they are numbers
var sumOfAllNum = function(rndArray, sumOfArray){
	var numCheck = 0;
	for (var loopCounter = 0; loopCounter < rndArray.length; loopCounter++){
		numCheck = isNaN(rndArray[loopCounter]);
		if (numCheck === false && rndArray[loopCounter] !== false && rndArray[loopCounter] !== true){
			sumOfArray = sumOfArray + rndArray[loopCounter];
		};
	};
		return sumOfArray;
};

//main code
//calling my phone number fuction and logging the results
isItTrue=isItAPhoneNum(myNum, isItTrue);
console.log(isItTrue);

//calling my email function and logging the results
isItTrue=isItAnEmailAddress(email, isItTrue);
console.log(isItTrue);

//calling my URL function and logging the result
isItTrue=isItAURL(webSite, isItTrue);
console.log(isItTrue);

//calling my string to a number function and logging the result in a mathematical equation
stringNum = stringValueToNumber(stringNum);
console.log(stringNum+6);

//calling function to find the first number in an array higher than a set number and logging the result
oddNum = nextHighestNum(evenArray,oddNum);
console.log(oddNum);

//calling function to find the sum of a random array and logging the result
totalOfArray = sumOfAllNum(assortedArray, totalOfArray);
console.log(totalOfArray);




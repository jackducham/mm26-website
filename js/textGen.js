var quotes = [
	"<LAUNCH DOORS LOCKED>",
	"<WE STAND ON THE SHOULDERS OF GIANT ROBOTS>",
	"<THERE IS NO I IN TEAM BUT THERE'S ONE IN WIN>",
	"<YOU WILL BE REMEMBERED>"
];

function genQuote() {
	"use strict";
	var ranNum = Math.floor(Math.random() * quotes.length);
	document.getElementById("launchText").innerHTML = quotes[ranNum];
}
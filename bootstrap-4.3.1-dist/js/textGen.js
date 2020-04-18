var quotes = [
	"<LAUNCH DOORS LOCKED>",
	"<WE STAND ON THE SHOULDERS OF GIANT ROBOTS>",
	"<THERE'S NO I IN TEAM, BUT ONE IN WIN>",
	"<PLEASE CONTACT SECURITY OFFICER FOR CLEARANCE>",
	"<MAKE SURE TO SIGN YOUR WAIVER>",
	"<MARCH TOWARDS THE FUTURE>",
	"<LIKE YOU'VE NEVER SEEN IT BEFORE>",
	"<missing string>",
	"<COMING IN HOT>",
	"<GATE IS RED: DO NOT JUMP>",
	"<FORTY TONNES OF FUN>",
	"<THE FUTURE IS NOW>",
	"<INCOMING>",
	"<SUIT UP>",
	"<BRACE FOR IMPACT>",
	"<AND YOU WILL BE KNOWN>",
	"<FOR GLORY AND FOR FUN>",
	"<DATA UPLINK INACTIVE>",
	"<AWAITING ACTIVATION>"
];

function genQuote() {
	"use strict";
	var ranNum = Math.floor(Math.random() * quotes.length);
	document.getElementById("launchText").innerText = quotes[ranNum];
}
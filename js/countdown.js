var countDownDate = new Date("September 25, 2020 19:30:00 CDT").getTime();

var oneTicInterval = setInterval(function() {
  var currentDate = new Date().getTime();
  var dateDiff = countDownDate - currentDate;
  var days = Math.floor(dateDiff/(1000*60*60*24));
  var hours = Math.floor((dateDiff%(1000*60*60*24))/(1000*60*60));
  var minutes = Math.floor((dateDiff%(1000*60*60))/(1000*60));
  var seconds = Math.floor((dateDiff%(1000*60))/(1000));
  document.getElementById("countDownClock").innerHTML = days + " Days, " + hours + " Hours, "
	
  + minutes + " Minutes, and " + seconds + " seconds." ;
 
  if (dateDiff < 0) {
    clearInterval(oneTicInterval);
    document.getElementById("countDownClock").innerHTML = "What are you doing!? The game's already started!";
	document.getElementById("frontPageSignUp").innerHTML = "";
  }
}, 1000);
var date = new Date;

var secondDeg = date.getSeconds() * 6;
var minuteDeg = date.getMinutes() * 6;
var hourDeg = date.getHours() * 15;

var lastSecond = date.getSeconds();
var lastMinute = date.getMinutes();
var lastHour = date.getHours();



setInterval(function() {
    var date = new Date;
    document.getElementById("clock").innerText = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

    if(date.getSeconds() != lastSecond) {
        secondDeg = secondDeg + 6;
        lastSecond = date.getSeconds();
    }
    if(date.getMinutes() != lastMinute) {
        minuteDeg = minuteDeg + 6;
        lastMinute = date.getMinutes();
    }

    if(date.getHours() != lastHour) {
        hourDeg = hourDeg + 30;
        lastHour = date.getHours();
    }

    document.getElementById("analog-second").style.transform = "rotate(" + secondDeg + "deg)";
    document.getElementById("analog-minute").style.transform = "rotate(" + minuteDeg + "deg)";
    document.getElementById("analog-hour").style.transform = "rotate(" + hourDeg + "deg)";
},1000)
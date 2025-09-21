function updateClock() {
    var currentTime = new Date();

    // Clock Hours for 12h clock
    var currentHoursAP = currentTime.getHours();

   //Clock Hours for 24h clock
    var currentHours = currentTime.getHours();

// Minutes
    var currentMinutes = currentTime.getMinutes();

    // Seconds
    var currentSeconds = currentTime.getSeconds();



    // Adding 0 if Minutes & Seconds is More or Less than 10
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;



    //  "AM" or "PM" 12h clock 
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";


    // clock to 12h 
    currentHoursAP = (currentHours > 12) ? currentHours - 12 : currentHours;


    //  clock to 12h version after mid night
    currentHoursAP = (currentHoursAP == 0) ? 12 : currentHoursAP;


    // display first 24h clock and after line break 12h version
    var currentTimeString = "24h" + currentHours + ":" + currentMinutes + ":" + currentSeconds + "" + "<br>" + "12h "    + currentHoursAP + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    
    
    // print clock js in div #clock.
    $("#clock").html(currentTimeString);}
    $(document).ready(function () {
    setInterval(updateClock, 1000);
});

//const backgrondImage = new Image();
//backgrond.src = "img/background.png";

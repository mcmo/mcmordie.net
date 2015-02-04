$(document).ready(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    var message = "";
    var birthDay = $('#date').val(); // form date
    var birthTime = $('#time').val(); // form time
    var ONEDAY = 1000 * 60 * 60 * 24;

    // Get Today's date
    var today = new Date();
    var todayMs = today.getTime(); // milliseconds

    // Get Birthdate
    var b = new Date(birthDay);
    var birthMs = b.getTime(); // milliseconds
    var bday = b.getUTCDate(); // 17
    var bmonth = month[b.getUTCMonth()]; // May

    // Header message
    if (birthDay.length < 1) {
      $('#header h2').text("No Birthday?  No Parties for You!");
      return;
    } else if ((today.getUTCMonth() == b.getUTCMonth()) && (today.getUTCDate() == b.getUTCDate())){
      console.log('testing');
      $('#header h2').text("Today's your birthday?! PARTY TIME!");
    } else {
      $('#header h2').text("Boo! No Parties Today.");
    }
    
    // Calc results
    var day10k = new Date(birthMs + (10000 * ONEDAY));
    var day20k = new Date(birthMs + (20000 * ONEDAY));
    var hour500k = new Date(birthMs + (1000 * 60 * 60 * 500000));
    var minute1Mil = new Date(birthMs + (1000 * 60 * 1000000));
    var minute10Mil = new Date(birthMs + (1000 * 60 * 10000000));
    var minute50Mil = new Date(birthMs + (1000 * 60 * 50000000));
    var second1Bil = new Date(birthMs + (1000 * 1000000000));

    message += "Your birthday is " + bmonth + " " + bday + "<br>";
    message += "You're " + Math.floor((todayMs - birthMs) / ONEDAY / 365) + " years old<br>";
    message += "You're " + Math.floor((todayMs - birthMs) / ONEDAY) + " days old<br>";
    message += "You're " + Math.floor((todayMs - birthMs) / (1000 * 60)) + " minutes old<br><br>";
    message += "Your 10,000th day " + formatDate(day10k) + "<br>";
    message += "Your 20,000th day " + formatDate(day20k) + "<br>";
    message += "Your 500,000th hour " + formatDate(hour500k) + "<br>";
    message += "Your 1 millionth minute " + formatDate(minute1Mil) + "<br>";
    message += "Your 10 millionth minute " + formatDate(minute10Mil) + "<br>";
    message += "Your 50 millionth minute " + formatDate(minute50Mil) + "<br>";
    message += "Your 1 billionth second " + formatDate(second1Bil) + "<br>";

    $('#message').html(message);

    function formatDate(b) {
      var isWas = b < today ? 'was' : 'is';
      return isWas + " " + weekday[b.getDay()] + ", " + month[b.getMonth()] + " " + b.getDate() + ", " + b.getFullYear();
    }
  });
});

var month = [12];
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";

var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";
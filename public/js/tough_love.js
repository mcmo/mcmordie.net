$(document).ready(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    var message = '',
      res = $('#input').val();
    $('#input').val('');

    if (res.length === 0) {
      message = "You don't fill out forms?<br><br>";
    } else if (res.substring(0,2).toLowerCase() === 'i ') {
      message += "You " + res.substring(2) + "?<br><br>"; 
    } else {
      message += "You " + res + "?<br><br>";
    }
    message += advice[Math.floor(Math.random() * advice.length)];

    $('#message').html(message);
  });

});

var advice = ["That's terrible! You should knock that off!",
  "Seriously? Why don't you grow the hell up?!",
  "Aren't you a little old for that crap?",
  "You are bad and you should feel bad!",
  "Gross. You are gross.",
  "Are you going to suck all your life?",
  "What? Who does that?!",
  "I thought you were better than that.",
  "My disapproval is overwhelming.",
  " ಠ__ಠ ",
  "Are you freaking kidding me?",
  "NO! Bad!",
  "And when do you plan on becoming an adult?",
  "That is totally unacceptable.",
  "You should be utterly ashamed.",
  "Ugh! That's horrible!",
  "A kitten dies everytime you do that.",
  "I can't believe you are that disgusting."
];
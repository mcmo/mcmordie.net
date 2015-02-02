$(document).ready(function() {
  var level = 1,
    initialSpeed = 4.5,
    speed = initialSpeed,
    t;

  $('#ball').on('click', function() {
    $(this).hide();
    $('#message').text(messages[(level++) - 1]).show();

    if (level < 12) {
      speed = level < 9 ? initialSpeed - (level - 1) * 0.5 : speed - 0.1;
      $('#level').text('Next Level: ' + level).show();
      t = setTimeout(msg, 1000);
    } else {
      $('#level').text('Game Over!').show();
      stopMsg();
    }
  });

  function msg() {
    $('#message').hide();
    $('#level').hide();
    $('#ball').css('-webkit-animation', 'bounce ' + speed + 's infinite linear');
    $('#ball').css('animation', 'bounce ' + speed + 's infinite linear');
    $('#ball').show();
  }

  function stopMsg() {
    clearTimeout(t);
  }
});

var messages = ["Nice job!",
  "Excellent clickin'!",
  "That was Awesome!",
  "Man are you good!",
  "Boom!",
  "You're a pro!",
  "Unbelievable!",
  "Insanity!",
  "You're on fire!",
  "That was crazy!",
  "You are blowin' my mind!"
];
$(document).ready(function() {
  var level = 1,
    initialSpeed = 4,
    speed = initialSpeed,
    t, clicks = 0;

  // workaround for 300ms click delay on mobile
  var clickOrTouch = (('ontouchend' in window)) ? 'touchend' : 'click';

  $('#ball').on(clickOrTouch, function() {
    $(this).hide();
    $('#message').text(messages[(level++) - 1]).show();

    if (level < 12) {
      speed = level < 8 ? initialSpeed - (level - 1) * 0.5 : speed - 0.1;
      $('#level').text('Next Level: ' + level).show();
      t = setTimeout(msg, 2000);
    } else {
      $('#level').text('Game Over!').show();
      stopMsg();
    }
  });

  $('body').on(clickOrTouch, function() {
    $('#clicks').text(++clicks);
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
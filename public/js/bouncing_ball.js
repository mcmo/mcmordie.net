$(document).ready(function() {
  var level = 1,
    initialSpeed = 4,
    speed = initialSpeed,
    secondsTimer, clicks = 0,
    seconds = 0, intervals = 0;
  
  getMinClicks(function(min){
    $('#minClicks').html(min.minClicks);
    $('#minSeconds').html(min.minSeconds);
    //$('#device').html(min.device);
  });
  
  // workaround for 300ms click delay on mobile
  var clickOrTouch = (('ontouchend' in window)) ? 'touchend' : 'click';
  
  $('#start').on(clickOrTouch, function(){
    $(this).hide();
    $('#ball').show();
    secondsTimer = setInterval(function(){
      seconds = ++intervals / 10;
      $('#seconds').text(seconds);
    }, 100);
  });

  $('#ball').on(clickOrTouch, function() {
    $(this).hide();
    $('#message').text(messages[(level++) - 1]).show();

    if (level < 12) {
      speed = level < 8 ? initialSpeed - (level - 1) * 0.5 : speed - 0.1;
      $('#level').text('Next Level: ' + level).show();
      setTimeout(msg, 1000);
    } else {
      $('#level').text('Game Over!').show();
      $('body').off(clickOrTouch);
      setMinClicks();
      clearInterval(secondsTimer);
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
  
  function getMinClicks(fn){
    $.get('/9/getMinClicks', function(data) {
      var obj = JSON.parse(data);
      fn(obj);
    });
  }
  
  function setMinClicks(){
    var uploadDevice = (clickOrTouch === 'click') ? 'desktop' : 'mobile';
    var uploadClicks = Number($('#clicks').text());
    var uploadSeconds = Number($('#seconds').text());
    getMinClicks(function(min){
      if (uploadClicks > min.minClicks) uploadClicks = min.minClicks;
      if (uploadSeconds > min.minSeconds) uploadSeconds = min.minSeconds;
      var parameters = { clicks: uploadClicks, seconds: uploadSeconds, device: uploadDevice };
      $.get('/9/setMinClicks', parameters, function(data){
        console.log(data.minClicks);
        $('#minClicks').html(data.minClicks);
        $('#minSeconds').html(data.minSeconds);
        //$('#device').html(data.device);
      });
    });
  }
  
  $('#btnSend').on('click', function(){
    setMinClicks();
  });
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
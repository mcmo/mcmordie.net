$(document).ready(function() {
  var ms = 0; // keep track of time in milliseconds
  var timer;  // allow start/stop timer

  $('#start').on('click', function() {

    timer = setInterval(function() {
      startTimer();
    }, 100);

    $('#start').attr('disabled', true);
    $('#stop').attr('disabled', false);
    $('#reset').attr('disabled', false);

    function startTimer() {
      ms += 100;
      display(ms);
    }
  });

  function display(ms) {
    var d = new Date(ms);
    var h = addZero(d.getUTCHours());
    var m = addZero(d.getUTCMinutes());
    var s = addZero(d.getUTCSeconds());
    var tenths = d.getUTCMilliseconds().toString().substr(0,1);

    $('#hours').text(h);
    $('#minutes').text(m);
    $('#seconds').text(s);
    $('#tenths').text(tenths);
  }

  $('#stop').on('click', function() {
    clearInterval(timer);
    $('#start').attr('disabled', false);
    $('#stop').attr('disabled', true);
  });

  $('#reset').on('click', function() {
    clearInterval(timer);
    $('#start').attr('disabled', false);
    $('#stop').attr('disabled', true);
    $('#reset').attr('disabled', true);
    ms = 0;
    display(ms);
  });

  function addZero(n) {
    if (n.toString().length === 1) {
      return '0' + n;
    } else {
      return n;
    }
  }
});
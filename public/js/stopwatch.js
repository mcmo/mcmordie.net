$(document).ready(function() {
  var ms = 0; // keep track of time in milliseconds
  var timer; // allow start/stop timer

  $('#start-stop').on('click', function() {

    if ($('#start-stop').text() == 'Stop') {
      clearInterval(timer);
      $('#start-stop').text('Start').removeClass('btn-danger').addClass('btn-success');
      return;
    }

    $('#start-stop').text('Stop').removeClass('btn-success').addClass('btn-danger');


    timer = setInterval(function() {
      startTimer();
    }, 100);

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
    var tenths = d.getUTCMilliseconds().toString().substr(0, 1);

    $('#hours').text(h);
    $('#minutes').text(m);
    $('#seconds').text(s);
    $('#tenths').text(tenths);
  }

  $('#reset').on('click', function() {
    clearInterval(timer);
    $('#reset').attr('disabled', true);
    $('#start-stop').text('Start').removeClass('btn-danger').addClass('btn-success');
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
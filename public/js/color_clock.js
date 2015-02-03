$(document).ready(function() {

  time();

  function time() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    $('#time').text(d.toLocaleTimeString());
    
    color(h, m, s);

    setTimeout(time, 1000);
  }

  function color(h, m, s) {
    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;
    var hex = '#'+h+m+s;

    $('body').css('background-color', hex);
    $('#color').text(hex);
  }
});
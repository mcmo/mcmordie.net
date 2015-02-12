$(document).ready(function() {
  var clicks = 0;

  // workaround for 300ms click delay on mobile
  var clickOrTouch = (('ontouchend' in window)) ? 'touchend' : 'click';

  $('#start').on(clickOrTouch, function(e) {
    e.stopPropagation();
    $('#top').hide();

    setTimeout(function() {
      var clicks = $('#timer').text();
      $('#clicks').text(clicks);
      $('#calc').text(clicks/10);
      $('#timer').hide();
      $('#timesup').show();
    }, 10000);

  });

  $('body > .container').on(clickOrTouch, function(e) {
    $('#timer').text(++clicks);
  });
});
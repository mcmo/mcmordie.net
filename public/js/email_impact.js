$(document).ready(function() {
  var email = '';
  
  // detect mobile
  var clickOrTouch = ('ontouchend' in window) ? 'touchend' : 'keypress';

  $('body').on(clickOrTouch, function() {
    if ($('#question').css('display') != 'none') {
      console.log('if');
      $('#question').hide();
      $('div#count').show();
      $('#email').show().focus();
    }
  });

  $('#email').on('keyup', function(e) {
    
    var length = $(this).val().length;
    $('#count span').text(length);

    $(this).css('font-size', 500 / Math.pow(length, 1/1.3));
    
    console.log(length);
  });
});
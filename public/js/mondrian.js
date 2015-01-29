$(document).ready(function() {
  var color = 'white';
  $('.color').on('click', function() {
    color = $(this).css('background-color');
    $('.selected').css('background-color', color);    
  });
  $('.cell').on('click', function() {
    $(this).css('background-color', color);
  });
});
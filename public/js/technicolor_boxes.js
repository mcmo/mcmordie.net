$(document).ready(function(){
  $('.box').on('mouseenter', function(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    $(this).css('background-color', 'rgb('+r+','+g+','+b+')');
    $(this).addClass('shadow');
  });
  $('.box').mouseleave(function(){
    $(this).removeClass('shadow');
  });
});
$(document).ready(function(){
  $('#cat').on('click', function(){
    var boxShadow = $(this).css('box-shadow').split('px')[3].trim();
    boxShadow = Number(boxShadow) + 3;
    $(this).css('box-shadow', '0 0 ' + boxShadow + 'px ' + boxShadow + 'px gray');
  });
  $('blockquote').on('click', function(){
    var textShadow = $(this).css('text-shadow').split('px')[1].trim();
    console.log(textShadow);
    textShadow = Number(textShadow) + 1;
    $(this).css('text-shadow', '0 ' + textShadow + 'px ' + textShadow + 'px gray');
  });
  
  
});
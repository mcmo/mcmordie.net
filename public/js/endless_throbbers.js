$('document').ready(function(){
  
  var n = 1; //number of throbbers
  var clickOrTouch = 'ontouchend' in window ? 'ontouchend' : 'click';
  
  $('body').on(clickOrTouch, function(e){
    console.log(e);
    var throbber = getThrobber();
    
    $("body").append("<img id='t"+n+"' src=" + throbber + ">");
    $('#t' + n).css({'position': 'absolute', 'top': e.pageY, 'left': e.pageX});
    if ($('#t' + n).attr('src').substr(-3) === 'png') $('#t' + n).addClass('spin');
    
    if (n === 1) msgDelay("That\'s odd. Try clicking somewhere else.");
    else if (n === 2) msgDelay("So weird! Maybe try the other side?");
    else setTimeout (function(){
      $('#message').text("Welp, I\'ve got nothing else for you. You\'re on your own now.");
      setTimeout(function(){
        $('#message').fadeOut();
      }, 3000);
    }, 1000);
    
    n++;
  });
  
  function msgDelay(txt){
    setTimeout (function(){
      $('#message').text(txt);
    }, 1000);    
  }
  
  function getThrobber(){
    var rand = Math.floor(Math.random() * 14);
    
    if (rand != 5) return '/img/31/throbber_' + rand + '.gif';
    else return '/img/31/throbber_' + rand + '.png';
  }
});
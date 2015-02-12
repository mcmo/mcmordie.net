$(document).ready(function() {

  var colors = ['green', 'red', 'yellow', 'blue'];
  var order = [], n = 0;

  // workaround for 300ms click delay on mobile
  var clickOrTouch = (('ontouchend' in window)) ? 'touchend' : 'click';

  $('#play').on(clickOrTouch, function() {
    $('#intro').hide();
    $('#board').show();
    
    // due to bug?, play/stop a sound to initialize? the player
    var sound = new Howl({urls: ['/media/red.wav']}).play();
    sound.stop();

    setTimeout(addColor, 300);
  });

  $('.pad').on(clickOrTouch, function() {
    var color = this.id;
    var sound = new Howl({urls: ['/media/' + color + '.wav']}).play();
    showColor(this, color);

    if (color === order[n++]) {
      if (n >= order.length){
        n = 0;
        addColor();
      } 
    } else {
      setTimeout(function() {
        sound = new Howl({urls: ['/media/fail.wav']}).play();
        n = 0;
      }, 500);
    }
  });
  
  function addColor() {
    order.push(pickColor());
    playColors();
  }
  
  function showColor(that, color) {
    var lightColor = (color != 'red') ? 'light' + color : 'lightcoral';
    $(that).css('background-color', lightColor);
    setTimeout(function() {
      $(that).css('background-color', color);
    }, 200);
  }
  
  function playColors() {
//     console.log(n);
    if (n < order.length) {
      setTimeout(function() {
        var color = order[n++];
        var sound = new Howl({urls: ['/media/' + color + '.wav']}).play();
        showColor($('#' + color), color); 
        playColors();
      }, 600);
    } else n = 0;
  }

  function pickColor() {
    return colors[Math.floor(Math.random() * 4)];
  }

});
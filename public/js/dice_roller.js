$(document).ready(function() {

  $('#shake').on('click', function() {
    roll();
  });

  function roll() {
    var dice1 = Math.ceil(Math.random() * 6);
    var dice2 = Math.ceil(Math.random() * 6);
    $('#dice1, #dice2').removeClass('shake');
    setTimeout(function() {
      $('#dice1, #dice2').addClass('shake');
    }, 1);
    setTimeout(function(){
      setDice(dice1, dice2);
    }, 1000);
  }

  function setDice(dice1, dice2) {
    $('#total').text(dice1 + dice2);
    $('#dice1').attr('src', '/img/12/dice' + dice1 + '.png');
    $('#dice2').attr('src', '/img/12/dice' + dice2 + '.png');
  }
});
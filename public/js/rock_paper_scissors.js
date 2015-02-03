$(document).ready(function() {

  $('button').on('click', function() {
    var user = this.id;  //user pick

    resetHands();
    
    //countdown timer
    var timeLeft = 3;
    var x = setInterval(function() {
      $('#message').text(timeLeft);
      if (timeLeft < 1) {
        clearInterval(x);
        var comp = compPick();  //computer pick
        showWeapons(comp, user);
      }
      timeLeft--;
    }, 500);
  });
  
  function compPick(){
    var choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*3)];
  }

  function resetHands() {
    $('#comp-weapon').attr('src', '/img/13/left_fist.png');
    $('#user-weapon').attr('src', '/img/13/right_fist.png');
    $('#comp-weapon, #user-weapon').removeClass('shake');
    setTimeout(function(){
      $('#comp-weapon, #user-weapon').addClass('shake');
    }, 1);
  }

  function showWeapons(comp, user) {
    var message = '';
    if (comp == user) message = "Tie";
    if (comp == 'rock'){
      if (user == 'paper') message = 'You Win!';
      if (user == 'scissors') message = 'Computer Wins<br>:(';
    }
    if (comp == 'paper'){
      if (user == 'rock') message = 'Computer Wins<br>:(';
      if (user == 'scissors') message = 'You Win!';
    }
    if (comp == 'scissors'){
      if (user == 'rock') message = 'You Win!';
      if (user == 'paper') message = 'Computer Wins<br>:(';
    }    
    $('#message').html(message);
    $('#comp-weapon').attr('src', '/img/13/' + comp + '.png');
    $('#user-weapon').attr('src', '/img/13/' + user + '.png');
  }
});
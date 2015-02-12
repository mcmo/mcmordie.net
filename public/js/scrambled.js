$('document').ready(function() {

  var word = '';
  var guessesLeft = 3;
  var score = 0;

  function getWord() {
    $.get("/25/words.html", {max: 6}, function(data) {
      word = data;
      console.log("original word: " + word);
      $("#word").text(word.shuffle());
    });
  }

  $('#letsplay').on('click', function() {
    $('#page1').hide();
    $('#page2').show();
    getWord();
  });

  $('form').on('submit', function(e) {
    e.preventDefault();
    var guess = $('#guess').val();

    if (guess === word) {
      $('#message').text('You are correct! Nice Going!!!');
      score++;
      return setTimeout(nextWord, 3000);
    }

    if (--guessesLeft > 0) {
      $('#message').text('Incorrect! ' + guessesLeft + ' chances left');
      $('#guess').val('').focus();
    } else {
      $('#message').html('Incorrect! You are out of chances<br>The word was <b>' + word + '<b>');
      score--;
      return setTimeout(nextWord, 3000);
    }

  });

  function nextWord() {
    $('#message').text('Here is your next word');
    getWord();
    $('#score').text('Score: ' + score);
    $('#guess').val('').focus();
    guessesLeft = 3;
  }


  String.prototype.shuffle = function() {
    var parts = this.split('');
    for (var i = 0, len = parts.length; i < len; i++) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = parts[i];
      parts[i] = parts[j];
      parts[j] = temp;
    }
    return parts.join('');
  };

});
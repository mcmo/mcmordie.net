$(document).ready(function() {

  var words = [];
  var rand, newWord, stop = 1;

  getWords();
  
  var clickOrTouch = 'ontouchend' in window ? 'touchend' : 'click';
  
  $('#startstop').on(clickOrTouch, function(){
    var startStop = $('#startstop').text();
    
    if (startStop === 'Start'){
      $('#startstop').text('Stop').css('background-color', 'crimson');
      getNewWord();
    }
    if (startStop === 'Stop'){
      console.log('yes');
      $('#startstop').text('Start').css('background-color', 'seagreen');
      clearTimeout(newWord);
    }    
    
  });

  function getWords() {
    $.get("/33/wordsNextSteps.html", function(data) {
      words = data.split(' , ');
      getNewWord();
    });
  }

  function getNewWord() {
    var rand = Math.floor(Math.random() * words.length);
    newWord = setTimeout(function() {
      $('#word').text(words[rand]);
      getNewWord();
//       if (stop++ > 100) clearTimeout(newWord);
//       else getNewWord();
    }, 50);
  }
});
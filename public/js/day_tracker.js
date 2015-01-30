$(document).ready(function(){
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var msg = [
    "Sunday Funday!",
    "Back to the grind!",
    "Oh. It's Tuesday.",
    "Boom! Wednesday!",
    "Thirsty Thursday, yo!",
    "It's Friday! We should be kickin' it!",
    "Paaarrrtttyyy!"
  ];

  var d = new Date();
  var day = d.getDay(); // 0 (Sun) - 6 (Sat)
  var left = (day * 100) + 'px';
  $('#vertical').css('left', left);
  console.log(left);
  
  $('#day').text(days[day]);
  $('#saying').text(msg[day]);
  $('#vertical, #horizontal').css('display', 'block');
});
$(document).ready(function(){
  $('.sushi').on('click', function(){
    var that = $(this);
    that.removeClass('spin');
    setTimeout(function(){
      that.addClass('spin');
    }, 1);
  });
});


var animations = ['shake',
  'hop',
  'spin',
  'grow',
  'hooray'
];


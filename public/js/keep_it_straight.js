$(document).ready(function() {
  var height = 100;
  var width = 400;
  var started = false;

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  resetCanvas();

  function resetCanvas() {
    c.setAttribute("height", height);
    c.setAttribute("width", width);
    c.style.borderRadius = height / 2;
    started = false;
    ctx.clearRect(0, 0, width, height);
    fill();
  }

  function fill() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 75, height);
    ctx.fillStyle = "blue";
    ctx.fillRect(width - 75, 0, 75, height);
  }

  $('#myCanvas').on('mousedown', function(e) {
    e.stopPropagation();
    var x = e.offsetX;
    var y = e.offsetY;

    // Start inside red area
    if (x >= 0 && x <= 75 && y >= 0 && y <= height) {
      $('#message').text('');
      started = true;
    } else {
      started = false;
    }
  });

  $('#myCanvas').on('mousemove', function(e) {
    e.stopPropagation();
    if (started && e.which != 1) {
      resetCanvas();
      $('#message').text('You unclicked the mouse!');
    }

    if (started && e.which == 1) {
      var x = e.offsetX;
      var y = e.offsetY;

      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, 1, 1);

      // Finish in blue area
      if (x >= width - 75 && x <= width && y >= 0 && y <= height) {
        started = false;
        $('#message').text('You won!');
        var again = confirm("Again but more difficult?");
        if (again) {
          height /= 2;
          width += 75;
          resetCanvas();          
        }
      }
    }
  });

  // Check if moust moves outside canvas
  $('body').on('mousemove', function(e) {
    console.log('mouse in document');
    if (started && e.which == 1) {
      resetCanvas();
      $('#message').text('You moved outside the tube!');
    }
  });
});
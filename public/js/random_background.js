$(document).ready(function(){

  $('#click-me').on('click', function(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    $('body').css('background-color', 'rgb('+r+','+g+','+b+')');

    colorName();
  });
 
  $.getScript('http://chir.ag/projects/ntc/ntc.js', function(){
    colorName();
  });

  function colorName(){
    
    var colorArray = $('body').css('background-color').slice(4, -1).split(', ');
    var r = colorArray[0];
    var g = colorArray[1];
    var b = colorArray[2];

    var hexColor = toHex(r) + toHex(g) + toHex(b);
    var n_match  = ntc.name(hexColor);
    
    n_rgb        = n_match[0]; // This is the RGB value of the closest matching color
    n_name       = n_match[1]; // This is the text string for the name of the match
    //n_exactmatch = n_match[2]; // True if exact color match, False if close-match

    //document.getElementById('color.name').innerText = n_name;
    document.getElementById('color.rgb').innerText = colorArray;
    document.getElementById('color.hex').innerText = n_rgb;
//     if (n_exactmatch === false){
//       document.getElementById('color.exact').innerText = "No";
//     } else {
//       document.getElementById('color.exact').innerText = "Yes";
//     }

    function toHex(n) {
      n = parseInt(n,10);
      if (isNaN(n)) return "00";
      n = Math.max(0,Math.min(n,255));
      return "0123456789ABCDEF".charAt((n-n%16)/16) + "0123456789ABCDEF".charAt(n%16);
    }    
  }
});
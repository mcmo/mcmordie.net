$(document).ready(function(){

  $('#click-me').on('click', function(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    $('body').css('background-color', 'rgb('+r+','+g+','+b+')');

    colorName();
  });
 
  function colorName(){
    
    var rgbColor = $('body').css('background-color').slice(4, -1).split(', ');
    var r = rgbColor[0];
    var g = rgbColor[1];
    var b = rgbColor[2];

    var hexColor = toHex(r) + toHex(g) + toHex(b);
    
    document.getElementById('color.rgb').innerText = rgbColor;
    document.getElementById('color.hex').innerText = hexColor;

    function toHex(n) {
      n = parseInt(n,10);
      if (isNaN(n)) return "00";
      n = Math.max(0,Math.min(n,255));
      return "0123456789ABCDEF".charAt((n-n%16)/16) + "0123456789ABCDEF".charAt(n%16);
    }    
  }
  
  colorName();
  
});
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  playMeow();
  var fishHtml = document.getElementById(data);
  var catFood = document.getElementById("imcatfood");
  setTimeout(function() {
    document.getElementById('fisharea').appendChild(fishHtml);

    // -> removing the class
  catFood.classList.remove("fade");
  
  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  catFood.offsetWidth = catFood.offsetWidth;
  
  // -> and re-adding the class
  catFood.classList.add("fade");
    
  }, 1000);
}


function playMeow() {
  var whichMeow = Math.ceil(Math.random() * 2);
  var meow = document.getElementById('meow' + whichMeow);
  console.log(meow);
  meow.play();
}
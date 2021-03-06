module.exports = function(app){

  var options = {
    title: 'Make a Deal | Chris Learns JS',
    style: 'make_a_deal'
  };
  
  app.get('/2/make_a_deal', function(req, res) {
    res.render('2/make_a_deal', options);
  });

  app.get('/2/:color', function(req, res){
    
    res.render('2/' + req.params.color, options);
  });
  
  app.get('/2/:final', function(req, res){
    res.render('2/' + req.params.final, options);
  });
  
  app.get('/3/random_background', function(req, res){
    res.render('3/random_background', {title: 'Random Color Background | Chris Learns JS', style: 'random_background', js: '/js/random_background.js'});
  });
  
  app.get('/4/mondrian', function(req, res){
    res.render('4/mondrian', {title: 'Mondrian | Chris Learns JS', style: 'mondrian', js: '/js/mondrian.js'});
  });  

  app.get('/5/secret_message', function(req, res){
    res.render('5/secret_message', {title: 'Secret Message | Chris Learns JS', style: 'secret_message', js: '/js/secret_message.js'});
  });  

  app.get('/6/day_tracker', function(req, res){
    res.render('6/day_tracker', {title: 'Day Tracker | Chris Learns JS', style: 'day_tracker', js: '/js/day_tracker.js'});
  });
  app.get('/7/technicolor_boxes', function(req, res){
    res.render('7/technicolor_boxes', {title: 'Technicolor Boxes | Chris Learns JS', style: 'technicolor_boxes', js: '/js/technicolor_boxes.js'});
  });   
  app.get('/8/more_drop_shadow', function(req, res){
    res.render('8/more_drop_shadow', {title: 'More Drop Shadow! | Chris Learns JS', style: 'more_drop_shadow', js: '/js/more_drop_shadow.js'});
  });   
  app.get('/9/bouncing_ball', function(req, res){
    res.render('9/bouncing_ball', {title: 'Bouncing Ball | Chris Learns JS', style: 'bouncing_ball', js: '/js/bouncing_ball.js'});
  });   
  app.get('/9/getMinClicks', function(req, res){
    fs = require('fs');
    var obj;
    fs.readFile('views/9/data.json', function(err, data){
      if (err) return console.log(err);
      // obj = JSON.parse(data);
      console.log(data);
      res.send(data);
    });
  });
  
  app.get('/9/setMinClicks', function(req, res){
    fs = require('fs');
    var minClicks = {"minClicks": req.query.clicks, "minSeconds": req.query.seconds, "device": req.query.device};
    var val = JSON.stringify(minClicks);
    console.log(val);
    fs.writeFile('views/9/data.json', val, function(err) {
      if (err) return console.log(err);
      console.log(val);
      res.send(minClicks);
    });
  });
  
  app.get('/10/sushi_jiggler', function(req, res){
    fs = require('fs');
    var f;
    fs.readdir(__dirname + '/public/img/10', function(err, files){
      res.render('10/sushi_jiggler', {sushi: files, title: 'Sushi Jiggler | Chris Learns JS', style: 'sushi_jiggler', js: '/js/sushi_jiggler.js'});
    });
  });   
  app.get('/11/color_clock', function(req, res){
    res.render('11/color_clock', {title: 'Color Clock | Chris Learns JS', style: 'color_clock', js: '/js/color_clock.js'});
  });   
  app.get('/12/dice_roller', function(req, res){
    res.render('12/dice_roller', {title: 'Dice Roller | Chris Learns JS', style: 'dice_roller', js: '/js/dice_roller.js'});
  });   
  app.get('/13/rock_paper_scissors', function(req, res){
    res.render('13/rock_paper_scissors', {title: 'Rock Paper Scissors | Chris Learns JS', style: 'rock_paper_scissors', js: '/js/rock_paper_scissors.js'});
  });
  app.get('/14/tough_love', function(req, res){
    res.render('14/tough_love', {title: 'Tough Love | Chris Learns JS', style: 'tough_love', js: '/js/tough_love.js'});
  });  
  app.get('/17/party_time', function(req, res){
    res.render('17/party_time', {title: 'Party Time | Chris Learns JS', style: 'party_time', js: '/js/party_time.js'});
  });
  app.get('/22/keep_it_straight', function(req, res){
    res.render('22/keep_it_straight', {title: 'Keep It Straight | Chris Learns JS', style: 'keep_it_straight', js: '/js/keep_it_straight.js'});
  });  
  app.get('/23/stopwatch', function(req, res){
    res.render('23/stopwatch', {title: 'Stopwatch | Chris Learns JS', style: 'stopwatch', js: '/js/stopwatch.js' });
  });
  app.get('/24/email_impact', function(req, res){
    res.render('24/email_impact', {title: 'Email Impact | Chris Learns JS', style: 'email_impact', js: '/js/email_impact.js' });
  });    
  app.get('/25/scrambled', function(req, res){
    res.render('25/scrambled', {title: 'SCRAMBLED! | Chris Learns JS', style: 'scrambled', js: '/js/scrambled.js' });
  });
  app.get('/25/words.html', function(req, res){
    var maxLength = req.query.max;
    console.log('maxLength = ' + maxLength);
    fs = require('fs');
    fs.readFile('views/25/words.html', function(err, data){
      if (err) return console.log(err);
      var wordsArray = data.toString().split(' ');
      var word = '';
      var numWords = wordsArray.length;
      while (word === '' || word.length > maxLength){
        word = wordsArray[Math.ceil(Math.random()*numWords)];
        console.log(word);
        console.log(word.length);
      }
      res.send(word);
    });
  });
  app.get('/26/simon', function(req, res){
    res.render('26/simon', {title: 'Simon | Chris Learns JS', style: 'simon', js: '/js/simon.js'});
  });
  app.get('/28/click_challenge', function(req, res){
    res.render('28/click_challenge', {title: 'Click Challenge | Chris Learns JS', style: 'click_challenge', js: '/js/click_challenge.js'});
  });
  app.get('/30/silly_kitty', function(req, res){
    res.render('30/silly_kitty', {title: 'Silly Kitty | Chris Learns JS', style: 'silly_kitty', js: '/js/silly_kitty.js'});
  });  
  app.get('/31/endless_throbbers', function(req, res){
    res.render('31/endless_throbbers', {title: 'Endless Throbbers | Chris Learns JS', style: 'endless_throbbers', js: '/js/endless_throbbers.js'});
  });
  app.get('/33/random_word', function(req, res){
    res.render('33/random_word', {title: 'Random Word Generator | Chris Learns JS', style: 'random_word', js: '/js/random_word.js'});
  });
  app.get('/33/wordsNextSteps.html', function(req, res){
    res.sendFile(__dirname + '/views/33/wordsNextSteps.html');
  });
};
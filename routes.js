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

};
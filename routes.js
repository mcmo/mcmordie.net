module.exports = function(app){

  var options = {
    title: 'Make a Deal | Chris Learns JS',
    style: 'make_a_deal'
  };
  
  app.get('/day2/make_a_deal', function(req, res) {
    res.render('day2/make_a_deal', options);
  });

  app.get('/day2/:color', function(req, res){
    
    res.render('day2/' + req.params.color, options);
  });
  
  app.get('/day2/:final', function(req, res){
    res.render('day2/' + req.params.final, options);
  });

};